import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export function CtaSection() {
  return (
    <section
      id="quote"
      className="relative overflow-hidden bg-vm-blue px-4 py-20 md:px-12 md:py-28 lg:px-20"
    >
      {/* Decorative circles */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-vm-yellow/20" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-vm-navy/10" />

      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-vm-navy md:text-4xl lg:text-5xl text-balance">
          Ready to Transform Your Yard?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-vm-navy/70 md:text-lg">
          Get a free, no-obligation quote in minutes. We'll help you pick the
          right product, calculate the amount, and schedule delivery at a time
          that works for you.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-vm-navy px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-lg"
          >
            Get Your Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="tel:+15551234567"
            className="inline-flex items-center gap-2 rounded-full border-2 border-vm-navy/20 bg-white/50 px-7 py-3.5 text-base font-semibold text-vm-navy backdrop-blur-sm transition-all hover:bg-white/80 hover:shadow-md"
          >
            <Phone className="h-4 w-4" />
            Call Us Now
          </Link>
        </div>
      </div>
    </section>
  )
}
