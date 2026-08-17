/**
 * Landing-page funnel events for the $259 aeration promo.
 *
 * These are extra GA4/Meta signals for measuring the funnel — they are NOT the
 * conversion. The conversion fires on /schedule-aeration via LEAD_PATHS in
 * components/analytics-tracker.tsx.
 *
 * Events fired here:
 *   offer_view        (GA4) + ViewContent (Meta) — landing page visit
 *   offer_cta_click   (GA4)                      — CTA engagement
 *   offer_form_start  (GA4)                      — first field focused
 *
 * The LEAD CONVERSION is NOT fired here. The form redirects to
 * /schedule-aeration, which is registered in LEAD_PATHS in
 * components/analytics-tracker.tsx — the single place GA4 generate_lead and
 * Meta Lead fire for every conversion on the site.
 *
 * Every event carries the UTM set captured on landing, so source / medium /
 * campaign / content segment cleanly even after the URL is cleaned up.
 */

import type { UtmParams } from "@/lib/quote-intake"
import { OFFER } from "@/lib/aeration-offer"

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

const CONTENT_NAME = `Fall Aeration + Overseeding ${OFFER.priceLabel}`

function baseParams(utms: UtmParams): Record<string, unknown> {
  return {
    content_name: CONTENT_NAME,
    offer_price: OFFER.price,
    page_path: OFFER.path,
    utm_source: utms.utm_source ?? "",
    utm_medium: utms.utm_medium ?? "",
    utm_campaign: utms.utm_campaign ?? "",
    utm_content: utms.utm_content ?? "",
    utm_term: utms.utm_term ?? "",
  }
}

/**
 * Run `fn` once the tag it depends on exists.
 *
 * Both gtag and fbq are injected by `<Script strategy="afterInteractive">` in
 * app/layout.tsx, which can land AFTER React has mounted and run its effects.
 * The conversion fires from a useEffect on a fresh page load, so simply
 * checking `typeof window.fbq === "function"` and bailing would silently drop
 * the event whenever the effect wins that race — losing the conversion
 * outright. Poll briefly instead, then give up rather than leak a timer.
 */
function whenAvailable(isReady: () => boolean, fn: () => void, timeoutMs = 8000) {
  if (typeof window === "undefined") return
  if (isReady()) {
    fn()
    return
  }
  const started = Date.now()
  const timer = window.setInterval(() => {
    if (isReady()) {
      window.clearInterval(timer)
      fn()
    } else if (Date.now() - started > timeoutMs) {
      window.clearInterval(timer)
    }
  }, 100)
}

function ga(event: string, params: Record<string, unknown>) {
  if (!GA_ID) return
  whenAvailable(
    () => typeof window.gtag === "function",
    () => window.gtag!("event", event, params),
  )
}

function meta(event: string, params: Record<string, unknown>) {
  whenAvailable(
    () => typeof window.fbq === "function",
    () => window.fbq!("track", event, params),
  )
}

/** Landing page visit — a segmentable signal on top of the base PageView. */
export function trackOfferView(utms: UtmParams) {
  const params = baseParams(utms)
  ga("offer_view", params)
  meta("ViewContent", { ...params, content_category: "Landing Page" })
}

/** Any "Claim the $259 Offer" button press. `location` names the section. */
export function trackOfferCtaClick(utms: UtmParams, location: string) {
  ga("offer_cta_click", { ...baseParams(utms), cta_location: location })
}

/** First interaction with the lead form — the form-start half of the funnel. */
export function trackOfferFormStart(utms: UtmParams) {
  ga("offer_form_start", baseParams(utms))
}

