"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const services = [
  {
    label: "Mulch Installation",
    href: "/services/mulch-installation",
    description: "Premium mulch delivered and professionally installed",
  },
  {
    label: "Flower Bed Edging",
    href: "/services/edges",
    description: "Clean, crisp borders for your garden beds",
  },
  {
    label: "Weed Control",
    href: "/services/weed-control",
    description: "Keep unwanted growth at bay year-round",
  },
  {
    label: "Bed Cleanup",
    href: "/services/bed-cleanup",
    description: "Seasonal refresh for pristine flower beds",
  },
  {
    label: "Fall Cleanup",
    href: "/services/fall-cleanup",
    description: "Whole-property leaf removal and haul-away",
  },
  {
    label: "Supplements",
    href: "/services/supplements",
    description: "Add-ons and follow-up services",
  },
]

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Media", href: "/media" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Lock body scroll + Escape-to-close while the mobile drawer is open.
  useEffect(() => {
    if (!mobileOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", onKey)
    }
  }, [mobileOpen])

  // Auto-close the drawer when the route changes.
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
        {/* Varsity stripes - full width edge-to-edge, clipped to navbar's top corners */}
        <div className="pointer-events-none mb-0 flex flex-col rounded-t-2xl overflow-hidden">
          <div className="h-[3px] w-full bg-vm-gold" />
          <div className="h-[3px] w-full bg-vm-navy" />
        </div>

        <div className="rounded-b-2xl border border-t-0 border-white/30 bg-white/70 px-4 py-3 shadow-lg backdrop-blur-xl md:px-6">
          <div className="flex items-center justify-between gap-2 md:gap-3">
            {/* Desktop links */}
            <div className="hidden items-center gap-6 md:flex">
              {/* Services Dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-vm-blue-dark ${
                    isActive("/services") ? "text-vm-blue-dark" : "text-vm-navy"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {servicesOpen && (
                  <div className="absolute left-0 top-full mt-3 w-80 origin-top-left animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="rounded-xl border border-white/40 bg-white/95 p-4 shadow-xl backdrop-blur-xl">
                      <div className="mb-3 border-b border-vm-navy/10 pb-3">
                        <Link
                          href="/services"
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center justify-between rounded-lg bg-muted/60 px-3 py-2.5 text-sm font-medium text-vm-navy transition-colors hover:bg-muted"
                        >
                          View All Services
                          <span className="text-vm-navy/60">&rarr;</span>
                        </Link>
                      </div>
                      <div className="flex flex-col gap-1">
                        {services.map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            onClick={() => setServicesOpen(false)}
                            className="group rounded-lg p-2.5 transition-colors hover:bg-vm-blue/10"
                          >
                            <span className="block text-sm font-medium text-vm-navy">
                              {service.label}
                            </span>
                            <span className="text-xs text-vm-navy/60">
                              {service.description}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-vm-blue-dark ${
                    isActive(link.href) ? "text-vm-blue-dark" : "text-vm-navy"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Logo:
                 - Mobile: lives in flow on the left edge (no overlap with the CTA).
                 - Desktop (md+): absolute-centered as before. */}
            <Link
              href="/"
              className="relative z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2"
              aria-label="Varsity Mulching home"
            >
              <Image
                src="/images/vm-logo.png"
                alt="Varsity Mulching LLC"
                width={120}
                height={80}
                className="h-11 w-auto transition-transform hover:scale-105 md:h-14"
                priority
              />
            </Link>

            {/* CTA + mobile hamburger */}
            <div className="flex items-center gap-2 md:gap-3">
              <Link
                href="/faq"
                className={`hidden text-sm font-medium transition-colors hover:text-vm-blue-dark md:inline-flex ${
                  isActive("/faq") ? "text-vm-blue-dark" : "text-vm-navy"
                }`}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 rounded-full bg-vm-blue px-3.5 py-1.5 text-xs font-semibold text-vm-navy transition-all hover:bg-vm-blue-dark hover:shadow-md sm:px-4 sm:py-2 sm:text-sm md:px-5"
              >
                Get a Quote
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-vm-navy/15 bg-white/40 text-vm-navy transition-colors hover:bg-white/70 md:hidden"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {/* Varsity-stripe hamburger: navy / gold / navy */}
                <span className="flex flex-col gap-1.5">
                  <span className="block h-[2px] w-4 rounded-full bg-vm-navy" />
                  <span className="block h-[2px] w-4 rounded-full bg-vm-gold" />
                  <span className="block h-[2px] w-4 rounded-full bg-vm-navy" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/*
        MOBILE DRAWER
        Full-screen "yearbook spread" — varsity stripes top + bottom,
        numbered service roster in font-varsity, tiled secondary nav,
        gold CTA + tel link footer. Sliding panel from the right.
      */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!mobileOpen}
        className={`fixed inset-0 z-[60] md:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Sliding navy panel */}
        <div
          className={`absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-vm-navy text-white shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top varsity stripes */}
          <div className="pointer-events-none flex shrink-0 flex-col">
            <div className="h-1.5 w-full bg-vm-gold" />
            <div className="h-1.5 w-full bg-white/20" />
          </div>

          {/* Panel header: logo + close */}
          <div className="flex items-center justify-between px-5 pt-6 pb-4">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              aria-label="Varsity Mulching home"
            >
              <Image
                src="/images/vm-logo.png"
                alt="Varsity Mulching LLC"
                width={120}
                height={80}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:border-vm-gold/40 hover:bg-vm-gold/10 hover:text-vm-gold"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Scrollable body */}
          <div className="flex-1 overflow-y-auto px-5 pb-6">
            {/* Section: Services */}
            <div className="mt-4">
              <div className="mb-3 flex items-center gap-3">
                <span className="font-varsity text-[11px] tracking-[0.3em] text-vm-gold uppercase">
                  Services
                </span>
                <span className="h-px flex-1 bg-vm-gold/25" />
              </div>

              <ul className="flex flex-col">
                {services.map((service, i) => {
                  const active = isActive(service.href)
                  return (
                    <li key={service.label}>
                      <Link
                        href={service.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center gap-4 border-b border-white/8 py-3.5 transition-colors hover:bg-white/[0.04]"
                      >
                        <span
                          className={`font-varsity text-xs tracking-[0.2em] tabular-nums uppercase transition-colors ${
                            active ? "text-vm-gold" : "text-white/35 group-hover:text-vm-gold/70"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`flex-1 text-base font-semibold tracking-wide transition-colors ${
                            active ? "text-vm-gold" : "text-white group-hover:text-vm-gold"
                          }`}
                        >
                          {service.label}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`text-base transition-all ${
                            active
                              ? "text-vm-gold"
                              : "text-vm-gold/30 group-hover:translate-x-1 group-hover:text-vm-gold"
                          }`}
                        >
                          &rarr;
                        </span>
                      </Link>
                    </li>
                  )
                })}
                <li>
                  <Link
                    href="/services"
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center justify-between py-3.5 text-sm font-medium uppercase tracking-[0.18em] transition-colors ${
                      pathname === "/services" ? "text-vm-gold" : "text-white/65 hover:text-vm-gold"
                    }`}
                  >
                    See all services
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Section: Explore */}
            <div className="mt-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="font-varsity text-[11px] tracking-[0.3em] text-vm-gold uppercase">
                  Explore
                </span>
                <span className="h-px flex-1 bg-vm-gold/25" />
              </div>
              <ul className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => {
                  const active = isActive(link.href)
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex h-14 items-center justify-center rounded-xl border text-sm font-semibold uppercase tracking-[0.18em] transition-all ${
                          active
                            ? "border-vm-gold/60 bg-vm-gold/15 text-vm-gold"
                            : "border-white/12 bg-white/[0.04] text-white hover:border-vm-gold/40 hover:bg-vm-gold/10 hover:text-vm-gold"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                })}
                <li className="col-span-2">
                  <Link
                    href="/faq"
                    onClick={() => setMobileOpen(false)}
                    className={`flex h-14 items-center justify-center rounded-xl border text-sm font-semibold uppercase tracking-[0.18em] transition-all ${
                      isActive("/faq")
                        ? "border-vm-gold/60 bg-vm-gold/15 text-vm-gold"
                        : "border-white/12 bg-white/[0.04] text-white hover:border-vm-gold/40 hover:bg-vm-gold/10 hover:text-vm-gold"
                    }`}
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* CTA block */}
            <div className="mt-8">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="group relative flex items-center justify-between overflow-hidden rounded-2xl bg-vm-gold px-5 py-4 shadow-lg shadow-vm-gold/10 transition-all hover:bg-vm-gold/90"
              >
                <span className="flex flex-col">
                  <span className="font-varsity text-base tracking-wide text-vm-navy uppercase leading-tight">
                    Get a Free Quote
                  </span>
                  <span className="text-[11px] tracking-wider text-vm-navy/65 uppercase">
                    No obligation &middot; ~24h reply
                  </span>
                </span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-vm-navy text-vm-gold transition-transform group-hover:translate-x-1">
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </Link>

              <a
                href="tel:+12674891567"
                className="mt-3 flex items-center justify-center gap-2 py-3 text-sm tracking-wide text-white/70 transition-colors hover:text-vm-gold"
              >
                <span className="font-varsity text-[10px] tracking-[0.3em] text-vm-gold/80 uppercase">
                  Or call
                </span>
                <span className="font-semibold">(267) 489-1567</span>
              </a>
            </div>
          </div>

          {/* Bottom varsity stripes — mirrors the top, closing the spread */}
          <div className="pointer-events-none flex shrink-0 flex-col">
            <div className="h-1.5 w-full bg-white/20" />
            <div className="h-1.5 w-full bg-vm-gold" />
          </div>
        </div>
      </div>
    </>
  )
}
