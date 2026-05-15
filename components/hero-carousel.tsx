"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=varsity+mulching&oq=varsity+mulching&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMhAIARAuGK8BGMcBGIAEGI4FMgcIAhAAGIAEMggIAxAAGBYYHjIICAQQABgWGB4yBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgyOTUxajBqNKgCAbACAfEFGOyPwE2C6og&sourceid=chrome&ie=UTF-8"

const SERVICE_OPTIONS = [
  "Mulch Installation",
  "Flower Bed Edging",
  "Weed Control",
  "Bed Cleanup",
  "Brush Removal & Trimming",
]

export function HeroCarousel() {
  const [showVideo, setShowVideo] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    const update = () => setShowVideo(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  return (
    <section
      className="relative w-full overflow-hidden md:h-screen"
      style={{ minHeight: "640px" }}
    >
      {/* Background: static poster on mobile, video on desktop */}
      <Image
        src="/videos/hero-poster.jpg"
        alt="Varsity Mulching crew at work"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {showVideo && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/hero-poster.jpg"
          aria-label="Varsity Mulching crew at work"
        >
          <source src="/videos/hero-video.webm" type="video/webm" />
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      )}
      {/* Dark gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-vm-navy/85 via-vm-navy/65 to-vm-navy/45" />
      <div className="absolute inset-0 bg-vm-navy/30" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-4 pt-24 pb-10 md:h-full md:grid-cols-2 md:gap-10 md:px-12 md:pt-24 md:pb-8 lg:gap-14 lg:px-20">
        {/* Left: text overlay */}
        <div className="flex flex-col justify-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-vm-gold drop-shadow md:text-sm">
            Welcome to Varsity Mulching
          </p>
          <h1 className="mt-3 font-varsity text-5xl uppercase leading-[0.95] tracking-wide drop-shadow-lg md:text-5xl lg:text-6xl xl:text-7xl">
            Promote Your Yard
            <br />
            <span className="text-vm-gold">to Varsity</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 drop-shadow md:text-base lg:text-lg">
            Fresh mulch, expertly installed. Because JV-level landscaping isn&apos;t going to cut it.
          </p>
        </div>

        {/* Right: quick quote + reviews */}
        <div className="flex flex-col justify-center gap-3 md:h-full md:gap-3">
          <QuickQuoteForm />
          <GoogleReviewsCard />
        </div>
      </div>
    </section>
  )
}

function QuickQuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [services, setServices] = useState<string[]>([])
  const [open, setOpen] = useState(false)

  function toggleService(s: string) {
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    )
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="rounded-2xl border border-white/15 bg-vm-navy/80 p-4 shadow-2xl backdrop-blur-xl md:p-5">
      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-vm-gold md:text-xs">
        Quick Quote
      </p>
      <h2 className="mt-0.5 text-lg font-semibold text-white md:text-xl lg:text-2xl">
        Tell us about the property.
      </h2>

      {submitted ? (
        <div className="mt-3 rounded-xl border border-vm-gold/40 bg-vm-gold/10 p-4 text-center">
          <p className="font-varsity text-lg tracking-wide text-white uppercase">
            Thanks &mdash; We Got It
          </p>
          <p className="mt-1 text-xs text-white/85">
            A rep will reach out within one business day.
          </p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-3 space-y-2.5">
          <div className="grid gap-2.5 sm:grid-cols-2">
            <HeroField label="Full name">
              <input
                type="text"
                name="fullName"
                required
                autoComplete="name"
                placeholder="Jane Smith"
                className="hero-input"
              />
            </HeroField>
            <HeroField label="Phone">
              <input
                type="tel"
                name="phone"
                required
                autoComplete="tel"
                placeholder="(267) 555-0123"
                className="hero-input"
              />
            </HeroField>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2">
            <HeroField label="Email">
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="hero-input"
              />
            </HeroField>
            <HeroField
              label="Services needed"
              hint="Multi-select"
            >
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpen((o) => !o)}
                  className="hero-input flex w-full items-center justify-between text-left"
                >
                  <span className={services.length ? "text-white" : "text-white/50"}>
                    {services.length
                      ? `${services.length} selected`
                      : "Select services"}
                  </span>
                  <span className="ml-2 text-white/60">▾</span>
                </button>
                {open && (
                  <div className="absolute left-0 right-0 top-full z-20 mt-2 rounded-lg border border-white/15 bg-vm-navy/95 p-2 shadow-xl backdrop-blur-xl">
                    {SERVICE_OPTIONS.map((s) => (
                      <label
                        key={s}
                        className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm text-white hover:bg-white/10"
                      >
                        <input
                          type="checkbox"
                          checked={services.includes(s)}
                          onChange={() => toggleService(s)}
                          className="h-4 w-4 accent-vm-gold"
                        />
                        {s}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </HeroField>
          </div>

          <HeroField label="Property address">
            <input
              type="text"
              name="address"
              required
              autoComplete="street-address"
              placeholder="123 Main St, Newtown, PA"
              className="hero-input"
            />
          </HeroField>

          <button
            type="submit"
            className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-vm-gold px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-vm-navy transition-all hover:bg-vm-gold-dark hover:shadow-lg"
          >
            Request My Quote
          </button>
        </form>
      )}

      <style jsx>{`
        :global(.hero-input) {
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background-color: rgba(255, 255, 255, 0.06);
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          color: #ffffff;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        :global(.hero-input::placeholder) {
          color: rgba(255, 255, 255, 0.45);
        }
        :global(.hero-input:focus-visible) {
          border-color: var(--vm-gold);
          box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.25);
        }
      `}</style>
    </div>
  )
}

function HeroField({
  label,
  hint,
  children,
}: {
  label: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div className="mb-1 flex items-baseline justify-between">
        <span className="text-xs font-semibold text-white">{label}</span>
        {hint && (
          <span className="text-[10px] font-medium text-white/55">{hint}</span>
        )}
      </div>
      {children}
    </div>
  )
}

function GoogleReviewsCard() {
  return (
    <a
      href={GOOGLE_REVIEWS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-4 overflow-hidden rounded-2xl border border-vm-gold/30 bg-gradient-to-br from-vm-navy via-vm-navy-light to-vm-navy px-5 py-4 shadow-2xl transition-all hover:border-vm-gold/60"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow">
          <GoogleG className="h-5 w-5" />
        </div>
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-vm-gold">
            Google Reviews
          </p>
          <p className="flex items-baseline gap-2 text-sm font-semibold text-white">
            <span className="text-2xl font-extrabold leading-none text-vm-gold">5.0</span>
            <span className="text-white/40">·</span>
            <span>166+ 5-Star Reviews</span>
          </p>
        </div>
      </div>
      <span className="hidden shrink-0 rounded-full border border-vm-gold/40 bg-vm-gold/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-vm-gold transition-colors group-hover:bg-vm-gold group-hover:text-vm-navy sm:inline-flex">
        Read →
      </span>
    </a>
  )
}

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571c.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  )
}
