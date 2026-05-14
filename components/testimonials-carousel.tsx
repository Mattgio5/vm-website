"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { testimonials, type Testimonial } from "@/lib/testimonials"

function Stars() {
  return (
    <div aria-label="5 out of 5 stars" className="flex gap-0.5 text-vm-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M10 1.5l2.6 5.4 5.9.6-4.4 4 1.3 5.8L10 14.7 4.6 17.3l1.3-5.8L1.5 7.5l5.9-.6L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase()
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-vm-blue/40 text-sm font-semibold text-vm-navy">
      {initials}
    </div>
  )
}

function Card({ t }: { t: Testimonial }) {
  return (
    <article className="flex h-full w-[min(85vw,360px)] shrink-0 flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:w-[360px]">
      {t.image ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          <img
            src={t.image}
            alt={`Work completed for ${t.name}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <Stars />
        <p className="mt-3 flex-1 text-sm leading-relaxed text-vm-navy/80 md:text-base">
          &ldquo;{t.quote}&rdquo;
        </p>
        <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
          {!t.image && <Initials name={t.name} />}
          <div>
            <p className="text-sm font-bold text-vm-navy">{t.name}</p>
            <p className="text-xs text-muted-foreground">Verified Google Review</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export function TestimonialsCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const [canScroll, setCanScroll] = useState({ left: false, right: true })

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    setCanScroll({
      left: el.scrollLeft > 8,
      right: el.scrollLeft + el.clientWidth < el.scrollWidth - 8,
    })
  }, [])

  // Auto-advance
  useEffect(() => {
    if (paused) return
    const el = scrollerRef.current
    if (!el) return
    const id = setInterval(() => {
      if (!el) return
      const cardWidth = el.firstElementChild?.clientWidth ?? 360
      const gap = 24
      const next = el.scrollLeft + cardWidth + gap
      const max = el.scrollWidth - el.clientWidth
      el.scrollTo({
        left: next >= max - 8 ? 0 : next,
        behavior: "smooth",
      })
    }, 5000)
    return () => clearInterval(id)
  }, [paused])

  // Track scroll position for arrow visibility
  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener("scroll", updateScrollState, { passive: true })
    window.addEventListener("resize", updateScrollState)
    return () => {
      el.removeEventListener("scroll", updateScrollState)
      window.removeEventListener("resize", updateScrollState)
    }
  }, [updateScrollState])

  const scrollByCards = (dir: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    const cardWidth = el.firstElementChild?.clientWidth ?? 360
    const gap = 24
    el.scrollBy({ left: dir * (cardWidth + gap), behavior: "smooth" })
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t) => (
          <div key={t.name} className="snap-start">
            <Card t={t} />
          </div>
        ))}
      </div>

      {/* Prev / Next buttons */}
      <button
        type="button"
        aria-label="Previous testimonials"
        onClick={() => scrollByCards(-1)}
        className={`absolute -left-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white p-2 text-vm-navy shadow-md transition-opacity hover:bg-vm-blue/20 md:flex ${
          canScroll.left ? "opacity-100" : "pointer-events-none opacity-30"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next testimonials"
        onClick={() => scrollByCards(1)}
        className={`absolute -right-2 top-1/2 hidden -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white p-2 text-vm-navy shadow-md transition-opacity hover:bg-vm-blue/20 md:flex ${
          canScroll.right ? "opacity-100" : "pointer-events-none opacity-30"
        }`}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>
    </div>
  )
}
