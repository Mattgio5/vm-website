"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useRef } from "react"
import { captureAndStoreUtms, injectUtmsIntoUrl } from "@/lib/quote-intake"

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

// Post-submit confirmation pages that should fire a Lead conversion.
// /schedule-a-quote is intentionally excluded — it's the form page, not a conversion.
// Add new thank-you pages here as they're created.
const LEAD_PATHS = [
  "/schedule-general",
  "/schedule-central-bucks",
  "/schedule-north-bucks",
  "/schedule-south-bucks",
  "/schedule-montco-west",
  // $259 fall aeration offer confirmation.
  "/schedule-aeration",
]

// GA4 event name per confirmation page. The existing zone pages keep firing
// `generate_lead` so their reporting is unchanged; /schedule-aeration fires
// `form_submit`, which is the GA4 key event the Google Ads conversion is
// imported from. Meta fires the standard `Lead` for every path either way.
const GA_LEAD_EVENT_DEFAULT = "generate_lead"
const GA_LEAD_EVENT_BY_PATH: Record<string, string> = {
  "/schedule-aeration": "form_submit",
}

/**
 * Run `fn` once the tag exists.
 *
 * gtag and fbq are injected by <Script strategy="afterInteractive">, which can
 * land AFTER React mounts and runs this component's effect. Without this, a
 * conversion on initial page load was silently dropped whenever the effect won
 * that race. Polls briefly, then gives up rather than leaking a timer.
 */
function whenAvailable(isReady: () => boolean, fn: () => void, timeoutMs = 8000) {
  if (isReady()) {
    fn()
    return
  }
  const started = Date.now()
  const timer = window.setInterval(() => {
    if (isReady()) {
      window.clearInterval(timer)
      fn()
    } else if (Date.now() - started > timeoutMs) {
      window.clearInterval(timer)
    }
  }, 100)
}

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
    window.fbq("track", "PageView", { page_path: pagePath, page_url: pageUrl })
  }
}

function fireLeadEvents(pathname: string, pagePath: string, pageUrl: string) {
  const gaEvent = GA_LEAD_EVENT_BY_PATH[pathname] ?? GA_LEAD_EVENT_DEFAULT
  if (GA_ID) {
    whenAvailable(
      () => typeof window.gtag === "function",
      () => window.gtag!("event", gaEvent, { page_path: pagePath, page_location: pageUrl }),
    )
  }
  whenAvailable(
    () => typeof window.fbq === "function",
    () =>
      window.fbq!("track", "Lead", {
        content_name: "Schedule Page",
        page_path: pagePath,
        page_url: pageUrl,
      }),
  )
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
    const isLeadPage = LEAD_PATHS.includes(pathname)
    prevUrl.current = pagePath

    const storedUtms = captureAndStoreUtms(window.location.search)
    injectUtmsIntoUrl(storedUtms)

    if (isFirst) {
      // Initial page load — the inline GA4 config and Meta Pixel base code
      // already fired their own pageviews. Just handle lead events if applicable.
      if (isLeadPage) {
        fireLeadEvents(pathname, pagePath, pageUrl)
        lastLeadPath.current = pathname
      }
      return
    }

    // SPA navigation — gtag/fbq scripts don't re-execute, so fire manually.
    if (IS_DEV) console.log("[Analytics] route tracked:", pagePath, pageUrl)

    gtagPageView(pagePath, pageUrl)
    fbqPageView(pagePath, pageUrl)

    if (isLeadPage && lastLeadPath.current !== pathname) {
      fireLeadEvents(pathname, pagePath, pageUrl)
      lastLeadPath.current = pathname
    }
  }, [pathname, searchParams])

  return null
}
