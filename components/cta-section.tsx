import Link from "next/link"

export function CtaSection() {
  return (
    <section
      id="quote"
      className="relative overflow-hidden bg-vm-blue px-4 py-20 md:px-12 md:py-28 lg:px-20"
    >
      {/* Varsity stripes - two thick parallel lines at top */}
      <div className="absolute top-0 left-0 right-0 flex flex-col">
        <div className="h-2.5 w-full bg-vm-gold" />
        <div className="h-2.5 w-full bg-vm-navy" />
      </div>
      
      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl lg:text-5xl text-balance uppercase">
          Ready to Transform Your Yard?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-vm-navy/70 md:text-lg">
          Get a free, no-obligation quote in minutes. We'll help you pick the
          right product, calculate the amount, and schedule delivery at a time
          that works for you.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-vm-navy px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-lg"
          >
            Get Your Free Quote
          </Link>
          <Link
            href="tel:+12673899789"
            className="inline-flex rounded-full border-2 border-vm-navy/20 bg-white/50 px-7 py-3.5 text-base font-semibold text-vm-navy backdrop-blur-sm transition-all hover:bg-white/80 hover:shadow-md"
          >
            Call Us Now
          </Link>
        </div>
      </div>
    </section>
  )
}
