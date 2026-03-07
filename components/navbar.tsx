"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X, Phone, ChevronDown, Leaf, Scissors, Bug, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    label: "Mulch Installation",
    href: "/services/mulch-installation",
    description: "Premium mulch delivered and professionally installed",
    icon: Leaf,
  },
  {
    label: "Landscape Edging",
    href: "/services/edges",
    description: "Clean, crisp borders for your garden beds",
    icon: Scissors,
  },
  {
    label: "Weed Control",
    href: "/services/weed-control",
    description: "Keep unwanted growth at bay year-round",
    icon: Bug,
  },
  {
    label: "Bed Cleanup",
    href: "/services/bed-cleanup",
    description: "Seasonal refresh for pristine flower beds",
    icon: Sparkles,
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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
      <div className="rounded-2xl border border-white/30 bg-white/70 px-4 py-3 shadow-lg backdrop-blur-xl md:px-6">
        <div className="flex items-center justify-between">
          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-vm-navy transition-colors hover:bg-vm-blue/20 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 md:flex">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="rounded-lg p-2 text-vm-navy transition-colors hover:bg-vm-blue/20"
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Services Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-sm font-medium text-vm-navy transition-colors hover:text-vm-blue-dark"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Panel */}
              {servicesOpen && (
                <div className="absolute left-0 top-full mt-3 w-80 origin-top-left animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="rounded-xl border border-white/40 bg-white/95 p-4 shadow-xl backdrop-blur-xl">
                    {/* Overview section */}
                    <div className="mb-3 border-b border-vm-navy/10 pb-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-vm-blue-dark">
                        Our Services
                      </p>
                      <p className="mt-1 text-sm text-vm-navy/70">
                        Professional landscaping solutions for beautiful, maintained outdoor spaces.
                      </p>
                    </div>

                    {/* Service links */}
                    <div className="flex flex-col gap-1">
                      {services.map((service) => (
                        <Link
                          key={service.label}
                          href={service.href}
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-start gap-3 rounded-lg p-2.5 transition-colors hover:bg-vm-blue/10"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-vm-blue/20 text-vm-navy transition-colors group-hover:bg-vm-blue/30">
                            <service.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <span className="block text-sm font-medium text-vm-navy">
                              {service.label}
                            </span>
                            <span className="text-xs text-vm-navy/60">
                              {service.description}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* View All Services link */}
                    <div className="mt-3 border-t border-vm-navy/10 pt-3">
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="flex items-center justify-between rounded-lg bg-vm-navy/5 px-3 py-2.5 text-sm font-medium text-vm-navy transition-colors hover:bg-vm-navy/10"
                      >
                        View All Services
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-vm-navy transition-colors hover:text-vm-blue-dark"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/images/vm-logo.png"
              alt="Varsity Mulching LLC"
              width={120}
              height={80}
              className="h-12 w-auto md:h-14"
              priority
            />
          </Link>

          {/* CTA buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            <Link
              href="#contact"
              className="hidden rounded-full border border-vm-navy/20 bg-white px-5 py-2 text-sm font-medium text-vm-navy transition-all hover:border-vm-navy/40 hover:shadow-sm md:inline-flex"
            >
              Login
            </Link>
            <Link
              href="#quote"
              className="inline-flex items-center gap-1.5 rounded-full bg-vm-blue px-4 py-2 text-sm font-semibold text-vm-navy transition-all hover:bg-vm-blue-dark hover:shadow-md md:px-5"
            >
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="mt-3 flex flex-col gap-1 border-t border-vm-navy/10 pt-3 md:hidden">
            {/* Services Section */}
            <div className="mb-2">
              <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-vm-blue-dark">
                Services
              </p>
              <p className="px-3 pb-2 text-xs text-vm-navy/60">
                Professional landscaping solutions
              </p>
              {services.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-vm-blue/15"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-vm-blue/20 text-vm-navy">
                    <service.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-vm-navy">{service.label}</span>
                </Link>
              ))}
              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                className="mx-3 mt-1 flex items-center justify-between rounded-lg bg-vm-navy/5 px-3 py-2 text-sm font-medium text-vm-navy"
              >
                View All Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Divider */}
            <div className="my-1 border-t border-vm-navy/10" />

            {/* Other Links */}
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-vm-navy transition-colors hover:bg-vm-blue/15"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="tel:+15551234567"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-vm-navy transition-colors hover:bg-vm-blue/15"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
