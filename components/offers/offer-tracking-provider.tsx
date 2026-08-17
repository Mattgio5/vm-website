"use client"

import { createContext, useContext, useEffect, useRef, useState } from "react"
import {
  captureAndStoreUtms,
  captureLandingReferrer,
  injectUtmsIntoUrl,
  type UtmParams,
} from "@/lib/quote-intake"
import { trackOfferView } from "@/lib/offer-tracking"

type OfferTracking = {
  utms: UtmParams
  landingReferrer: string
}

const OfferTrackingContext = createContext<OfferTracking>({
  utms: {},
  landingReferrer: "",
})

/**
 * Captures the Meta ad click's UTMs once on mount, keeps them in
 * sessionStorage (so they survive the form submit and any navigation away),
 * re-injects them into the URL, and fires the landing-page-visit event.
 *
 * Every CTA and the lead form read the same set from context, so a click and
 * the resulting conversion are always attributed to the same ad.
 */
export function OfferTrackingProvider({ children }: { children: React.ReactNode }) {
  const [tracking, setTracking] = useState<OfferTracking>({ utms: {}, landingReferrer: "" })
  const fired = useRef(false)

  useEffect(() => {
    if (fired.current) return
    fired.current = true

    const utms = captureAndStoreUtms(window.location.search)
    const landingReferrer = captureLandingReferrer()
    injectUtmsIntoUrl(utms)
    setTracking({ utms, landingReferrer })
    trackOfferView(utms)
  }, [])

  return (
    <OfferTrackingContext.Provider value={tracking}>{children}</OfferTrackingContext.Provider>
  )
}

export function useOfferTracking(): OfferTracking {
  return useContext(OfferTrackingContext)
}
