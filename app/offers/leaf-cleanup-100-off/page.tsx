import type { Metadata } from "next"
import Image from "next/image"
import { CalendarClock, Check, MapPin, Phone, Star } from "lucide-react"
import {
  OFFER,
  LEAF_LANDING,
  HERO_TRUST,
  PROCESS,
  SERVICE_OPTIONS,
  FORM_SERVICE_OPTIONS,
  SCHEDULING_STEPS,
  OFFER_BENEFITS,
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
  Stars,
  Stripes,
} from "@/components/offers/offer-chrome"

const HERO_ID = "offer-hero"

/**
 * Paid-traffic landing page. Like /offers/fall-aeration-259 it is noindex: it's
 * a seasonal promo that overlaps /services/fall-cleanup, so it shouldn't
 * compete with that page in organic search or land in the sitemap. The title
 * and description still drive link previews when an ad or post is shared.
 */
export const metadata: Metadata = {
  title: { absolute: "Leaf Cleanup & Removal | $100 Off This Fall | Varsity Mulching" },
  description:
    "Take back your fall weekends. We clear, collect, and haul away your leaves in Bucks & Montgomery County. Get $100 off leaf cleanup. Free quotes, even before your leaves fall.",
  robots: { index: false, follow: false },
  alternates: { canonical: OFFER.path },
  openGraph: {
    url: OFFER.path,
    title: "Leaf Cleanup & Removal | $100 Off",
    description:
      "We clear. We collect. We haul away. Get $100 off your fall leaf cleanup. Free quote, no obligation.",
    images: [{ url: OFFER.heroImage, width: 1600, height: 900, alt: OFFER.offerHeadline }],
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
                  Leaf Cleanup
                </p>
              </div>
            </div>

            <div className="text-center lg:order-1 lg:text-left">
              <p
                className="vm-reveal text-xs font-semibold tracking-widest text-vm-gold uppercase md:text-sm"
                style={{ animationDelay: "0ms" }}
              >
                {OFFER.eyebrow}
              </p>
              <h1
                className="vm-reveal font-varsity mt-2 text-[2rem] leading-[1.05] tracking-wide text-balance text-white sm:text-4xl lg:text-5xl"
                style={{ animationDelay: "40ms" }}
              >
                {OFFER.headline}
              </h1>

              {/* The offer, set as a scoreboard figure so it reads at a glance. */}
              <p className="vm-reveal mt-3 md:mt-5" style={{ animationDelay: "120ms" }}>
                <span className="font-varsity block text-[3.5rem] leading-[0.95] tracking-wide text-vm-gold md:text-7xl">
                  {OFFER.discountLabel}
                </span>
                <span className="mt-1.5 block text-lg font-bold text-white md:text-2xl">
                  Leaf Cleanup &amp; Removal
                </span>
              </p>

              <div
                className="vm-reveal mt-6 flex flex-col items-center gap-4 md:mt-7 lg:items-start"
                style={{ animationDelay: "260ms" }}
              >
                <OfferCta location="hero" />

                {/* The #1 objection from prospects: "my leaves are still on the trees." */}
                <p className="flex max-w-xl items-start gap-2.5 rounded-xl border border-vm-gold/40 bg-vm-navy/70 px-4 py-3 text-left text-sm leading-relaxed text-white/90 backdrop-blur-sm md:text-base">
                  <CalendarClock className="mt-0.5 h-5 w-5 shrink-0 text-vm-gold" aria-hidden="true" />
                  <span>
                    <strong className="text-white">Leaves haven&apos;t fallen yet? No problem!</strong>{" "}
                    Get your free quote now and we&apos;ll coordinate your cleanup around the fall
                    leaf drop.
                  </span>
                </p>

                <ul className="grid w-full max-w-xl grid-cols-2 gap-x-4 gap-y-2 text-left text-sm font-semibold text-white/90 md:text-base">
                  {HERO_TRUST.map((item, i) => (
                    <li key={item} className="flex items-center gap-2">
                      {i < 2 ? (
                        <Star className="h-4 w-4 shrink-0 fill-vm-gold text-vm-gold" aria-hidden="true" />
                      ) : (
                        <Check className="h-4 w-4 shrink-0 text-vm-gold" strokeWidth={3} aria-hidden="true" />
                      )}
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="flex items-center gap-1.5 text-sm text-white/70">
                  <MapPin className="h-4 w-4 shrink-0 text-vm-gold" aria-hidden="true" />
                  {OFFER.serviceArea}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────── 2. SOCIAL PROOF ───────────────────────── */}
        <OfferProofSection reviewNames={OFFER_REVIEW_NAMES} />

        {/* ───────────────────────── 3. WE CLEAR. WE COLLECT. WE HAUL AWAY. ───────────────────────── */}
        <section className="bg-halftone relative bg-background px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <Eyebrow>Your Weekends Back</Eyebrow>
              <h2 className="font-varsity mt-2 text-3xl tracking-wide text-balance text-vm-navy md:text-4xl">
                We Clear. We Collect. We Haul Away.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                No raking, no bagging, no trips to the curb. Our crews handle the cleanup from
                start to finish.
              </p>
            </div>

            <ol className="mt-9 grid gap-4 md:grid-cols-3">
              {PROCESS.map(({ step, icon: Icon, title, body }) => (
                <li
                  key={step}
                  className="flex items-start gap-4 rounded-2xl border border-vm-blue/30 bg-vm-blue/[0.08] p-5 md:flex-col md:gap-0 md:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-vm-navy">
                    <Icon className="h-6 w-6 text-vm-gold" aria-hidden="true" />
                  </span>
                  <div className="md:mt-4">
                    <p className="font-varsity text-sm tracking-widest text-vm-blue">{step}</p>
                    <h3 className="font-varsity text-xl tracking-wide text-vm-navy uppercase md:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">{body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
              Collected leaves are taken to a composting site, where the organic material can be
              repurposed into products such as mulch and compost.
            </p>

            <div className="mt-8 flex justify-center">
              <OfferCta location="process" />
            </div>
          </div>
        </section>

        {/* ───────────────────────── 4. TWO SERVICE OPTIONS ─────────────────────────
            Bed leaf removal lives only in Complete Fall Cleanup. Both feed the
            same form below. */}
        <section className="relative bg-muted/40 px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <Eyebrow>The Service</Eyebrow>
              <h2 className="font-varsity mt-2 text-3xl tracking-wide text-balance text-vm-navy md:text-4xl">
                Choose the Cleanup That Fits Your Property
              </h2>
            </div>

            <div className="mt-9 grid gap-5 md:grid-cols-2">
              {SERVICE_OPTIONS.map(({ icon: Icon, name, tag, intro, items }, i) => (
                <article
                  key={name}
                  className={`flex flex-col rounded-2xl border bg-card p-6 md:p-8 ${
                    i === 0 ? "border-vm-gold shadow-lg" : "border-border"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-vm-navy">
                      <Icon className="h-5 w-5 text-vm-gold" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-vm-navy md:text-2xl">{name}</h3>
                      <p className="text-xs font-semibold tracking-wider text-vm-gold-dark uppercase">
                        {tag}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-base text-muted-foreground">{intro}</p>
                  <ul className="mt-3 space-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vm-gold">
                          <Check className="h-4 w-4 text-vm-navy" strokeWidth={3} aria-hidden="true" />
                        </span>
                        <span className="text-base text-vm-navy/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-muted-foreground">
              Not sure which you need? Request one free quote. Every quote defines exactly which
              services and areas are included before any work is scheduled.
            </p>
          </div>
        </section>

        {/* ───────────────────────── 5. LEAVES HAVEN'T FALLEN YET? ───────────────────────── */}
        <section className="relative overflow-hidden bg-vm-navy px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <Eyebrow light>Plan Ahead</Eyebrow>
              <h2 className="font-varsity mt-2 text-3xl leading-tight tracking-wide text-balance text-white md:text-4xl">
                Leaves Haven&apos;t Fallen Yet? Get Ahead of the Rush.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                You don&apos;t need to wait until your lawn is covered in leaves to get a quote. We
                can assess your property now, provide pricing, and coordinate your cleanup around
                the fall leaf drop.
              </p>
            </div>

            <ol className="mt-9 grid gap-4 md:grid-cols-3">
              {SCHEDULING_STEPS.map((item) => (
                <li
                  key={item.step}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 md:flex-col md:gap-0 md:p-6"
                >
                  <span className="font-varsity flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-vm-gold text-2xl leading-none text-vm-navy">
                    {item.step}
                  </span>
                  <div className="md:mt-4">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-base leading-relaxed text-white/75">{item.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="font-varsity mt-10 text-center text-2xl tracking-wide text-balance text-vm-gold md:text-3xl">
              Get your quote now, enjoy your weekends later.
            </p>
            <div className="mt-6 flex justify-center">
              <OfferCta location="scheduling" />
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
                We&apos;re offering ${OFFER.discount} off qualifying leaf cleanup services for the
                remainder of our fall season. Request your free quote today and get ahead of the
                seasonal rush.
              </p>
              <ul className="mx-auto mt-5 inline-flex flex-col gap-2 text-left lg:mx-0">
                {OFFER_BENEFITS.map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-base text-vm-navy/90">
                    <Check className="h-5 w-5 shrink-0 text-vm-gold-dark" strokeWidth={3} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-base font-bold text-vm-navy">{OFFER.urgencyLine}</p>

              {/* Proof right beside the form, where the decision gets made. */}
              <div className="mx-auto mt-5 inline-flex items-center gap-3 rounded-full border border-border bg-card px-4 py-2 lg:mx-0">
                <Stars />
                <span className="text-sm font-semibold text-vm-navy">
                  5.0 on Google · 300+ five-star reviews
                </span>
              </div>

              <p className="mt-6 text-xs leading-relaxed text-muted-foreground/80">
                {OFFER.disclaimer}
              </p>
            </div>

            <OfferLeadForm
              showNotes
              notesLabel="Tell us about your cleanup (optional)"
              notesPlaceholder="e.g. front and back yard, gate code, best time to reach you"
              serviceOptions={FORM_SERVICE_OPTIONS}
              serviceSelect="single"
              servicesLegend="Which service interests you? (optional)"
              footnote="Free quote, no obligation. Pricing confirmed before scheduling."
              header={
                <>
                  <p className="font-varsity text-2xl leading-tight tracking-wide text-white md:text-3xl">
                    Get Your Free Quote &amp; <span className="text-vm-gold">Save ${OFFER.discount}</span>
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white/85 md:text-base">
                    Request your quote now. We&apos;ll confirm pricing and coordinate cleanup timing
                    with you.
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
              {OFFER.headline}
            </h2>
            <p className="mt-4 text-lg text-white/80 md:text-xl">
              We clear. We collect. We haul away. Get ${OFFER.discount} off your fall leaf cleanup
              while seasonal appointments remain.
            </p>
            <div className="mt-8 flex justify-center">
              <OfferCta location="final" />
            </div>
            <p className="mt-5 text-base font-semibold text-vm-gold md:text-lg">
              Leaves still on the trees? Request your quote now. We&apos;ll schedule around the
              leaf drop.
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
