/**
 * Fall 2026 Aeration + Overseeding promo — single source of truth.
 *
 * The landing page at /offers/fall-aeration-259 receives paid Meta traffic and
 * has to hold exact message match with the ads: $269, aeration + overseeding,
 * under 10,000 sq. ft., sign up by the deadline below. Every mention of those facts
 * on the page reads from here, so changing the price or the deadline is a
 * one-line edit and the ads and page can't drift apart.
 */

export const OFFER = {
  price: 269,
  priceLabel: "$269",
  sqFtCap: 10000,
  sqFtLabel: "10,000 sq. ft.",
  deadlineLabel: "September 15",
  /** Used for the schema.org priceValidUntil / offer expiry. */
  deadlineIso: "2026-09-15",
  service: "Core Aeration & Overseeding",
  /**
   * Sent as a second entry in the `services` array so the admin can spot a
   * promo lead in Jobber at a glance.
   *
   * The Flask scheduler joins `services` with ", " straight into the Jobber
   * Request form field "Which services are you interested in?" (see
   * services_jobber_requests.py `create_request`) — it's free text with no
   * validation or enum mapping, so an extra entry is safe and nothing routes
   * off it. Kept second so Supabase's `service_primary` (= services[0]) stays
   * "Core Aeration & Overseeding" and existing reporting doesn't shift.
   */
  jobberTag: "*** $269 FALL OFFER — CONFIRM LAWN IS UNDER 10,000 SQ FT ***",
  primaryCta: "Claim the $269 Offer",
  formCta: "Claim My $269 Offer",
  stickyCta: "Claim the $269 Offer",
  path: "/offers/fall-aeration-259",
  /**
   * Post-submit confirmation URL. Named to match the site's other /schedule-*
   * thank-you pages and registered in LEAD_PATHS (analytics-tracker.tsx), so
   * the lead conversion fires through the same single mechanism as every
   * other conversion on the site.
   */
  confirmedPath: "/schedule-aeration",
} as const

/**
 * Trust bar directly under the hero CTA. Short enough to scan in one pass.
 * Numeric points lead with the figure; the qualitative ones get a checkmark so
 * a word like "Licensed" isn't awkwardly split across the stat/label pair.
 */
export const TRUST_POINTS = [
  { stat: "300+", label: "Customer Reviews" },
  { stat: "5.0/5.0", label: "Rating on Google" },
  { label: "Fully Licensed & Insured" },
  { label: "Locally Owned & Operated" },
  { label: "Proudly Employing Local College Athletes" },
] as const

/** What the flat $269 covers. Deliberately three lines — no package tiers. */
export const INCLUDED = [
  {
    title: "Core Aeration",
    body: "We pull small plugs of soil across the whole lawn to relieve compaction and open up the root zone.",
  },
  {
    title: "Overseeding",
    body: "Fresh grass seed applied right after aeration, while the openings give the seed real contact with the soil.",
  },
  {
    title: `Lawns Under ${OFFER.sqFtLabel}`,
    body: `One flat ${OFFER.priceLabel} price for the whole lawn — no per-visit add-ons and no surprise upcharges.`,
  },
] as const

/** Homeowner-facing outcomes, not agronomy. */
export const FALL_BENEFITS = [
  "A thicker lawn heading into next spring",
  "Better grass density across worn areas",
  "Strong seed-to-soil contact so more seed takes",
  "Thin and bare spots start filling in",
  "Recovery from a hot, dry summer",
] as const

export const WHY_VARSITY = [
  {
    title: "300+ Reviews at 5.0/5.0",
    body: "Hundreds of Bucks and Montgomery County homeowners have rated us — and the average has held at a perfect 5.0 on Google.",
  },
  {
    title: "Fully Licensed & Insured",
    body: "Real coverage on every crew that steps onto your property. Certificates available on request.",
  },
  {
    title: "Locally Owned & Operated",
    body: "Based in Doylestown. Not a franchise, not a call center — the owner answers for the work.",
  },
  {
    title: "Local College Athletes on Our Crews",
    body: "We hire and train athletes from area colleges. They show up on time and they work like it matters.",
  },
  {
    title: "Communication You Don't Chase",
    body: "You hear from us when we say you will — confirmation, scheduling, and clear aftercare instructions.",
  },
  {
    title: "Experienced Crew Leadership",
    body: "Every crew runs under a lead who has spent seasons on Bucks County lawns, not a first-week hire.",
  },
] as const

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: `Claim the ${OFFER.priceLabel} offer`,
    body: "Fill out the short form — name, phone, email, and your address. That's it.",
  },
  {
    step: "02",
    title: "We confirm your lawn qualifies",
    body: `We check that your lawn is under ${OFFER.sqFtLabel} so the flat ${OFFER.priceLabel} price applies.`,
  },
  {
    step: "03",
    title: "We schedule your service",
    body: "You get a date in our fall aeration window, plus simple watering instructions afterward.",
  },
] as const

/**
 * Reviews pulled by name from lib/testimonials.ts so the quotes stay
 * single-sourced. Chosen for reliability, communication, professional crews,
 * respect for property, and workmanship — the objections a fixed-price ad
 * raises about an unknown company.
 */
export const OFFER_REVIEW_NAMES = [
  "Brandon Shearer",
  "Scott Grezeszak",
  "Patricia Stewart",
  "Kurt Krumpholz",
  "Diane Smith",
] as const

export const OFFER_FAQS = [
  {
    question: `Does the ${OFFER.priceLabel} include both aeration and overseeding?`,
    answer: `Yes. ${OFFER.priceLabel} covers core aeration and overseeding of the lawn — both services, one flat price, for lawns under ${OFFER.sqFtLabel}.`,
  },
  {
    question: `What if my lawn is over ${OFFER.sqFtLabel}?`,
    answer: `Still submit the form. The ${OFFER.priceLabel} price applies to lawns under ${OFFER.sqFtLabel}, and for anything larger we'll send you custom pricing for your exact lawn size before you commit to anything.`,
  },
  {
    question: "When will you perform the service?",
    answer:
      "We aerate and overseed during the late-summer and early-fall window, when soil is still warm enough for seed to germinate. We'll confirm your specific date after you claim the offer.",
  },
  {
    question: "Do I need to be home?",
    answer:
      "No. Just leave gates unlocked and mark sprinkler heads, invisible dog fences, and drainage boxes ahead of time. We'll let you know when the work is done.",
  },
  {
    question: "What happens after I submit the form?",
    answer: `We reach out to confirm your lawn qualifies for the under-${OFFER.sqFtLabel} price and to lock in your ${OFFER.priceLabel} spot. During business hours that's usually within the hour.`,
  },
  {
    question: "What should I do after overseeding?",
    answer:
      "Keep the new seed consistently moist while it germinates and hold off on the first mow until the new grass is established. We hand you specific watering instructions the day of service.",
  },
] as const
