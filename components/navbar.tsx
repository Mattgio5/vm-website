"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
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
    label: "Landscape Edging",
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

              {/* Dropdown Panel */}
              {servicesOpen && (
                <div className="absolute left-0 top-full mt-3 w-80 origin-top-left animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="rounded-xl border border-white/40 bg-white/95 p-4 shadow-xl backdrop-blur-xl">
                    {/* Overview section with View All at top */}
                    <div className="mb-3 border-b border-vm-navy/10 pb-3">
                      <p className="text-sm text-vm-navy/70">
                        Professional landscaping solutions for beautiful, maintained outdoor spaces.
                      </p>
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="mt-2 inline-block text-sm font-semibold text-vm-blue-dark hover:underline"
                      >
                        See All Services
                      </Link>
                    </div>

                    {/* Service links */}
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

          {/* Logo - Home button */}
          <Link 
            href="/" 
            className="absolute left-1/2 -translate-x-1/2"
          >
            <Image
              src="/images/vm-logo.png"
              alt="Varsity Mulching LLC"
              width={120}
              height={80}
              className="h-12 w-auto transition-transform hover:scale-105 md:h-14"
              priority
            />
          </Link>

          {/* CTA button */}
          <div className="flex items-center">
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
              <p className="px-3 pb-2 text-xs text-vm-navy/60">
                Professional landscaping solutions
              </p>
              <Link
                href="/services"
                onClick={() => setMobileOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-vm-blue/15 ${
                  isActive("/services") ? "text-vm-blue-dark" : "text-vm-navy"
                }`}
              >
                See All Services
              </Link>
              {services.map((service) => (
                <Link
                  key={service.label}
                  href={service.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 transition-colors hover:bg-vm-blue/15 ${
                    isActive(service.href) ? "text-vm-blue-dark" : "text-vm-navy"
                  }`}
                >
                  <span className="text-sm font-medium">{service.label}</span>
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="my-1 border-t border-vm-navy/10" />

            {/* Other Links */}
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-vm-blue/15 ${
                  isActive(link.href) ? "text-vm-blue-dark" : "text-vm-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="tel:+15551234567"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-vm-navy transition-colors hover:bg-vm-blue/15"
            >
              Call Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
