import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/services/service-detail"
import { MulchCalculator } from "@/components/mulch-calculator"

export const metadata = {
  title: "Mulch Installation in Chester County & Bucks County, PA | Varsity Mulching",
  description:
    "Professional mulch installation in Chester County, Bucks County & Montgomery County, PA. Premium hardwood, cedar & colored mulch delivered and installed. Serving West Chester, Doylestown, Malvern & Exton.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Mulch Installation",
  "name": "Professional Mulch Installation",
  "description": "Premium mulch delivered and professionally installed for garden beds. Hardwood, cedar, and colored mulch options available.",
  "url": "https://www.varsitymulching.com/services/mulch-installation",
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
      "price": "350-1500",
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
    { "@type": "ListItem", "position": 3, "name": "Mulch Installation", "item": "https://www.varsitymulching.com/services/mulch-installation" }
  ]
}

export default function MulchInstallationPage() {
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
        title="Mulch Installation"
        tagline="Premium mulch, professionally installed"
        image="/images/service-mulch.jpg"
        description="Fresh mulch does more than look good. It locks in moisture, keeps weeds down, and protects your plants through the seasons."
        longDescription="We bring everything you need right to your driveway: premium mulch, the crew to spread it, and the know-how to do it right. Our team preps your beds, clears out the old stuff when needed, and lays down a clean, even layer that makes your whole yard pop. Hardwood, cedar, dyed—whatever fits your style. No mess left behind, no heavy bags to haul yourself. Just a finished product you can be proud of."
        features={[
          "Premium hardwood mulch",
          "Cedar & cypress options",
          "Colored mulch varieties",
          "Old mulch removal",
          "Bed edging & shaping",
          "Weed barrier installation",
          "Proper depth application",
          "Clean-up included",
        ]}
        benefits={[
          {
            title: "Quality Materials",
            description:
              "We source only premium mulch from trusted suppliers, ensuring rich color and long-lasting performance.",
          },
          {
            title: "Expert Installation",
            description:
              "Our trained crews know the right depth and techniques for optimal results that last.",
          },
          {
            title: "Hassle-Free Service",
            description:
              "We handle delivery, installation, and cleanup. You just enjoy your beautiful yard.",
          },
        ]}
        process={[
          {
            step: 1,
            title: "Consultation & Quote",
            description:
              "We assess your property, discuss your preferences, and provide a detailed estimate.",
          },
          {
            step: 2,
            title: "Bed Preparation",
            description:
              "We clean out debris, remove weeds, and edge the beds for a clean, defined look.",
          },
          {
            step: 3,
            title: "Mulch Installation",
            description:
              "Fresh mulch is applied at the proper depth, spread evenly, and carefully shaped around plants.",
          },
          {
            step: 4,
            title: "Final Cleanup",
            description:
              "We clean up any excess material and leave your property looking immaculate.",
          },
        ]}
        relatedServices={[
          { slug: "edges", title: "Landscape Edging" },
          { slug: "weed-control", title: "Weed Control" },
          { slug: "bed-cleanup", title: "Bed Cleanup" },
        ]}
        calculator={<MulchCalculator />}
      />
      <Footer />
    </main>
  )
}
