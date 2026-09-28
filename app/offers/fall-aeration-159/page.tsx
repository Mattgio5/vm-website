import type { Metadata } from "next"
import Image from "next/image"
import { Check, Phone } from "lucide-react"
import { SITE_URL, BUSINESS } from "@/lib/site"
import { testimonials } from "@/lib/testimonials"
import {
  OFFER,
  AERATION_ONLY_LANDING,
  HERO_TRUST,
  BENEFITS,
  TRUST_CALLOUTS,
  REVIEW_NAMES,
  OFFER_FAQS,
} from "@/lib/aeration-only-offer"
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
 * Paid-traffic landing page for the $159 aeration-only offer — noindex like
 * the other /offers/* pages. Message: the overseeding window may be closing,
 * but the aeration window is still open. Every CTA scrolls to the one lead
 * form, which redirects to /schedule-aeration?offer=aeration-159 where the
 * conversion fires.
 */
export const metadata: Metadata = {
  title: `Fall Core Aeration for ${OFFER.priceLabel}`,
  description: `It's not too late to aerate. Professional core aeration for ${OFFER.priceLabel} on lawns under ${OFFER.sqFtLabel} Locally owned, 300+ five-star Google reviews, serving Bucks & Montgomery County, PA.`,
  robots: { index: false, follow: false },
  alternates: { canonical: OFFER.path },
  openGraph: {
    url: OFFER.path,
    title: `It's Not Too Late to Aerate Your Lawn: ${OFFER.priceLabel} Core Aeration`,
    description: `Professional core aeration for lawns under ${OFFER.sqFtLabel} Bucks & Montgomery County, PA.`,
  },
}

const offerJsonLd = {
  "@context": "https://schema.org",
  "@type": "Offer",
  name: `Fall Core Aeration — ${OFFER.priceLabel}`,
  description: `Core aeration for lawns under ${OFFER.sqFtLabel}`,
  price: String(OFFER.price),
  priceCurrency: "USD",
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

const REVIEWS = REVIEW_NAMES.map((name) => testimonials.find((t) => t.name === name)).filter(
  (t): t is NonNullable<typeof t> => Boolean(t),
)

export default function FallAerationOnlyOfferPage() {
  return (
    <OfferTrackingProvider offer={AERATION_ONLY_LANDING}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <OfferHeader />

      <main>
        {/* ───────────────────────── 1. HERO (above the fold) ─────────────────────────
            $159 and the Google rating both have to be visible without scrolling. */}
        <section id={HERO_ID} className="relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/images/offers/aeration-hero.webp"
              alt="Healthy lawn ready for fall core aeration"
              fill
              priority
              sizes="100vw"
              quality={50}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-vm-navy/85 via-vm-navy/75 to-vm-navy/90" />
          </div>
          <div className="bg-noise pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

          <div className="mx-auto max-w-3xl px-4 pt-20 pb-10 text-center md:px-8 md:pt-32 md:pb-14">
            <p
              className="vm-reveal inline-flex items-center rounded-full border border-vm-gold/40 bg-vm-gold/15 px-4 py-1.5 text-xs font-bold tracking-[0.15em] text-vm-gold uppercase md:text-sm"
              style={{ animationDelay: "40ms" }}
            >
              The Aeration Window Is Still Open
            </p>

            <h1
              className="vm-reveal font-varsity mt-5 text-[2.25rem] leading-[1.05] tracking-wide text-balance text-white md:text-5xl lg:text-6xl"
              style={{ animationDelay: "120ms" }}
            >
              It&apos;s Not Too Late to <span className="text-vm-gold">Aerate Your Lawn.</span>
            </h1>

            <p
              className="vm-reveal mx-auto mt-4 max-w-2xl text-lg leading-snug font-semibold text-white/90 md:text-xl"
              style={{ animationDelay: "180ms" }}
            >
              Bucks &amp; Montgomery County homeowners: Give your lawn room to breathe this fall with
              professional core aeration for just {OFFER.priceLabel}.
            </p>

            {/* Offer as a scoreboard figure — the price is the message. */}
            <div
              className="vm-reveal mx-auto mt-6 max-w-xs rounded-2xl border border-vm-gold/40 bg-vm-navy/70 px-6 py-4 backdrop-blur-sm sm:max-w-sm"
              style={{ animationDelay: "240ms" }}
            >
              <p className="text-[11px] font-bold tracking-[0.18em] text-vm-gold uppercase md:text-xs">
                Fall Core Aeration
              </p>
              <p className="font-varsity mt-1 text-[4.5rem] leading-[0.9] tracking-wide text-vm-gold md:text-[6rem]">
                {OFFER.priceLabel}
              </p>
              <p className="mt-2 text-base font-semibold text-white">
                For lawns under {OFFER.sqFtLabel}
              </p>
            </div>

            <div
              className="vm-reveal mt-7 flex justify-center"
              style={{ animationDelay: "300ms" }}
            >
              <OfferCta location="hero" />
            </div>

            <div
              className="vm-reveal mt-5 flex flex-col items-center gap-1.5"
              style={{ animationDelay: "340ms" }}
            >
              <Stars />
              <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm font-semibold text-white/90 sm:gap-x-2">
                {HERO_TRUST.map((item, i) => (
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
              <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-white/70">
                Locally owned and operated. Trusted by local homeowners with 300+ five-star Google
                reviews and a 5.0/5.0 rating.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────── 2. EDUCATION ───────────────────────── */}
        <section className="bg-halftone relative bg-background px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
                Why Aerate Now
              </p>
              <h2 className="font-varsity mt-2 text-3xl tracking-wide text-balance text-vm-navy md:text-4xl">
                Your Soil Still Needs Aeration This October.
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                <p>
                  Although the ideal overseeding window is coming to an end, your soil can still
                  benefit from core aeration throughout October.
                </p>
                <p>
                  Over time, foot traffic, mowing equipment, and everyday use compact your soil,
                  making it harder for water, oxygen, and nutrients to reach your lawn&apos;s roots.
                </p>
                <p>
                  Core aeration removes small plugs of soil to relieve compaction and improve the
                  conditions your lawn needs to thrive.
                </p>
                <p>
                  As long as the ground isn&apos;t frozen or excessively wet, October can still be an
                  excellent time to aerate your lawn before winter.
                </p>
              </div>
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

          <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3">
            {BENEFITS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-vm-blue/30 bg-vm-blue/[0.08] p-6"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-vm-gold">
                  <Check className="h-5 w-5 text-vm-navy" strokeWidth={3} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-vm-navy">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex justify-center">
            <OfferCta location="education" />
          </div>
        </section>

        {/* ───────────────────────── 3. TRUST ───────────────────────── */}
        <section className="relative bg-vm-navy px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold tracking-widest text-vm-gold uppercase">
                Why Varsity
              </p>
              <h2 className="font-varsity mt-2 text-3xl tracking-wide text-balance text-white md:text-4xl">
                Your Local Lawn Care Experts.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
                Varsity Mulching is a locally owned and operated landscaping company proudly serving
                Bucks &amp; Montgomery County.
              </p>
              <p className="mt-3 text-base leading-relaxed text-white/80 md:text-lg">
                With experienced crew leads, hardworking local college student-athletes, and a
                commitment to exceptional service, we&apos;ve earned the trust of hundreds of
                homeowners throughout our community.
              </p>
            </div>

            <div className="mx-auto mt-9 grid max-w-3xl grid-cols-3 gap-3 md:gap-4">
              {TRUST_CALLOUTS.map((point) => (
                <div
                  key={point.label}
                  className="flex flex-col items-center justify-center rounded-2xl bg-vm-gold px-3 py-5 text-center text-vm-navy"
                >
                  {"stat" in point ? (
                    <p className="font-varsity text-3xl leading-none tracking-wide md:text-5xl">
                      {point.stat}
                    </p>
                  ) : (
                    <Check className="h-8 w-8 md:h-10 md:w-10" strokeWidth={3} aria-hidden="true" />
                  )}
                  <p className="mt-2 text-xs leading-snug font-bold md:text-sm">{point.label}</p>
                </div>
              ))}
            </div>

            {REVIEWS.length > 0 && (
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {REVIEWS.map((review) => (
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
            )}
          </div>
        </section>

        {/* ───────────────────────── 4. LEAD FORM ─────────────────────────
            Submit redirects to /schedule-aeration?offer=aeration-159. */}
        <section className="relative bg-muted/40 px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto max-w-xl">
            <div className="text-center">
              <h2 className="font-varsity text-3xl tracking-wide text-balance text-vm-navy md:text-4xl">
                Claim Your {OFFER.priceLabel} Aeration
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                Five fields. No deposit, no contract, no fine print.
              </p>
            </div>

            <div className="mt-8">
              <OfferLeadForm
                footnote="No deposit required. We confirm your lawn size before scheduling."
                header={
                  <>
                    <p className="font-varsity text-xl tracking-wide text-white md:text-2xl">
                      Fall Core Aeration
                    </p>
                    <p className="font-varsity mt-1 text-4xl leading-none tracking-wide text-vm-gold md:text-5xl">
                      {OFFER.priceLabel}
                    </p>
                    <p className="mt-2 text-sm text-white/80">For lawns under {OFFER.sqFtLabel}</p>
                  </>
                }
              />
            </div>

            <div className="mt-6 flex items-center justify-center gap-2">
              <Stars />
              <p className="text-sm font-medium text-vm-navy/70">
                5.0/5.0 · 300+ reviews · Locally owned
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────── 5. FAQ ───────────────────────── */}
        <section className="relative bg-background px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto max-w-3xl">
            <h2 className="font-varsity text-center text-3xl tracking-wide text-vm-navy md:text-4xl">
              Questions
            </h2>
            <div className="mt-8">
              <OfferFAQ items={OFFER_FAQS} />
            </div>
          </div>
        </section>

        {/* ───────────────────────── 6. FINAL CTA ───────────────────────── */}
        <section className="relative overflow-hidden bg-vm-navy px-4 py-16 text-center md:px-8 md:py-24">
          <Stripes />
          <div className="mx-auto max-w-2xl">
            <h2 className="font-varsity text-3xl leading-tight tracking-wide text-balance text-white md:text-5xl">
              Give Your Lawn Room to Breathe <span className="text-vm-gold">Before Winter.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              Fall aeration is still beneficial, and there&apos;s no need to wait until spring to
              address compacted soil.
            </p>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed font-semibold text-white md:text-lg">
              Schedule your professional core aeration with Varsity Mulching for just{" "}
              <span className="text-vm-gold">{OFFER.priceLabel}</span>.
            </p>
            <div className="mt-8 flex justify-center">
              <OfferCta location="final">{OFFER.finalCta}</OfferCta>
            </div>
            <p className="mt-4 text-sm text-white/65">
              For lawns under {OFFER.sqFtLabel} Larger lawns may require additional pricing.
            </p>
            <a
              href={OFFER_PHONE_HREF}
              className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-white/70 transition-colors hover:text-white"
            >
              <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
              Or call {OFFER_PHONE_LABEL}
            </a>
          </div>
        </section>
      </main>

      <OfferFooter serviceArea="Serving Bucks & Montgomery County, PA" />

      <OfferStickyCta heroId={HERO_ID} />
    </OfferTrackingProvider>
  )
}
