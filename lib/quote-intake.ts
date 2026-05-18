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
 * Map the form payload into the shape the Flask /public/lead-intake endpoint
 * expects (street_address/city/state/zip + services[] array).
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

export function extractUtmFromSearch(search: string): UtmParams {
  const params = new URLSearchParams(search)
  const out: UtmParams = {}
  for (const key of UTM_KEYS) {
    const v = params.get(key)
    if (v) out[key] = v
  }
  return out
}
