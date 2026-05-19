/**
 * Zone-aware scheduling configuration.
 *
 * The Flask quote-scheduler routes leads by ZIP into one of five zones and
 * returns a URL on this site like `/schedule-central-bucks`. The route exists
 * via a rewrite (see next.config.mjs) into `/schedule/[zone]/page.tsx`, which
 * looks up the Calendly event URL here and embeds it.
 *
 * Each zone can be pointed at its own Calendly URL via an env var. Missing
 * values fall back to DEFAULT_CALENDLY_URL so the page is never broken just
 * because every zone hasn't been individually configured yet.
 */

// Matt's confirmed event URL. All zones currently fall back to this until
// the per-zone URLs are filled in via env vars.
const DEFAULT_CALENDLY_URL = "https://calendly.com/matt-giordano/15min"

export const VALID_ZONES = [
  "central-bucks",
  "south-bucks",
  "montco-west",
  "north-bucks",
  "general",
] as const

export type Zone = (typeof VALID_ZONES)[number]

export function isValidZone(zone: string): zone is Zone {
  return (VALID_ZONES as readonly string[]).includes(zone)
}

export const ZONE_LABELS: Record<Zone, { title: string; coverage: string }> = {
  "central-bucks": {
    title: "Central Bucks County",
    coverage: "Doylestown, Buckingham, Chalfont, New Britain & nearby",
  },
  "south-bucks": {
    title: "Southern Bucks County",
    coverage: "Newtown, Yardley, Langhorne, Southampton & nearby",
  },
  "montco-west": {
    title: "Western Montgomery County",
    coverage: "Lansdale, North Wales, Blue Bell, Ambler & nearby",
  },
  "north-bucks": {
    title: "Northern Bucks County",
    coverage: "Perkasie, Quakertown, Sellersville, Pipersville & nearby",
  },
  general: {
    title: "Schedule a Free Quote",
    coverage: "All other service areas in Bucks & Montgomery County, PA",
  },
}

export function getCalendlyUrlForZone(zone: Zone): string {
  // Note: these are read at build/render time, so a deploy is required after
  // changing them in Vercel.
  const map: Record<Zone, string | undefined> = {
    "central-bucks": process.env.NEXT_PUBLIC_CALENDLY_CENTRAL_BUCKS,
    "south-bucks": process.env.NEXT_PUBLIC_CALENDLY_SOUTH_BUCKS,
    "montco-west": process.env.NEXT_PUBLIC_CALENDLY_MONTCO_WEST,
    "north-bucks": process.env.NEXT_PUBLIC_CALENDLY_NORTH_BUCKS,
    general: process.env.NEXT_PUBLIC_CALENDLY_GENERAL,
  }
  const fromEnv = (map[zone] || "").trim()
  return fromEnv || DEFAULT_CALENDLY_URL
}

/**
 * Build the URL we hand to the Calendly inline widget. Calendly preserves any
 * query params we attach (utm_*, sid, etc.) and includes them in the booking
 * webhook payload as `tracking`, which is how the Flask backend matches a
 * booking back to its `lead_submissions` row.
 */
export function buildCalendlyWidgetUrl(
  baseUrl: string,
  forward: Record<string, string | string[] | undefined>,
): string {
  let parsed: URL
  try {
    parsed = new URL(baseUrl)
  } catch {
    return baseUrl
  }

  // Drop default view params Matt's test URL had — we don't want to lock
  // every customer to a hard-coded month.
  parsed.searchParams.delete("month")
  parsed.searchParams.delete("date")

  const interesting = [
    "sid",
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "fbclid",
    "email",
    "name",
    "first_name",
    "last_name",
  ]

  for (const key of interesting) {
    const raw = forward[key]
    const value = Array.isArray(raw) ? raw[0] : raw
    if (value && !parsed.searchParams.has(key)) {
      parsed.searchParams.set(key, value)
    }
  }

  return parsed.toString()
}
