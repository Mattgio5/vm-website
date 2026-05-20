/**
 * Single source of truth for the canonical site origin.
 *
 * - `NEXT_PUBLIC_SITE_URL` lets prod/preview/local override the default.
 * - Default is the production custom domain. Until DNS cuts over to Vercel,
 *   override per-deploy via Vercel env vars.
 */
const fallback = "https://varsitymulching.com"

function normalize(raw: string | undefined): string {
  if (!raw) return fallback
  const trimmed = raw.trim().replace(/\/+$/, "")
  if (!trimmed) return fallback
  return trimmed.startsWith("http") ? trimmed : `https://${trimmed}`
}

export const SITE_URL = normalize(process.env.NEXT_PUBLIC_SITE_URL)

export const BUSINESS = {
  name: "Varsity Mulching",
  legalName: "Varsity Mulching LLC",
  telephone: "+1-267-489-1567",
  email: "hello@varsitymulching.com",
  streetAddress: "PO Box 2031",
  addressLocality: "Doylestown",
  addressRegion: "PA",
  postalCode: "18901",
  addressCountry: "US",
  areaServed: ["Bucks County, PA", "Montgomery County, PA", "Chester County, PA"],
  priceRange: "$$",
  sameAs: [
    "https://www.facebook.com/varsitymulching",
    "https://www.instagram.com/varsitymulching",
  ],
} as const

export function absoluteUrl(path: string = "/"): string {
  if (!path.startsWith("/")) path = `/${path}`
  return `${SITE_URL}${path}`
}
