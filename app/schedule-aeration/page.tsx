import type { Metadata } from "next"
import Link from "next/link"
import { OFFER } from "@/lib/aeration-offer"
import { OFFER as AERATION_ONLY_OFFER } from "@/lib/aeration-only-offer"

/**
 * Post-submit confirmation page for the $269 aeration + overseeding offer and
 * the $159 aeration-only offer. The $159 form redirects here with
 * ?offer=aeration-159, which switches the price and service shown.
 *
 * Deliberately named to match the existing /schedule-* thank-you pages: it is
 * registered in LEAD_PATHS in components/analytics-tracker.tsx, so it fires the
 * GA4 + Meta lead conversion through exactly the same path as every other
 * conversion on the site. One mechanism, one place to change.
 *
 * Copy is offer-specific rather than /schedule-general's "schedule your free
 * quote" wording — the spot is already reserved here, and the only open step is
 * confirming lawn size.
 */
type Props = { searchParams: Promise<{ offer?: string | string[] }> }

/** Which offer the visitor claimed — defaults to the $269 offer. */
async function claimedOffer(searchParams: Props["searchParams"]) {
  const { offer } = await searchParams
  return offer === AERATION_ONLY_OFFER.confirmedOfferKey
    ? { priceLabel: AERATION_ONLY_OFFER.priceLabel, sqFtLabel: AERATION_ONLY_OFFER.sqFtLabel, name: "Fall Core Aeration" }
    : { priceLabel: OFFER.priceLabel, sqFtLabel: OFFER.sqFtLabel, name: "Fall Aeration + Overseeding" }
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const claimed = await claimedOffer(searchParams)
  return {
    title: `Your ${claimed.priceLabel} Spot Is Reserved`,
    description: "We'll reach out to confirm your spot on the schedule.",
    robots: { index: false, follow: false },
  }
}

export default async function ScheduleAerationPage({ searchParams }: Props) {
  const claimed = await claimedOffer(searchParams)

  return (
    <main>
      <section className="relative flex min-h-[80vh] items-center bg-vm-navy px-4 py-20 md:px-12 lg:px-20">
        <div className="absolute top-0 right-0 left-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-vm-gold uppercase">
            Offer Claimed
          </p>

          <h1 className="font-varsity mt-4 text-4xl tracking-wide text-white uppercase md:text-5xl lg:text-6xl">
            Your <span className="text-vm-gold">{claimed.priceLabel}</span> Spot Is Reserved
          </h1>

          <div className="mx-auto mt-6 h-[2px] w-16 bg-vm-gold" />

          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/80">
            We&apos;ll reach out shortly to confirm your spot on the schedule. During business
            hours that&apos;s usually within the hour.
          </p>

          <div className="mx-auto mt-8 max-w-sm rounded-2xl border border-vm-gold/30 bg-white/[0.06] px-6 py-5">
            <p className="font-varsity text-lg tracking-wide text-white">
              {claimed.name}
            </p>
            <p className="font-varsity mt-1 text-4xl leading-none tracking-wide text-vm-gold">
              {claimed.priceLabel}
            </p>
            <p className="mt-2 text-sm text-white/75">For lawns under {claimed.sqFtLabel}</p>
          </div>

          <p className="mt-8 text-sm text-white/55">
            We&apos;ll confirm your lawn is under {claimed.sqFtLabel} before scheduling. Questions in
            the meantime? Give us a call.
          </p>

          <a
            href="tel:+12673899789"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-vm-gold px-8 py-4 text-base font-bold text-vm-navy transition-all hover:bg-vm-gold-dark hover:shadow-lg"
          >
            (267) 389-9789
          </a>

          <div className="mt-6">
            <Link
              href="/"
              className="text-sm text-white/40 transition-colors hover:text-white/70"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
