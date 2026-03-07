"use client"

import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" },
  { label: "Media", href: "/media" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

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
