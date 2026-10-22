/**
 * Fall 2026 Leaf Cleanup & Removal promo — single source of truth.
 *
 * The landing page at /offers/leaf-cleanup-100-off receives paid Meta and
 * Google traffic and has to hold exact message match with the three ad
 * creatives: "Take Back Your Fall Weekends", "Leaf Cleanup — $100 Off" and
 * "We Clear. We Collect. We Haul Away." Every mention of the offer on the page
 * reads from here, so the wording never drifts between sections.
 *
 * The offer runs for the rest of the fall leaf season with no fixed end date —
 * don't add a deadline back unless one is actually set.
 *
 * Positioning: the customer is buying convenience (no raking, bagging or
 * hauling). Many prospects hold off because leaves are still on the trees, so
 * the page also has to explain that quoting now ≠ cleaning now.
 */

import { Recycle, Scissors, Shovel, Truck, Wind } from "lucide-react"
import type { LandingOffer } from "@/lib/landing-offer"

export const OFFER = {
  discount: 100,
  discountLabel: "$100 Off",
  eyebrow: "Bucks & Montgomery County Homeowners",
  headline: "Take Back Your Fall Weekends.",
  offerHeadline: "Get $100 Off Leaf Cleanup & Removal",
  urgencyLine: "Limited spots available on our fall cleanup schedule.",
  disclaimer:
    "$100 discount applies to qualifying leaf cleanup services. Minimum service requirements or other restrictions may apply.",
  serviceArea: "Serving Bucks & Montgomery County",
  service: "Leaf Cleanup & Removal",
  /** services[1] on the lead — see LandingOffer.jobberTag. */
  jobberTag: "*** $100 OFF LEAF CLEANUP OFFER ***",
  cta: "Get My Free Quote →",
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
  // The arrow would collide with the "— $100 Off" suffix on the sticky bar.
  stickyCta: "Get My Free Quote",
  stickySuffix: OFFER.discountLabel,
  submittingLabel: "Sending your request…",
  successTitle: "Request Received",
  successBody:
    "We'll reach out shortly to confirm pricing and coordinate your cleanup timing.",
  trackingParams: {
    content_name: `Leaf Cleanup ${OFFER.discountLabel}`,
    offer_discount: OFFER.discount,
  },
}

/** Hero trust row — short enough to sit under the CTA on a phone. */
export const HERO_TRUST = [
  "300+ Five-Star Reviews",
  "Rated 5.0 on Google",
  "Locally Owned & Operated",
  "Experienced Crew Leads",
] as const

/** "We Clear. We Collect. We Haul Away." — mirrors the third ad creative. */
export const PROCESS = [
  {
    step: "01",
    icon: Wind,
    title: "We Clear",
    body: "Our crew clears fallen leaves from your lawn using professional equipment.",
  },
  {
    step: "02",
    icon: Shovel,
    title: "We Collect",
    body: "We gather the leaves and prepare them for removal.",
  },
  {
    step: "03",
    icon: Truck,
    title: "We Haul Away",
    body: "We remove the collected leaves from your property. No bags left at the curb.",
  },
] as const

/**
 * The two packages. Bed leaf removal is only in Complete Fall Cleanup — the
 * standard package is lawns only, so never list beds under it.
 */
export const SERVICE_OPTIONS = [
  {
    icon: Recycle,
    name: "Leaf Cleanup & Removal",
    tag: "Our standard package",
    intro: "Our standard package includes:",
    items: [
      "Clearing fallen leaves from lawns",
      "Collecting leaves",
      "Hauling collected leaves off the property",
      "Tidying serviced areas",
    ],
  },
  {
    icon: Scissors,
    name: "Complete Fall Cleanup",
    tag: "Full winter prep",
    intro: "For homeowners who want additional winter property preparation:",
    items: [
      "Everything in our standard leaf cleanup",
      "Leaf removal from landscape beds",
      "Appropriate seasonal pruning",
      "Additional bed maintenance as specified in the quote",
    ],
  },
] as const

/** Optional picker on the form. Sent to Jobber as its own `services` entry. */
export const FORM_SERVICE_OPTIONS = [
  "Leaf Cleanup & Removal",
  "Complete Fall Cleanup",
  "Not Sure Yet",
] as const

/** "Leaves haven't fallen yet?" section — quote now, clean up after the drop. */
export const SCHEDULING_STEPS = [
  {
    step: "1",
    title: "Request Your Free Quote",
    body: "Tell us about your property and the cleanup you're looking for.",
  },
  {
    step: "2",
    title: "Review Your Estimate",
    body: "We'll assess your property and provide clear pricing before any work is scheduled.",
  },
  {
    step: "3",
    title: "Reserve Your Cleanup",
    body: "Once you approve your quote, we'll coordinate your cleanup around the leaf drop and our available schedule.",
  },
] as const

export const OFFER_BENEFITS = [
  "Free, no-obligation quote",
  "No need to rake or bag leaves beforehand",
  "Leaves collected and hauled away",
  "Cleanup coordinated around the fall season",
] as const

/**
 * Reviews pulled by name from lib/testimonials.ts. Chosen for cleanup quality,
 * thoroughness and professionalism, and none of them mention other services,
 * so the page stays on leaf cleanup.
 */
export const OFFER_REVIEW_NAMES = ["Rich Rudnet", "John Salvatore", "Stephen Ciliberto"] as const

export const OFFER_FAQS = [
  {
    question: "Can I get a quote even if my leaves haven't fallen yet?",
    answer:
      "Yes! We can assess your property and provide a quote before the leaves fall. Once you approve your estimate, we'll coordinate the cleanup around the leaf drop and available scheduling.",
  },
  {
    question: "Do you haul away the leaves?",
    answer:
      "Yes. Our team collects and removes the leaves from your property rather than leaving bags at the curb.",
  },
  {
    question: "Do you clean leaves out of landscape beds?",
    answer:
      "Yes. Landscape bed leaf removal is available as part of our Complete Fall Cleanup service. We'll make sure your estimate clearly specifies the areas included.",
  },
  {
    question: "Do I need to rake or bag leaves first?",
    answer: "No. Our crew handles clearing, collecting, and hauling the leaves.",
  },
  {
    question: "Can I schedule multiple cleanups?",
    answer:
      "Yes, depending on availability. Let us know if you're interested in multiple visits during the season and we'll discuss your options.",
  },
  {
    question: "When will my cleanup take place?",
    answer:
      "We'll coordinate scheduling based on the fall leaf drop, your property's needs, and our crew availability.",
  },
  {
    question: `How does the $${OFFER.discount} discount work?`,
    answer:
      "The discount applies to qualifying fall leaf cleanup services. Your estimate will explain the applicable pricing and offer terms.",
  },
] as const
