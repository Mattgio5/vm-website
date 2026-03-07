import Link from "next/link"
import { Phone, ArrowRight } from "lucide-react"

export function ServicesCta() {
  return (
    <section className="bg-vm-blue/10 px-4 py-20 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-vm-navy md:text-4xl text-balance">
          Ready to Transform Your Yard?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Get a free estimate for any of our services. Our team is ready to help you
          create the outdoor space you have always wanted.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#quote"
            className="inline-flex items-center gap-2 rounded-full bg-vm-navy px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-lg"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href="tel:+15551234567"
            className="inline-flex items-center gap-2 rounded-full border-2 border-vm-navy px-8 py-3.5 text-base font-semibold text-vm-navy transition-all hover:bg-vm-navy hover:text-white"
          >
            <Phone className="h-4 w-4" />
            Call (555) 123-4567
          </a>
        </div>
      </div>
    </section>
  )
}
