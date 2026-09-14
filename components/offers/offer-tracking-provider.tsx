"use client"

import { createContext, useContext, useEffect, useRef, useState } from "react"
import {
  captureAndStoreUtms,
  captureLandingReferrer,
  injectUtmsIntoUrl,
  type UtmParams,
} from "@/lib/quote-intake"
import { trackOfferView } from "@/lib/offer-tracking"
import type { LandingOffer } from "@/lib/landing-offer"

type OfferTracking = {
  offer: LandingOffer
  utms: UtmParams
  landingReferrer: string
}

const OfferTrackingContext = createContext<OfferTracking | null>(null)

/**
 * Captures the ad click's UTMs once on mount, keeps them in sessionStorage (so
 * they survive the form submit and any navigation away), re-injects them into
 * the URL, and fires the landing-page-visit event.
 *
 * Also hands the page's offer config to every CTA and the lead form, so a
 * click and the resulting conversion are always attributed to the same ad and
 * the same promo.
 */
export function OfferTrackingProvider({
  offer,
  children,
}: {
  offer: LandingOffer
  children: React.ReactNode
}) {
  const [tracking, setTracking] = useState<Omit<OfferTracking, "offer">>({
    utms: {},
    landingReferrer: "",
  })
  const fired = useRef(false)

  useEffect(() => {
    if (fired.current) return
    fired.current = true

    const utms = captureAndStoreUtms(window.location.search)
    const landingReferrer = captureLandingReferrer()
    injectUtmsIntoUrl(utms)
    setTracking({ utms, landingReferrer })
    trackOfferView(offer, utms)
  }, [offer])

  return (
    <OfferTrackingContext.Provider value={{ offer, ...tracking }}>
      {children}
    </OfferTrackingContext.Provider>
  )
}

export function useOfferTracking(): OfferTracking {
  const ctx = useContext(OfferTrackingContext)
  if (!ctx) throw new Error("useOfferTracking must be used inside <OfferTrackingProvider>")
  return ctx
}
