/**
 * Landing-page-specific conversion events for the $259 aeration promo.
 *
 * Additive only — the site-wide GA4 config, Meta Pixel base code, and the
 * /schedule-* Lead events in components/analytics-tracker.tsx are untouched.
 * This page never redirects into the /schedule-* flow, so it has to fire its
 * own Lead conversion; these helpers are the only place that happens.
 *
 * Events fired here:
 *   offer_view        (GA4) + ViewContent (Meta) — landing page visit
 *   offer_cta_click   (GA4)                      — CTA engagement
 *   offer_form_start  (GA4)                      — first field focused
 *   generate_lead     (GA4) + Lead (Meta)        — form submitted
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

function ga(event: string, params: Record<string, unknown>) {
  if (!GA_ID || typeof window === "undefined") return
  if (typeof window.gtag !== "function") return
  window.gtag("event", event, params)
}

function meta(event: string, params: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return
  window.fbq("track", event, params)
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

/** Form submitted successfully. This is the conversion. */
export function trackOfferLead(utms: UtmParams) {
  const params = baseParams(utms)
  ga("generate_lead", { ...params, value: OFFER.price, currency: "USD" })
  meta("Lead", { ...params, value: OFFER.price, currency: "USD" })
}
