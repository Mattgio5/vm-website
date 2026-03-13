import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Landscaping Add-Ons & Maintenance in Chester County & Bucks County, PA | Varsity Mulching",
  description:
    "Bush removal, trimming, planting, fall cleanups & ongoing landscape maintenance in Chester County, Bucks County & Montgomery County, PA. Serving West Chester, Doylestown, Malvern & Exton.",
}

const addOns = [
  {
    number: "01",
    title: "Bush Removal",
    description:
      "We remove small bushes from your bed. We dispose of all debris.",
  },
  {
    number: "02",
    title: "Bush Transplant",
    description:
      "We carefully remove a bush from an unwanted location. Then, we replant it in a different spot in the bed.",
  },
  {
    number: "03",
    title: "Bush Trimming",
    description:
      "We take the bulk off your bushes to bring out the sharpness of the mulch. However, we do not trim them to complex shapes.",
  },
  {
    number: "04",
    title: "Planting",
    description:
      "If you provide your desired flowers/bush, we will plant them for you. We meticulously spread the mulch around new plants to make sure they grow healthy.",
  },
]

const followUpServices = [
  {
    number: "01",
    title: "Fall Cleanups",
    description:
      "We remove leaves, sticks, and seasonal debris from mulch beds and lawns to keep them clean and protected through the offseason.",
  },
  {
    number: "02",
    title: "Bed Maintenance",
    description:
      "Ongoing upkeep of mulch beds, including light weeding, mulch touch-ups, and trimming to maintain a polished look.",
  },
  {
    number: "03",
    title: "Weed Treatments",
    description:
      "Targeted chemical weed control to suppress regrowth and keep mulch beds clean between full services.",
  },
  {
    number: "04",
    title: "Aeration",
    description:
      "Core aeration to relieve soil compaction and improve water, air, and nutrient absorption for healthier lawns.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Landscape Maintenance & Add-Ons",
  "name": "Landscaping Add-Ons & Maintenance Services",
  "description": "Bush removal, transplanting, trimming, planting, fall cleanups, bed maintenance, weed treatments, and aeration services.",
  "url": "https://www.varsitymulching.com/services/supplements",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://www.varsitymulching.com/#business",
    "name": "Varsity Mulching LLC",
    "telephone": "+1-267-489-1567"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 40.0,
      "longitude": -75.6
    },
    "geoRadius": "48280"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "100",
    "bestRating": "5",
    "worstRating": "1"
  },
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "100-500",
      "priceCurrency": "USD"
    }
  },
  "hoursAvailable": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "14:00"
    }
  ]
}

export default function SupplementsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "calc(50vh)", minHeight: "400px" }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/service-supplements.jpg"
            alt="Supplemental landscaping services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-vm-navy/70 via-vm-navy/50 to-vm-navy/80" />
        </div>

        <div className="relative z-10 flex h-full items-center px-4 pt-24 md:px-12 lg:px-20">
          <div className="max-w-2xl">
            <Link
              href="/services"
              className="mb-6 inline-flex text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Back to All Services
            </Link>
            <p className="text-sm font-semibold tracking-wider text-vm-blue uppercase">
              Extra touches for your yard
            </p>
            <h1 className="font-varsity mt-2 text-4xl tracking-wide text-white md:text-5xl lg:text-6xl text-balance uppercase">
              Supplements
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/80">
              Beyond our core services, we offer add-ons and follow-up care to keep your landscape looking its best year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="relative bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
        {/* Varsity stripes - two thick parallel lines */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 md:mb-16">
            <p className="mb-3 text-sm font-semibold tracking-widest text-vm-blue-dark uppercase">
              Enhance Your Service
            </p>
            <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl uppercase">
              Add-ons
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Pair these services with your mulch installation for a complete transformation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {addOns.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-vm-blue/30 hover:shadow-lg md:p-8"
              >
                <span className="text-4xl font-bold text-vm-blue/30">
                  {item.number}
                </span>
                <h3 className="mt-2 text-xl font-bold text-vm-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow-up Services Section */}
      <section className="relative bg-muted px-4 py-20 md:px-12 md:py-28 lg:px-20">
        {/* Varsity stripes - two thick parallel lines */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 md:mb-16">
            <p className="mb-3 text-sm font-semibold tracking-widest text-vm-blue-dark uppercase">
              Keep It Looking Great
            </p>
            <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl uppercase">
              Follow-up Servicing
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Maintain your investment with our seasonal and ongoing care options.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {followUpServices.map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-vm-blue/30 hover:shadow-lg md:p-8"
              >
                <span className="text-4xl font-bold text-vm-blue/30">
                  {item.number}
                </span>
                <h3 className="mt-2 text-xl font-bold text-vm-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-vm-blue px-4 py-16 md:px-12 md:py-20 lg:px-20">
        {/* Varsity stripes - two thick parallel lines */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-varsity text-2xl tracking-wide text-vm-navy md:text-3xl uppercase">
            Ready to enhance your service?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-vm-navy/70">
            Add any of these services to your quote, or ask us about setting up a maintenance plan.
          </p>
          <Link
            href="#quote"
            className="mt-6 inline-flex rounded-full bg-vm-navy px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-lg"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
