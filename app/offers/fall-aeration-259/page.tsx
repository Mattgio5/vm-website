import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Star, Check, Phone } from "lucide-react"
import { SITE_URL, BUSINESS } from "@/lib/site"
import { testimonials } from "@/lib/testimonials"
import {
  OFFER,
  TRUST_POINTS,
  INCLUDED,
  ADD_ON,
  FALL_BENEFITS,
  WHY_VARSITY,
  HOW_IT_WORKS,
  OFFER_FAQS,
  OFFER_REVIEW_NAMES,
} from "@/lib/aeration-offer"
import { OfferTrackingProvider } from "@/components/offers/offer-tracking-provider"
import { OfferCta } from "@/components/offers/offer-cta"
import { OfferLeadForm } from "@/components/offers/offer-lead-form"
import { OfferStickyCta } from "@/components/offers/offer-sticky-cta"
import { OfferFAQ } from "@/components/offers/offer-faq"

const HERO_ID = "offer-hero"

/**
 * Paid-traffic landing page — intentionally noindex. It duplicates the
 * /services/aeration-overseeding messaging for a promo that expires, so it
 * should never compete with that page in organic search or land in the
 * sitemap. Meta ad clicks reach it directly.
 */
export const metadata: Metadata = {
  title: `Fall Aeration + Overseeding for ${OFFER.priceLabel}`,
  // OFFER.sqFtLabel already ends in a period ("10,000 sq. ft."), so don't add
  // another one after it.
  description: `Core aeration and overseeding for ${OFFER.priceLabel} on lawns under ${OFFER.sqFtLabel} Sign up by ${OFFER.deadlineLabel}. 300+ reviews, 5.0/5.0 on Google, serving Bucks & Montgomery County, PA.`,
  robots: { index: false, follow: false },
  alternates: { canonical: OFFER.path },
  openGraph: {
    url: OFFER.path,
    title: `Fall Aeration + Overseeding for ${OFFER.priceLabel}`,
    description: `For lawns under ${OFFER.sqFtLabel} Sign up by ${OFFER.deadlineLabel} to lock in the offer.`,
  },
}

const offerJsonLd = {
  "@context": "https://schema.org",
  "@type": "Offer",
  name: `Fall Core Aeration + Overseeding — ${OFFER.priceLabel}`,
  description: `Core aeration and overseeding for lawns under ${OFFER.sqFtLabel}.`,
  price: String(OFFER.price),
  priceCurrency: "USD",
  priceValidUntil: OFFER.deadlineIso,
  availability: "https://schema.org/LimitedAvailability",
  url: `${SITE_URL}${OFFER.path}`,
  itemOffered: {
    "@type": "Service",
    serviceType: OFFER.service,
    name: OFFER.service,
  },
  seller: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BUSINESS.legalName,
    telephone: BUSINESS.telephone,
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

/** Promo reviews, in the order lib/aeration-offer.ts lists them. */
const offerReviews = OFFER_REVIEW_NAMES.map((name) =>
  testimonials.find((t) => t.name === name),
).filter((t): t is NonNullable<typeof t> => Boolean(t))

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-vm-gold text-vm-gold" aria-hidden="true" />
      ))}
    </div>
  )
}

/** Two-tone Varsity stripe that tops every section on the site. */
function Stripes() {
  return (
    <div className="absolute top-0 right-0 left-0 flex flex-col">
      <div className="h-2.5 w-full bg-vm-gold" />
      <div className="h-2.5 w-full bg-vm-navy" />
    </div>
  )
}

export default function FallAerationOfferPage() {
  return (
    <OfferTrackingProvider>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Landing-page header: logo + phone only. No nav — nothing competes
          with the single conversion path. */}
      <header className="absolute inset-x-0 top-0 z-30 px-4 py-4 md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" aria-label="Varsity Mulching home">
            <Image
              src="/images/vm-logo.png"
              alt="Varsity Mulching LLC"
              width={120}
              height={80}
              priority
              className="h-11 w-auto md:h-14"
            />
          </Link>
          <a
            href="tel:+12673899789"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span className="hidden sm:inline">(267) 389-9789</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      <main>
        {/* ───────────────────────── 1. OFFER (above the fold) ───────────────────────── */}
        <section id={HERO_ID} className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/offers/aeration-hero.webp"
              alt="Thick, healthy lawn after core aeration and overseeding"
              fill
              priority
              sizes="100vw"
              /* Sits under a 75–90% navy gradient, so aggressive compression is
                 invisible here and buys back LCP on mobile. */
              quality={50}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-vm-navy/85 via-vm-navy/75 to-vm-navy/90" />
          </div>
          {/* Sports-poster grain (globals.css). Pure CSS, no extra request. */}
          <div className="bg-noise pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

          <div className="mx-auto max-w-3xl px-4 pt-20 pb-10 text-center md:px-8 md:pt-32 md:pb-14">
            <p
              className="vm-reveal inline-flex items-center rounded-full border border-vm-gold/40 bg-vm-gold/15 px-4 py-1.5 text-xs font-bold tracking-[0.15em] text-vm-gold uppercase md:text-sm"
              style={{ animationDelay: "40ms" }}
            >
              Fall 2026 · Bucks &amp; Montgomery County
            </p>

            {/* The price is the whole message, so it's set as a scoreboard
                figure rather than inline body-weight text. */}
            <h1
              className="vm-reveal font-varsity mt-5 text-[2.25rem] leading-[1.05] tracking-wide text-balance text-white md:text-5xl lg:text-6xl"
              style={{ animationDelay: "120ms" }}
            >
              Fall Aeration + Overseeding for
              <span className="mt-1.5 block text-[4.5rem] leading-[0.9] text-vm-gold md:text-[6.5rem] lg:text-[7.5rem]">
                {OFFER.priceLabel}
              </span>
            </h1>

            <p
              className="vm-reveal mt-3 text-lg font-semibold text-white/90 md:text-2xl"
              style={{ animationDelay: "200ms" }}
            >
              For lawns under {OFFER.sqFtLabel}
            </p>

            {/* Deliberately short and `whitespace-nowrap`: the longer phrasing
                ("…to lock in the offer") measured 322px against the 246px
                available inside this box at a 320px viewport, so it wrapped to
                two lines on every iPhone up to 390px wide. With a "September 15"
                deadline this measures ~193px at 16px, fitting from 320px up with
                ~53px to spare. Re-measure if the deadline label gets longer —
                the nowrap guard turns an overrun into overflow, not a wrap. */}
            <p
              className="vm-reveal mx-auto mt-5 inline-block rounded-xl border border-white/20 bg-vm-navy/70 px-5 py-3 text-base font-semibold whitespace-nowrap text-white backdrop-blur-sm md:text-lg"
              style={{ animationDelay: "260ms" }}
            >
              Sign up by
              <span className="ml-1.5 text-vm-gold">{OFFER.deadlineLabel}</span>
            </p>

            <div
              className="vm-reveal mt-7 flex justify-center"
              style={{ animationDelay: "320ms" }}
            >
              <OfferCta location="hero" />
            </div>
          </div>
        </section>

        {/* ───────────────────────── 2. TRUST BAR ───────────────────────── */}
        <section className="relative bg-vm-navy-light px-4 py-8 md:px-8 md:py-10">
          <div className="absolute top-0 right-0 left-0 h-1.5 bg-vm-gold" />
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-x-4 gap-y-6 text-center md:grid-cols-5">
            {TRUST_POINTS.map((point) => (
              <div
                key={point.label}
                className="flex flex-col items-center last:col-span-2 md:last:col-span-1"
              >
                {"stat" in point ? (
                  <p className="font-varsity text-2xl leading-none tracking-wide text-vm-gold md:text-3xl">
                    {point.stat}
                  </p>
                ) : (
                  <Check
                    className="h-6 w-6 text-vm-gold md:h-7 md:w-7"
                    strokeWidth={3}
                    aria-hidden="true"
                  />
                )}
                <p className="mt-1.5 text-sm leading-snug font-medium text-white/80">
                  {point.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-6 flex max-w-5xl items-center justify-center gap-2 border-t border-white/10 pt-6">
            <Stars />
            <p className="text-sm font-medium text-white/75">
              Rated 5.0/5.0 across 300+ Google reviews
            </p>
          </div>
        </section>

        {/* ───────────────────────── 3. WHAT YOU GET ───────────────────────── */}
        <section className="bg-halftone relative bg-background px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
                What You Get
              </p>
              <h2 className="font-varsity mt-2 text-3xl tracking-wide text-balance text-vm-navy md:text-4xl">
                Everything Included for {OFFER.priceLabel}
              </h2>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-3">
              {INCLUDED.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-vm-blue/30 bg-vm-blue/[0.08] p-6"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-vm-gold">
                    <Check className="h-5 w-5 text-vm-navy" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-vm-navy">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Two secondary notes, deliberately styled below the three
                included cards so neither reads as a competing offer. */}
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              <p className="rounded-2xl border border-vm-navy/15 bg-muted/50 px-6 py-5 text-base leading-relaxed text-vm-navy">
                <span className="font-bold">Lawn bigger than {OFFER.sqFtLabel}?</span> Submit the
                form anyway — we&apos;ll send you custom pricing for your exact lawn size before
                you commit to anything.
              </p>
              <p className="rounded-2xl border border-vm-navy/15 bg-muted/50 px-6 py-5 text-base leading-relaxed text-vm-navy">
                <span className="font-bold">{ADD_ON.title}</span> {ADD_ON.body}
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <OfferCta location="what-you-get" />
            </div>
          </div>
        </section>

        {/* ───────────────────────── 4. WHY FALL ───────────────────────── */}
        <section className="relative bg-muted/40 px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
                Why Now
              </p>
              <h2 className="font-varsity mt-2 text-3xl tracking-wide text-balance text-vm-navy md:text-4xl">
                Fall Is the Best Time to Fix a Thin Lawn
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Summer heat, foot traffic, and packed-down soil leave most Bucks County lawns thin
                by August. Right now the worst heat is passing but the soil is still warm enough for
                new seed to take — and the new grass gets both fall and spring to establish before
                next summer.
              </p>
              <ul className="mt-6 space-y-3">
                {FALL_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vm-gold">
                      <Check className="h-4 w-4 text-vm-navy" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-base text-vm-navy/85">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <Image
                src="/images/offers/aeration-diagram.webp"
                alt="Compacted soil before aeration, soil cores after aeration, and thicker roots weeks later"
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 50vw, 100vw"
                loading="lazy"
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* ───────────────────────── 5. WHY VARSITY ───────────────────────── */}
        <section className="relative bg-background px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
                Why Varsity
              </p>
              <h2 className="font-varsity mt-2 text-3xl tracking-wide text-balance text-vm-navy md:text-4xl">
                Why Bucks &amp; Montgomery County Homeowners Choose Varsity
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                You get the simplicity and price of a flat {OFFER.priceLabel} aeration offer —
                without gambling on an unknown lawn company.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {WHY_VARSITY.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-vm-blue/40"
                >
                  <h3 className="text-base font-bold text-vm-navy">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex justify-center">
              <OfferCta location="why-varsity" />
            </div>
          </div>
        </section>

        {/* ───────────────────────── 6. REVIEWS ───────────────────────── */}
        <section className="relative bg-vm-navy px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-semibold tracking-widest text-vm-gold uppercase">
                Reviews
              </p>
              <h2 className="font-varsity mt-2 text-3xl tracking-wide text-white md:text-4xl">
                300+ Reviews. 5.0 Stars.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {offerReviews.map((review) => (
                <figure
                  key={review.name}
                  className="flex flex-col rounded-2xl border border-white/12 bg-white/[0.06] p-6"
                >
                  <Stars />
                  <blockquote className="mt-3 grow text-base leading-relaxed text-white/85">
                    &ldquo;{review.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
                    {review.image && (
                      <Image
                        src={review.image}
                        alt=""
                        width={40}
                        height={40}
                        sizes="40px"
                        loading="lazy"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="text-sm font-bold text-white">{review.name}</p>
                      <p className="text-xs text-white/55">Verified Google review</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────── 7. HOW IT WORKS ───────────────────────── */}
        <section className="bg-halftone relative bg-background px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
                How It Works
              </p>
              <h2 className="font-varsity mt-2 text-3xl tracking-wide text-vm-navy md:text-4xl">
                Three Steps, About a Minute
              </h2>
            </div>

            <ol className="mt-9 grid gap-4 md:grid-cols-3">
              {HOW_IT_WORKS.map((item) => (
                <li key={item.step} className="rounded-2xl border border-border bg-card p-6">
                  <span className="font-varsity text-4xl leading-none tracking-wide text-vm-blue">
                    {item.step}
                  </span>
                  <h3 className="mt-3 text-lg font-bold text-vm-navy">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────────────────────── 8. LEAD FORM ───────────────────────── */}
        <section className="relative bg-muted/40 px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto max-w-xl">
            <div className="text-center">
              <h2 className="font-varsity text-3xl tracking-wide text-balance text-vm-navy md:text-4xl">
                Claim Your {OFFER.priceLabel} Offer
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                Five fields. No deposit, no contract, no fine print.
              </p>
            </div>

            <div className="mt-8">
              <OfferLeadForm />
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              <Stars />
              <p className="text-sm font-medium text-vm-navy/70">
                5.0/5.0 · 300+ reviews · Licensed &amp; insured
              </p>
            </div>
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
              <OfferFAQ />
            </div>
          </div>
        </section>

        {/* ───────────────────────── 10. FINAL CTA ───────────────────────── */}
        <section className="relative overflow-hidden bg-vm-navy px-4 py-16 text-center md:px-8 md:py-24">
          <Stripes />
          <div className="mx-auto max-w-2xl">
            <p className="font-varsity text-2xl tracking-wide text-white md:text-3xl">
              Fall Aeration + Overseeding
            </p>
            <p className="font-varsity mt-2 text-[4.5rem] leading-none tracking-wide text-vm-gold md:text-[7rem]">
              {OFFER.priceLabel}
            </p>
            <p className="mt-3 text-lg font-semibold text-white/90 md:text-xl">
              For lawns under {OFFER.sqFtLabel}
            </p>
            <p className="mt-2 text-base font-semibold text-vm-gold md:text-lg">
              Sign up by {OFFER.deadlineLabel}.
            </p>
            <div className="mt-8 flex justify-center">
              <OfferCta location="final" />
            </div>
            <a
              href="tel:+12673899789"
              className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-white/70 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              Or call (267) 389-9789
            </a>
          </div>
        </section>
      </main>

      {/* Slim landing-page footer — legal essentials only, no nav sprawl. */}
      <footer className="bg-vm-navy-light px-4 py-8 text-center md:px-8">
        <p className="text-sm text-white/60">
          {BUSINESS.legalName} · Doylestown, PA · Fully licensed &amp; insured
        </p>
        <p className="mt-2 text-sm text-white/45">
          Serving Bucks, Montgomery &amp; Chester County, PA ·{" "}
          <Link href="/privacy-policy" className="underline hover:text-white/70">
            Privacy Policy
          </Link>
        </p>
      </footer>

      {/* Bottom gutter so the sticky mobile bar never covers the footer. */}
      <div className="h-20 bg-vm-navy-light md:hidden" aria-hidden="true" />

      <OfferStickyCta heroId={HERO_ID} />
    </OfferTrackingProvider>
  )
}
