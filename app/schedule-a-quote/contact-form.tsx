"use client"

import { useEffect, useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { AddressAutofillWrapper } from "@/components/address-autofill"
import {
  SERVICE_OPTIONS,
  TIMING_OPTIONS,
  HEAR_ABOUT_OPTIONS,
  captureAndStoreUtms,
  type UtmParams,
} from "@/lib/quote-intake"

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

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "PA",
  zip: "",
  timing: "",
  hearAbout: "",
}

export function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [services, setServices] = useState<string[]>([])
  const [servicesOpen, setServicesOpen] = useState(false)
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [scheduleUrl, setScheduleUrl] = useState<string | null>(null)

  const utmRef = useRef<UtmParams>({})
  const pageSlugRef = useRef<string>("")

  useEffect(() => {
    utmRef.current = captureAndStoreUtms(window.location.search)
    pageSlugRef.current = window.location.pathname
  }, [])

  function update<K extends keyof typeof INITIAL_FORM>(
    key: K,
    value: (typeof INITIAL_FORM)[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  function toggleService(s: string) {
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    )
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (services.length === 0) {
      setErrorMsg("Please select at least one service.")
      setStatus("error")
      return
    }

    if (!form.hearAbout) {
      setErrorMsg("Please let us know how you heard about us.")
      setStatus("error")
      return
    }

    const target = e.currentTarget
    if (!target.checkValidity()) {
      target.reportValidity()
      return
    }

    setStatus("submitting")
    setErrorMsg(null)

    const body = {
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      phone: form.phone,
      street_address: form.address,
      city: form.city,
      state: form.state,
      zip: form.zip,
      services,
      job_timing: form.timing,
      hear_about: form.hearAbout,
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
            "Something went wrong sending your request. Please try again or call us directly.",
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
      console.error("[contact-form] submit failed:", err)
      setErrorMsg(
        "Network error. Please check your connection and try again, or call us directly.",
      )
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-vm-gold/40 bg-vm-gold/10 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-vm-gold-dark" />
        <h3 className="mt-4 font-varsity text-2xl tracking-wide text-vm-navy uppercase">
          Thanks &mdash; We Got It
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-vm-navy/80">
          {scheduleUrl ? (
            <>
              Hang tight &mdash; we&apos;re sending you to our scheduling page to pick a
              time that works for you.
            </>
          ) : (
            <>
              A representative will reach out within one business day to confirm
              details and schedule your free quote.
            </>
          )}
        </p>
        {scheduleUrl && (
          <a
            href={scheduleUrl}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-vm-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-md"
          >
            Schedule My Free Quote
          </a>
        )}
      </div>
    )
  }

  const submitting = status === "submitting"

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate={false}>
      {/* Name */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="firstName" label="First Name" required>
          <Input
            id="firstName"
            name="firstName"
            required
            autoComplete="given-name"
            value={form.firstName}
            onChange={(e) => update("firstName", e.target.value)}
            disabled={submitting}
          />
        </Field>
        <Field id="lastName" label="Last Name" required>
          <Input
            id="lastName"
            name="lastName"
            required
            autoComplete="family-name"
            value={form.lastName}
            onChange={(e) => update("lastName", e.target.value)}
            disabled={submitting}
          />
        </Field>
      </div>

      {/* Contact */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="email" label="Email" required>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            disabled={submitting}
          />
        </Field>
        <Field id="phone" label="Phone" required>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(267) 555-0123"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            disabled={submitting}
          />
        </Field>
      </div>

      {/* Address */}
      <Field id="address" label="Property Address" required>
        <AddressAutofillWrapper
          onSelect={(parts) => {
            setForm((prev) => ({
              ...prev,
              address: parts.street_address || prev.address,
              city: parts.city || prev.city,
              state: parts.state || prev.state,
              zip: parts.zip || prev.zip,
            }))
          }}
        >
          <Input
            id="address"
            name="address"
            required
            autoComplete="address-line1"
            placeholder="Start typing your address…"
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
            disabled={submitting}
          />
        </AddressAutofillWrapper>
      </Field>

      <div className="grid gap-6 sm:grid-cols-3">
        <Field id="city" label="City" required>
          <Input
            id="city"
            name="city"
            required
            autoComplete="address-level2"
            placeholder="Auto-fills from address"
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
            disabled={submitting}
          />
        </Field>
        <Field id="state" label="State" required>
          <Input
            id="state"
            name="state"
            required
            autoComplete="address-level1"
            placeholder="PA"
            value={form.state}
            onChange={(e) => update("state", e.target.value)}
            disabled={submitting}
          />
        </Field>
        <Field id="zip" label="ZIP" required>
          <Input
            id="zip"
            name="zip"
            required
            autoComplete="postal-code"
            inputMode="numeric"
            placeholder="19380"
            value={form.zip}
            onChange={(e) =>
              update("zip", e.target.value.replace(/[^\d-]/g, "").slice(0, 10))
            }
            disabled={submitting}
          />
        </Field>
      </div>

      {/* Services — multi-select */}
      <Field id="services" label="Services Interested In" required hint="Select all that apply">
        <div className="relative">
          <button
            type="button"
            onClick={() => setServicesOpen((o) => !o)}
            disabled={submitting}
            className="border-input focus-visible:border-ring focus-visible:ring-ring/50 flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
          >
            <span className={services.length ? "text-foreground" : "text-muted-foreground"}>
              {services.length ? `${services.length} selected` : "Select services…"}
            </span>
            <span className="text-muted-foreground">▾</span>
          </button>
          {servicesOpen && (
            <div className="absolute left-0 right-0 top-full z-20 mt-1 rounded-md border border-input bg-background p-2 shadow-md">
              {SERVICE_OPTIONS.map((s) => (
                <label
                  key={s}
                  className="flex cursor-pointer items-center gap-2.5 rounded px-2 py-1.5 text-sm hover:bg-muted"
                >
                  <input
                    type="checkbox"
                    checked={services.includes(s)}
                    onChange={() => toggleService(s)}
                    className="h-4 w-4 accent-vm-navy"
                  />
                  {s}
                </label>
              ))}
            </div>
          )}
        </div>
        {services.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {services.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1 rounded-full bg-vm-blue/20 px-2.5 py-0.5 text-xs font-medium text-vm-navy"
              >
                {s}
                <button
                  type="button"
                  onClick={() => toggleService(s)}
                  className="ml-0.5 text-vm-navy/60 hover:text-vm-navy"
                  aria-label={`Remove ${s}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </Field>

      {/* Timing */}
      <Field id="timing" label="Ideal Timing">
        <NativeSelect
          id="timing"
          name="timing"
          value={form.timing}
          onChange={(e) => update("timing", e.target.value)}
          disabled={submitting}
        >
          <option value="">Select a window…</option>
          {TIMING_OPTIONS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </NativeSelect>
      </Field>

      {/* How did you hear about us */}
      <Field id="hearAbout" label="How Did You Hear About Us?" required>
        <NativeSelect
          id="hearAbout"
          name="hearAbout"
          required
          value={form.hearAbout}
          onChange={(e) => update("hearAbout", e.target.value)}
          disabled={submitting}
        >
          <option value="">Select an option…</option>
          {HEAR_ABOUT_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </NativeSelect>
      </Field>

      {/* Error */}
      {status === "error" && errorMsg && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p className="leading-relaxed">{errorMsg}</p>
        </div>
      )}

      {/* Consent */}
      <p className="text-xs leading-relaxed text-muted-foreground">
        By submitting this form you agree to be contacted by Varsity Mulching about your request. We&apos;ll never sell your information.
      </p>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-vm-navy px-7 py-4 text-base font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
          {submitting ? "Sending..." : "Request My Free Quote"}
        </button>
      </div>
    </form>
  )
}

function Field({
  id,
  label,
  required,
  hint,
  children,
}: {
  id: string
  label: string
  required?: boolean
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-sm font-semibold text-vm-navy">
        {label}
        {required && <span className="ml-1 text-vm-gold-dark">*</span>}
      </Label>
      {children}
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
    </div>
  )
}

function NativeSelect(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  const { className, ...rest } = props
  return (
    <select
      {...rest}
      className={
        "border-input focus-visible:border-ring focus-visible:ring-ring/50 h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow] focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm " +
        (className ?? "")
      }
    />
  )
}
