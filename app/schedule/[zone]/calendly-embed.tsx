"use client"

import { useEffect, useRef, useState } from "react"
import { Phone } from "lucide-react"

type Props = {
  calendlyUrl: string
}

const WIDGET_SCRIPT_ID = "calendly-widget-script"

export function CalendlyEmbed({ calendlyUrl }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")

  useEffect(() => {
    // Calendly's `widget.js` initializes any `.calendly-inline-widget` element
    // on the page when it loads. Re-using the same script across navigations
    // is fine — the script is idempotent.
    if (!document.getElementById(WIDGET_SCRIPT_ID)) {
      const script = document.createElement("script")
      script.id = WIDGET_SCRIPT_ID
      script.src = "https://assets.calendly.com/assets/external/widget.js"
      script.async = true
      script.onerror = () => setStatus("error")
      script.onload = () => setStatus("ready")
      document.body.appendChild(script)
    } else {
      setStatus("ready")
    }

    // Safety net: if the script never resolves, surface a fallback UI rather
    // than leaving the user staring at an empty box.
    const timer = window.setTimeout(() => {
      setStatus((prev) => (prev === "loading" ? "error" : prev))
    }, 8000)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="calendly-inline-widget"
        data-url={calendlyUrl}
        style={{ minWidth: "320px", height: "780px" }}
        aria-label="Calendly scheduling widget"
      />

      {status === "loading" && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="rounded-2xl bg-white/90 px-6 py-4 text-sm font-semibold text-vm-navy shadow-md">
            Loading calendar&hellip;
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="rounded-2xl border border-vm-gold/40 bg-vm-gold/10 p-6 text-center shadow-md">
            <p className="font-varsity text-xl tracking-wide text-vm-navy uppercase">
              Trouble loading the calendar
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-vm-navy/80">
              Try refreshing the page, or give us a quick call and we&apos;ll
              get you scheduled.
            </p>
            <a
              href="tel:+12673899789"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-vm-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-vm-navy-light"
            >
              <Phone className="h-4 w-4" />
              (267) 389-9789
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
