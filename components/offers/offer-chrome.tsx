import Image from "next/image"
import Link from "next/link"
import { Phone, Star } from "lucide-react"
import { BUSINESS } from "@/lib/site"

/**
 * Page chrome shared by the /offers/* landing pages: a logo + phone header
 * (no nav — nothing competes with the single conversion path), a slim legal
 * footer, and the small Varsity decorations used between sections.
 */

export const OFFER_PHONE_HREF = "tel:+12673899789"
export const OFFER_PHONE_LABEL = "(267) 389-9789"

export function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-vm-gold text-vm-gold" aria-hidden="true" />
      ))}
    </div>
  )
}

/** Two-tone Varsity stripe that tops every section on the site. */
export function Stripes() {
  return (
    <div className="absolute top-0 right-0 left-0 flex flex-col">
      <div className="h-2.5 w-full bg-vm-gold" />
      <div className="h-2.5 w-full bg-vm-navy" />
    </div>
  )
}

export function OfferHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 px-4 py-4 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" aria-label="Varsity Mulching home">
          <Image
            src="/images/vm-logo.png"
            alt="Varsity Mulching LLC"
            width={120}
            height={80}
            priority
            className="h-11 w-auto md:h-14"
          />
        </Link>
        <a
          href={OFFER_PHONE_HREF}
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
        >
          <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="hidden sm:inline">{OFFER_PHONE_LABEL}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  )
}

/** Slim landing-page footer — legal essentials only, no nav sprawl. */
export function OfferFooter({ serviceArea }: { serviceArea: string }) {
  return (
    <>
      <footer className="bg-vm-navy-light px-4 py-8 text-center md:px-8">
        <p className="text-sm text-white/60">
          {BUSINESS.legalName} · Doylestown, PA · Fully licensed &amp; insured
        </p>
        <p className="mt-2 text-sm text-white/45">
          {serviceArea} ·{" "}
          <Link href="/privacy-policy" className="underline hover:text-white/70">
            Privacy Policy
          </Link>
        </p>
      </footer>

      {/* Bottom gutter so the sticky mobile bar never covers the footer. */}
      <div className="h-20 bg-vm-navy-light md:hidden" aria-hidden="true" />
    </>
  )
}
