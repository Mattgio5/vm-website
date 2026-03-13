"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"

const backgroundImages = [
  "/images/hero-mulch.jpg",
  "/images/hero-delivery.jpg",
  "/images/hero-yard.jpg",
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % backgroundImages.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: 'calc(100vh - 1px)', minHeight: '600px' }}
    >
      {/* Background images */}
      {backgroundImages.map((image, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={image}
            alt={`Varsity Mulch landscaping showcase ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-vm-navy/25" />
        </div>
      ))}

      {/* Static content card */}
      <div className="relative z-10 flex h-full flex-col justify-center px-4 pt-28 pb-40 md:px-12 md:pt-32 md:pb-36 lg:px-20">
        <div className="w-full max-w-xl rounded-2xl border border-white/30 bg-white/65 p-8 shadow-2xl backdrop-blur-xl md:p-10">
          <h1 className="font-varsity text-4xl leading-tight tracking-wide text-vm-navy md:text-5xl lg:text-6xl uppercase">
            Your Yard,<br />Your Way.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-vm-navy/75 md:text-lg">
            From garden beds to driveways, we have the materials to transform your yard.
          </p>
          <Link
            href="/services"
            className="mt-6 inline-flex rounded-full bg-vm-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-lg md:px-7 md:py-3.5 md:text-base"
          >
            See Our Services
          </Link>
        </div>
      </div>

      {/* Bottom bar with dots and CTA */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-center px-4 pb-8 md:justify-between md:px-12 md:pb-10 lg:px-20">
        {/* Spacer for layout balance on desktop */}
        <div className="hidden md:block" />

        {/* Carousel dots */}
        <div className="flex items-center gap-2">
          {backgroundImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${i === current
                  ? "scale-110 bg-vm-blue shadow-md"
                  : "bg-white/60 hover:bg-white/80"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Happy customers CTA */}
        <Link
          href="/gallery"
          className="hidden rounded-full border border-white/40 bg-white/70 px-5 py-2.5 text-sm font-semibold text-vm-navy shadow-lg backdrop-blur-md transition-all hover:bg-white/90 hover:shadow-xl md:inline-flex"
        >
          Hear From Previous Customers
        </Link>
      </div>
    </section>
  )
}
