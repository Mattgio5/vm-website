import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/hero-carousel"

export const metadata = {
  title: "Varsity Mulching | Mulch Installation & Landscaping in Chester County, PA",
  description:
    "Professional mulch installation, edging, weed control & bed cleanup in Chester County, Bucks County & Montgomery County, PA. College athletes delivering premium results. Free quotes — call (267) 489-1567.",
}
import { ServicesOverview } from "@/components/services-overview"
import { WinningRosterSection } from "@/components/winning-roster-section"
import { ServiceAreaSection } from "@/components/service-area-section"
import { WhyVarsitySection } from "@/components/why-varsity-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.varsitymulching.com/#business",
  "name": "Varsity Mulching LLC",
  "url": "https://www.varsitymulching.com",
  "logo": "https://www.varsitymulching.com/images/vm-logo.png",
  "image": "https://www.varsitymulching.com/images/vm-logo.png",
  "telephone": "+1-267-489-1567",
  "email": "info@varsitymulch.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "18 Mystic View Ln",
    "addressLocality": "Doylestown",
    "addressRegion": "PA",
    "postalCode": "18901",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.3101,
    "longitude": -75.1290
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Chester County, PA"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Bucks County, PA"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Montgomery County, PA"
    },
    {
      "@type": "City",
      "name": "West Chester, PA"
    },
    {
      "@type": "City",
      "name": "Doylestown, PA"
    },
    {
      "@type": "City",
      "name": "Malvern, PA"
    },
    {
      "@type": "City",
      "name": "Exton, PA"
    },
    {
      "@type": "City",
      "name": "Downingtown, PA"
    }
  ],
  "openingHoursSpecification": [
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
  ],
  "paymentAccepted": "Cash, Credit Card, Venmo, Zelle",
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "100",
    "bestRating": "5",
    "worstRating": "1"
  },
  "founder": {
    "@type": "Person",
    "name": "Matt Giordano"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Landscaping Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Mulch Installation",
        "description": "Premium mulch delivered and professionally installed for garden beds"
      },
      {
        "@type": "OfferCatalog",
        "name": "Landscape Edging",
        "description": "Clean, crisp borders that define garden beds and prevent grass invasion"
      },
      {
        "@type": "OfferCatalog",
        "name": "Weed Control",
        "description": "Pre-emergent treatments, manual removal, and landscape fabric installation"
      },
      {
        "@type": "OfferCatalog",
        "name": "Bed Cleanup",
        "description": "Seasonal refresh removing debris, dead plants, and old mulch from garden beds"
      },
      {
        "@type": "OfferCatalog",
        "name": "Supplements & Add-on Services",
        "description": "Bush removal, transplanting, trimming, planting, fall cleanups, and aeration"
      }
    ]
  }
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <HeroCarousel />
      <section className="w-full">
        <video
          className="w-full h-auto max-h-[80vh] object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Varsity Mulching crew at work"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </section>
      <ServicesOverview />
      <WinningRosterSection />
      <ServiceAreaSection />
      <WhyVarsitySection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
