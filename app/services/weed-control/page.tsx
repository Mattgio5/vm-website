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
        tagline="Keep weeds at bay, the right way"
        image="/images/service-weed.jpg"
        description="Weeds steal water, nutrients, and attention from your plants. We stop them before they get the chance."
        longDescription="Nobody wants to spend their weekends pulling weeds. We tackle them two ways: removing what's already there (roots and all) and putting down pre-emergent treatments so new ones don't pop up. For beds that need extra protection, we install landscape fabric that blocks weeds while letting water through. The goal is simple—keep your beds looking clean without constant upkeep."
        features={[
          "Pre-emergent application",
          "Manual weed removal",
          "Root extraction",
          "Landscape fabric",
          "Spot treatments",
          "Eco-friendly options",
          "Seasonal programs",
          "Bed restoration",
        ]}
        benefits={[
          {
            title: "Preventive Approach",
            description:
              "Pre-emergent treatments stop weeds before they sprout, saving time and preserving bed appearance.",
          },
          {
            title: "Healthier Plants",
            description:
              "Without weeds stealing resources, your ornamental plants thrive and look their best.",
          },
          {
            title: "Time Savings",
            description:
              "Effective weed control means you spend less time maintaining and more time enjoying your yard.",
          },
        ]}
        process={[
          {
            step: 1,
            title: "Weed Assessment",
            description:
              "We identify existing weeds and assess the conditions that may be encouraging growth.",
          },
          {
            step: 2,
            title: "Removal & Treatment",
            description:
              "Existing weeds are carefully removed, and appropriate treatments are applied.",
          },
          {
            step: 3,
            title: "Prevention Layer",
            description:
              "Pre-emergent products or landscape fabric are installed to prevent future weed growth.",
          },
          {
            step: 4,
            title: "Follow-Up Plan",
            description:
              "We provide recommendations and optional maintenance programs to keep weeds under control.",
          },
        ]}
        relatedServices={[
          { slug: "mulch-installation", title: "Mulch Installation" },
          { slug: "bed-cleanup", title: "Bed Cleanup" },
          { slug: "edges", title: "Landscape Edging" },
        ]}
      />
      <Footer />
    </main>
  )
}
