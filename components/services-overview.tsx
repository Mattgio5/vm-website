import Link from "next/link"

const services = [
  {
    title: "Premium Mulch Installation",
    description:
      "High-quality coverage to protect soil and pop your colors.",
    href: "/services/mulch-installation",
  },
  {
    title: "Precise Flower Bed Edging",
    description:
      "Deep, clean borders that define your beds and walkways.",
    href: "/services/edges",
  },
  {
    title: "Expert Weed Control",
    description:
      "Chemical removal and proactive treatments to keep the intruders at bay.",
    href: "/services/weed-control",
  },
  {
    title: "Bed Cleanup",
    description:
      "Total debris removal to give you a fresh canvas for mulch.",
    href: "/services/bed-cleanup",
  },
  {
    title: "Brush Removal & Trimming",
    description:
      "Sculpting your greenery and clearing the clutter.",
    href: "/services/supplements",
  },
]

export function ServicesOverview() {
  return (
    <section id="services" className="relative bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
      {/* Varsity stripes - two thick parallel lines */}
      <div className="absolute top-0 left-0 right-0 flex flex-col">
        <div className="h-2.5 w-full bg-vm-gold" />
        <div className="h-2.5 w-full bg-vm-navy" />
      </div>
      
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
            What We Do
          </p>
          <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl lg:text-5xl text-balance uppercase">
            Our Core Services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            From a full spring cleanup to a simple mulch and edge touch-up, we bring the Varsity standard to every job.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-vm-blue/40 md:p-8"
            >
              <h3 className="text-lg font-bold text-vm-navy group-hover:text-vm-blue-dark transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-vm-blue-dark">
                Learn More
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <Link
            href="/services"
            className="inline-flex rounded-full bg-vm-navy px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-lg"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
