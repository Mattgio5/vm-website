import type { Metadata } from "next"
import Image from "next/image"
import { Check, MapPin, Phone, Recycle } from "lucide-react"
import {
  OFFER,
  LEAF_LANDING,
  BENEFITS,
  INCLUDED,
  HOW_IT_WORKS,
  OFFER_FAQS,
  OFFER_REVIEW_NAMES,
} from "@/lib/leaf-cleanup-offer"
import { OfferTrackingProvider } from "@/components/offers/offer-tracking-provider"
import { OfferCta } from "@/components/offers/offer-cta"
import { OfferLeadForm } from "@/components/offers/offer-lead-form"
import { OfferStickyCta } from "@/components/offers/offer-sticky-cta"
import { OfferFAQ } from "@/components/offers/offer-faq"
import { OfferProofSection } from "@/components/offers/offer-proof"
import {
  OfferFooter,
  OfferHeader,
  OFFER_PHONE_HREF,
  OFFER_PHONE_LABEL,
  Stripes,
} from "@/components/offers/offer-chrome"

const HERO_ID = "offer-hero"

/**
 * Paid-traffic landing page. Like /offers/fall-aeration-259 it is noindex: it's
 * a promo that expires and overlaps /services/fall-cleanup, so it shouldn't
 * compete with that page in organic search or land in the sitemap. The title
 * and description still drive link previews when an ad or post is shared.
 */
export const metadata: Metadata = {
  title: { absolute: "Leaf Cleanup & Removal | $100 Off | Varsity Mulching" },
  description:
    "Professional leaf cleanup and removal in Bucks & Montgomery County. We clear, collect, and haul away your leaves. Save $100 when you schedule by October 15.",
  robots: { index: false, follow: false },
  alternates: { canonical: OFFER.path },
  openGraph: {
    url: OFFER.path,
    title: "Leaf Cleanup & Removal | $100 Off",
    description: "We clear, collect, and haul away your leaves. Save $100 when you schedule by October 15.",
    images: [{ url: OFFER.heroImage, width: 1600, height: 900, alt: OFFER.headline }],
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

export default function LeafCleanupOfferPage() {
  return (
    <OfferTrackingProvider offer={LEAF_LANDING}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <OfferHeader />

      <main>
        {/* ───────────────────────── 1. HERO (offer + CTA above the fold) ─────────────────────────
            One <Image>, two layouts: on mobile it's the full-bleed background
            under a navy gradient; from lg up it becomes the framed photo in the
            right column. Avoids loading the hero image twice. */}
        <section id={HERO_ID} className="relative isolate overflow-hidden bg-vm-navy">
          <div className="bg-noise pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-[5.5rem] pb-10 md:px-8 md:pt-32 md:pb-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-20">
            <div className="absolute inset-0 -z-20 lg:relative lg:inset-auto lg:z-auto lg:order-2 lg:aspect-[4/3] lg:overflow-hidden lg:rounded-3xl lg:border lg:border-white/15 lg:shadow-2xl">
              <Image
                src={OFFER.heroImage}
                alt="Varsity Mulching crew member clearing fall leaves with a backpack blower"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[60%_center]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-vm-navy/70 via-vm-navy/80 to-vm-navy/95 lg:hidden" />
              {/* Offer "sticker" on the desktop photo, echoing the ad creative. */}
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
              <h1
                className="vm-reveal font-varsity text-[1.85rem] leading-[1.08] tracking-wide text-balance text-white sm:text-4xl lg:text-5xl"
                style={{ animationDelay: "40ms" }}
              >
                {OFFER.headline}
              </h1>

              {/* The offer, set as a scoreboard figure so it reads at a glance. */}
              <p
                className="vm-reveal mt-4 md:mt-5"
                style={{ animationDelay: "120ms" }}
              >
                <span className="font-varsity block text-[3.5rem] leading-[0.95] tracking-wide text-vm-gold md:text-7xl">
                  {OFFER.discountLabel}
                </span>
                <span className="mt-1.5 block text-lg font-bold text-white md:text-2xl">
                  Leaf Cleanups Scheduled by{" "}
                  <span className="whitespace-nowrap text-vm-gold">{OFFER.deadlineLabel}</span>
                </span>
              </p>

              <p
                className="vm-reveal mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85 md:mt-5 md:text-lg lg:mx-0"
                style={{ animationDelay: "200ms" }}
              >
                Skip the raking, bagging, and hauling. Our team will clear your lawn and landscape
                beds, remove the leaves from your property, and leave everything cleaned up for
                fall.
              </p>

              <div
                className="vm-reveal mt-6 flex flex-col items-center gap-3 md:mt-7 lg:items-start"
                style={{ animationDelay: "260ms" }}
              >
                <OfferCta location="hero" />
                <p className="flex items-center gap-1.5 text-sm font-semibold text-white/85 md:text-base">
                  <MapPin className="h-4 w-4 shrink-0 text-vm-gold" aria-hidden="true" />
                  {OFFER.serviceArea}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────── 2. SOCIAL PROOF ───────────────────────── */}
        <OfferProofSection reviewNames={OFFER_REVIEW_NAMES} />

        {/* ───────────────────────── 3. CONVENIENCE ───────────────────────── */}
        <section className="bg-halftone relative bg-background px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            <div className="text-center lg:text-left">
              <Eyebrow>Your Weekends Back</Eyebrow>
              <h2 className="font-varsity mt-2 text-3xl tracking-wide text-balance text-vm-navy md:text-4xl">
                Clear the Lawn Without Lifting a Rake
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Fall cleanup can mean hours of raking, blowing, bagging, and hauling. Our crews
                handle the cleanup from start to finish so you can enjoy your fall without spending
                the weekend buried in leaves.
              </p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Clearing heavy leaf cover also keeps it from matting down on your lawn.
              </p>
              <div className="mt-7 hidden lg:block">
                <OfferCta location="convenience" size="md" />
              </div>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
              {BENEFITS.map(({ icon: Icon, title, body }) => (
                <li
                  key={title}
                  className="flex items-start gap-4 rounded-2xl border border-vm-blue/30 bg-vm-blue/[0.08] p-5 sm:flex-col sm:gap-0"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-vm-navy">
                    <Icon className="h-5 w-5 text-vm-gold" aria-hidden="true" />
                  </span>
                  <div className="sm:mt-4">
                    <h3 className="text-base font-bold text-vm-navy">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                      {body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex justify-center lg:hidden">
              <OfferCta location="convenience" />
            </div>
          </div>
        </section>

        {/* ───────────────────────── 4. WHAT'S INCLUDED + WHERE THE LEAVES GO ───────────────────────── */}
        <section className="relative bg-muted/40 px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <Eyebrow>The Service</Eyebrow>
              <h2 className="font-varsity mt-2 text-2xl tracking-wide text-balance text-vm-navy md:text-3xl">
                What&apos;s Included With Your Leaf Cleanup?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Depending on your property and your quote, our crews can:
              </p>
              <ul className="mt-5 space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vm-gold">
                      <Check className="h-4 w-4 text-vm-navy" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-base text-vm-navy/90">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Your quote spells out exactly what&apos;s covered before any work is scheduled.
              </p>
            </div>

            <aside className="flex flex-col justify-center rounded-2xl border border-vm-blue/40 bg-vm-blue/[0.12] p-6 md:p-8">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-vm-navy">
                <Recycle className="h-5 w-5 text-vm-gold" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-xl font-bold text-vm-navy md:text-2xl">
                Where Do the Leaves Go?
              </h2>
              <p className="mt-3 text-base leading-relaxed text-vm-navy/80">
                We don&apos;t leave bags of leaves sitting at the curb. Leaves collected from your
                property are hauled away and taken to a composting site, where the organic material
                can be repurposed into products such as mulch and compost.
              </p>
            </aside>
          </div>
        </section>

        {/* ───────────────────────── 5. HOW IT WORKS ───────────────────────── */}
        <section className="bg-halftone relative bg-background px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <Eyebrow>How It Works</Eyebrow>
              <h2 className="font-varsity mt-2 text-3xl tracking-wide text-vm-navy md:text-4xl">
                Three Simple Steps
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

            <div className="mt-9 flex justify-center">
              <OfferCta location="how-it-works" />
            </div>
          </div>
        </section>

        {/* ───────────────────────── 6. OFFER + LEAD FORM ───────────────────────── */}
        <section className="relative bg-muted/40 px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <Eyebrow>Fall Offer</Eyebrow>
              <h2 className="font-varsity mt-2 text-3xl leading-tight tracking-wide text-balance text-vm-navy md:text-4xl">
                Save{" "}
                <span className="rounded-md bg-vm-gold px-2 whitespace-nowrap">
                  ${OFFER.discount}
                </span>{" "}
                on Your Fall Leaf Cleanup
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Schedule your qualifying leaf cleanup by {OFFER.deadlineLabel} and receive $
                {OFFER.discount} off your service.
              </p>
              <ul className="mx-auto mt-5 inline-flex flex-col gap-2 text-left lg:mx-0">
                {["Free quote, no obligation", "No need to rake or bag first", "Leaves hauled away"].map(
                  (point) => (
                    <li key={point} className="flex items-center gap-2.5 text-base text-vm-navy/90">
                      <Check className="h-5 w-5 shrink-0 text-vm-gold-dark" strokeWidth={3} aria-hidden="true" />
                      {point}
                    </li>
                  ),
                )}
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-muted-foreground/80">
                {OFFER.disclaimer}
              </p>
            </div>

            <OfferLeadForm
              showNotes
              notesLabel="Tell us about your cleanup (optional)"
              notesPlaceholder="e.g. front and back yard, heavy leaves in the beds, gate code"
              footnote="Free quote, no obligation. We confirm pricing before anything is scheduled."
              header={
                <>
                  <p className="font-varsity text-lg tracking-wide text-white md:text-xl">
                    Fall Leaf Cleanup
                  </p>
                  <p className="font-varsity mt-1 text-4xl leading-none tracking-wide text-vm-gold md:text-5xl">
                    {OFFER.discountLabel}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white/85">
                    Leaf cleanups scheduled by {OFFER.deadlineLabel}
                  </p>
                </>
              }
            />
          </div>
        </section>

        {/* ───────────────────────── 7. FAQ ───────────────────────── */}
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

        {/* ───────────────────────── 8. FINAL CTA ───────────────────────── */}
        <section className="relative overflow-hidden bg-vm-navy px-4 py-16 text-center md:px-8 md:py-24">
          <Stripes />
          <div className="mx-auto max-w-2xl">
            <h2 className="font-varsity text-3xl leading-tight tracking-wide text-balance text-white md:text-5xl">
              Spend Your Fall Enjoying Your Yard, Not Raking It
            </h2>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              Let Varsity handle the blowing, cleanup, hauling, and removal.
            </p>
            <div className="mt-8 flex justify-center">
              <OfferCta location="final" />
            </div>
            <p className="mt-5 text-base font-semibold text-vm-gold md:text-lg">
              {OFFER.qualifyingOfferLine}
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
