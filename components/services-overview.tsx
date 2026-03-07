import Link from "next/link"

const services = [
  {
    title: "Mulch Installation",
    description:
      "Premium mulch delivered and professionally installed for beautiful, long-lasting garden beds.",
    href: "/services/mulch-installation",
  },
  {
    title: "Landscape Edging",
    description:
      "Clean, crisp borders that define your garden beds and create a polished, professional look.",
    href: "/services/edges",
  },
  {
    title: "Weed Control",
    description:
      "Keep unwanted growth at bay with our effective, year-round weed prevention solutions.",
    href: "/services/weed-control",
  },
  {
    title: "Bed Cleanup",
    description:
      "Seasonal refresh and maintenance to keep your flower beds pristine and healthy.",
    href: "/services/bed-cleanup",
  },
]

export function ServicesOverview() {
  return (
    <section id="services" className="bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-blue-dark uppercase">
            What We Do
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-vm-navy md:text-4xl lg:text-5xl text-balance">
            Our Core Services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Professional landscaping solutions to transform and maintain your outdoor spaces.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-vm-blue/40 hover:shadow-lg md:p-8"
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
      </div>
    </section>
  )
}
