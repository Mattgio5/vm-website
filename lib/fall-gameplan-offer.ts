/**
 * Fall 2026 "Fall Gameplan" promo — single source of truth.
 *
 * Sent to the full email/SMS list (past customers, prior leads, past quote
 * requests) from service-specific emails (pruning, leaf cleanup, …). Those
 * visitors are ready to act, so the page is deliberately short: offer + form
 * in the hero, trust badges, FAQ.
 *
 * It is an early-planning offer, NOT a bundle, loyalty reward or package: one
 * qualifying fall service gets 10% off, and anything else added to the plan
 * gets 10% off too, as long as it's scheduled by the deadline below.
 */

import type { LandingOffer } from "@/lib/landing-offer"

export const OFFER = {
  discountPct: 10,
  discountLabel: "10%",
  deadlineLabel: "October 1",
  deadlineIso: "2026-10-01",
  disclaimer:
    "10% discount applies to qualifying fall services scheduled by October 1. Service minimums or exclusions may apply.",
  serviceArea: "Serving Bucks & Montgomery County",
  /** services[0] on the lead — Supabase `service_primary`. */
  service: "Fall Gameplan",
  /** services[1] on the lead — see LandingOffer.jobberTag. */
  jobberTag: "*** FALL GAMEPLAN 10% OFF — QUALIFYING WORK SCHEDULED BY OCT 1 ***",
  cta: "Build My Fall Gameplan",
  path: "/offers/fall-gameplan-10-off",
  /** Registered in LEAD_PATHS (components/analytics-tracker.tsx). */
  confirmedPath: "/schedule-fall-gameplan",
  /**
   * Hero background, under a heavy navy gradient. Swap in the campaign's fall
   * creative (~1600×900 .webp in /public/images/offers/) when it's ready.
   */
  heroImage: "/images/service-cleanup.webp",
} as const

export const GAMEPLAN_LANDING: LandingOffer = {
  path: OFFER.path,
  confirmedPath: OFFER.confirmedPath,
  service: OFFER.service,
  jobberTag: OFFER.jobberTag,
  primaryCta: OFFER.cta,
  formCta: OFFER.cta,
  stickyCta: OFFER.cta,
  stickySuffix: `Save ${OFFER.discountLabel}`,
  submittingLabel: "Sending your gameplan…",
  successTitle: "Your Gameplan Is In",
  successBody:
    "We'll reach out shortly to set up your free quote. Nothing is booked until you approve pricing.",
  trackingParams: {
    content_name: `Fall Gameplan ${OFFER.discountLabel} Off`,
    offer_discount_pct: OFFER.discountPct,
  },
}

/**
 * Form picker labels — exactly what lands in Jobber. Never required.
 *
 * Email links can pre-tick one or more with ?service=<slug>[,<slug>], where the
 * slug is the lowercased, hyphenated label: leaf-cleanup,
 * pruning-trimming-cutbacks, mulch-touch-up, planting, landscape-bed-cleanup,
 * landscape-bed-redesign, other. Short aliases below also work.
 */
export const FORM_SERVICE_OPTIONS = [
  "Leaf Cleanup",
  "Pruning, Trimming & Cutbacks",
  "Mulch Touch-Up",
  "Planting",
  "Landscape Bed Cleanup",
  "Landscape Bed Redesign",
  "Other",
] as const

/** Friendlier ?service= slugs → the option they tick. */
export const FORM_SERVICE_ALIASES: Record<string, string> = {
  pruning: "Pruning, Trimming & Cutbacks",
  trimming: "Pruning, Trimming & Cutbacks",
  "shrub-trimming": "Pruning, Trimming & Cutbacks",
  "perennial-cutbacks": "Pruning, Trimming & Cutbacks",
  cutbacks: "Pruning, Trimming & Cutbacks",
  mulch: "Mulch Touch-Up",
  "bed-cleanup": "Landscape Bed Cleanup",
  "bed-redesign": "Landscape Bed Redesign",
  redesign: "Landscape Bed Redesign",
  leaves: "Leaf Cleanup",
}

export const OFFER_FAQS = [
  {
    question: `Do I have to schedule more than one service to get ${OFFER.discountLabel} off?`,
    answer: `No. You can use the offer for just one qualifying fall service. If you are considering additional work, you can add those services to your Fall Gameplan and receive ${OFFER.discountLabel} off those qualifying services as well.`,
  },
  {
    question: "Am I committing to every service I check on the form?",
    answer:
      "No. The services you check just give us an idea of what to quote. We'll reach out to set up your free quote, and you decide what to schedule after you see pricing.",
  },
  {
    question: "What can I include in my Fall Gameplan?",
    answer:
      "Common fall services include leaf cleanup, pruning, shrub trimming, perennial cutbacks, mulch touch-ups, planting, landscape bed cleanup, and landscape bed redesigns. The exact scope will be confirmed during your quote.",
  },
  {
    question: "Do all of the services have to be completed on the same day?",
    answer:
      "No. Your Fall Gameplan can include services that are completed at different times based on the needs of your property and our schedule.",
  },
  {
    question: "Can I add another service after I request my quote?",
    answer: `Yes. If there is another fall project you are considering, let us know. We can review it and determine whether it can be added to your Fall Gameplan. Added work qualifies for the ${OFFER.discountLabel} discount only if it is scheduled by ${OFFER.deadlineLabel}.`,
  },
  {
    question: "When do I need to schedule by?",
    answer: `Qualifying fall work must be scheduled by ${OFFER.deadlineLabel} to receive the ${OFFER.discountLabel} Fall Gameplan discount.`,
  },
  {
    question: "Do you haul away leaves?",
    answer:
      "Yes. For leaf cleanup services, collected leaves are hauled away from the property and taken to a composting site where the organic material can be repurposed into products such as compost and mulch.",
  },
] as const
