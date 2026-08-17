"use client"

import { useEffect, useRef } from "react"
import { captureAndStoreUtms } from "@/lib/quote-intake"
import { trackOfferLead } from "@/lib/offer-tracking"

/**
 * Fires the offer conversion (Meta `Lead` + GA4 `generate_lead`) on the
 * confirmation page — the single place it fires, so there are no duplicates.
 *
 * The UTMs come from sessionStorage (captured when the visitor first landed on
 * the offer page), with the URL's own params taking precedence since the form
 * forwards them on the redirect. That keeps source/medium/campaign/content
 * attached to the conversion even though this is a different URL.
 *
 * The base Meta Pixel PageView fires on its own via the full page load, so
 * this only adds the Lead event.
 */
export function OfferConfirmedTracker() {
  const fired = useRef(false)

  useEffect(() => {
    if (fired.current) return
    fired.current = true
    trackOfferLead(captureAndStoreUtms(window.location.search))
  }, [])

  return null
}
