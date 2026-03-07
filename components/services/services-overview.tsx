import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Scissors, Bug, Sparkles } from "lucide-react"

const services = [
  {
    slug: "mulch-installation",
    icon: Leaf,
    title: "Mulch Installation",
    tagline: "Premium mulch, professionally installed",
    description:
      "We source the finest hardwood, cedar, and colored mulch varieties and install them to perfection. Our team prepares your beds, removes old material when needed, and applies a fresh, even layer that transforms your landscape.",
    features: [
      "Wide variety of mulch types and colors",
      "Old mulch removal available",
      "Professional-grade installation",
      "Bulk and residential quantities",
    ],
    image: "/images/service-mulch.jpg",
    color: "bg-vm-blue/15",
  },
  {
    slug: "edges",
    icon: Scissors,
    title: "Landscape Edging",
    tagline: "Crisp, clean borders that last",
    description:
      "Define your beds with precision-cut edges that create a polished look and prevent grass from invading your mulched areas. We offer both traditional spade-cut edges and permanent edging installation.",
    features: [
      "Spade-cut natural edges",
      "Metal & plastic edging options",
      "Curved or straight designs",
      "Long-lasting results",
    ],
    image: "/images/service-edges.jpg",
    color: "bg-vm-yellow/30",
  },
  {
    slug: "weed-control",
    icon: Bug,
    title: "Weed Control",
    tagline: "Keep weeds at bay, the right way",
    description:
      "Our weed control services include pre-emergent treatments that stop weeds before they start, plus targeted removal of existing weeds. Protect your investment and enjoy a cleaner, healthier landscape.",
    features: [
      "Pre-emergent weed prevention",
      "Manual weed removal",
      "Landscape fabric installation",
      "Eco-friendly options available",
    ],
    image: "/images/service-weed.jpg",
    color: "bg-vm-blue/15",
  },
  {
    slug: "bed-cleanup",
    icon: Sparkles,
    title: "Bed Cleanup",
    tagline: "Revitalize tired, neglected beds",
    description:
      "Give your landscape beds a fresh start with our comprehensive cleanup service. We remove debris, dead plants, old mulch, and weeds to prepare your beds for new plantings or a fresh layer of mulch.",
    features: [
      "Debris & leaf removal",
      "Dead plant extraction",
      "Old mulch removal",
      "Soil preparation",
    ],
    image: "/images/service-cleanup.jpg",
    color: "bg-vm-yellow/30",
  },
]

export function ServicesOverview() {
  return (
    <section id="services" className="bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <div className="mb-16 max-w-2xl md:mb-20">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-blue-dark uppercase">
            What We Do
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-vm-navy md:text-4xl lg:text-5xl text-balance">
            Our Services
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Quality landscaping services tailored to your needs. From small touch-ups
            to complete transformations, we have you covered.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-8 md:gap-12">
          {services.map((service, index) => (
            <article
              key={service.slug}
              className={`group grid items-center gap-8 rounded-3xl border border-border bg-card p-6 transition-all hover:border-vm-blue/30 hover:shadow-xl md:grid-cols-2 md:gap-12 md:p-8 lg:p-10 ${
                index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vm-navy/20 to-transparent" />
              </div>

              {/* Content */}
              <div>
                <div className={`mb-4 inline-flex rounded-xl p-3 ${service.color}`}>
                  <service.icon className="h-6 w-6 text-vm-navy" />
                </div>
                <p className="text-sm font-semibold text-vm-blue-dark">{service.tagline}</p>
                <h3 className="mt-1 font-serif text-2xl font-bold text-vm-navy md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-vm-navy"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-vm-blue" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More link */}
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-vm-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-md"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
