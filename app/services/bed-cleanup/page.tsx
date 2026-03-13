import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/services/service-detail"

export const metadata = {
  title: "Bed Cleanup in Chester County & Bucks County, PA | Varsity Mulching",
  description:
    "Professional landscape bed cleanup in Chester County, Bucks County & Montgomery County, PA. Remove debris, dead plants & old mulch to revitalize your garden beds. Serving West Chester, Doylestown & Malvern.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Bed Cleanup",
  "name": "Professional Landscape Bed Cleanup",
  "description": "Remove debris, dead plants, and old mulch to revitalize your garden beds. Complete bed restoration and soil preparation.",
  "url": "https://www.varsitymulching.com/services/bed-cleanup",
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
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "250-1000",
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
    { "@type": "ListItem", "position": 3, "name": "Bed Cleanup", "item": "https://www.varsitymulching.com/services/bed-cleanup" }
  ]
}

export default function BedCleanupPage() {
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
        title="Bed Cleanup"
        tagline="Revitalize tired, neglected beds"
        image="/images/service-cleanup.jpg"
        description="Beds get cluttered with leaves, dead plants, and old mulch over time. We clear it all out so you can start fresh."
        longDescription="Sometimes a yard just needs a reset. We come in and clear out everything that's built up—leaves, sticks, dead plants, weeds, decomposed mulch—all of it. Then we prep the soil so it's ready for whatever comes next, whether that's new plantings or a fresh layer of mulch. It's a clean slate for your beds without you having to haul a single bag to the curb."
        features={[
          "Debris removal",
          "Dead plant extraction",
          "Old mulch removal",
          "Weed elimination",
          "Leaf clearing",
          "Soil preparation",
          "Edge restoration",
          "Haul-away included",
        ]}
        benefits={[
          {
            title: "Complete Refresh",
            description:
              "Start with a clean slate—no debris, no dead plants, no old mulch getting in the way.",
          },
          {
            title: "Better Plant Health",
            description:
              "Removing decomposed material and improving soil conditions helps your plants flourish.",
          },
          {
            title: "Curb Appeal",
            description:
              "Clean, well-maintained beds dramatically improve your property's overall appearance.",
          },
        ]}
        process={[
          {
            step: 1,
            title: "Initial Assessment",
            description:
              "We evaluate the current state of your beds and identify what needs to be removed or addressed.",
          },
          {
            step: 2,
            title: "Debris Removal",
            description:
              "Leaves, branches, dead plants, and accumulated debris are cleared from all beds.",
          },
          {
            step: 3,
            title: "Deep Cleaning",
            description:
              "Old mulch is removed if needed, weeds are extracted, and edges are redefined.",
          },
          {
            step: 4,
            title: "Preparation",
            description:
              "Beds are prepped and ready for fresh mulch, new plantings, or other improvements.",
          },
        ]}
        relatedServices={[
          { slug: "mulch-installation", title: "Mulch Installation" },
          { slug: "weed-control", title: "Weed Control" },
          { slug: "edges", title: "Landscape Edging" },
        ]}
      />
      <Footer />
    </main>
  )
}
