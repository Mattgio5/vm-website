"use client"

import { useRef, useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { toStateAbbr, type UtmParams } from "@/lib/quote-intake"
import { AddressAutofillWrapper } from "@/components/address-autofill"
import { OFFER } from "@/lib/aeration-offer"
import { trackOfferFormStart, trackOfferLead } from "@/lib/offer-tracking"
import { useOfferTracking } from "@/components/offers/offer-tracking-provider"
import { OFFER_FORM_ID } from "@/components/offers/offer-cta"

type Status = "idle" | "submitting" | "success" | "error"

/**
 * Confirmation URL carrying the UTMs forward, so the conversion event fired on
 * that page is still attributed to the ad that produced it. `sid` is included
 * for support/debugging — it ties the page view back to the Jobber request.
 */
function buildConfirmedUrl(utms: UtmParams, sid?: string | null): string {
  const params = new URLSearchParams()
  for (const [k, v] of Object.entries(utms)) {
    if (v) params.set(k, v)
  }
  if (sid) params.set("sid", sid)
  const query = params.toString()
  return query ? `${OFFER.confirmedPath}?${query}` : OFFER.confirmedPath
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
 * The one conversion point on the landing page. Five fields, no qualifying
 * questions — lawn size gets confirmed on the follow-up call, not here.
 *
 * Posts to the existing /api/lead-intake quick-quote pipeline (Supabase +
 * Flask scheduler + Jobber) with the service preset to the promo. Unlike the
 * service-page form it deliberately does NOT follow the scheduler's redirect
 * into the /schedule-* quote-booking flow: this is a fixed-price offer, so the
 * visitor stays here and sees a confirmation. That means the Lead conversion
 * has to fire from this page — see lib/offer-tracking.ts.
 */
export function OfferLeadForm() {
  const { utms, landingReferrer } = useOfferTracking()

  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [confirmedUrl, setConfirmedUrl] = useState<string | null>(null)

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

  const startFired = useRef(false)

  function onFirstInteraction() {
    if (startFired.current) return
    startFired.current = true
    trackOfferFormStart(utms)
  }

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
      // Second entry flags this as a promo lead in Jobber — see OFFER.jobberTag.
      services: [OFFER.service, OFFER.jobberTag],
      hear_about: hearAboutFromUtms(utms),
      referred_by_text: "",
      page_slug: OFFER.path,
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

      // Fire the conversion HERE, not on the confirmation page. The campaign
      // optimizes for the standard `Lead` event (not a URL-rule custom
      // conversion), so the event's URL is irrelevant — and firing here has no
      // dependency on the navigation completing. It's still accurate: we only
      // reach this line after the API confirmed ok:true.
      trackOfferLead(utms)

      const target = buildConfirmedUrl(utms, data?.sid)
      setConfirmedUrl(target)
      setStatus("success")

      // Small head start so the Pixel's beacon isn't cancelled by the
      // navigation. The success panel is on screen during this.
      window.setTimeout(() => {
        window.location.href = target
      }, 400)
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
        <p className="font-varsity text-xl tracking-wide text-white md:text-2xl">
          Fall Aeration + Overseeding
        </p>
        <p className="font-varsity mt-1 text-4xl leading-none tracking-wide text-vm-gold md:text-5xl">
          {OFFER.priceLabel}
        </p>
        <p className="mt-2 text-sm text-white/80">For lawns under {OFFER.sqFtLabel}</p>
        <p className="mt-1 text-sm font-semibold text-vm-gold">
          Sign up by {OFFER.deadlineLabel}
        </p>
      </div>

      <div className="px-5 py-6 md:px-8 md:py-7">
        {status === "success" ? (
          /* Shown only for the instant before the redirect lands — and as the
             fallback if the browser blocks it, hence the manual link. The
             conversion event lives on the confirmation page. */
          <div className="py-6 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-vm-gold" aria-hidden="true" />
            <p className="font-varsity mt-4 text-2xl tracking-wide text-white">
              Your {OFFER.priceLabel} Spot Is Reserved
            </p>
            <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed text-white/80">
              We&apos;ll reach out shortly to confirm your spot on the schedule.
            </p>
            <a
              href={confirmedUrl ?? OFFER.confirmedPath}
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

            <Field label="Property address" htmlFor="offer-address">
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
                  id="offer-address"
                  type="text"
                  name="address"
                  required
                  autoComplete="address-line1"
                  placeholder="Start typing your address…"
                  className="offer-input"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value)
                    setAddressParts(null)
                  }}
                  disabled={submitting}
                />
              </AddressAutofillWrapper>
            </Field>

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
              {submitting ? "Reserving your spot…" : OFFER.formCta}
            </button>

            <p className="text-center text-sm leading-relaxed text-white/60">
              No deposit required. We confirm your lawn size before scheduling.
            </p>
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
