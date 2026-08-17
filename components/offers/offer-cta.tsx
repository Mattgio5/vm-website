"use client"

import { OFFER } from "@/lib/aeration-offer"
import { trackOfferCtaClick } from "@/lib/offer-tracking"
import { useOfferTracking } from "@/components/offers/offer-tracking-provider"

export const OFFER_FORM_ID = "claim-offer"

/**
 * Every CTA on the landing page. All of them do exactly one thing — scroll to
 * the lead form — so there is never a competing conversion path. `location`
 * only exists to segment CTA clicks in GA4.
 */
export function OfferCta({
  location,
  className = "",
  children = OFFER.primaryCta,
  size = "lg",
}: {
  location: string
  className?: string
  children?: React.ReactNode
  size?: "lg" | "md"
}) {
  const { utms } = useOfferTracking()

  const sizing =
    size === "lg"
      ? "w-full px-8 py-4 text-base sm:w-auto sm:text-lg"
      : "w-full px-6 py-3.5 text-base sm:w-auto"

  return (
    <a
      href={`#${OFFER_FORM_ID}`}
      onClick={(e) => {
        trackOfferCtaClick(utms, location)
        const target = document.getElementById(OFFER_FORM_ID)
        if (!target) return
        e.preventDefault()
        target.scrollIntoView({ behavior: "smooth", block: "start" })
      }}
      className={`inline-flex items-center justify-center rounded-full bg-vm-gold font-bold tracking-wide text-vm-navy shadow-lg transition-all hover:bg-vm-gold-dark hover:shadow-xl active:scale-[0.98] ${sizing} ${className}`}
    >
      {children}
    </a>
  )
}
