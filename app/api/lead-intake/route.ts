import { NextResponse } from "next/server"
import { getSupabaseAdmin } from "@/lib/supabase"
import {
  quoteIntakeSchema,
  quickQuoteSchema,
  toSchedulerPayload,
  toSchedulerPayloadFromQuick,
} from "@/lib/quote-intake"
import { ZONE_ROUTING_ENABLED } from "@/lib/scheduling"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

/**
 * When the hero form is submitted without a Mapbox suggestion pick, city/state/zip
 * are empty. Call Mapbox Geocoding to fill them in so Supabase gets the full
 * address AND Flask gets the ZIP it needs for zone routing.
 */
async function geocodeAddress(address: string): Promise<{
  city: string; state: string; zip: string
} | null> {
  const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
  if (!token || !address.trim()) return null
  try {
    const encoded = encodeURIComponent(address.trim())
    const res = await fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encoded}.json?access_token=${token}&types=address&country=us&limit=1`,
      { signal: AbortSignal.timeout(4000) },
    )
    if (!res.ok) return null
    const json = await res.json()
    const context: Array<{ id: string; text?: string; short_code?: string }> =
      json.features?.[0]?.context ?? []
    let city = "", state = "", zip = ""
    for (const entry of context) {
      if (entry.id.startsWith("postcode.")) zip = entry.text ?? ""
      if (entry.id.startsWith("place.")) city = entry.text ?? ""
      if (entry.id.startsWith("region.")) {
        const sc = (entry.short_code ?? "").toUpperCase()
        state = sc.startsWith("US-") ? sc.slice(3) : sc
      }
    }
    if (!city && !state && !zip) return null
    return { city, state, zip }
  } catch {
    return null
  }
}

const DEFAULT_SCHEDULER_URL =
  "https://quote-scheduler-0fwk.onrender.com/public/lead-intake"

function getSchedulerUrl(): string {
  const raw = (process.env.QUOTE_SCHEDULER_API_URL || DEFAULT_SCHEDULER_URL).trim()
  // Strip any accidental trailing slashes the deploy might add.
  return raw.replace(/\/+$/, "")
}

/**
 * The Flask scheduler always builds redirect URLs against
 * https://varsitymulching.com (its PUBLIC_SITE_BASE_URL default), but that
 * apex still points to the old Framer site. The matching /schedule-* routes
 * live in this Next.js app, so swap the host onto whatever origin the user
 * actually hit. Path + query (sid, utm_*) are preserved.
 */
function rewriteRedirectHost(redirectTo: string | null | undefined, req: Request): string | null {
  if (!redirectTo) return null
  try {
    const requestUrl = new URL(req.url)
    const proto = req.headers.get("x-forwarded-proto") || requestUrl.protocol.replace(":", "")
    const host = req.headers.get("x-forwarded-host") || req.headers.get("host") || requestUrl.host
    const origin = `${proto}://${host}`
    const target = new URL(redirectTo)
    return `${origin}${target.pathname}${target.search}${target.hash}`
  } catch {
    return redirectTo
  }
}

type SchedulerResponse = {
  ok?: boolean
  sid?: string | null
  routing_zone?: string | null
  schedule_url?: string | null
  redirect_to?: string | null
}

type NormalizedIntake = {
  form: "contact" | "quick"
  schedulerPayload: ReturnType<typeof toSchedulerPayload>
  // The fields we want to mirror into the Supabase row, normalized across forms.
  supabaseExtras: {
    service_primary: string | null
    yard_size: string | null
    job_timing: string | null
    message: string | null
  }
}

/**
 * The API accepts two body shapes:
 *
 *   1. Contact form (`/contact` page) — split name + address + single service.
 *   2. Quick Quote (homepage hero) — `full_name` + single `address` line +
 *      `services` array.
 *
 * We sniff by the presence of `full_name`. Either way, we normalize down to
 * the same scheduler payload before dual-writing.
 */
function normalizeBody(body: unknown):
  | { ok: true; data: NormalizedIntake }
  | { ok: false; error: string; status: number; issues?: { path: string; message: string }[] } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid JSON body", status: 400 }
  }

  const hasFullName = typeof (body as { full_name?: unknown }).full_name === "string"

  if (hasFullName) {
    const parsed = quickQuoteSchema.safeParse(body)
    if (!parsed.success) {
      return {
        ok: false,
        error: "Validation failed",
        status: 422,
        issues: parsed.error.issues.map((i) => ({
          path: i.path.join("."),
          message: i.message,
        })),
      }
    }
    const schedulerPayload = toSchedulerPayloadFromQuick(parsed.data)
    return {
      ok: true,
      data: {
        form: "quick",
        schedulerPayload,
        supabaseExtras: {
          service_primary: parsed.data.services[0] || null,
          yard_size: null,
          job_timing: null,
          message: null,
        },
      },
    }
  }

  const parsed = quoteIntakeSchema.safeParse(body)
  if (!parsed.success) {
    return {
      ok: false,
      error: "Validation failed",
      status: 422,
      issues: parsed.error.issues.map((i) => ({
        path: i.path.join("."),
        message: i.message,
      })),
    }
  }
  const schedulerPayload = toSchedulerPayload(parsed.data)
  return {
    ok: true,
    data: {
      form: "contact",
      schedulerPayload,
      supabaseExtras: {
        service_primary: parsed.data.services[0] || null,
        yard_size: null,
        job_timing: parsed.data.job_timing || null,
        message: null,
      },
    },
  }
}

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    )
  }

  const normalized = normalizeBody(body)
  if (!normalized.ok) {
    return NextResponse.json(
      {
        ok: false,
        error: normalized.error,
        ...(normalized.issues ? { issues: normalized.issues } : {}),
      },
      { status: normalized.status },
    )
  }

  const { form, supabaseExtras } = normalized.data
  // Make a mutable copy so we can enrich it with geocoded address parts.
  const schedulerPayload = { ...normalized.data.schedulerPayload }

  // If city/state/zip are missing, geocode the address string server-side so
  // Supabase gets complete data and Flask has the ZIP for zone routing.
  if (!schedulerPayload.city || !schedulerPayload.state || !schedulerPayload.zip) {
    const geocoded = await geocodeAddress(
      schedulerPayload.address || schedulerPayload.street_address,
    )
    if (geocoded) {
      if (!schedulerPayload.city) schedulerPayload.city = geocoded.city
      if (!schedulerPayload.state) schedulerPayload.state = geocoded.state
      if (!schedulerPayload.zip) schedulerPayload.zip = geocoded.zip
    }
  }

  const headersList = req.headers
  const userAgent = headersList.get("user-agent") || null
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headersList.get("x-real-ip") ||
    null

  const fullAddress = [
    schedulerPayload.street_address,
    [schedulerPayload.city, schedulerPayload.state, schedulerPayload.zip]
      .filter(Boolean)
      .join(" "),
  ]
    .filter(Boolean)
    .join(", ")

  const utm = schedulerPayload.utm || {}

  // --- 1. Write to Supabase (best-effort, never blocks the lead) -------------
  let supabaseId: string | null = null
  let supabaseError: string | null = null

  try {
    const supabase = getSupabaseAdmin()
    const insertRow = {
      source: `varsitymulching.com:${form}`,
      page_slug: schedulerPayload.page_slug || null,

      first_name: schedulerPayload.first_name,
      last_name: schedulerPayload.last_name,
      email: schedulerPayload.email,
      phone: schedulerPayload.phone,

      street_address: schedulerPayload.street_address,
      city: schedulerPayload.city,
      state: schedulerPayload.state,
      zip: schedulerPayload.zip,
      full_address: fullAddress,

      services: schedulerPayload.services,
      service_primary: supabaseExtras.service_primary,
      yard_size: supabaseExtras.yard_size,
      job_timing: supabaseExtras.job_timing,
      message: supabaseExtras.message,

      utm_source: utm.utm_source || null,
      utm_medium: utm.utm_medium || null,
      utm_campaign: utm.utm_campaign || null,
      utm_term: utm.utm_term || null,
      utm_content: utm.utm_content || null,
      utm_adset: utm.utm_adset || null,
      gclid: utm.gclid || null,
      fbclid: utm.fbclid || null,

      scheduler_status: "pending",
      raw_payload: schedulerPayload,
      user_agent: userAgent,
      ip_address: ip,
    }

    const { data, error } = await supabase
      .from("quote_requests")
      .insert(insertRow)
      .select("id")
      .single()

    if (error) {
      supabaseError = error.message
      console.error("[lead-intake] Supabase insert failed:", error)
    } else {
      supabaseId = data?.id ?? null
    }
  } catch (err) {
    supabaseError =
      err instanceof Error ? err.message : "Unknown Supabase error"
    console.error("[lead-intake] Supabase client error:", err)
  }

  // --- 2. Forward to the Flask quote-scheduler -------------------------------
  let schedulerData: SchedulerResponse | null = null
  let schedulerStatus: "forwarded" | "failed" = "failed"
  let schedulerError: string | null = null

  try {
    const res = await fetch(getSchedulerUrl(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(schedulerPayload),
      // Don't hang the user request forever if the scheduler is down.
      signal: AbortSignal.timeout(15_000),
    })

    if (res.ok) {
      schedulerData = (await res.json().catch(() => null)) as SchedulerResponse | null
      schedulerStatus = "forwarded"
    } else {
      const text = await res.text().catch(() => "")
      schedulerError = `Scheduler returned ${res.status}: ${text.slice(0, 500)}`
      console.error("[lead-intake] scheduler non-OK:", res.status, text)
    }
  } catch (err) {
    schedulerError =
      err instanceof Error ? err.message : "Unknown scheduler error"
    console.error("[lead-intake] scheduler fetch failed:", err)
  }

  // --- 3. Patch the Supabase row with what the scheduler returned ------------
  if (supabaseId) {
    try {
      const supabase = getSupabaseAdmin()
      await supabase
        .from("quote_requests")
        .update({
          scheduler_status: schedulerStatus,
          scheduler_sid: schedulerData?.sid ?? null,
          scheduler_schedule_url: schedulerData?.schedule_url ?? null,
          scheduler_routing_zone: schedulerData?.routing_zone ?? null,
          scheduler_error: schedulerError,
        })
        .eq("id", supabaseId)
    } catch (err) {
      console.error("[lead-intake] Supabase update failed:", err)
    }
  }

  // --- 4. Decide what to return to the client --------------------------------
  // We treat the submission as successful if EITHER store succeeded — the user
  // shouldn't see an error if at least one system has their lead.
  const ok = Boolean(supabaseId || schedulerStatus === "forwarded")

  if (!ok) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't save your request. Please try again or call us directly.",
        supabase_error: supabaseError,
        scheduler_error: schedulerError,
      },
      { status: 502 },
    )
  }

  const sid = schedulerData?.sid ?? supabaseId
  const redirectTo = ZONE_ROUTING_ENABLED
    ? rewriteRedirectHost(schedulerData?.redirect_to, req)
    : `/schedule-general${sid ? `?sid=${sid}` : ""}`

  return NextResponse.json({
    ok: true,
    sid,
    redirect_to: redirectTo,
    schedule_url: ZONE_ROUTING_ENABLED
      ? rewriteRedirectHost(schedulerData?.schedule_url, req)
      : redirectTo,
    routing_zone: schedulerData?.routing_zone ?? null,
  })
}
