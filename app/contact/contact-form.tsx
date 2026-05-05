"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2 } from "lucide-react"

const services = [
  "Mulch Installation",
  "Landscape Edging",
  "Weed Control",
  "Bed Cleanup",
  "Supplements / Add-ons",
  "Multiple Services",
  "Career Inquiry",
  "Other",
]

const yardSizes = [
  "Small (under 1/4 acre)",
  "Medium (1/4 - 1/2 acre)",
  "Large (1/2 - 1 acre)",
  "Extra Large (1+ acre)",
  "Not sure",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-vm-gold/40 bg-vm-gold/10 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-vm-gold-dark" />
        <h3 className="mt-4 font-varsity text-2xl tracking-wide text-vm-navy uppercase">
          Thanks &mdash; We Got It
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-vm-navy/80">
          A representative will reach out within one business day to confirm details and schedule your free quote.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Name */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="firstName" label="First Name" required>
          <Input id="firstName" name="firstName" required autoComplete="given-name" />
        </Field>
        <Field id="lastName" label="Last Name" required>
          <Input id="lastName" name="lastName" required autoComplete="family-name" />
        </Field>
      </div>

      {/* Contact */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="email" label="Email" required>
          <Input id="email" name="email" type="email" required autoComplete="email" />
        </Field>
        <Field id="phone" label="Phone" required>
          <Input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="(267) 555-0123" />
        </Field>
      </div>

      {/* Address */}
      <Field id="address" label="Property Address" required hint="Where the work would happen">
        <Input id="address" name="address" required autoComplete="street-address" placeholder="123 Main St" />
      </Field>

      <div className="grid gap-6 sm:grid-cols-3">
        <Field id="city" label="City" required>
          <Input id="city" name="city" required autoComplete="address-level2" />
        </Field>
        <Field id="state" label="State" required>
          <Input id="state" name="state" required autoComplete="address-level1" defaultValue="PA" />
        </Field>
        <Field id="zip" label="ZIP" required>
          <Input id="zip" name="zip" required autoComplete="postal-code" inputMode="numeric" />
        </Field>
      </div>

      {/* Service */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="service" label="Service Interested In" required>
          <NativeSelect id="service" name="service" required defaultValue="">
            <option value="" disabled>Select a service&hellip;</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </NativeSelect>
        </Field>
        <Field id="yardSize" label="Yard Size">
          <NativeSelect id="yardSize" name="yardSize" defaultValue="">
            <option value="" disabled>Select an estimate&hellip;</option>
            {yardSizes.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </NativeSelect>
        </Field>
      </div>

      {/* Timing */}
      <Field id="timing" label="Ideal Timing" hint="When would you like the work done?">
        <NativeSelect id="timing" name="timing" defaultValue="">
          <option value="" disabled>Select a window&hellip;</option>
          <option>As soon as possible</option>
          <option>Within 2 weeks</option>
          <option>Within a month</option>
          <option>Just exploring &mdash; no rush</option>
        </NativeSelect>
      </Field>

      {/* Message */}
      <Field id="message" label="Anything Else?" hint="Photos, gate codes, problem areas &mdash; the more we know, the better the quote.">
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us a little about your property or project."
        />
      </Field>

      {/* Consent */}
      <p className="text-xs leading-relaxed text-muted-foreground">
        By submitting this form you agree to be contacted by Varsity Mulching about your request. We&apos;ll never sell your information.
      </p>

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-full bg-vm-navy px-7 py-4 text-base font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-lg sm:w-auto"
        >
          Request My Free Quote
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
