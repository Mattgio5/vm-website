"use client"

import { useEffect, useState } from "react"
import { OFFER } from "@/lib/aeration-offer"
import { trackOfferCtaClick } from "@/lib/offer-tracking"
import { useOfferTracking } from "@/components/offers/offer-tracking-provider"
import { OFFER_FORM_ID } from "@/components/offers/offer-cta"

/**
 * Mobile-only sticky bar. Appears once the hero scrolls out of view and hides
 * again while the form itself is on screen, so it never covers the fields the
 * visitor is trying to fill in.
 *
 * Uses IntersectionObserver against the two sentinels rather than a scroll
 * listener — no per-frame work on low-end phones.
 */
export function OfferStickyCta({ heroId, formId = OFFER_FORM_ID }: { heroId: string; formId?: string }) {
  const { utms } = useOfferTracking()
  const [pastHero, setPastHero] = useState(false)
  const [formVisible, setFormVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById(heroId)
    const form = document.getElementById(formId)

    const observers: IntersectionObserver[] = []

    if (hero) {
      const o = new IntersectionObserver(
        ([entry]) => setPastHero(!entry.isIntersecting),
        { threshold: 0 },
      )
      o.observe(hero)
      observers.push(o)
    }

    if (form) {
      const o = new IntersectionObserver(
        ([entry]) => setFormVisible(entry.isIntersecting),
        { threshold: 0 },
      )
      o.observe(form)
      observers.push(o)
    }

    return () => observers.forEach((o) => o.disconnect())
  }, [heroId, formId])

  const show = pastHero && !formVisible

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-vm-gold/30 bg-vm-navy/95 px-3 pt-3 backdrop-blur-md transition-transform duration-200 md:hidden ${
        show ? "translate-y-0" : "pointer-events-none translate-y-full"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href={`#${formId}`}
        tabIndex={show ? 0 : -1}
        onClick={(e) => {
          trackOfferCtaClick(utms, "sticky-mobile")
          const target = document.getElementById(formId)
          if (!target) return
          e.preventDefault()
          target.scrollIntoView({ behavior: "smooth", block: "start" })
        }}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-vm-gold px-5 py-4 text-base font-bold tracking-wide text-vm-navy shadow-lg active:scale-[0.98]"
      >
        {OFFER.stickyCta}
        <span className="text-vm-navy/60">—</span>
        <span>{OFFER.priceLabel}</span>
      </a>
    </div>
  )
}
