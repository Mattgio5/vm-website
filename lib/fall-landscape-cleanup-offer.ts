/**
 * Fall 2026 Landscape Cleanup promo: single source of truth.
 *
 * The landing page at /offers/fall-landscape-cleanup-100-off receives cold
 * Meta traffic. Individual ads may lead with pruning, planting or bed cleanup,
 * but they all land here on one broader offer: $100 off a fall landscape
 * cleanup scheduled by the deadline below.
 *
 * Positioning: a "fall landscape cleanup" is a garden-bed refresh (shrubs,
 * perennials, plantings, beds), NOT leaf removal. Leaf removal is its own
 * offer (/offers/leaf-cleanup-100-off), so the page says so plainly.
 *
 * Copy rules: no em dashes anywhere on the page, and never imply every plant
 * should be pruned in fall. Timing depends on the plant.
 *
 * Changing the deadline is a one-line edit (deadlineLabel + deadlineIso).
 */

import { Scissors, Shovel, Sparkles, Sprout } from "lucide-react"
import type { LandingOffer } from "@/lib/landing-offer"

const IMG = "/images/projects"

export const OFFER = {
  discount: 100,
  discountLabel: "$100 Off",
  deadlineLabel: "October 15",
  deadlineIso: "2026-10-15",
  disclaimer:
    "$100 discount applies to qualifying fall landscape cleanup services scheduled by October 15. Minimum service requirements or other restrictions may apply. The discount is applied to your quote.",
  serviceArea: "Serving Bucks & Montgomery County",
  service: "Fall Landscape Cleanup",
  /** services[1] on the lead, so the promo is obvious in Jobber. */
  jobberTag: "*** $100 OFF FALL LANDSCAPE CLEANUP - SCHEDULED BY OCT 15 ***",
  cta: "Get My Free Quote",
  path: "/offers/fall-landscape-cleanup-100-off",
  /** Registered in LEAD_PATHS (components/analytics-tracker.tsx). */
  confirmedPath: "/schedule-fall-landscape-cleanup",
  trustLine: [
    "300+ Five-Star Reviews",
    "5.0 Google Rating",
    "Licensed & Insured",
    "Local Team",
  ],
  heroImage: `${IMG}/project-redesign-after.webp`,
  teamImage: "/images/team/team_drone.png",
} as const

export const CLEANUP_LANDING: LandingOffer = {
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
  successBody: "We'll reach out shortly to set up your free landscape cleanup quote.",
  trackingParams: {
    content_name: `Fall Landscape Cleanup ${OFFER.discountLabel}`,
    offer_discount: OFFER.discount,
  },
}

/** Before/after used in the transformation section (same job, same angle). */
export const TRANSFORMATION = {
  before: `${IMG}/project-redesign-before.webp`,
  after: `${IMG}/project-redesign-after.webp`,
  beforeAlt: "Overgrown shrubs along the front of a brick colonial before the refresh",
  afterAlt: "The same front bed after: new blue spruce plantings, fresh mulch and clean edging",
  highlights: ["Tired shrubs removed", "New plantings installed", "Fresh, clean bed"],
} as const

/** Bill W.'s real Facebook post about this job. A screenshot, never re-typed. */
export const BILL_REVIEW = {
  src: `${IMG}/bill-review.webp`,
  width: 860,
  height: 265,
  source: "Facebook post",
  alt: "Facebook post from Bill Wasylenko: in just 5 hours, moldy azaleas and old junipers were replaced by 8 blue spruces. Kudos to Varsity Mulch, much more than a mulch outfit.",
} as const

export const SERVICE_CARDS = [
  {
    icon: Scissors,
    title: "Pruning & Cutbacks",
    outcome: "Shrubs and perennials trimmed back the right way, at the right time.",
    points: [
      "Shrub and bush pruning",
      "Perennial cutbacks",
      "Overgrown plants brought back in scale",
    ],
  },
  {
    icon: Sprout,
    title: "Planting & Replacements",
    outcome: "Swap out what isn't working for plants that fit your yard.",
    points: [
      "Removal of dead, tired or overgrown plants",
      "New shrubs, perennials and evergreens",
      "Replacements that suit your space",
    ],
  },
  {
    icon: Shovel,
    title: "Bed Cleanup",
    outcome: "Clear out the clutter so your beds look sharp again.",
    points: [
      "Dead growth and built-up debris removed",
      "Weeds cleared from the bed",
      "Everything hauled away",
    ],
  },
  {
    icon: Sparkles,
    title: "Landscape Refreshes",
    outcome: "Reset a tired bed in one visit instead of piecemeal.",
    points: [
      "Pruning, removals and new plants in one plan",
      "Beds ready for winter and for spring",
      "A clear recommendation before any work starts",
    ],
  },
] as const

/** "More than leaf cleanup" callout. */
export const COVERED = [
  "Landscape beds",
  "Shrubs and bushes",
  "Perennials",
  "Plantings and replacements",
] as const

export const WHY_FALL = [
  {
    title: "Clear overgrowth before winter",
    body: "Cut back what's crowding walkways, windows and neighboring plants so it heads into winter in better shape.",
  },
  {
    title: "Remove struggling plants",
    body: "Dead or declining plants are easy to spot now, and easier to pull out before they turn into a bigger gap.",
  },
  {
    title: "Install replacements",
    body: "Cooler weather is easier on new plantings, giving many plants time to root in before spring.",
  },
  {
    title: "Cut back the right perennials",
    body: "Many perennials are cut back in fall, while some do better left standing until late winter.",
  },
  {
    title: "Prepare beds for spring",
    body: "A cleaner start means less catching up when growth returns.",
  },
] as const

export const PRUNING_NOTE = {
  title: "Timing depends on the plant.",
  body: "Not everything should be pruned in fall. Spring-flowering shrubs are usually pruned right after they bloom, and pruning them now can cost you next year's flowers. We'll tell you what to do now and what to leave for later.",
} as const

export const STEPS = [
  { title: "Request a free quote", body: "Tell us what your beds need. It takes about a minute." },
  { title: "We evaluate your landscape", body: "We look at your shrubs, perennials and beds." },
  {
    title: "We recommend a plan",
    body: "What should be cleaned up, pruned, removed or replaced.",
  },
  { title: "You receive a clear quote", body: "You decide what to schedule after you see pricing." },
  { title: "We do the work and clean up", body: "Debris is hauled away and your beds are left clean." },
] as const

/** Real Google reviews, pulled by name from lib/testimonials.ts so the quotes stay verbatim. */
export const REVIEW_NAMES = ["Marta Chwistek", "Diane Dunbar", "Lynette Schiavoni"] as const

export const TRUST_POINTS = [
  "Licensed & Insured",
  "Experienced Crew Leads",
  "Local College Student-Athletes",
  "Serving Bucks & Montgomery County",
] as const

/**
 * Form picker labels, exactly what lands in Jobber. Never required.
 *
 * Ads can pre-tick one or more with ?service=<slug>[,<slug>], where the slug is
 * the lowercased, hyphenated label (pruning, planting, plant-removal-replacement,
 * bed-cleanup, landscape-refresh, leaf-cleanup, not-sure-need-advice). Short
 * aliases below also work.
 */
export const FORM_SERVICE_OPTIONS = [
  "Pruning",
  "Planting",
  "Plant removal / replacement",
  "Bed cleanup",
  "Landscape refresh",
  "Leaf cleanup",
  "Not sure / need advice",
] as const

export const FORM_SERVICE_ALIASES: Record<string, string> = {
  cutbacks: "Pruning",
  "perennial-cutbacks": "Pruning",
  trimming: "Pruning",
  "shrub-pruning": "Pruning",
  plants: "Planting",
  removal: "Plant removal / replacement",
  replacement: "Plant removal / replacement",
  replacements: "Plant removal / replacement",
  cleanup: "Bed cleanup",
  refresh: "Landscape refresh",
  leaves: "Leaf cleanup",
  leaf: "Leaf cleanup",
  "leaf-removal": "Leaf cleanup",
  "not-sure": "Not sure / need advice",
  unsure: "Not sure / need advice",
}

export const OFFER_FAQS = [
  {
    question: "What is included in a fall landscape cleanup?",
    answer:
      "Your quote is built around what your beds actually need. It can include pruning shrubs and bushes, cutting back perennials, removing dead, tired or overgrown plants, installing replacements, and cleaning up the beds. We'll look at your landscape, recommend what makes sense, and you decide what to move forward with.",
  },
  {
    question: "Is leaf removal included?",
    answer:
      "This offer focuses on landscape beds, shrubs, perennials and plantings, not standard leaf removal. If you'd also like leaves cleared, tick \"Leaf cleanup\" on the quote form and we'll price it separately.",
  },
  {
    question: "Can you clear the leaves off my lawn too?",
    answer:
      "Yes. Our leaf cleanup service covers your lawn and beds, and we can schedule it alongside your landscape cleanup. Tick \"Leaf cleanup\" on the quote form and we'll include it in your quote, with the leaves hauled away.",
  },
  {
    question: "Is fall a good time to plant?",
    answer:
      "For many shrubs, perennials and evergreens, yes. Cooler air and still-warm soil are easier on new plants and give roots time to settle in before spring. Timing does depend on the plant, so we'll tell you what makes sense to install now and what is better to wait on.",
  },
  {
    question: "Can everything be pruned in fall?",
    answer:
      "No. Some plants are fine to prune in fall, but others, like spring-flowering shrubs, are better pruned right after they bloom. Pruning them now can remove next year's flowers. We'll recommend the right timing plant by plant.",
  },
  {
    question: "Do you haul away debris?",
    answer:
      "Yes. Trimmings, removed plants and bed debris are hauled away, not left in piles for you to deal with.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Bucks and Montgomery County, PA, and we're locally based in Doylestown. Enter your address in the quote form and we'll confirm we cover your area.",
  },
  {
    question: "How does the $100 offer work?",
    answer: `Request a free quote and schedule a qualifying fall landscape cleanup by ${OFFER.deadlineLabel}. We apply $${OFFER.discount} off to your quote. Minimum service requirements or other restrictions may apply, and we'll confirm the details with you.`,
  },
  {
    question: "Am I committing by requesting a quote?",
    answer:
      "No. The quote is free and there's no obligation. Nothing is scheduled until you've seen pricing and approved it.",
  },
] as const
