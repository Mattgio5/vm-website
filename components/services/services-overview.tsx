import Image from "next/image"
import Link from "next/link"

const services = [
  {
    slug: "mulch-installation",
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
  },
  {
    slug: "edges",
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
  },
  {
    slug: "weed-control",
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
  },
  {
    slug: "bed-cleanup",
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
  },
  {
    slug: "supplements",
    title: "Supplements",
    tagline: "Extra touches for your yard",
    description:
      "Beyond our core services, we offer add-ons like bush removal, trimming, and planting, plus follow-up care including fall cleanups, bed maintenance, weed treatments, and aeration.",
    features: [
      "Bush removal & transplant",
      "Bush trimming",
      "Planting services",
      "Seasonal maintenance",
    ],
    image: "/images/service-supplements.jpg",
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
        {/* Section header */}
        <div className="mb-16 max-w-2xl md:mb-20">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
            What We Do
          </p>
          <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl lg:text-5xl text-balance uppercase">
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
              className={`grid items-center gap-8 rounded-3xl border border-border bg-card p-6 md:grid-cols-2 md:gap-12 md:p-8 lg:p-10 ${
                index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vm-navy/20 to-transparent" />
              </div>

              {/* Content */}
              <div>
                <p className="text-sm font-semibold text-vm-blue-dark">{service.tagline}</p>
                <h3 className="mt-1 text-2xl font-bold text-vm-navy md:text-3xl">
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
                  className="mt-6 inline-flex rounded-full bg-vm-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-md"
                >
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* What We Do Not Offer Section */}
        <div className="mt-20 rounded-2xl border border-border bg-card p-8 md:mt-28 md:p-12 border-t-4 border-t-vm-gold">
          <h3 className="font-varsity text-2xl tracking-wide text-vm-navy md:text-3xl uppercase">
            What We Do Not Offer
          </h3>
          <div className="mt-6 space-y-4">
            <p className="text-base leading-relaxed text-muted-foreground">
              At Varsity Mulching, we are focused on one thing: rejuvenating yards through expert mulching. This singular focus allows us to maintain the premium quality that our customers have come to love and expect.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              While we complement the work of general landscapers beautifully, please note that we DO NOT offer broad landscaping services. If a service is not listed within our specific packages or on the add-ons page, it falls outside our area of expertise. Rest assured, engaging our services doesn't mean parting ways with your trusted landscaper who has been maintaining your lawn all these years. We're here to add that extra touch of vitality and beauty to your yard.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
