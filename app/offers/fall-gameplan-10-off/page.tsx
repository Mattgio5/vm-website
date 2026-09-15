import type { Metadata } from "next"
import Image from "next/image"
import { Check, MapPin, Phone } from "lucide-react"
import {
  OFFER,
  GAMEPLAN_LANDING,
  FORM_SERVICE_OPTIONS,
  FORM_SERVICE_ALIASES,
  OFFER_FAQS,
} from "@/lib/fall-gameplan-offer"
import { OfferTrackingProvider } from "@/components/offers/offer-tracking-provider"
import { OfferLeadForm } from "@/components/offers/offer-lead-form"
import { OfferStickyCta } from "@/components/offers/offer-sticky-cta"
import { OfferFAQ } from "@/components/offers/offer-faq"
import { OfferProofSection } from "@/components/offers/offer-proof"
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
 * Email/SMS campaign landing page. Visitors already know Varsity and arrive
 * ready to act, so the form lives in the hero and the page stops soon after.
 * noindex: a dated promo for an existing audience, not an organic-search page.
 */
export const metadata: Metadata = {
  title: { absolute: "Fall Gameplan | Save 10% on Fall Services | Varsity Mulching" },
  description:
    "Need one fall service or several? Save 10% on qualifying fall services scheduled by October 1 in Bucks & Montgomery County.",
  robots: { index: false, follow: false },
  alternates: { canonical: OFFER.path },
  openGraph: {
    url: OFFER.path,
    title: "Build Your Fall Gameplan & Save 10%",
    description: "One service or several: save 10% on qualifying fall work scheduled by October 1.",
    images: [{ url: OFFER.heroImage, width: 1600, height: 900, alt: "Varsity Mulching fall service" }],
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

export default function FallGameplanOfferPage() {
  return (
    <OfferTrackingProvider offer={GAMEPLAN_LANDING}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <OfferHeader />

      <main>
        {/* ───────────────────────── 1. HERO: offer + form ───────────────────────── */}
        <section id={HERO_ID} className="relative isolate overflow-hidden bg-vm-navy">
          <div className="absolute inset-0 -z-20">
            <Image
              src={OFFER.heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              quality={50}
              className="object-cover object-[60%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-vm-navy/80 via-vm-navy/90 to-vm-navy lg:bg-gradient-to-r lg:from-vm-navy lg:via-vm-navy/90 lg:to-vm-navy/70" />
          </div>
          <div className="bg-noise pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

          <div className="mx-auto grid max-w-6xl gap-8 px-4 pt-[5.5rem] pb-12 md:px-8 md:pt-32 md:pb-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-12 lg:pb-20">
            <div className="text-center lg:text-left">
              <p className="inline-flex items-center rounded-full border border-vm-gold/40 bg-vm-gold/15 px-4 py-1.5 text-xs font-bold tracking-[0.15em] text-vm-gold uppercase md:text-sm">
                Schedule by {OFFER.deadlineLabel}
              </p>

              <h1 className="font-varsity mt-4 text-[2rem] leading-[1.05] tracking-wide text-balance text-white sm:text-5xl lg:text-6xl">
                Build Your Fall Gameplan{" "}
                <span className="block text-vm-gold">&amp; Save {OFFER.discountLabel}</span>
              </h1>

              {/* The whole offer in two rows — no bundle required. */}
              <dl className="mx-auto mt-6 grid max-w-md gap-2.5 text-left lg:mx-0">
                <div className="flex items-center justify-between gap-4 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3">
                  <dt className="text-base font-semibold text-white">Need just one service?</dt>
                  <dd className="shrink-0 text-base font-bold text-vm-gold">Save {OFFER.discountLabel}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3">
                  <dt className="text-base font-semibold text-white">Planning a few?</dt>
                  <dd className="shrink-0 text-right text-base font-bold text-vm-gold">
                    {OFFER.discountLabel} off everything
                  </dd>
                </div>
              </dl>

              <ul className="mx-auto mt-5 hidden max-w-md space-y-2 text-left text-base text-white/80 sm:block lg:mx-0">
                {[
                  `Qualifying work scheduled by ${OFFER.deadlineLabel}`,
                  "Services don't have to happen the same day",
                  "Free quote. You decide what to book after you see pricing",
                ].map((point) => (
                  <li key={point} className="flex items-center gap-2.5">
                    <Check className="h-5 w-5 shrink-0 text-vm-gold" strokeWidth={3} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-col items-center gap-1.5 text-sm text-white/75 lg:items-start">
                <span className="flex items-center gap-2">
                  <Stars /> 300+ five-star reviews
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 shrink-0 text-vm-gold" aria-hidden="true" />
                  {OFFER.serviceArea}
                </span>
              </div>
            </div>

            <div>
              <OfferLeadForm
                serviceOptions={FORM_SERVICE_OPTIONS}
                serviceAliases={FORM_SERVICE_ALIASES}
                servicesLegend="What might you want help with this fall?"
                servicesHint="Check anything you're considering. It just helps us prepare your quote. You're not committing to anything."
                showNotes
                notesLabel="Notes (optional)"
                notesPlaceholder="e.g. shrubs along the front walk, heavy leaves out back"
                footnote="Next, we'll reach out to set up your free quote. You choose what to schedule after you see pricing."
              />
              <p className="mt-4 text-center text-xs leading-relaxed text-white/50">{OFFER.disclaimer}</p>
            </div>
          </div>
        </section>

        {/* ───────────────────────── 2. TRUST BADGES ───────────────────────── */}
        <OfferProofSection />

        {/* ───────────────────────── 3. FAQ ───────────────────────── */}
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
      </main>

      <OfferFooter serviceArea="Serving Bucks & Montgomery County, PA" />

      <OfferStickyCta heroId={HERO_ID} />
    </OfferTrackingProvider>
  )
}
