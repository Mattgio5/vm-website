/**
 * Fall 2026 Leaf Cleanup & Removal promo — single source of truth.
 *
 * The landing page at /offers/leaf-cleanup-100-off receives paid Meta and
 * Google traffic and has to hold exact message match with the ads: $100 off
 * qualifying leaf cleanups scheduled by October 15. Every mention of the offer
 * on the page reads from here, so the wording never drifts between sections,
 * and changing the deadline is a one-line edit.
 *
 * Positioning: the customer is buying convenience (no raking, bagging or
 * hauling). Lawn health is a secondary point only.
 */

import { Leaf, MapPin, ShieldCheck, Sparkles, Star, Trophy, Truck, Users, Wind } from "lucide-react"
import type { LandingOffer } from "@/lib/landing-offer"

export const OFFER = {
  discount: 100,
  discountLabel: "$100 Off",
  deadlineLabel: "October 15",
  deadlineIso: "2026-10-15",
  headline: "Professional Leaf Cleanup & Removal",
  /** The exact offer line from the ads. Use it verbatim. */
  offerLine: "$100 Off Leaf Cleanups Scheduled by October 15",
  qualifyingOfferLine: "$100 Off Qualifying Leaf Cleanups Scheduled by October 15",
  disclaimer:
    "$100 discount applies to qualifying leaf cleanup services scheduled by October 15. Minimum service requirements or other restrictions may apply.",
  serviceArea: "Serving Bucks & Montgomery County",
  service: "Leaf Cleanup & Removal",
  /** services[1] on the lead — see LandingOffer.jobberTag. */
  jobberTag: "*** $100 OFF LEAF CLEANUP OFFER — SCHEDULED BY OCT 15 ***",
  cta: "Get My Free Quote",
  path: "/offers/leaf-cleanup-100-off",
  /** Registered in LEAD_PATHS (components/analytics-tracker.tsx). */
  confirmedPath: "/schedule-leaf-cleanup",
  /**
   * Hero photo: a Varsity crew member with a backpack blower and leaves in the
   * air. To match the Meta creative exactly, drop the ad image in at
   * /public/images/offers/leaf-cleanup-hero.webp (~1600×900) and point this at it.
   */
  heroImage: "/images/service-cleanup.webp",
} as const

export const LEAF_LANDING: LandingOffer = {
  path: OFFER.path,
  confirmedPath: OFFER.confirmedPath,
  service: OFFER.service,
  jobberTag: OFFER.jobberTag,
  primaryCta: OFFER.cta,
  formCta: OFFER.cta,
  stickyCta: OFFER.cta,
  stickySuffix: OFFER.discountLabel,
  submittingLabel: "Sending your request…",
  successTitle: "Request Received",
  successBody: "We'll reach out shortly to set up your free leaf cleanup quote.",
  trackingParams: {
    content_name: `Leaf Cleanup ${OFFER.discountLabel}`,
    offer_discount: OFFER.discount,
  },
}

/** Scannable proof badges directly under the hero. */
export const PROOF_POINTS = [
  { icon: Star, title: "300+ Five-Star Reviews", body: "Rated 5.0 on Google" },
  { icon: ShieldCheck, title: "Licensed & Insured", body: "Real coverage on every crew" },
  { icon: Trophy, title: "Local College Student-Athletes", body: "Hard-working, on-time crews" },
  { icon: Users, title: "Experienced Crew Leads", body: "Seasoned leads on every job" },
  { icon: MapPin, title: "Serving Bucks & Montgomery County", body: "Locally owned in Doylestown" },
] as const

/** Convenience section — four benefits, one line each. */
export const BENEFITS = [
  {
    icon: Leaf,
    title: "Lawn & landscape bed leaf cleanup",
    body: "We clear the lawn and the beds, not just the open grass.",
  },
  {
    icon: Wind,
    title: "Professional backpack blowing",
    body: "Pro-grade blowers move heavy leaf cover fast.",
  },
  {
    icon: Truck,
    title: "Leaf collection & removal",
    body: "Leaves are hauled off your property. No bags left at the curb.",
  },
  {
    icon: Sparkles,
    title: "Final property cleanup",
    body: "We tidy up the serviced areas before we leave.",
  },
] as const

export const INCLUDED = [
  "Blow and clear leaves from lawns",
  "Clear leaves from landscape beds",
  "Collect and consolidate leaves",
  "Haul the collected leaves away",
  "Perform a final cleanup of serviced areas",
] as const

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Request Your Free Quote",
    body: "Tell us a little about your property and the cleanup you're looking for.",
  },
  {
    step: "02",
    title: "Get Your Estimate",
    body: "Our team will assess the property and provide pricing for the cleanup.",
  },
  {
    step: "03",
    title: "We Handle the Leaves",
    body: "Our crew completes the cleanup, removes the leaves, and leaves the serviced areas cleaned up.",
  },
] as const

/**
 * Reviews pulled by name from lib/testimonials.ts. Chosen for cleanup quality,
 * thoroughness and professionalism, and none of them mention other services,
 * so the page stays on leaf cleanup.
 */
export const OFFER_REVIEW_NAMES = ["Rich Rudnet", "John Salvatore", "Stephen Ciliberto"] as const

export const OFFER_FAQS = [
  {
    question: "Do you haul the leaves away?",
    answer:
      "Yes. As part of our leaf cleanup and removal service, collected leaves are hauled away from your property. They are taken to a composting site where the organic material can be repurposed into materials such as compost and mulch.",
  },
  {
    question: "Do you clean leaves out of landscape beds?",
    answer:
      "Yes. Our crews can clear leaves from lawns and landscape beds as part of the cleanup. The exact scope of work will be outlined in your quote.",
  },
  {
    question: "Do I need to bag the leaves beforehand?",
    answer:
      "No. Our crews handle the blowing, collection, and removal. You do not need to rake or bag the leaves before we arrive.",
  },
  {
    question: "Can I schedule more than one cleanup during the fall?",
    answer:
      "Yes. Some properties benefit from multiple cleanups as leaves continue to fall. If you are interested in recurring or multiple visits, let us know when requesting your quote.",
  },
  {
    question: `Does the $${OFFER.discount} discount apply to every cleanup?`,
    answer: `The $${OFFER.discount} offer applies to qualifying leaf cleanup services scheduled by ${OFFER.deadlineLabel}. Any minimum service requirements or exclusions will be clearly communicated in your quote before you approve it.`,
  },
  {
    question: "When should I schedule my cleanup?",
    answer:
      "Fall schedules can fill quickly during peak leaf drop. If you know you'll need service, request a quote early so we can work you into the schedule.",
  },
] as const
