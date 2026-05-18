"use client"

import { useEffect, useRef, useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import {
  SERVICE_OPTIONS,
  YARD_SIZE_OPTIONS,
  TIMING_OPTIONS,
  extractUtmFromSearch,
  type UtmParams,
} from "@/lib/quote-intake"

type Status = "idle" | "submitting" | "success" | "error"

const INITIAL_FORM = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "PA",
  zip: "",
  service: "",
  yardSize: "",
  timing: "",
  message: "",
}

export function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [scheduleUrl, setScheduleUrl] = useState<string | null>(null)

  const utmRef = useRef<UtmParams>({})
  const pageSlugRef = useRef<string>("")

  // Capture UTMs + page slug on mount (client-only).
  useEffect(() => {
    utmRef.current = extractUtmFromSearch(window.location.search)
    pageSlugRef.current = window.location.pathname
  }, [])

  function update<K extends keyof typeof INITIAL_FORM>(
    key: K,
    value: (typeof INITIAL_FORM)[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Native required validation has already run because of the browser
    // submitting the form. We add a tiny belt-and-suspenders check here for
    // the rare path where validation is bypassed (e.g. JS-driven submit).
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
      service: form.service,
      yard_size: form.yardSize,
      job_timing: form.timing,
      message: form.message,
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

      // Success — capture the Calendly URL so we can both auto-redirect and
      // give the user a manual link as a fallback.
      const redirect: string | null = data?.redirect_to || data?.schedule_url || null
      setScheduleUrl(redirect)
      setStatus("success")

      if (redirect) {
        // Brief pause so the user sees the success state before redirecting.
        window.setTimeout(() => {
          window.location.href = redirect
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
        <Input
          id="address"
          name="address"
          required
          autoComplete="street-address"
          placeholder="123 Main St"
          value={form.address}
          onChange={(e) => update("address", e.target.value)}
          disabled={submitting}
        />
      </Field>

      <div className="grid gap-6 sm:grid-cols-3">
        <Field id="city" label="City" required>
          <Input
            id="city"
            name="city"
            required
            autoComplete="address-level2"
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
            value={form.zip}
            onChange={(e) =>
              update("zip", e.target.value.replace(/[^\d-]/g, "").slice(0, 10))
            }
            disabled={submitting}
          />
        </Field>
      </div>

      {/* Service */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="service" label="Service Interested In" required>
          <NativeSelect
            id="service"
            name="service"
            required
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
            disabled={submitting}
          >
            <option value="" disabled>
              Select a service&hellip;
            </option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </NativeSelect>
        </Field>
        <Field id="yardSize" label="Yard Size">
          <NativeSelect
            id="yardSize"
            name="yardSize"
            value={form.yardSize}
            onChange={(e) => update("yardSize", e.target.value)}
            disabled={submitting}
          >
            <option value="">Select an estimate&hellip;</option>
            {YARD_SIZE_OPTIONS.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </NativeSelect>
        </Field>
      </div>

      {/* Timing */}
      <Field id="timing" label="Ideal Timing" hint="When would you like the work done?">
        <NativeSelect
          id="timing"
          name="timing"
          value={form.timing}
          onChange={(e) => update("timing", e.target.value)}
          disabled={submitting}
        >
          <option value="">Select a window&hellip;</option>
          {TIMING_OPTIONS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </NativeSelect>
      </Field>

      {/* Message */}
      <Field id="message" label="Anything Else?">
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us a little about your property or project."
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          disabled={submitting}
        />
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
