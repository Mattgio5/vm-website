import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata = {
  title: "Landscaping Add-Ons & Maintenance in Chester County & Bucks County, PA | Varsity Mulching",
  description:
    "Bush removal, trimming, planting, fall cleanups & ongoing landscape maintenance in Chester County, Bucks County & Montgomery County, PA. Serving West Chester, Doylestown, Malvern & Exton.",
}

const addOns = [
  {
    number: "01",
    title: "Bush & Shrub Transplants",
    description:
      "Sometimes a plant is perfectly healthy but simply in the wrong spot. Whether a shrub has outgrown its current space or you're redesigning your bed layout, our team performs careful transplants to ensure your greenery survives the move. We focus on preserving the integrity of the root system and preparing the new \"home\" with the right soil conditions to minimize transplant shock and encourage immediate settling.",
  },
  {
    number: "02",
    title: "Professional Bush Trimming",
    description:
      "Regular trimming is about more than just aesthetics—it's about the longevity of your plants. Our crew uses precision techniques to remove dead wood, thinning out overgrowth to improve airflow and sunlight penetration. From formal hedging to natural shaping, we ensure your bushes look manicured while promoting the healthy new growth that makes your spring landscape truly \"pop.\"",
  },
  {
    number: "03",
    title: "Flower & Bush Planting",
    description:
      "Ready to add a splash of color or a new layer of privacy? We take the guesswork out of planting. Our team handles the digging, soil amendment, and positioning to ensure your new flowers and shrubs are installed at the correct depth for long-term success. Once your new additions are in the ground, we surround them with our signature triple-ground mulch to lock in moisture and protect those brand-new roots.",
  },
]

const maintenanceServices = [
  {
    number: "01",
    title: "Fall Cleanups",
    description:
      "As the growing season winds down, your garden beds can quickly become buried under heavy layers of fallen leaves and organic debris. If left over the winter, this \"matting\" can trap excessive moisture, leading to mold, root rot, and turf damage. Our Fall Cleanup service involves a thorough clearing of all beds, the removal of spent annuals, and the final pruning of perennials. We haul away the debris so your property is tucked in for the winter, leaving a clean, intentional look that prevents pests from nesting near your home.",
  },
  {
    number: "02",
    title: "Bed Maintenance & Touch-Ups",
    description:
      "In the months following your initial mulch installation, wind, rain, and foot traffic can shift your mulch and soften those crisp edges. Our maintenance visits focus on the details that keep your curb appeal sharp. We \"fluff\" the existing mulch to restore its vibrant color, redefine your spade edges to stop grass creep, and clear out any stray debris. It's the perfect way to ensure your home looks professionally managed all year long, not just in the weeks after a big project.",
  },
  {
    number: "03",
    title: "Scheduled Weed Treatments",
    description:
      "The most effective way to manage weeds is to never let them get comfortable. Our ongoing weed treatment service provides a consistent layer of protection that builds on our initial installation. We perform regular walkthroughs to identify and treat any \"breakout\" weeds using targeted, systemic sprays. By catching these invaders early, we prevent them from dropping seeds or establishing deep root systems, keeping your triple-ground mulch looking like a clean, dark blanket for your plants.",
  },
  {
    number: "04",
    title: "Core Aeration",
    description:
      "Over time, soil becomes compacted by mowing, foot traffic, and heavy rain, which \"chokes\" your grass by preventing oxygen, water, and nutrients from reaching the roots. Our aeration service uses professional equipment to remove small plugs of soil and thatch from your lawn. This process breaks up compaction and opens up \"highways\" directly to the root zone. The result is a deeper, stronger root system, better drought resistance, and a thicker, greener lawn that naturally crowds out weeds.",
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
      "latitude": 40.3101,
      "longitude": -75.1290
    },
    "geoRadius": "48280"
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

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.varsitymulching.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.varsitymulching.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Supplements", "item": "https://www.varsitymulching.com/services/supplements" }
  ]
}

export default function SupplementsPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild className="text-white/70 hover:text-white">
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild className="text-white/70 hover:text-white">
                    <Link href="/services">Services</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">Supplements</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <p className="text-sm font-semibold tracking-wider text-vm-blue uppercase">
              Beyond the core
            </p>
            <h1 className="font-varsity mt-2 text-4xl tracking-wide text-white md:text-5xl lg:text-6xl text-balance uppercase">
              Add-On Services in Doylestown, PA
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/80">
              Beyond our core services, we offer add-ons and follow-up care to keep your landscape looking its best year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content — two-column with sticky sidebar to match other service pages */}
      <section className="relative bg-background px-4 py-16 md:px-12 md:py-24 lg:px-20">
        {/* Varsity stripes - two thick parallel lines */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Left column - Add-Ons and Maintenance sections */}
          <div className="lg:col-span-2">
            {/* Add-Ons */}
            <div>
              <p className="mb-3 text-sm font-semibold tracking-widest text-vm-blue-dark uppercase">
                Enhance Your Service
              </p>
              <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl uppercase">
                Add-On Services
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Pair these services with your mulch installation for a complete transformation.
              </p>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-vm-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-vm-navy-light"
                >
                  Request a Quote
                </Link>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {addOns.map((item) => (
                  <div
                    key={item.number}
                    className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-vm-blue/30 hover:shadow-lg"
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

            {/* Maintenance */}
            <div className="mt-16">
              <p className="mb-3 text-sm font-semibold tracking-widest text-vm-blue-dark uppercase">
                Keep It Looking Great
              </p>
              <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl uppercase">
                Maintenance and Service Visits
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                The secret to a pristine landscape isn&apos;t just a great initial installation—it&apos;s the consistent, professional care that follows. Our maintenance and service visits are designed to preserve the &ldquo;day-one&rdquo; beauty of your property throughout the entire growing season. From refreshing your bed lines and managing seasonal weed pressure to providing a mid-season &ldquo;touch-up&rdquo; that restores that rich, dark color to your mulch, these visits ensure your investment remains protected.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {maintenanceServices.map((item) => (
                  <div
                    key={item.number}
                    className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-vm-blue/30 hover:shadow-lg"
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

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-vm-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-vm-navy-light"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            {/* Why Varsity — in main column so the sidebar stays compact */}
            <div className="mt-12">
              <h3 className="font-varsity text-lg tracking-wide text-vm-navy uppercase">Why Varsity</h3>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-5">
                  <h4 className="font-semibold text-vm-navy">One Crew, Every Visit</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    The same trained team that installs your mulch comes back for trims, transplants, and touch-ups — so the standard never drops between visits.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h4 className="font-semibold text-vm-navy">Schedule-Driven Maintenance</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Maintenance visits happen on a calendar, not on a whim. You get consistent, proactive care that catches issues before they snowball.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h4 className="font-semibold text-vm-navy">Whole-Property Thinking</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Bushes, beds, mulch, and lawn aren&apos;t separate problems. We look at how every piece works together so the property reads as one polished landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - compact sticky sidebar */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            {/* CTA Card */}
            <div className="rounded-2xl border border-vm-blue/30 bg-vm-blue/10 p-6">
              <h3 className="font-varsity text-xl tracking-wide text-vm-navy uppercase">
                Get a Free Quote
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Add any of these to your quote, or ask us about an ongoing maintenance plan.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex justify-center rounded-full bg-vm-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-vm-navy-light"
                >
                  Request Quote
                </Link>
                <a
                  href="tel:+12674891567"
                  className="inline-flex justify-center rounded-full border-2 border-vm-navy px-6 py-3 text-sm font-semibold text-vm-navy transition-all hover:bg-vm-navy hover:text-white"
                >
                  (267) 489-1567
                </a>
              </div>
            </div>

            {/* Related Services */}
            <div className="mt-8">
              <h3 className="font-varsity text-lg tracking-wide text-vm-navy uppercase">Related Services</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href="/services/mulch-installation"
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-vm-navy transition-all hover:border-vm-blue/40 hover:bg-vm-blue/10"
                >
                  Mulch Installation
                </Link>
                <Link
                  href="/services/edges"
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-vm-navy transition-all hover:border-vm-blue/40 hover:bg-vm-blue/10"
                >
                  Flower Bed Edging
                </Link>
                <Link
                  href="/services/weed-control"
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-vm-navy transition-all hover:border-vm-blue/40 hover:bg-vm-blue/10"
                >
                  Weed Control
                </Link>
                <Link
                  href="/services/bed-cleanup"
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-vm-navy transition-all hover:border-vm-blue/40 hover:bg-vm-blue/10"
                >
                  Bed Cleanup
                </Link>
              </div>
            </div>
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
            href="/contact"
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
