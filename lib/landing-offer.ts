/**
 * What every paid-traffic landing page hands to the shared components in
 * components/offers/. Each promo's lib file (aeration-offer.ts,
 * leaf-cleanup-offer.ts) builds one of these from its own constants, and the
 * page passes it to <OfferTrackingProvider offer={…}>.
 *
 * Plain serializable data only — it crosses the server → client boundary.
 */
export type LandingOffer = {
  /** Landing page path, sent as `page_slug` with the lead. */
  path: string
  /**
   * Post-submit confirmation page. Must be registered in LEAD_PATHS
   * (components/analytics-tracker.tsx) — that's where the conversion fires.
   */
  confirmedPath: string
  /** services[0] — becomes Supabase `service_primary`. */
  service: string
  /** services[1] — free-text flag so the promo is obvious in Jobber. */
  jobberTag: string
  primaryCta: string
  formCta: string
  stickyCta: string
  /** Optional trailing text on the sticky bar, e.g. "$269". */
  stickySuffix?: string
  submittingLabel: string
  successTitle: string
  successBody: string
  /** Merged into every GA4 offer_* funnel event (content_name, etc.). */
  trackingParams: Record<string, string | number>
}
