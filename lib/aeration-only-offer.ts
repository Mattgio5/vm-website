/**
 * Fall 2026 aeration-ONLY promo ($159, no overseeding) — single source of truth.
 *
 * The landing page at /offers/fall-aeration-159 is the late-season follow-up to
 * the $269 aeration + overseeding offer (lib/aeration-offer.ts): the ideal
 * overseeding window is closing, but core aeration still helps through
 * October. Never promise availability through the end of October on this page
 * — scheduling capacity isn't confirmed — so there is no deadline copy here.
 *
 * It shares the /schedule-aeration confirmation page with the $269 offer (one
 * LEAD_PATHS entry, one conversion mechanism). `confirmedPath` carries
 * ?offer=aeration-159 so that page shows the $159 aeration-only details.
 */

import type { LandingOffer } from "@/lib/landing-offer"

export const OFFER = {
  price: 159,
  priceLabel: "$159",
  sqFtCap: 10000,
  sqFtLabel: "10,000 sq. ft.",
  service: "Core Aeration",
  /**
   * services[1] on the lead so the admin sees at a glance in Jobber that this
   * is the aeration-only promo, not the $269 aeration + overseeding one.
   */
  jobberTag: "*** $159 FALL AERATION ONLY (NO OVERSEEDING) — CONFIRM LAWN IS UNDER 10,000 SQ FT ***",
  primaryCta: "Claim Your $159 Aeration",
  formCta: "Claim My $159 Aeration",
  stickyCta: "Claim Your $159 Aeration",
  finalCta: "Schedule My $159 Aeration",
  path: "/offers/fall-aeration-159",
  /** Registered in LEAD_PATHS (components/analytics-tracker.tsx) via /schedule-aeration. */
  confirmedPath: "/schedule-aeration?offer=aeration-159",
  /** Value of ?offer= that /schedule-aeration switches on. */
  confirmedOfferKey: "aeration-159",
} as const

export const AERATION_ONLY_LANDING: LandingOffer = {
  path: OFFER.path,
  confirmedPath: OFFER.confirmedPath,
  service: OFFER.service,
  jobberTag: OFFER.jobberTag,
  primaryCta: OFFER.primaryCta,
  formCta: OFFER.formCta,
  stickyCta: OFFER.stickyCta,
  stickySuffix: OFFER.priceLabel,
  submittingLabel: "Reserving your spot…",
  successTitle: `Your ${OFFER.priceLabel} Aeration Is Reserved`,
  successBody: "We'll reach out shortly to confirm your lawn size and your spot on the schedule.",
  trackingParams: {
    content_name: `Fall Core Aeration ${OFFER.priceLabel}`,
    offer_price: OFFER.price,
  },
}

export const HERO_TRUST = [
  "300+ Five-Star Google Reviews",
  "5.0/5.0 Rating",
  "Locally Owned & Operated",
] as const

export const BENEFITS = [
  {
    title: "Relieve Soil Compaction",
    body: "Create space for healthier root development.",
  },
  {
    title: "Improve Water & Nutrient Absorption",
    body: "Help water and nutrients reach your lawn's roots.",
  },
  {
    title: "Prepare for Spring",
    body: "Improve soil conditions before winter to support healthier growth next spring.",
  },
] as const

export const TRUST_CALLOUTS = [
  { stat: "300+", label: "Five-Star Google Reviews" },
  { stat: "5.0/5.0", label: "Google Rating" },
  { label: "Locally Owned & Operated" },
] as const

/** Real Google reviews, pulled by name from lib/testimonials.ts so the quotes stay verbatim. */
export const REVIEW_NAMES = ["Brandon Shearer", "Scott Grezeszak", "Patricia Stewart"] as const

export const OFFER_FAQS = [
  {
    question: `What does the ${OFFER.priceLabel} include?`,
    answer: `Professional core aeration of your whole lawn for one flat ${OFFER.priceLabel}, for lawns under ${OFFER.sqFtLabel}. We pull actual plugs of soil out of the ground rather than poking holes in it, which is what genuinely relieves compaction.`,
  },
  {
    question: "Does this include overseeding?",
    answer:
      "No, this offer is core aeration only. The ideal overseeding window is coming to an end, but your soil can still benefit from aeration. If you're curious whether seed still makes sense for your lawn, ask when we call to confirm your lawn size.",
  },
  {
    question: "Is it too late in the season to aerate?",
    answer:
      "No. As long as the ground isn't frozen or excessively wet, October can still be an excellent time to aerate before winter. We'll confirm your specific date after you claim the offer.",
  },
  {
    question: `What if my lawn is over ${OFFER.sqFtLabel}?`,
    answer: `Still submit the form. The ${OFFER.priceLabel} price applies to lawns under ${OFFER.sqFtLabel}. Larger lawns may require additional pricing, and we'll send it to you before you commit to anything.`,
  },
  {
    question: "Do I need to be home?",
    answer:
      "No. Just leave gates unlocked and mark sprinkler heads, invisible dog fences, and drainage boxes ahead of time. We'll let you know when the work is done.",
  },
  {
    question: "What happens after I submit the form?",
    answer: `We reach out to confirm your lawn is under ${OFFER.sqFtLabel} and lock in your ${OFFER.priceLabel} spot. During business hours that's usually within the hour.`,
  },
] as const
