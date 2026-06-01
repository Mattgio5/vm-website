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
const IS_DEV = process.env.NODE_ENV === "development"

function gtagPageView(pagePath: string, pageUrl: string) {
  if (GA_ID && typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_location: pageUrl,
    })
  }
}

function fbqPageView(pagePath: string, pageUrl: string) {
  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", "PageView", { page_path: pagePath, page_url: pageUrl })
  }
}

function fireLeadEvents(pagePath: string, pageUrl: string) {
  if (GA_ID && typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", { page_path: pagePath, page_location: pageUrl })
  }
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead", {
      content_name: "Schedule Page",
      page_path: pagePath,
      page_url: pageUrl,
    })
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
    const pagePath = pathname + (search ? `?${search}` : "")
    const pageUrl = window.location.origin + pagePath

    // Deduplicate: skip if URL hasn't changed.
    // This also handles React Strict Mode's double-invocation in dev.
    if (prevUrl.current === pagePath) return

    const isFirst = prevUrl.current === null
    const isSchedule = pathname.includes("schedule")
    prevUrl.current = pagePath

    if (isFirst) {
      // Initial page load — the inline GA4 config and Meta Pixel base code
      // already fired their own pageviews. Just capture UTMs and emit lead
      // events if applicable.
      captureAndStoreUtms(window.location.search)
      if (isSchedule) {
        fireLeadEvents(pagePath, pageUrl)
        lastLeadPath.current = pathname
      }
      return
    }

    // SPA navigation — gtag/fbq scripts don't re-execute, so fire manually.
    if (IS_DEV) console.log("[Analytics] route tracked:", pagePath, pageUrl)

    gtagPageView(pagePath, pageUrl)
    fbqPageView(pagePath, pageUrl)

    if (isSchedule && lastLeadPath.current !== pathname) {
      fireLeadEvents(pagePath, pageUrl)
      lastLeadPath.current = pathname
    }
  }, [pathname, searchParams])

  return null
}
