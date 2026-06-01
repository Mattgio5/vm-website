"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useRef } from "react"
import { captureAndStoreUtms } from "@/lib/quote-intake"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
    fbq?: (command: string, event: string, params?: Record<string, unknown>) => void
    _fbq?: unknown
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

function gtagPageView(pathname: string, search: string) {
  if (GA_ID && typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_location: window.location.href,
      page_path: pathname,
      page_search: search,
    })
  }
}

function fbqPageView() {
  if (typeof window.fbq === "function") {
    window.fbq("track", "PageView")
  }
}

function fireLeadEvents(pathname: string) {
  if (GA_ID && typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", { page_path: pathname })
  }
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead")
  }
}

// Wrapped in Suspense by the parent — useSearchParams requires it in App Router.
export function AnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const mounted = useRef(false)
  const lastLeadPath = useRef<string | null>(null)

  useEffect(() => {
    const isSchedule = pathname.includes("schedule")
    const search = searchParams.toString()

    if (!mounted.current) {
      mounted.current = true
      // Seed sessionStorage with any UTMs present on the landing URL so forms
      // on subsequent pages can still read them after SPA navigation strips the params.
      captureAndStoreUtms(window.location.search)
      // Initial load: the GA4 config script and Meta Pixel base code each fire
      // their own initial pageview — don't double-fire here. Only emit the lead
      // conversion events if the landing page is already a schedule page.
      if (isSchedule) {
        fireLeadEvents(pathname)
        lastLeadPath.current = pathname
      }
      return
    }

    // SPA route change — the gtag/fbq scripts don't re-execute, so fire manually.
    gtagPageView(pathname, search)
    fbqPageView()

    if (isSchedule && lastLeadPath.current !== pathname) {
      fireLeadEvents(pathname)
      lastLeadPath.current = pathname
    }
  }, [pathname, searchParams])

  return null
}
