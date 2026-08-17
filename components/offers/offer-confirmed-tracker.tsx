"use client"

import { useEffect, useRef } from "react"
import { captureAndStoreUtms } from "@/lib/quote-intake"
import { trackOfferConfirmedView } from "@/lib/offer-tracking"

/**
 * Marks the confirmation page view. It deliberately does NOT fire the Lead
 * conversion — that fires on the form's submit handler, the moment the API
 * confirms the lead was accepted, so it can't be lost if this navigation is
 * slow, blocked, or abandoned. Firing here too would double-count and corrupt
 * a campaign that optimizes for Lead events.
 */
export function OfferConfirmedTracker() {
  const fired = useRef(false)

  useEffect(() => {
    if (fired.current) return
    fired.current = true
    trackOfferConfirmedView(captureAndStoreUtms(window.location.search))
  }, [])

  return null
}
