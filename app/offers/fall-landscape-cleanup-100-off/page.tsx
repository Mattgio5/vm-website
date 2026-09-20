import type { Metadata } from "next"
import Image from "next/image"
import { Check, MapPin, Phone, ShieldCheck, Star, Trophy, Users, ZoomIn } from "lucide-react"
import {
  OFFER,
  CLEANUP_LANDING,
  TRANSFORMATION,
  BILL_REVIEW,
  SERVICE_CARDS,
  COVERED,
  WHY_FALL,
  PRUNING_NOTE,
  STEPS,
  REVIEW_NAMES,
  TRUST_POINTS,
  FORM_SERVICE_OPTIONS,
  FORM_SERVICE_ALIASES,
  OFFER_FAQS,
} from "@/lib/fall-landscape-cleanup-offer"
import { testimonials } from "@/lib/testimonials"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { OfferTrackingProvider } from "@/components/offers/offer-tracking-provider"
import { OfferCta } from "@/components/offers/offer-cta"
import { OfferLeadForm } from "@/components/offers/offer-lead-form"
import { OfferStickyCta } from "@/components/offers/offer-sticky-cta"
import { OfferFAQ } from "@/components/offers/offer-faq"
import {
  OfferFooter,
  OfferHeader,
  OFFER_PHONE_HREF,
  OFFER_PHONE_LABEL,
  Stars,
  Stripes,
} from "@/components/offers/offer-chrome"

const HERO_ID = "offer-hero"

/**
 * Paid Meta landing page for the $100-off fall landscape cleanup, built for
 * cold traffic: more proof and explanation than the email-list pages. Every
 * CTA scrolls to the one quote form, which redirects to the confirmation page
 * (/schedule-fall-landscape-cleanup) where the conversion fires.
 *
 * noindex like the other /offers/* pages: an expiring promo that shouldn't
 * compete with the services pages in organic search.
 */
export const metadata: Metadata = {
  title: { absolute: "Fall Landscape Cleanup | $100 Off | Varsity Mulching" },
  description:
    "Prune, cut back, replace and refresh your landscape beds before winter. Save $100 on a fall landscape cleanup in Bucks & Montgomery County.",
  robots: { index: false, follow: false },
  alternates: { canonical: OFFER.path },
  openGraph: {
    url: OFFER.path,
    title: "Save $100 On A Fall Landscape Cleanup",
    description:
      "Bring your landscape beds back to life this fall. Pruning, cutbacks, planting and bed cleanup in Bucks & Montgomery County.",
    images: [{ url: OFFER.heroImage, width: 764, height: 721, alt: "Refreshed front landscape bed" }],
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: OFFER_FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
}

const TRUST_ICONS = [ShieldCheck, Users, Trophy, MapPin] as const

const REVIEWS = REVIEW_NAMES.map((name) => testimonials.find((t) => t.name === name)).filter(
  (t): t is NonNullable<typeof t> => Boolean(t),
)

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-sm font-semibold tracking-widest uppercase ${
        light ? "text-vm-gold" : "text-vm-gold-dark"
      }`}
    >
      {children}
    </p>
  )
}

/** "300+ Five-Star Reviews • 5.0 Google Rating • …" as wrap-safe items. */
function TrustLine({ items, className = "" }: { items: readonly string[]; className?: string }) {
  return (
    <ul
      className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm font-semibold text-white/90 sm:gap-x-2 lg:justify-start ${className}`}
    >
      {items.map((item, i) => (
        <li key={item} className="flex items-center gap-2">
          {i > 0 && (
            <span className="hidden text-vm-gold sm:inline" aria-hidden="true">
              •
            </span>
          )}
          {item}
        </li>
      ))}
    </ul>
  )
}

function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow?: string
  title: React.ReactNode
  intro?: string
  light?: boolean
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2
        className={`font-varsity mt-2 text-3xl tracking-wide text-balance md:text-4xl ${
          light ? "text-white" : "text-vm-navy"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-3 text-base leading-relaxed md:text-lg ${
            light ? "text-white/80" : "text-muted-foreground"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  )
}

/**
 * A real customer post, never re-typed. It's a wide screenshot with small
 * text, so on phones it runs edge to edge and taps open the full-size image.
 */
function ReviewShot({ className = "" }: { className?: string }) {
  return (
    <a
      href={BILL_REVIEW.src}
      target="_blank"
      rel="noopener"
      className={`group -mx-4 block sm:mx-auto ${className}`}
    >
      <figure className="overflow-hidden border-y border-border bg-white shadow-xl sm:rounded-2xl sm:border">
        <Image
          src={BILL_REVIEW.src}
          alt={BILL_REVIEW.alt}
          width={BILL_REVIEW.width}
          height={BILL_REVIEW.height}
          sizes="(min-width: 640px) 640px, 100vw"
          className="h-auto w-full"
        />
      </figure>
      <div className="mt-2 flex items-center justify-center gap-1.5 text-xs font-semibold text-muted-foreground group-hover:text-vm-navy">
        <Stars className="scale-90" />
        {BILL_REVIEW.source}
        <span className="inline-flex items-center gap-1 sm:hidden">
          <span aria-hidden="true">•</span>
          <ZoomIn className="h-3.5 w-3.5" aria-hidden="true" /> Tap to enlarge
        </span>
      </div>
    </a>
  )
}

export default function FallLandscapeCleanupOfferPage() {
  return (
    <OfferTrackingProvider offer={CLEANUP_LANDING}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <OfferHeader />

      <main>
        {/* ───────────────────────── 1. HERO ─────────────────────────
            Full-bleed photo behind the copy on mobile, framed photo with the
            offer sticker on desktop. Transformation leads; the $100 is the
            second beat, not the headline. */}
        <section id={HERO_ID} className="relative isolate overflow-hidden bg-vm-navy">
          <div className="bg-noise pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-[5.25rem] pb-9 md:px-8 md:pt-32 md:pb-16 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:pb-20">
            <div className="absolute inset-0 -z-20 lg:relative lg:inset-auto lg:z-auto lg:order-2 lg:aspect-[764/690] lg:overflow-hidden lg:rounded-3xl lg:border lg:border-white/15 lg:shadow-2xl">
              <Image
                src={OFFER.heroImage}
                alt="Front landscape bed after a Varsity refresh, with new blue spruce plantings and fresh mulch"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-vm-navy/80 via-vm-navy/85 to-vm-navy/95 lg:hidden" />
              <div className="absolute right-5 bottom-5 hidden rotate-[-4deg] rounded-2xl border-2 border-vm-navy bg-vm-gold px-5 py-3 text-center shadow-xl lg:block">
                <p className="font-varsity text-3xl leading-none tracking-wide text-vm-navy">
                  {OFFER.discountLabel}
                </p>
                <p className="mt-1 text-xs font-bold tracking-wider text-vm-navy uppercase">
                  Schedule by {OFFER.deadlineLabel}
                </p>
              </div>
            </div>

            <div className="text-center lg:order-1 lg:text-left">
              <p
                className="vm-reveal inline-flex items-center rounded-full border border-vm-gold/40 bg-vm-gold/15 px-4 py-1.5 text-xs font-bold tracking-[0.15em] text-vm-gold uppercase md:text-sm"
                style={{ animationDelay: "0ms" }}
              >
                Fall Landscape Cleanup Offer
              </p>

              <h1
                className="vm-reveal font-varsity mt-4 text-[2.1rem] leading-[1.05] tracking-wide text-balance text-white sm:text-5xl lg:text-6xl"
                style={{ animationDelay: "40ms" }}
              >
                Bring Your Landscape Beds <span className="text-vm-gold">Back to Life</span> This Fall
              </h1>

              <p
                className="vm-reveal mx-auto mt-3 max-w-xl text-lg leading-snug font-semibold text-white md:mt-5 md:text-2xl lg:mx-0"
                style={{ animationDelay: "120ms" }}
              >
                Save <span className="text-vm-gold">$100</span> on a fall landscape cleanup in Bucks
                &amp; Montgomery County.
              </p>

              <div className="vm-reveal mt-4" style={{ animationDelay: "160ms" }}>
                <p className="inline-flex items-center gap-2 rounded-2xl border border-vm-gold/50 bg-vm-gold/10 px-4 py-1.5 text-left text-sm font-bold text-vm-gold">
                  <Check className="h-4 w-4 shrink-0" strokeWidth={3} aria-hidden="true" />
                  Beds, shrubs, perennials &amp; plantings. Not just leaves.
                </p>
              </div>

              <div
                className="vm-reveal mt-5 flex flex-col items-center gap-3 md:mt-7 lg:items-start"
                style={{ animationDelay: "220ms" }}
              >
                <OfferCta location="hero" />
                <p className="text-sm font-semibold text-white/80">
                  Schedule by <span className="text-vm-gold">{OFFER.deadlineLabel}</span> to claim the
                  offer.
                </p>
                <div className="flex flex-col items-center gap-1 lg:items-start">
                  <Stars />
                  <TrustLine items={OFFER.trustLine} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────── 2. TRANSFORMATION ───────────────────────── */}
        <section className="relative bg-background px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Real Varsity Project"
              title="A Few Targeted Changes Can Transform A Bed"
              intro="Drag the slider to see the difference. Tired, overgrown shrubs out. Fresh plantings in."
            />

            <div className="mx-auto mt-8 max-w-2xl">
              <BeforeAfterSlider
                beforeSrc={TRANSFORMATION.before}
                afterSrc={TRANSFORMATION.after}
                beforeAlt={TRANSFORMATION.beforeAlt}
                afterAlt={TRANSFORMATION.afterAlt}
                initialPosition={35}
                aspectClassName="aspect-[764/690]"
                objectPositionClassName="object-top"
              />
              <ul className="mt-4 flex flex-wrap justify-center gap-2">
                {TRANSFORMATION.highlights.map((h) => (
                  <li
                    key={h}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-semibold text-vm-navy shadow-sm"
                  >
                    <Check className="h-4 w-4 shrink-0 text-vm-gold-dark" strokeWidth={3} aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mx-auto mt-10 max-w-xl">
              <ReviewShot />
            </div>

            <div className="mt-9 flex justify-center">
              <OfferCta location="transformation" size="md" />
            </div>
          </div>
        </section>

        {/* ───────────────────────── 3. WHAT'S INCLUDED ───────────────────────── */}
        <section className="relative bg-muted/40 px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="What's Included?"
              title="Everything Your Beds Need Before Winter"
              intro="We recommend what makes sense for your landscape. You choose what to move forward with."
            />

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {SERVICE_CARDS.map(({ icon: Icon, title, outcome, points }) => (
                <li
                  key={title}
                  className="flex flex-col rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-vm-navy">
                    <Icon className="h-6 w-6 text-vm-gold" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-vm-navy">{title}</h3>
                  <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{outcome}</p>
                  <ul className="mt-4 space-y-2 border-t border-border pt-4">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm leading-snug text-vm-navy">
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-vm-gold-dark"
                          strokeWidth={3}
                          aria-hidden="true"
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex justify-center">
              <OfferCta location="included" size="md" />
            </div>
          </div>
        </section>

        {/* ───────────────────────── 4. MORE THAN LEAF CLEANUP ───────────────────────── */}
        <section className="relative overflow-hidden bg-vm-navy px-4 py-14 md:px-8 md:py-20">
          <div className="absolute top-0 right-0 left-0 h-1.5 bg-vm-gold" />
          <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-14">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
              <Image
                src="/images/service-bed-cleanup.jpg"
                alt="A Varsity crew member raking a freshly cleaned landscape bed with perennials along the edge"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="text-center lg:text-left">
              <Eyebrow light>Fall Landscape Cleanup</Eyebrow>
              <h2 className="font-varsity mt-2 text-3xl tracking-wide text-balance text-white md:text-5xl">
                More Than <span className="text-vm-gold">Leaf Cleanup.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
                This service focuses on your beds, shrubs, perennials and plantings, the parts of
                your landscape that decide how it looks next spring.
              </p>

              <ul className="mx-auto mt-5 grid max-w-md gap-2 text-left sm:grid-cols-2 lg:mx-0">
                {COVERED.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/[0.06] px-3.5 py-2.5 text-sm font-semibold text-white"
                  >
                    <Check className="h-4 w-4 shrink-0 text-vm-gold" strokeWidth={3} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-sm leading-relaxed text-white/65">
                Standard leaf removal is a separate service. Want it too? Tick &ldquo;Leaf
                cleanup&rdquo; on the quote form and we&apos;ll price it separately.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────── 5. WHY FALL ───────────────────────── */}
        <section className="relative bg-background px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              eyebrow="Why Fall?"
              title="Clean It Up Now. Enjoy A Cleaner Start Next Spring."
              intro="Fall is a great window to reset your beds, before winter sets in and before spring growth hides the problems."
            />

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-10">
              <ol className="grid gap-3">
                {WHY_FALL.map((item, i) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm md:p-5"
                  >
                    <span className="font-varsity flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-vm-gold text-lg text-vm-navy">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-vm-navy md:text-lg">{item.title}</h3>
                      <p className="mt-1 text-sm leading-snug text-muted-foreground md:text-base">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <aside className="rounded-2xl border border-vm-gold/40 bg-vm-navy p-6 text-center shadow-lg lg:sticky lg:top-6 lg:text-left">
                <p className="font-varsity text-2xl tracking-wide text-vm-gold">{PRUNING_NOTE.title}</p>
                <p className="mt-3 text-base leading-relaxed text-white/85">{PRUNING_NOTE.body}</p>
                <div className="mt-5 flex justify-center lg:justify-start">
                  <OfferCta location="why-fall" size="md" />
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ───────────────────────── 6. SOCIAL PROOF ───────────────────────── */}
        <section className="relative overflow-hidden bg-vm-navy-light px-4 py-14 md:px-8 md:py-20">
          <div className="absolute top-0 right-0 left-0 h-1.5 bg-vm-gold" />
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              light
              eyebrow="Why Varsity"
              title="Local Crews Your Neighbors Trust"
              intro="Local college athletes paired with experienced crew leads, on every job."
            />

            <div className="mt-8 grid items-center gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-10">
              <div className="relative aspect-[1832/798] overflow-hidden rounded-3xl border border-white/15 shadow-2xl">
                <Image
                  src={OFFER.teamImage}
                  alt="The Varsity Mulching team"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-vm-gold px-4 py-5 text-center text-vm-navy">
                    <p className="font-varsity text-5xl leading-none tracking-wide">300+</p>
                    <p className="mt-2 text-sm font-bold">Five-Star Reviews</p>
                  </div>
                  <div className="rounded-2xl bg-vm-gold px-4 py-5 text-center text-vm-navy">
                    <p className="font-varsity flex items-center justify-center gap-1 text-5xl leading-none tracking-wide">
                      5.0
                      <Star className="h-7 w-7 fill-vm-navy" aria-hidden="true" />
                    </p>
                    <p className="mt-2 text-sm font-bold">Google Rating</p>
                  </div>
                </div>

                <ul className="mt-3 grid grid-cols-2 gap-3">
                  {TRUST_POINTS.map((point, i) => {
                    const Icon = TRUST_ICONS[i]
                    return (
                      <li
                        key={point}
                        className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-3.5"
                      >
                        <Icon className="h-5 w-5 shrink-0 text-vm-gold" aria-hidden="true" />
                        <span className="text-sm leading-tight font-semibold text-white">{point}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>

            {REVIEWS.length > 0 && (
              <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3">
                {REVIEWS.map((review) => (
                  <figure
                    key={review.name}
                    className="flex flex-col rounded-2xl border border-white/10 bg-vm-navy/60 p-5"
                  >
                    <Stars />
                    <blockquote className="mt-3 grow text-base leading-relaxed text-white/85">
                      &ldquo;{review.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-4 border-t border-white/10 pt-4">
                      <p className="text-sm font-bold text-white">{review.name}</p>
                      <p className="text-xs text-white/55">Verified Google review</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ───────────────────────── 7. HOW IT WORKS ───────────────────────── */}
        <section className="relative bg-background px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto max-w-6xl">
            <SectionHeading eyebrow="How It Works" title="Simple From Quote To Cleanup" />

            <ol className="mt-8 grid gap-3 md:grid-cols-5 md:gap-4">
              {STEPS.map((step, i) => (
                <li
                  key={step.title}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm md:flex-col md:items-center md:p-5 md:text-center"
                >
                  <span className="font-varsity flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-vm-navy text-lg text-vm-gold">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-base leading-tight font-bold text-vm-navy">{step.title}</h3>
                    <p className="mt-1 text-sm leading-snug text-muted-foreground">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-9 flex justify-center">
              <OfferCta location="how-it-works" size="md" />
            </div>
          </div>
        </section>

        {/* ───────────────────────── 8. QUOTE FORM ─────────────────────────
            The form's submit button is the conversion CTA; on success it
            redirects to /schedule-fall-landscape-cleanup. */}
        <section className="relative overflow-hidden bg-vm-navy px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <h2 className="font-varsity text-3xl leading-tight tracking-wide text-balance text-white md:text-5xl">
                Save <span className="text-vm-gold">$100</span> On Your Fall Landscape Cleanup
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
                Tell us what your beds need. We&apos;ll follow up with a free quote and a clear
                recommendation.
              </p>
              <p className="mt-4 text-base font-bold text-vm-gold">
                Schedule by {OFFER.deadlineLabel} to claim the offer.
              </p>
              <div className="mt-4 flex flex-col items-center gap-1 lg:items-start">
                <Stars />
                <TrustLine items={OFFER.trustLine.slice(0, 2)} />
              </div>
              <a
                href={OFFER_PHONE_HREF}
                className="mt-5 hidden items-center gap-2 text-base font-semibold text-white/70 transition-colors hover:text-white lg:inline-flex"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                Or call {OFFER_PHONE_LABEL}
              </a>
            </div>

            <OfferLeadForm
              serviceOptions={FORM_SERVICE_OPTIONS}
              serviceAliases={FORM_SERVICE_ALIASES}
              servicesLegend="What do you need help with?"
              servicesHint="Pick any that apply. Not sure? Choose that and we'll recommend."
              showNotes
              notesLabel="Short description (optional)"
              notesPlaceholder="e.g. overgrown shrubs by the front walk, a few dead plants to replace"
              footnote="Free quote, no obligation. We confirm pricing before anything is scheduled."
              header={
                <>
                  <p className="font-varsity text-4xl leading-none tracking-wide text-vm-gold md:text-5xl">
                    {OFFER.discountLabel}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    Fall landscape cleanup scheduled by {OFFER.deadlineLabel}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-white/70">
                    Beds, shrubs, perennials &amp; plantings
                  </p>
                </>
              }
            />

            <p className="text-center text-xs leading-relaxed text-white/55 lg:col-span-2">
              {OFFER.disclaimer}
            </p>
          </div>
        </section>

        {/* ───────────────────────── 9. FAQ ───────────────────────── */}
        <section className="relative bg-background px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto max-w-3xl">
            <h2 className="font-varsity text-center text-3xl tracking-wide text-vm-navy md:text-4xl">
              Questions
            </h2>
            <div className="mt-8">
              <OfferFAQ items={OFFER_FAQS} />
            </div>
            <p className="mt-8 text-center">
              <a
                href={OFFER_PHONE_HREF}
                className="inline-flex items-center gap-2 text-base font-semibold text-vm-navy/70 transition-colors hover:text-vm-navy"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                Rather talk it through? Call {OFFER_PHONE_LABEL}
              </a>
            </p>
          </div>
        </section>

        {/* ───────────────────────── 10. FINAL CTA ───────────────────────── */}
        <section className="relative overflow-hidden bg-vm-navy px-4 py-14 md:px-8 md:py-20">
          <div className="absolute top-0 right-0 left-0 h-1.5 bg-vm-gold" />
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-varsity text-3xl leading-tight tracking-wide text-balance text-white md:text-5xl">
              Clean It Up Now. <span className="text-vm-gold">Enjoy A Cleaner Start</span> Next Spring.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Save $100 on a fall landscape cleanup scheduled by {OFFER.deadlineLabel}.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3">
              <OfferCta location="final" />
              <Stars />
              <TrustLine items={OFFER.trustLine} className="lg:justify-center" />
            </div>
          </div>
        </section>
      </main>

      <OfferFooter serviceArea="Serving Bucks & Montgomery County, PA" />

      <OfferStickyCta heroId={HERO_ID} />
    </OfferTrackingProvider>
  )
}
