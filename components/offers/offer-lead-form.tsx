"use client"

import { useRef, useState } from "react"
import { CheckCircle2 } from "lucide-react"
import {
  formatAddress,
  validateAddressParts,
  type UtmParams,
} from "@/lib/quote-intake"
import {
  AddressFields,
  EMPTY_ADDRESS,
  type AddressValue,
} from "@/components/address-fields"
import { trackOfferFormStart } from "@/lib/offer-tracking"
import { useOfferTracking } from "@/components/offers/offer-tracking-provider"
import { OFFER_FORM_ID } from "@/components/offers/offer-cta"

type Status = "idle" | "submitting" | "success" | "error"

/** Matches the per-entry cap on `services` in quickQuoteSchema. */
const SERVICE_ENTRY_MAX = 120

/**
 * Confirmation URL carrying the UTMs forward, so the conversion event fired on
 * that page is still attributed to the ad that produced it. `sid` is included
 * for support/debugging — it ties the page view back to the Jobber request.
 */
function buildConfirmedUrl(path: string, utms: UtmParams, sid?: string | null): string {
  const params = new URLSearchParams()
  for (const [k, v] of Object.entries(utms)) {
    if (v) params.set(k, v)
  }
  if (sid) params.set("sid", sid)
  const query = params.toString()
  return query ? `${path}?${query}` : path
}

/**
 * Meta ad clicks arrive with utm_source=facebook/instagram. Deriving
 * hear_about from that keeps the Supabase/Jobber field populated without
 * adding a qualifying question ahead of the lead.
 */
function hearAboutFromUtms(utms: UtmParams): string {
  const source = (utms.utm_source || "").toLowerCase()
  if (/facebook|instagram|meta|fb|ig/.test(source)) return "Facebook"
  if (utms.fbclid) return "Facebook"
  if (/google|gads|adwords/.test(source)) return "Google"
  if (utms.gclid) return "Google"
  return "Other"
}

/**
 * Customer notes as a single `services` entry, so the crew sees them on the
 * Jobber request (the Flask scheduler joins `services` into free text). The
 * full, untruncated notes are saved to Supabase `message` separately.
 */
function notesServiceEntry(notes: string): string {
  const entry = `Customer notes: ${notes.replace(/\s+/g, " ")}`
  return entry.length > SERVICE_ENTRY_MAX ? `${entry.slice(0, SERVICE_ENTRY_MAX - 1)}…` : entry
}

/**
 * The one conversion point on an offer landing page. Name, phone, email and
 * address — plus an optional notes box when `showNotes` is set.
 *
 * Posts to the existing /api/lead-intake quick-quote pipeline (Supabase +
 * Flask scheduler + Jobber) with the service preset to the promo, then
 * redirects to the offer's `confirmedPath`. That page is registered in
 * LEAD_PATHS (components/analytics-tracker.tsx), which fires GA4
 * `generate_lead` + Meta `Lead` there. This form fires no conversion event of
 * its own.
 */
export function OfferLeadForm({
  header,
  footnote,
  showNotes = false,
  notesLabel = "Anything we should know? (optional)",
  notesPlaceholder = "",
}: {
  /** Offer restated on the form itself, above the fields. */
  header: React.ReactNode
  footnote: string
  showNotes?: boolean
  notesLabel?: string
  notesPlaceholder?: string
}) {
  const { offer, utms, landingReferrer } = useOfferTracking()

  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [confirmedUrl, setConfirmedUrl] = useState<string | null>(null)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [addr, setAddr] = useState<AddressValue>(EMPTY_ADDRESS)
  const [notes, setNotes] = useState("")

  const startFired = useRef(false)

  function onFirstInteraction() {
    if (startFired.current) return
    startFired.current = true
    trackOfferFormStart(offer, utms)
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    if (status === "submitting") return
    const addressError = validateAddressParts(addr)
    if (addressError) {
      setErrorMsg(addressError)
      setStatus("error")
      return
    }

    setStatus("submitting")
    setErrorMsg(null)

    const trimmedNotes = notes.trim()

    const body = {
      full_name: [firstName.trim(), lastName.trim()].filter(Boolean).join(" "),
      email,
      phone,
      address: formatAddress(addr),
      street_address: addr.street_address,
      city: addr.city,
      state: addr.state,
      zip: addr.zip,
      address_source: addr.address_source,
      // Second entry flags this as a promo lead in Jobber — see offer.jobberTag.
      services: [
        offer.service,
        offer.jobberTag,
        ...(trimmedNotes ? [notesServiceEntry(trimmedNotes)] : []),
      ],
      message: trimmedNotes,
      hear_about: hearAboutFromUtms(utms),
      referred_by_text: "",
      page_slug: offer.path,
      landing_referrer: landingReferrer,
      utm: utms,
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
            "Something went wrong sending your request. Please try again, or call us at (267) 389-9789.",
        )
        setStatus("error")
        return
      }

      // No conversion event here. Redirecting to the confirmation page lets the
      // site's single lead mechanism (LEAD_PATHS in analytics-tracker.tsx)
      // fire GA4 generate_lead + Meta Lead. That page is the one and only
      // conversion location for this flow.
      const target = buildConfirmedUrl(offer.confirmedPath, utms, data?.sid)
      setConfirmedUrl(target)
      setStatus("success")
      window.location.href = target
    } catch (err) {
      console.error("[offer-lead-form] submit failed:", err)
      setErrorMsg(
        "Network error. Please check your connection and try again, or call us at (267) 389-9789.",
      )
      setStatus("error")
    }
  }

  const submitting = status === "submitting"

  return (
    <div
      id={OFFER_FORM_ID}
      className="scroll-mt-4 overflow-hidden rounded-3xl border border-vm-gold/30 bg-vm-navy shadow-2xl"
    >
      {/* Offer restated on the form itself — the visitor never has to scroll
          back up to remember what they're claiming. */}
      <div className="border-b border-white/10 bg-vm-navy-light/60 px-5 py-5 text-center md:px-8">
        {header}
      </div>

      <div className="px-5 py-6 md:px-8 md:py-7">
        {status === "success" ? (
          /* Shown only for the instant before the redirect lands — and as the
             fallback if the browser blocks it, hence the manual link. The
             conversion event lives on the confirmation page. */
          <div className="py-6 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-vm-gold" aria-hidden="true" />
            <p className="font-varsity mt-4 text-2xl tracking-wide text-white">
              {offer.successTitle}
            </p>
            <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed text-white/80">
              {offer.successBody}
            </p>
            <a
              href={confirmedUrl ?? offer.confirmedPath}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-vm-gold px-6 py-3 text-base font-bold text-vm-navy transition-colors hover:bg-vm-gold-dark"
            >
              Continue
            </a>
          </div>
        ) : (
          <form onSubmit={onSubmit} onFocusCapture={onFirstInteraction} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First name" htmlFor="offer-first">
                <input
                  id="offer-first"
                  type="text"
                  name="firstName"
                  required
                  autoComplete="given-name"
                  placeholder="Jane"
                  className="offer-input"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  disabled={submitting}
                />
              </Field>
              <Field label="Last name" htmlFor="offer-last">
                <input
                  id="offer-last"
                  type="text"
                  name="lastName"
                  required
                  autoComplete="family-name"
                  placeholder="Smith"
                  className="offer-input"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  disabled={submitting}
                />
              </Field>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Phone" htmlFor="offer-phone">
                <input
                  id="offer-phone"
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  placeholder="(267) 555-0123"
                  className="offer-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={submitting}
                />
              </Field>
              <Field label="Email" htmlFor="offer-email">
                <input
                  id="offer-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  placeholder="you@example.com"
                  className="offer-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitting}
                />
              </Field>
            </div>

            <AddressFields
              value={addr}
              onChange={setAddr}
              idPrefix="offer"
              variant="dark"
              disabled={submitting}
              inputClassName="offer-input"
              selectClassName="offer-select"
              renderField={({ label, htmlFor, children }) => (
                <Field key={htmlFor} label={label} htmlFor={htmlFor}>
                  {children}
                </Field>
              )}
            />

            {showNotes && (
              <Field label={notesLabel} htmlFor="offer-notes">
                <textarea
                  id="offer-notes"
                  name="notes"
                  rows={3}
                  maxLength={1000}
                  placeholder={notesPlaceholder}
                  className="offer-input resize-y"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  disabled={submitting}
                />
              </Field>
            )}

            {status === "error" && errorMsg && (
              <p
                role="alert"
                className="rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm leading-relaxed text-red-100"
              >
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center rounded-full bg-vm-gold px-6 py-4 text-base font-bold tracking-wide text-vm-navy shadow-lg transition-all hover:bg-vm-gold-dark hover:shadow-xl active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70 md:text-lg"
            >
              {submitting ? offer.submittingLabel : offer.formCta}
            </button>

            <p className="text-center text-sm leading-relaxed text-white/60">{footnote}</p>
          </form>
        )}
      </div>

      <style jsx>{`
        :global(.offer-input) {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background-color: rgba(255, 255, 255, 0.07);
          padding: 0.875rem 1rem;
          /* 16px minimum — anything smaller makes iOS Safari zoom on focus. */
          font-size: 1rem;
          color: #ffffff;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        :global(.offer-input::placeholder) {
          color: rgba(255, 255, 255, 0.45);
        }
        :global(.offer-input:focus-visible) {
          border-color: var(--vm-gold);
          box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.25);
        }
        :global(.offer-select) {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='rgba(255,255,255,0.45)' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          padding-right: 2rem;
          cursor: pointer;
        }
        :global(.offer-select option) {
          background-color: #0b1d3a;
          color: #ffffff;
        }
      `}</style>
    </div>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-white">
        {label}
      </label>
      {children}
    </div>
  )
}
