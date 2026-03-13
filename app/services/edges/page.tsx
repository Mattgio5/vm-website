import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/services/service-detail"

export const metadata = {
  title: "Landscape Edging in Chester County & Bucks County, PA | Varsity Mulching",
  description:
    "Professional landscape edging in Chester County, Bucks County & Montgomery County, PA. Crisp, clean borders that define your beds and prevent grass invasion. Serving West Chester, Doylestown & Malvern.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Landscape Edging",
  "name": "Professional Landscape Edging",
  "description": "Crisp, clean borders that define your beds and prevent grass invasion. Spade-cut edges, metal and plastic edging installation.",
  "url": "https://www.varsitymulching.com/services/edges",
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
      "price": "200-800",
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
    { "@type": "ListItem", "position": 3, "name": "Landscape Edging", "item": "https://www.varsitymulching.com/services/edges" }
  ]
}

export default function EdgesPage() {
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
        title="Landscape Edging"
        tagline="Crisp, clean borders that last"
        image="/images/service-edges.jpg"
        description="Nothing sharpens up a yard like clean edges. That crisp line between lawn and bed makes the whole property look intentional and well-kept."
        longDescription="We cut precise borders that separate your grass from your mulch beds—no blurry boundaries, no grass creeping where it doesn't belong. Whether you want that classic spade-cut look or permanent edging installed, we get it done right. The result is a cleaner yard that stays cleaner longer, with less time spent trimming and maintaining those in-between zones."
        features={[
          "Precision spade-cut edges",
          "Metal edging installation",
          "Plastic edging options",
          "Curved & straight designs",
          "Bed reshaping",
          "Grass barrier creation",
          "Trench cutting",
          "Material haul-away",
        ]}
        benefits={[
          {
            title: "Clean Appearance",
            description:
              "Sharp edges instantly elevate the look of your landscape, creating defined, intentional borders.",
          },
          {
            title: "Reduced Maintenance",
            description:
              "Proper edging keeps grass out of your beds, meaning less weeding and trimming for you.",
          },
          {
            title: "Lasting Results",
            description:
              "Our edging techniques and materials are designed to maintain their shape season after season.",
          },
        ]}
        process={[
          {
            step: 1,
            title: "Edge Assessment",
            description:
              "We evaluate your current edges and discuss the best approach for your landscape design.",
          },
          {
            step: 2,
            title: "Line Marking",
            description:
              "We mark the desired edge lines, ensuring smooth curves and clean straight sections.",
          },
          {
            step: 3,
            title: "Edge Cutting",
            description:
              "Using professional tools, we cut crisp, consistent edges at the proper depth and angle.",
          },
          {
            step: 4,
            title: "Finishing Touches",
            description:
              "Excess soil and turf are removed, leaving behind clean, defined borders.",
          },
        ]}
        relatedServices={[
          { slug: "mulch-installation", title: "Mulch Installation" },
          { slug: "bed-cleanup", title: "Bed Cleanup" },
          { slug: "weed-control", title: "Weed Control" },
        ]}
      />
      <Footer />
    </main>
  )
}
