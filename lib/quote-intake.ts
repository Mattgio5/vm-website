import { z } from "zod"

export const SERVICE_OPTIONS = [
  "Mulch Installation",
  "Flower Bed Edging",
  "Weed Control",
  "Bed Cleanup",
  "Supplements / Add-ons",
  "Multiple Services",
  "Career Inquiry",
  "Other",
] as const

export const YARD_SIZE_OPTIONS = [
  "Small (under 1/4 acre)",
  "Medium (1/4 - 1/2 acre)",
  "Large (1/2 - 1 acre)",
  "Extra Large (1+ acre)",
  "Not sure",
] as const

export const TIMING_OPTIONS = [
  "As soon as possible",
  "Within 2 weeks",
  "Within a month",
  "Just exploring — no rush",
] as const

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>

export const quoteIntakeSchema = z.object({
  first_name: z.string().trim().min(1, "First name is required").max(120),
  last_name: z.string().trim().min(1, "Last name is required").max(120),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(40),

  street_address: z.string().trim().min(1, "Street address is required").max(255),
  city: z.string().trim().min(1, "City is required").max(120),
  state: z.string().trim().min(1, "State is required").max(60),
  zip: z
    .string()
    .trim()
    .min(3, "ZIP is required")
    .max(10)
    .regex(/^[0-9\-\s]+$/, "ZIP must be digits"),

  service: z.string().trim().min(1, "Pick a service").max(120),
  yard_size: z.string().trim().max(120).optional().or(z.literal("")),
  job_timing: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),

  page_slug: z.string().trim().max(200).optional().or(z.literal("")),
  utm: z
    .object({
      utm_source: z.string().trim().max(200).optional(),
      utm_medium: z.string().trim().max(200).optional(),
      utm_campaign: z.string().trim().max(200).optional(),
      utm_term: z.string().trim().max(200).optional(),
      utm_content: z.string().trim().max(200).optional(),
      gclid: z.string().trim().max(200).optional(),
      fbclid: z.string().trim().max(200).optional(),
    })
    .partial()
    .optional(),
})

export type QuoteIntakeInput = z.infer<typeof quoteIntakeSchema>

/**
 * Lightweight "Quick Quote" form (hero carousel on the homepage). Single full
 * name, single address line, multi-select services. Server normalizes into the
 * same shape as the contact form before forwarding to the Flask backend.
 */
export const quickQuoteSchema = z.object({
  full_name: z.string().trim().min(1, "Enter your name").max(240),
  email: z.string().trim().email("Enter a valid email"),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(40),
  address: z.string().trim().min(3, "Enter your property address").max(255),
  services: z.array(z.string().trim().min(1).max(120)).max(20).default([]),

  page_slug: z.string().trim().max(200).optional().or(z.literal("")),
  utm: z
    .object({
      utm_source: z.string().trim().max(200).optional(),
      utm_medium: z.string().trim().max(200).optional(),
      utm_campaign: z.string().trim().max(200).optional(),
      utm_term: z.string().trim().max(200).optional(),
      utm_content: z.string().trim().max(200).optional(),
      gclid: z.string().trim().max(200).optional(),
      fbclid: z.string().trim().max(200).optional(),
    })
    .partial()
    .optional(),
})

export type QuickQuoteInput = z.infer<typeof quickQuoteSchema>

/**
 * Split a single full-name string into first/last. First word is first_name,
 * remainder is last_name. Single-word names get an empty last_name (still
 * non-empty enough for the Flask backend to accept).
 */
export function splitFullName(name: string): {
  first_name: string
  last_name: string
} {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  if (parts.length === 0) return { first_name: "", last_name: "" }
  if (parts.length === 1) return { first_name: parts[0], last_name: "" }
  return {
    first_name: parts[0],
    last_name: parts.slice(1).join(" "),
  }
}

const US_STATE_ABBRS = new Set([
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
  "DC",
])

/**
 * Best-effort parser for a single-line property address. Handles the common
 * "Street, City, STATE ZIP" shape that the placeholder text suggests. Falls
 * back to dumping the whole string into street_address with empty parts
 * (Flask still accepts; the lead gets saved; a human can correct it later).
 *
 * State extraction whitelists US state abbreviations so "123 Main St" doesn't
 * get "St" parsed as a state.
 */
export function parseAddressLine(raw: string): {
  street_address: string
  city: string
  state: string
  zip: string
} {
  const normalized = raw.trim().replace(/\s+/g, " ")
  if (!normalized) {
    return { street_address: "", city: "", state: "", zip: "" }
  }

  // Pull a US ZIP off the end if present.
  const zipMatch = normalized.match(/(\d{5}(?:-\d{4})?)\s*$/)
  const zip = zipMatch ? zipMatch[1] : ""
  const withoutZip = (
    zipMatch ? normalized.slice(0, zipMatch.index) : normalized
  )
    .trim()
    .replace(/,\s*$/, "")
    .trim()

  // Pull a 2-letter US state abbreviation off the end if present. The
  // whitelist check prevents "St", "Rd", "Dr" etc. from being misread.
  const stateMatch = withoutZip.match(/[,\s]+([A-Za-z]{2})\s*$/)
  let state = ""
  let withoutState = withoutZip
  if (stateMatch && US_STATE_ABBRS.has(stateMatch[1].toUpperCase())) {
    state = stateMatch[1].toUpperCase()
    withoutState = withoutZip.slice(0, stateMatch.index).trim().replace(/,\s*$/, "").trim()
  }

  // Whatever's left is "street[, city]". Prefer the last comma-segment as the
  // city; if no comma, treat the whole thing as street and leave city blank.
  const segments = withoutState.split(",").map((s) => s.trim()).filter(Boolean)
  let street = ""
  let city = ""
  if (segments.length >= 2) {
    city = segments[segments.length - 1]
    street = segments.slice(0, -1).join(", ")
  } else if (segments.length === 1) {
    street = segments[0]
  }

  // Fallback: if we couldn't isolate ANY structure (e.g. user typed only a
  // street), keep the whole raw string as street_address so the lead is still
  // routable for a human follow-up.
  if (!street && !city && !state && !zip) {
    return { street_address: normalized, city: "", state: "", zip: "" }
  }

  return { street_address: street, city, state, zip }
}

/**
 * Map the contact-form payload into the shape the Flask /public/lead-intake
 * endpoint expects (street_address/city/state/zip + services[] array).
 */
export function toSchedulerPayload(input: QuoteIntakeInput) {
  const services = input.service ? [input.service] : []

  const street = input.street_address.trim()
  const cityStateZip = [input.city.trim(), input.state.trim(), input.zip.trim()]
    .filter(Boolean)
    .join(" ")
  const address = [street, cityStateZip].filter(Boolean).join(", ")

  return {
    page_slug: input.page_slug || "",
    first_name: input.first_name,
    last_name: input.last_name,
    email: input.email,
    phone: input.phone,

    street_address: street,
    city: input.city.trim(),
    state: input.state.trim(),
    zip: input.zip.trim(),

    address,

    services,
    hear_about: "",
    job_timing: input.job_timing || "",

    utm: input.utm || {},
  }
}

/**
 * Same as toSchedulerPayload, but for the Quick Quote hero form: splits the
 * single full_name into first/last, parses the single-line address into parts,
 * and uses the multi-select services array directly.
 */
export function toSchedulerPayloadFromQuick(input: QuickQuoteInput) {
  const { first_name, last_name } = splitFullName(input.full_name)
  const { street_address, city, state, zip } = parseAddressLine(input.address)

  const cityStateZip = [city, state, zip].filter(Boolean).join(" ")
  const address = [street_address, cityStateZip].filter(Boolean).join(", ")

  return {
    page_slug: input.page_slug || "",
    first_name,
    last_name,
    email: input.email,
    phone: input.phone,

    street_address,
    city,
    state,
    zip,

    address,

    services: input.services,
    hear_about: "",
    job_timing: "",

    utm: input.utm || {},
  }
}

export function extractUtmFromSearch(search: string): UtmParams {
  const params = new URLSearchParams(search)
  const out: UtmParams = {}
  for (const key of UTM_KEYS) {
    const v = params.get(key)
    if (v) out[key] = v
  }
  return out
}
