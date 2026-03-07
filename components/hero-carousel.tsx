"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const slides = [
  {
    image: "/images/hero-mulch.jpg",
    heading: "Premium Mulch,\nDelivered.",
    subheading:
      "The easiest way to get quality mulch, topsoil, and stone delivered straight to your yard.",
    cta: "Get a Free Quote",
    ctaHref: "#quote",
  },
  {
    image: "/images/hero-delivery.jpg",
    heading: "Fast Delivery,\nFair Prices.",
    subheading:
      "Same-week delivery on bulk orders. Serving homeowners, contractors, and landscapers alike.",
    cta: "See Our Products",
    ctaHref: "#products",
  },
  {
    image: "/images/hero-yard.jpg",
    heading: "Your Yard,\nElevated.",
    subheading:
      "From garden beds to driveways, we have the materials to transform your outdoor space.",
    cta: "Calculate Your Needs",
    ctaHref: "#calculator",
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next])

  const slide = slides[current]

  return (
    <section className="relative h-dvh min-h-[600px] max-h-[100dvh] w-full overflow-hidden">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={s.image}
            alt={`Varsity Mulch landscaping showcase ${i + 1}`}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-vm-navy/25" />
        </div>
      ))}

      {/* Content card — glassmorphism like Yardzen */}
      <div className="relative z-10 flex h-full items-center px-4 pt-24 pb-36 md:px-12 md:pt-28 md:pb-32 lg:px-20">
        <div className="w-full max-w-xl rounded-2xl border border-white/30 bg-white/65 p-8 shadow-2xl backdrop-blur-xl md:p-10">
          <h1 className="font-serif text-4xl leading-tight font-bold tracking-tight text-vm-navy md:text-5xl lg:text-6xl">
            {slide.heading.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < slide.heading.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-vm-navy/75 md:text-lg">
            {slide.subheading}
          </p>
          <Link
            href={slide.ctaHref}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-vm-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-lg md:px-7 md:py-3.5 md:text-base"
          >
            {slide.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-20 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 md:bottom-16">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === current
                ? "scale-110 bg-vm-blue shadow-md"
                : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Schedule a call — bottom right like Yardzen */}
      <Link
        href="tel:+15551234567"
        className="absolute right-4 bottom-20 z-10 hidden rounded-full border border-white/40 bg-white/70 px-5 py-2.5 text-sm font-semibold text-vm-navy shadow-lg backdrop-blur-md transition-all hover:bg-white/90 hover:shadow-xl md:bottom-16 md:right-8 md:inline-flex"
      >
        Schedule a Free Call
      </Link>
    </section>
  )
}
