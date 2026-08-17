import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Phone } from "lucide-react"
import { OFFER } from "@/lib/aeration-offer"
import { OfferConfirmedTracker } from "@/components/offers/offer-confirmed-tracker"

/**
 * Confirmation page for a claimed $259 offer. Deliberately separate from the
 * generic /schedule-general thank-you page, whose copy promises "a free quote"
 * — wrong for a fixed-price offer where the spot is already reserved and the
 * only outstanding step is confirming lawn size.
 *
 * This is the conversion URL: the Lead / generate_lead events fire here (see
 * OfferConfirmedTracker) and nowhere else.
 */
export const metadata: Metadata = {
  title: `Your ${OFFER.priceLabel} Spot Is Reserved`,
  description: "We'll reach out to confirm your spot on the schedule.",
  // Post-conversion funnel page — keep it out of the index.
  robots: { index: false, follow: false },
}

const nextSteps = [
  {
    title: "We confirm your lawn qualifies",
    body: `We'll verify your lawn is under ${OFFER.sqFtLabel} so the flat ${OFFER.priceLabel} price applies. If it's larger, we'll send custom pricing before anything is scheduled.`,
  },
  {
    title: "We confirm your spot on the schedule",
    body: "You'll get your service date in our fall aeration window, confirmed directly with you.",
  },
  {
    title: "We handle the rest",
    body: "Mark any sprinkler heads and invisible dog fences before we arrive. You don't need to be home, and we'll leave simple watering instructions.",
  },
]

export default function OfferConfirmedPage() {
  return (
    <>
      <OfferConfirmedTracker />

      {/* Minimal header — same as the landing page, no nav. */}
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

      <main className="relative min-h-screen bg-vm-navy px-4 pt-24 pb-16 md:px-8 md:pt-32">
        <div className="absolute top-0 right-0 left-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-vm-gold" aria-hidden="true" />

          <p className="mt-5 text-sm font-bold tracking-[0.15em] text-vm-gold uppercase">
            Offer Claimed
          </p>

          <h1 className="font-varsity mt-3 text-4xl leading-[1.05] tracking-wide text-balance text-white md:text-5xl">
            Your <span className="text-vm-gold">{OFFER.priceLabel}</span> Spot Is Reserved
          </h1>

          <div className="mx-auto mt-6 h-[2px] w-16 bg-vm-gold" />

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            We&apos;ll reach out shortly to confirm your spot on the schedule. During business
            hours that&apos;s usually within the hour.
          </p>

          {/* Offer recap so the visitor sees exactly what they locked in. */}
          <div className="mx-auto mt-8 max-w-md rounded-2xl border border-vm-gold/30 bg-white/[0.06] px-6 py-5">
            <p className="font-varsity text-lg tracking-wide text-white">
              Fall Aeration + Overseeding
            </p>
            <p className="font-varsity mt-1 text-4xl leading-none tracking-wide text-vm-gold">
              {OFFER.priceLabel}
            </p>
            <p className="mt-2 text-sm text-white/75">For lawns under {OFFER.sqFtLabel}</p>
          </div>

          <div className="mt-10 text-left">
            <h2 className="font-varsity text-center text-xl tracking-wide text-white md:text-2xl">
              What Happens Next
            </h2>
            <ol className="mt-5 space-y-3">
              {nextSteps.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <span className="font-varsity shrink-0 text-2xl leading-none tracking-wide text-vm-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <p className="mt-9 text-base text-white/70">Questions in the meantime?</p>
          <a
            href="tel:+12673899789"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-vm-gold px-8 py-4 text-base font-bold tracking-wide text-vm-navy transition-all hover:bg-vm-gold-dark hover:shadow-lg active:scale-[0.98]"
          >
            <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
            (267) 389-9789
          </a>
        </div>
      </main>

      <footer className="bg-vm-navy-light px-4 py-8 text-center md:px-8">
        <p className="text-sm text-white/60">
          Varsity Mulching LLC · Doylestown, PA · Fully licensed &amp; insured
        </p>
      </footer>
    </>
  )
}
