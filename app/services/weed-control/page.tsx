import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/services/service-detail"

export const metadata = {
  title: "Weed Control in Chester County & Bucks County, PA | Varsity Mulching",
  description:
    "Professional weed control for landscape beds in Chester County, Bucks County & Montgomery County, PA. Pre-emergent treatments, manual removal & landscape fabric. Serving West Chester, Doylestown & Malvern.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Weed Control",
  "name": "Professional Weed Control",
  "description": "Pre-emergent treatments, manual weed removal, and landscape fabric installation for landscape beds in Chester County, Bucks County and Montgomery County, PA.",
  "url": "https://www.varsitymulching.com/services/weed-control",
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
      "price": "150-600",
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
    { "@type": "ListItem", "position": 3, "name": "Weed Control", "item": "https://www.varsitymulching.com/services/weed-control" }
  ]
}

export default function WeedControlPage() {
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
      <ServiceDetail
        title="Weed Control"
        tagline="A discipline, not a one-time service"
        image="/images/service-weed.jpg"
        description="Weeds are the fastest way for a fresh-looking yard to start looking neglected."
        longDescription="Our crew handles every part of the job: treat the existing weeds with professional-grade herbicide, return a week later to pull them clean, and lay down pre-emergent or landscape fabric to block the next wave. Done right, on a schedule that actually keeps your beds clean."
        featuresHeading="Options"
        features={[
          "Pre-emergent application",
          "Post-emergent weed killer treatments",
          "Manual weed removal",
          "Landscape fabric",
        ]}
        process={[
          {
            step: 1,
            title: "Weed Killer Treatment",
            description:
              "One week before removal. We apply professional-grade herbicide to all visible weeds in your beds. By the time we return for removal, the weeds are dead at the root.",
          },
          {
            step: 2,
            title: "Manual Removal",
            description:
              "We pull every treated weed cleanly from the beds, root residue included.",
          },
          {
            step: 3,
            title: "Prevention Layer",
            description:
              "We apply pre-emergent across the bed, or install landscape fabric for clients who want maximum coverage, before mulching.",
          },
          {
            step: 4,
            title: "Ongoing Maintenance",
            description:
              "Bi-weekly or monthly visits keep new weeds in check with targeted herbicide application followed by manual removal.",
          },
        ]}
        benefits={[
          {
            title: "Roots That Actually Die",
            description:
              "Weed killer only works when it enters through the green part of the plant. From there, it travels down and kills the root. We treat each weed while it's still standing, let the herbicide do its work, and pull what's left — root and all.",
          },
          {
            title: "The Right Wait Time",
            description:
              "Herbicide takes three to seven days to travel from the leaves down to the root. We schedule removal a full week after treatment, every time, so the plant is fully neutralized when we touch it.",
          },
          {
            title: "Pre-Emergent at the Right Moment",
            description:
              "Pre-emergent blocks new seeds from germinating, but it doesn't kill anything already up. We lay it down right after the existing weeds are pulled, so the bed is clean and the shield is in place at the same time.",
          },
        ]}
        relatedServices={[
          { slug: "mulch-installation", title: "Mulch Installation" },
          { slug: "bed-cleanup", title: "Bed Cleanup" },
          { slug: "edges", title: "Landscape Edging" },
        ]}
      />
      {/* SEO Section: Full Court Press */}
      <section className="relative bg-muted px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
            Our Method
          </p>
          <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl uppercase">
            Putting on the Full Court Press with Weed Control
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Nothing ruins the look of fresh edging and new mulch like a weed pushing through two weeks later. To keep beds clean all season, you have to play both offense and defense. The offense is where most crews drop the ball.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Varsity Mulching uses a two-part system that attacks weeds at every stage of their life cycle:
          </p>

          <h3 className="font-varsity mt-12 text-2xl tracking-wide text-vm-navy uppercase">
            Offense: Kill the Root First
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            This is the step most landscapers skip, and it&apos;s the single biggest reason weeds come back. Weed killer only works when it enters through the green part of a plant. From there, it travels down and kills the root. If you pull a weed before treating it, the root residue stays in the soil and regrows into the same weed a few weeks later. We apply a professional-grade herbicide about a week before removal, so by the time we pull, we&apos;re pulling something that&apos;s already dead, root and all. Pre-emergent alone won&apos;t fix this: it stops new seeds from sprouting, but it doesn&apos;t touch existing roots.
          </p>

          <h3 className="font-varsity mt-12 text-2xl tracking-wide text-vm-navy uppercase">
            Defense: Block the Next Wave
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Once existing weeds are eliminated, we lay a professional-grade pre-emergent before mulching. Think of it as an invisible shield over your beds. It stops new weed seeds from ever germinating, so seeds blown in by wind or dropped by birds never break the surface. For clients who want extra coverage, we also install landscape fabric as a physical barrier underneath the mulch.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
