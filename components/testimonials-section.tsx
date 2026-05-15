import Link from "next/link"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"

export function TestimonialsSection() {
  return (
    <section className="relative bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
      {/* Varsity stripes - two thick parallel lines */}
      <div className="absolute top-0 left-0 right-0 flex flex-col">
        <div className="h-2.5 w-full bg-vm-gold" />
        <div className="h-2.5 w-full bg-vm-navy" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center md:mb-14">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
            Hear from our customers
          </p>
          <h2 className="font-varsity flex flex-wrap items-center justify-center gap-x-3 text-3xl tracking-wide text-vm-navy md:text-4xl lg:text-5xl text-balance uppercase">
            <span>Rated 5</span>
            <svg
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="inline-block h-7 w-7 shrink-0 fill-vm-gold md:h-9 md:w-9 lg:h-11 lg:w-11"
            >
              <path d="M10 1.5l2.6 5.4 5.9.6-4.4 4 1.3 5.8L10 14.7 4.6 17.3l1.3-5.8L1.5 7.5l5.9-.6L10 1.5z" />
            </svg>
            <span>by 166 Loyal Customers</span>
          </h2>
        </div>

        {/* Featured video testimonial */}
        <div className="mx-auto mb-12 max-w-4xl md:mb-16">
          <p className="mb-3 text-center text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
            Watch a customer's story
          </p>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-vm-navy shadow-lg">
            <iframe
              src="https://www.youtube-nocookie.com/embed/nli9zIC7MYE?rel=0"
              title="Varsity Mulching customer story"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>

        <TestimonialsCarousel />

        {/* Link to gallery */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex rounded-full border-2 border-vm-navy/20 bg-white px-7 py-3.5 text-base font-semibold text-vm-navy transition-all hover:border-vm-navy/40 hover:shadow-md"
          >
            See More of Our Work
          </Link>
        </div>
      </div>
    </section>
  )
}
