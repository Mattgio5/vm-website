/**
 * Fall 2026 Landscaping Projects promo: single source of truth.
 *
 * The landing page at /offers/fall-landscaping-250-off receives paid Meta
 * traffic: $250 off landscaping projects over $2,000 scheduled by October 20.
 * The $2,000 minimum must travel with the offer everywhere it's shown
 * prominently, so it lives here next to the discount.
 *
 * Copy rule for this campaign: no em dashes anywhere on the page.
 */

import type { LandingOffer } from "@/lib/landing-offer"

const IMG = "/images/projects"

export const OFFER = {
  discount: 250,
  discountLabel: "$250 Off",
  minimumLabel: "$2,000",
  deadlineLabel: "October 20",
  deadlineIso: "2026-10-20",
  /** Shown under every prominent mention of the offer. */
  qualifier: "$250 off qualifying landscaping projects over $2,000.",
  disclaimer:
    "$250 discount applies to landscaping projects over $2,000 scheduled by October 20, 2026. The discount is applied to your quote.",
  service: "Fall Landscaping Project",
  /** services[1] on the lead, so the promo is obvious in Jobber. */
  jobberTag: "*** $250 OFF FALL LANDSCAPING (PROJECTS OVER $2,000) - SCHEDULED BY OCT 20 ***",
  cta: "Schedule My Free Quote",
  stickyCta: "Get My Free Quote",
  trustLine: [
    "300+ Five-Star Reviews",
    "Perfect 5.0/5.0 Rating",
    "Licensed & Insured",
    "Local Team",
  ],
  path: "/offers/fall-landscaping-250-off",
  /** Registered in LEAD_PATHS (components/analytics-tracker.tsx). */
  confirmedPath: "/schedule-fall-landscaping",
  heroImage: `${IMG}/project-redesign-after.webp`,
  /** Swap to /images/projects/varsity-team-2026.webp once that file is uploaded. */
  teamImage: "/images/team/team_drone.png",
} as const

export const LANDSCAPING_LANDING: LandingOffer = {
  path: OFFER.path,
  confirmedPath: OFFER.confirmedPath,
  service: OFFER.service,
  jobberTag: OFFER.jobberTag,
  primaryCta: OFFER.cta,
  formCta: OFFER.cta,
  stickyCta: OFFER.stickyCta,
  submittingLabel: "Sending your request…",
  successTitle: "Request Received",
  successBody: "We'll reach out shortly to set up your free landscaping project quote.",
  trackingParams: {
    content_name: `Fall Landscaping ${OFFER.discountLabel}`,
    offer_discount: OFFER.discount,
  },
}

export const PROJECT_TYPES = [
  "Landscape redesign",
  "Rock bed installation",
  "Drainage work",
  "Privacy screening",
  "Other landscaping project",
] as const

/** ?service= slugs for ad/email links, e.g. ?service=drainage */
export const PROJECT_TYPE_ALIASES: Record<string, string> = {
  redesign: "Landscape redesign",
  "rock-bed": "Rock bed installation",
  drainage: "Drainage work",
  privacy: "Privacy screening",
}

export type Photo = { src: string; alt: string; label?: "Before" | "After" }

export const PROJECT_CARDS: {
  title: string
  body: string
  href: string
  photos: Photo[]
}[] = [
  {
    title: "Landscape Redesigns",
    body: "Remove overgrown shrubs and plants, then rebuild the space with a cleaner layout and new landscaping.",
    href: "#redesign",
    photos: [
      { src: `${IMG}/project-redesign-before.webp`, alt: "Overgrown front bed before redesign", label: "Before" },
      { src: `${IMG}/project-redesign-after.webp`, alt: "Redesigned front bed with new plantings", label: "After" },
    ],
  },
  {
    title: "Rock Bed Installations",
    body: "Upgrade difficult or tired landscape areas with professionally installed decorative stone.",
    href: "#drainage",
    photos: [{ src: `${IMG}/rock-image.webp`, alt: "River rock bed and flagstone installed along a landscape bed" }],
  },
  {
    title: "Drainage Work",
    body: "Fix problem areas where water collects or downspouts discharge into your landscaping.",
    href: "#drainage",
    photos: [
      { src: `${IMG}/drainage-standing-water-before.webp`, alt: "Standing water by a downspout", label: "Before" },
      { src: `${IMG}/rock-bed-drainage-after.webp`, alt: "Finished stone drainage bed at the downspout", label: "After" },
    ],
  },
  {
    title: "Privacy Screenings",
    body: "Create more privacy with strategically planted arborvitae and other screening plants.",
    href: "#privacy",
    photos: [
      { src: `${IMG}/privacy-screening-before.webp`, alt: "Open property line before planting", label: "Before" },
      { src: `${IMG}/privacy-screening-after-1.webp`, alt: "Arborvitae privacy screen planted along the property line", label: "After" },
    ],
  },
]

export const REDESIGN_PHOTOS: Photo[] = PROJECT_CARDS[0].photos

export const DRAINAGE_PHOTOS: Photo[] = [
  { src: `${IMG}/drainage-standing-water-before.webp`, alt: "Standing water collecting at a downspout", label: "Before" },
  { src: `${IMG}/rock-bed-drainage-after.webp`, alt: "Rock bed at the downspout holding the water instead of the mulch", label: "After" },
]

export const PRIVACY_PHOTOS: Photo[] = [
  { src: `${IMG}/privacy-screening-before.webp`, alt: "Open property line before privacy planting", label: "Before" },
  { src: `${IMG}/privacy-screening-after-1.webp`, alt: "Row of newly planted arborvitae", label: "After" },
  { src: `${IMG}/privacy-screening-after-2.webp`, alt: "Privacy screen along the back of the yard", label: "After" },
]

export const REVIEWS = {
  bill: { src: `${IMG}/bill-review.webp`, width: 860, height: 265, source: "Facebook post", alt: "Facebook post from Bill Wasylenko: in just 5 hours, moldy azaleas and old junipers were replaced by 8 blue spruces. Kudos to Varsity Mulch, much more than a mulch outfit." },
  len: { source: "Verified Google review", src: `${IMG}/review-len-selihar.webp`, width: 845, height: 485, alt: "Five-star Google review from Len Selihar about a 200-foot arborvitae privacy planting" },
} as const

/** Bill W.'s video of his front bed redesign. */
export const REDESIGN_VIDEO_ID = "HI6SMAwJbRc"

export const TRUST_POINTS = [
  "Licensed & Insured",
  "Experienced Crew Leads",
  "Local College Student-Athletes",
  "Serving Bucks & Montgomery County",
] as const
