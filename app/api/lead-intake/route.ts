import { NextResponse } from "next/server"
import { getSupabaseAdmin } from "@/lib/supabase"
import {
  quoteIntakeSchema,
  toSchedulerPayload,
  type QuoteIntakeInput,
} from "@/lib/quote-intake"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const DEFAULT_SCHEDULER_URL =
  "https://quote-scheduler-0fwk.onrender.com/public/lead-intake"

function getSchedulerUrl(): string {
  const raw = (process.env.QUOTE_SCHEDULER_API_URL || DEFAULT_SCHEDULER_URL).trim()
  // Strip any accidental trailing slashes the deploy might add.
  return raw.replace(/\/+$/, "")
}

type SchedulerResponse = {
  ok?: boolean
  sid?: string | null
  routing_zone?: string | null
  schedule_url?: string | null
  redirect_to?: string | null
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

  const parsed = quoteIntakeSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed",
        issues: parsed.error.issues.map((i) => ({
          path: i.path.join("."),
          message: i.message,
        })),
      },
      { status: 422 },
    )
  }

  const input: QuoteIntakeInput = parsed.data
  const schedulerPayload = toSchedulerPayload(input)

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

  // --- 1. Write to Supabase (best-effort, never blocks the lead) -------------
  let supabaseId: string | null = null
  let supabaseError: string | null = null

  try {
    const supabase = getSupabaseAdmin()
    const utm = input.utm || {}
    const insertRow = {
      source: "varsitymulching.com",
      page_slug: input.page_slug || null,

      first_name: input.first_name,
      last_name: input.last_name,
      email: input.email,
      phone: input.phone,

      street_address: schedulerPayload.street_address,
      city: schedulerPayload.city,
      state: schedulerPayload.state,
      zip: schedulerPayload.zip,
      full_address: fullAddress,

      services: schedulerPayload.services,
      service_primary: input.service,
      yard_size: input.yard_size || null,
      job_timing: input.job_timing || null,
      message: input.message || null,

      utm_source: utm.utm_source || null,
      utm_medium: utm.utm_medium || null,
      utm_campaign: utm.utm_campaign || null,
      utm_term: utm.utm_term || null,
      utm_content: utm.utm_content || null,
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

  return NextResponse.json({
    ok: true,
    sid: schedulerData?.sid ?? supabaseId,
    redirect_to: schedulerData?.redirect_to ?? null,
    schedule_url: schedulerData?.schedule_url ?? null,
    routing_zone: schedulerData?.routing_zone ?? null,
  })
}
