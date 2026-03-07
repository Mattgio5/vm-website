import Link from "next/link"

const testimonials = [
  {
    name: "Sarah M.",
    role: "Homeowner",
    quote:
      "Varsity Mulch made my landscaping project so easy. The mulch quality was amazing and it was delivered the next day!",
  },
  {
    name: "Jake T.",
    role: "Landscape Contractor",
    quote:
      "I've been ordering bulk for my clients for 3 years. Consistent quality, fair pricing, and they always show up on time.",
  },
  {
    name: "Linda R.",
    role: "Homeowner",
    quote:
      "Used the calculator to figure out exactly what I needed — no waste, no extra trips. Highly recommend Varsity Mulch!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-blue-dark uppercase">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-vm-navy md:text-4xl lg:text-5xl text-balance">
            Loved by Homeowners & Pros
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg md:p-8"
            >
              <p className="text-base leading-relaxed text-vm-navy/80">
                {`"${t.quote}"`}
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-bold text-vm-navy">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Link to gallery */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex rounded-full border-2 border-vm-navy/20 bg-white px-7 py-3.5 text-base font-semibold text-vm-navy transition-all hover:border-vm-navy/40 hover:shadow-md"
          >
            Hear from More Happy Customers
          </Link>
        </div>
      </div>
    </section>
  )
}
