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

  // Track the last URL we processed. null = not yet run (initial load).
  // Using URL comparison instead of a boolean mount flag prevents silent
  // resets when Next.js or Suspense remounts the component on navigation.
  const prevUrl = useRef<string | null>(null)
  const lastLeadPath = useRef<string | null>(null)

  useEffect(() => {
    const search = searchParams.toString()
    const url = pathname + (search ? `?${search}` : "")

    // Deduplicate: skip if URL hasn't changed.
    // This also handles React Strict Mode's double-invocation in dev.
    if (prevUrl.current === url) return

    const isFirst = prevUrl.current === null
    const isSchedule = pathname.includes("schedule")
    prevUrl.current = url

    if (isFirst) {
      // Initial page load — the inline GA4 config and Meta Pixel base code
      // already fired their own pageviews. Just capture UTMs and emit lead
      // events if applicable.
      captureAndStoreUtms(window.location.search)
      if (isSchedule) {
        fireLeadEvents(pathname)
        lastLeadPath.current = pathname
      }
      return
    }

    // SPA navigation — gtag/fbq scripts don't re-execute, so fire manually.
    gtagPageView(pathname, search)
    fbqPageView()

    if (isSchedule && lastLeadPath.current !== pathname) {
      fireLeadEvents(pathname)
      lastLeadPath.current = pathname
    }
  }, [pathname, searchParams])

  return null
}
