"use client"

import { useEffect, useRef, useState } from "react"
import { captureAndStoreUtms, toStateAbbr, HEAR_ABOUT_OPTIONS, type UtmParams } from "@/lib/quote-intake"
import { AddressAutofillWrapper } from "@/components/address-autofill"

type Status = "idle" | "submitting" | "success" | "error"

function appendUtmsToUrl(url: string | null, utms: UtmParams): string | null {
  if (!url || Object.keys(utms).length === 0) return url
  try {
    const parsed = new URL(url, window.location.origin)
    for (const [k, v] of Object.entries(utms)) {
      if (v) parsed.searchParams.set(k, v)
    }
    return parsed.toString()
  } catch {
    return url
  }
}

/**
 * Compact aeration-specific quote form. Reuses the homepage quick-quote
 * pipeline (/api/lead-intake → Supabase + Flask scheduler → Jobber) with the
 * service preset to Core Aeration & Overseeding. Same UTM capture, same
 * post-submit schedule redirect (which carries the existing conversion
 * tracking on the /schedule-* pages).
 */
export function AerationQuoteForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [scheduleUrl, setScheduleUrl] = useState<string | null>(null)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [addressParts, setAddressParts] = useState<{
    street_address: string
    city: string
    state: string
    zip: string
  } | null>(null)
  const [hearAbout, setHearAbout] = useState("")

  const utmRef = useRef<UtmParams>({})
  const pageSlugRef = useRef<string>("")

  useEffect(() => {
    utmRef.current = captureAndStoreUtms(window.location.search)
    pageSlugRef.current = window.location.pathname
  }, [])

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    if (status === "submitting") return

    setStatus("submitting")
    setErrorMsg(null)

    const body = {
      full_name: [firstName.trim(), lastName.trim()].filter(Boolean).join(" "),
      email,
      phone,
      address,
      ...(addressParts ?? {}),
      services: ["Core Aeration & Overseeding"],
      hear_about: hearAbout,
      page_slug: pageSlugRef.current,
      utm: utmRef.current,
    }

    try {
      const res = await fetch("/api/lead-intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok || !data?.ok) {
        const issuesMsg =
          Array.isArray(data?.issues) && data.issues.length
            ? data.issues
                .map((i: { path: string; message: string }) =>
                  i.path ? `${i.path}: ${i.message}` : i.message,
                )
                .join("; ")
            : null
        setErrorMsg(
          issuesMsg ||
            data?.error ||
            "Something went wrong sending your request. Please try again.",
        )
        setStatus("error")
        return
      }

      const redirect: string | null = data?.redirect_to || data?.schedule_url || null
      const finalRedirect = appendUtmsToUrl(redirect, utmRef.current)
      setScheduleUrl(finalRedirect)
      setStatus("success")

      if (finalRedirect) {
        window.setTimeout(() => {
          window.location.href = finalRedirect
        }, 800)
      }
    } catch (err) {
      console.error("[aeration-quote] submit failed:", err)
      setErrorMsg(
        "Network error. Please check your connection and try again, or call us directly.",
      )
      setStatus("error")
    }
  }

  const submitting = status === "submitting"

  return (
    <div
      id="aeration-quote"
      className="scroll-mt-28 rounded-2xl border border-white/15 bg-vm-navy/80 p-4 shadow-2xl backdrop-blur-xl md:p-5"
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-vm-gold md:text-xs">
        Seasonal Service
      </p>
      <h2 className="mt-0.5 text-lg font-semibold text-white md:text-xl">
        Get Your Aeration &amp; Overseeding Quote
      </h2>
      <p className="mt-1 text-xs leading-relaxed text-white/75 md:text-sm">
        During regular business hours, receive a quote within 30 minutes of filling out the form.
      </p>

      {status === "success" ? (
        <div className="mt-3 rounded-xl border border-vm-gold/40 bg-vm-gold/10 p-4 text-center">
          <p className="font-varsity text-lg tracking-wide text-white uppercase">
            Thanks &mdash; We Got It
          </p>
          <p className="mt-1 text-xs text-white/85">
            {scheduleUrl
              ? "Sending you to schedule a time…"
              : "A rep will reach out within one business day."}
          </p>
          {scheduleUrl && (
            <a
              href={scheduleUrl}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-vm-gold px-4 py-2 text-xs font-bold uppercase tracking-wide text-vm-navy hover:bg-vm-gold-dark"
            >
              Schedule My Quote
            </a>
          )}
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-3 space-y-2.5">
          <div className="grid gap-2.5 sm:grid-cols-2">
            <Field label="First name">
              <input
                type="text"
                name="firstName"
                required
                autoComplete="given-name"
                placeholder="Jane"
                className="aeration-input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                disabled={submitting}
              />
            </Field>
            <Field label="Last name">
              <input
                type="text"
                name="lastName"
                required
                autoComplete="family-name"
                placeholder="Smith"
                className="aeration-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                disabled={submitting}
              />
            </Field>
          </div>

          <Field label="Property address">
            <AddressAutofillWrapper
              variant="dark"
              onSelect={(parts) => {
                const stateAbbr = toStateAbbr(parts.state) || parts.state
                const clean = [
                  parts.street_address,
                  parts.city,
                  [stateAbbr, parts.zip].filter(Boolean).join(" "),
                ]
                  .filter(Boolean)
                  .join(", ")
                setAddress(clean || parts.full_address)
                setAddressParts({
                  street_address: parts.street_address,
                  city: parts.city,
                  state: stateAbbr,
                  zip: parts.zip,
                })
              }}
            >
              <input
                type="text"
                name="address"
                required
                autoComplete="address-line1"
                placeholder="Start typing your address…"
                className="aeration-input"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value)
                  setAddressParts(null)
                }}
                disabled={submitting}
              />
            </AddressAutofillWrapper>
          </Field>

          <div className="grid gap-2.5 sm:grid-cols-2">
            <Field label="Email">
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="aeration-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={submitting}
              />
            </Field>
            <Field label="Phone">
              <input
                type="tel"
                name="phone"
                required
                autoComplete="tel"
                placeholder="(267) 555-0123"
                className="aeration-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={submitting}
              />
            </Field>
          </div>

          <Field label="How did you hear about us?">
            <select
              name="hearAbout"
              className="aeration-input aeration-select"
              value={hearAbout}
              onChange={(e) => setHearAbout(e.target.value)}
              disabled={submitting}
            >
              <option value="">Select one…</option>
              {HEAR_ABOUT_OPTIONS.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </Field>

          {status === "error" && errorMsg && (
            <p
              role="alert"
              className="rounded-lg border border-red-400/40 bg-red-500/10 px-3 py-2 text-xs leading-relaxed text-red-100"
            >
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-vm-gold px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-vm-navy transition-all hover:bg-vm-gold-dark hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "Sending…" : "Get My Fall Lawn Quote"}
          </button>
        </form>
      )}

      <style jsx>{`
        :global(.aeration-input) {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background-color: rgba(255, 255, 255, 0.06);
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          color: #ffffff;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        :global(.aeration-input::placeholder) {
          color: rgba(255, 255, 255, 0.45);
        }
        :global(.aeration-input:focus-visible) {
          border-color: var(--vm-gold);
          box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.25);
        }
        :global(.aeration-select) {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(255,255,255,0.45)' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          padding-right: 2rem;
          cursor: pointer;
        }
        :global(.aeration-select option) {
          background-color: #0b1d3a;
          color: #ffffff;
        }
      `}</style>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between">
        <span className="text-xs font-semibold text-white">{label}</span>
      </div>
      {children}
    </div>
  )
}
