import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, Check, MapPin, Phone, ShieldCheck, Star, Trophy, Users, ZoomIn } from "lucide-react"
import {
  OFFER,
  LANDSCAPING_LANDING,
  PROJECT_CARDS,
  PROJECT_TYPES,
  PROJECT_TYPE_ALIASES,
  REDESIGN_PHOTOS,
  DRAINAGE_PHOTOS,
  PRIVACY_PHOTOS,
  REVIEWS,
  REDESIGN_VIDEO_ID,
  TRUST_POINTS,
  type Photo,
} from "@/lib/fall-landscaping-offer"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { OfferTrackingProvider } from "@/components/offers/offer-tracking-provider"
import { OfferCta } from "@/components/offers/offer-cta"
import { OfferLeadForm } from "@/components/offers/offer-lead-form"
import { OfferStickyCta } from "@/components/offers/offer-sticky-cta"
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
 * Paid Meta landing page for fall landscaping projects. noindex like the other
 * /offers/* pages: it's a promo that expires and shouldn't compete with the
 * services pages in organic search.
 */
export const metadata: Metadata = {
  title: { absolute: "Fall Landscaping Projects | $250 Off | Varsity Mulching" },
  description:
    "Landscape redesigns, rock beds, wet mulch bed fixes, and privacy screenings in Bucks & Montgomery County. Save $250 on projects over $2,000 scheduled by October 20.",
  robots: { index: false, follow: false },
  alternates: { canonical: OFFER.path },
  openGraph: {
    url: OFFER.path,
    title: "Save $250 On Your Fall Landscaping Project",
    description: "Schedule by October 20. $250 off qualifying landscaping projects over $2,000.",
    images: [{ url: OFFER.heroImage, width: 764, height: 721, alt: "Redesigned front landscape bed" }],
  },
}

const TRUST_ICONS = [ShieldCheck, Users, Trophy, MapPin] as const

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

/** "300+ Five-Star Reviews • Perfect 5.0/5.0 Rating • …" as wrap-safe chips. */
function TrustLine({ items, className = "" }: { items: readonly string[]; className?: string }) {
  return (
    <ul
      className={`flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm sm:gap-x-2 font-semibold text-white/90 lg:justify-start ${className}`}
    >
      {items.map((item, i) => (
        <li key={item} className="flex items-center gap-2">
          {i > 0 && <span className="hidden text-vm-gold sm:inline" aria-hidden="true">•</span>}
          {item}
        </li>
      ))}
    </ul>
  )
}

/** The $2,000 minimum, styled so it can't be missed next to the offer. */
function Qualifier({ className = "" }: { className?: string }) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-2xl border border-vm-gold/50 bg-vm-gold/10 px-4 py-1.5 text-sm font-bold text-vm-gold ${className}`}
    >
      <Check className="h-4 w-4 shrink-0" strokeWidth={3} aria-hidden="true" />
      {OFFER.qualifier}
    </p>
  )
}

function Shot({ photo, className = "", sizes }: { photo: Photo; className?: string; sizes: string }) {
  return (
    <figure className={`relative overflow-hidden rounded-2xl bg-muted shadow-md ${className}`}>
      <Image src={photo.src} alt={photo.alt} fill sizes={sizes} className="object-cover" />
      {photo.label && (
        <figcaption
          className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase shadow ${
            photo.label === "After" ? "bg-vm-gold text-vm-navy" : "bg-vm-navy/85 text-white"
          }`}
        >
          {photo.label}
        </figcaption>
      )}
    </figure>
  )
}

/**
 * One before shot and two afters. Mobile: before full width, afters paired
 * underneath. Desktop: three across.
 */
function BeforeAfterTrio({ photos }: { photos: Photo[] }) {
  const [before, ...afters] = photos
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
      <Shot photo={before} sizes="(min-width: 768px) 33vw, 100vw" className="col-span-2 aspect-[4/3] md:col-span-1 md:aspect-[3/4]" />
      {afters.map((p) => (
        <Shot key={p.src} photo={p} sizes="(min-width: 768px) 33vw, 50vw" className="aspect-[3/4]" />
      ))}
    </div>
  )
}

/**
 * A real Google review screenshot, never re-typed. The screenshots are
 * desktop captures with small text, so on phones the figure runs edge to edge
 * and taps open the full-size image.
 */
function ReviewShot({ review, className = "" }: { review: (typeof REVIEWS)[keyof typeof REVIEWS]; className?: string }) {
  return (
    <a
      href={review.src}
      target="_blank"
      rel="noopener"
      className={`group -mx-4 block sm:mx-auto ${className}`}
    >
      <figure className="overflow-hidden border-y border-border bg-[#202124] shadow-xl sm:rounded-2xl sm:border">
        <Image
          src={review.src}
          alt={review.alt}
          width={review.width}
          height={review.height}
          sizes="(min-width: 640px) 640px, 100vw"
          className="h-auto w-full"
        />
      </figure>
      <div className="mt-2 flex items-center justify-center gap-1.5 text-xs font-semibold text-muted-foreground group-hover:text-vm-navy">
        <Stars className="scale-90" />
        {review.source}
        <span className="inline-flex items-center gap-1 sm:hidden">
          <span aria-hidden="true">•</span>
          <ZoomIn className="h-3.5 w-3.5" aria-hidden="true" /> Tap to enlarge
        </span>
      </div>
    </a>
  )
}

export default function FallLandscapingOfferPage() {
  return (
    <OfferTrackingProvider offer={LANDSCAPING_LANDING}>
      <OfferHeader />

      <main>
        {/* ───────────────────────── 1. HERO ─────────────────────────
            Same one-image trick as the leaf page: full-bleed background on
            mobile, framed photo on desktop. */}
        <section id={HERO_ID} className="relative isolate overflow-hidden bg-vm-navy">
          <div className="bg-noise pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />

          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-[5.25rem] pb-9 md:px-8 md:pt-32 md:pb-16 lg:grid-cols-[1.1fr_1fr] lg:gap-14 lg:pb-20">
            <div className="absolute inset-0 -z-20 lg:relative lg:inset-auto lg:z-auto lg:order-2 lg:aspect-[764/721] lg:overflow-hidden lg:rounded-3xl lg:border lg:border-white/15 lg:shadow-2xl">
              <Image
                src={OFFER.heroImage}
                alt="Finished front landscape redesign on a brick colonial"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-vm-navy/80 via-vm-navy/85 to-vm-navy/95 lg:hidden" />
              <div className="absolute right-5 bottom-5 hidden rotate-[-4deg] rounded-2xl border-2 border-vm-navy bg-vm-gold px-5 py-3 text-center shadow-xl lg:block">
                <p className="font-varsity text-3xl leading-none tracking-wide text-vm-navy">
                  {OFFER.discountLabel}
                </p>
                <p className="mt-1 text-xs font-bold tracking-wider text-vm-navy uppercase">
                  Schedule by {OFFER.deadlineLabel}
                </p>
                <p className="text-[11px] font-semibold text-vm-navy/75">
                  Projects over {OFFER.minimumLabel}
                </p>
              </div>
            </div>

            <div className="text-center lg:order-1 lg:text-left">
              <h1
                className="vm-reveal font-varsity text-[2.1rem] leading-[1.05] tracking-wide text-balance text-white sm:text-5xl lg:text-6xl"
                style={{ animationDelay: "40ms" }}
              >
                Save <span className="text-vm-gold">${OFFER.discount}</span> On Your Fall
                Landscaping Project
              </h1>

              <p
                className="vm-reveal mx-auto mt-3 max-w-xl text-base leading-snug font-semibold text-white md:mt-5 md:text-xl lg:mx-0"
                style={{ animationDelay: "120ms" }}
              >
                Bucks & Montgomery County homeowners: schedule your landscaping project by{" "}
                <span className="text-vm-gold">{OFFER.deadlineLabel}</span> and save $
                {OFFER.discount}.
              </p>

              <div className="vm-reveal mt-3 md:mt-4" style={{ animationDelay: "160ms" }}>
                <Qualifier />
              </div>

              <div
                className="vm-reveal mt-5 flex flex-col items-center gap-3 md:mt-7 lg:items-start"
                style={{ animationDelay: "220ms" }}
              >
                <OfferCta location="hero" />
                <div className="flex flex-col items-center gap-1 lg:items-start">
                  <Stars />
                  <TrustLine items={OFFER.trustLine} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────── 2. PROJECT TYPES ───────────────────────── */}
        <section className="relative bg-background px-4 pt-14 pb-12 md:px-8 md:pt-20 md:pb-16">
          <Stripes />
          <div className="mx-auto max-w-6xl">
            <h2 className="font-varsity text-center text-3xl tracking-wide text-vm-navy md:text-4xl">
              What Can We Help With?
            </h2>

            <ul className="mt-8 grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
              {PROJECT_CARDS.map((card) => (
                <li key={card.title}>
                  <a
                    href={card.href}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
                  >
                    <div className={`grid aspect-[4/5] ${card.photos.length > 1 ? "grid-rows-2 gap-px bg-border" : ""}`}>
                      {card.photos.map((p) => (
                        <div key={p.src} className="relative">
                          <Image
                            src={p.src}
                            alt={p.alt}
                            fill
                            sizes="(min-width: 1024px) 25vw, 50vw"
                            className="object-cover"
                          />
                          {p.label && (
                            <span
                              className={`absolute top-1.5 left-1.5 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase ${
                                p.label === "After" ? "bg-vm-gold text-vm-navy" : "bg-vm-navy/85 text-white"
                              }`}
                            >
                              {p.label}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex grow flex-col p-3 md:p-5">
                      <h3 className="text-base leading-tight font-bold text-vm-navy md:text-lg">
                        {card.title}
                      </h3>
                      <p className="mt-1.5 grow text-[13px] leading-snug text-muted-foreground md:text-sm">
                        {card.body}
                      </p>
                      <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-vm-gold-dark">
                        See projects
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────────────────────── 3. LANDSCAPE REDESIGN ───────────────────────── */}
        <section id="redesign" className="relative scroll-mt-4 bg-muted/40 px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Landscape Redesign</Eyebrow>
              <h2 className="font-varsity mt-2 text-3xl tracking-wide text-balance text-vm-navy md:text-4xl">
                Refresh An Overgrown Landscape
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                Sometimes a landscape does not need to be completely rebuilt. It just needs the
                right plants removed, a cleaner layout, and new landscaping that fits the home
                better.
              </p>
            </div>

            <p className="mt-6 text-center text-sm font-semibold text-vm-navy/70">
              Drag the slider to see the difference.
            </p>
            <div className="mx-auto mt-3 max-w-2xl">
              <BeforeAfterSlider
                beforeSrc={REDESIGN_PHOTOS[0].src}
                afterSrc={REDESIGN_PHOTOS[1].src}
                beforeAlt={REDESIGN_PHOTOS[0].alt}
                afterAlt={REDESIGN_PHOTOS[1].alt}
                initialPosition={35}
                aspectClassName="aspect-[764/690]"
                objectPositionClassName="object-top"
              />
            </div>

            <div className="mx-auto mt-10 max-w-3xl">
              <p className="mb-3 text-center text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
                Watch Bill&apos;s redesign
              </p>
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-vm-navy shadow-lg">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${REDESIGN_VIDEO_ID}?rel=0`}
                  title="Customer video of a Varsity landscape redesign"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
              <ReviewShot review={REVIEWS.bill} className="mt-6" />
            </div>
          </div>
        </section>

        {/* ───────────────────────── 4. DRAINAGE ───────────────────────── */}
        <section id="drainage" className="relative scroll-mt-4 bg-background px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Rock Beds For Wet Spots</Eyebrow>
              <h2 className="font-varsity mt-2 text-3xl tracking-wide text-balance text-vm-navy md:text-4xl">
                Solve The Water Problem, Not Just The Symptom
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                Water sitting in your mulch beds after every rain washes out mulch and drowns
                plants. We turn those wet spots and downspout areas into decorative rock beds that
                hold the water and let it soak in, so the rest of the bed stays clean.
              </p>
            </div>

            <div className="mx-auto mt-8 grid max-w-3xl gap-3 md:grid-cols-2 md:gap-4">
              {DRAINAGE_PHOTOS.map((p) => (
                <Shot key={p.src} photo={p} sizes="(min-width: 768px) 384px, 100vw" className="aspect-[4/5]" />
              ))}
            </div>

            <div className="mt-9 flex justify-center">
              <OfferCta location="drainage" size="md" />
            </div>
          </div>
        </section>

        {/* ───────────────────────── 5. PRIVACY ───────────────────────── */}
        <section id="privacy" className="relative scroll-mt-4 bg-muted/40 px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Privacy Screening</Eyebrow>
              <h2 className="font-varsity mt-2 text-3xl tracking-wide text-balance text-vm-navy md:text-4xl">
                Create More Privacy Naturally
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground md:text-lg">
                Privacy plantings can help define your property and create a more secluded yard
                without building another hardscape feature.
              </p>
            </div>

            <div className="mt-8">
              <BeforeAfterTrio photos={PRIVACY_PHOTOS} />
            </div>

            <ReviewShot review={REVIEWS.len} className="mt-10 max-w-xl" />
          </div>
        </section>

        {/* ───────────────────────── 6. TRUST ───────────────────────── */}
        <section className="relative overflow-hidden bg-vm-navy-light px-4 py-14 md:px-8 md:py-20">
          <div className="absolute top-0 right-0 left-0 h-1.5 bg-vm-gold" />
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <Eyebrow light>Why Varsity</Eyebrow>
              <h2 className="font-varsity mt-2 text-3xl tracking-wide text-white md:text-4xl">
                Trusted For More Than Mulch
              </h2>
            </div>

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
                    <p className="mt-2 text-sm font-bold">Perfect 5.0/5.0 Rating</p>
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
          </div>
        </section>

        {/* ───────────────────────── 7 + 8. FINAL CTA + FORM ─────────────────────────
            The form's submit button is the final "Schedule My Free Quote" CTA,
            so there's no extra button that just scrolls a few pixels down. */}
        <section className="relative overflow-hidden bg-vm-navy px-4 py-14 md:px-8 md:py-20">
          <Stripes />
          <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <h2 className="font-varsity text-3xl leading-tight tracking-wide text-balance text-white md:text-5xl">
                Save <span className="text-vm-gold">${OFFER.discount}</span> On Your Fall
                Landscaping Project
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
                Schedule your project by {OFFER.deadlineLabel} and save ${OFFER.discount} on
                qualifying landscaping projects over {OFFER.minimumLabel}.
              </p>
              <p className="mt-4 text-base font-bold text-vm-gold">
                Fall project availability is limited.
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
              serviceOptions={PROJECT_TYPES}
              serviceAliases={PROJECT_TYPE_ALIASES}
              servicesLegend="What type of project?"
              servicesHint="Pick any that apply."
              showNotes
              notesLabel="Tell us about your project (optional)"
              notesPlaceholder="e.g. overgrown front beds, water sits in the mulch by the downspout"
              footnote="Free quote, no obligation. We confirm pricing before anything is scheduled."
              header={
                <>
                  <p className="font-varsity text-4xl leading-none tracking-wide text-vm-gold md:text-5xl">
                    {OFFER.discountLabel}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    Fall landscaping projects scheduled by {OFFER.deadlineLabel}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-white/70">
                    Applies to projects over {OFFER.minimumLabel}
                  </p>
                </>
              }
            />

            <p className="text-center text-xs leading-relaxed text-white/55 lg:col-span-2">
              {OFFER.disclaimer}
            </p>
          </div>
        </section>
      </main>

      <OfferFooter serviceArea="Serving Bucks & Montgomery County, PA" />

      <OfferStickyCta heroId={HERO_ID} />
    </OfferTrackingProvider>
  )
}
