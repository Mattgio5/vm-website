import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    role: "Homeowner",
    quote:
      "Varsity Mulch made my landscaping project so easy. The mulch quality was amazing and it was delivered the next day!",
    rating: 5,
  },
  {
    name: "Jake T.",
    role: "Landscape Contractor",
    quote:
      "I've been ordering bulk for my clients for 3 years. Consistent quality, fair pricing, and they always show up on time.",
    rating: 5,
  },
  {
    name: "Linda R.",
    role: "Homeowner",
    quote:
      "Used the calculator to figure out exactly what I needed — no waste, no extra trips. Highly recommend Varsity Mulch!",
    rating: 5,
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
          <h2 className="font-serif text-3xl font-bold tracking-tight text-vm-navy md:text-4xl lg:text-5xl text-balance">
            Loved by Homeowners & Pros
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-lg md:p-8"
            >
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-vm-yellow text-vm-yellow-dark"
                  />
                ))}
              </div>
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
      </div>
    </section>
  )
}
