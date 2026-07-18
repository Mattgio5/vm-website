import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/hero-carousel"
import { ServicesOverview } from "@/components/services-overview"
import { WinningRosterSection } from "@/components/winning-roster-section"
import { MoreThanMulchSection } from "@/components/more-than-mulch-section"
import { ServiceAreaSection } from "@/components/service-area-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { MobileCallButton } from "@/components/mobile-call-button"
import { SITE_URL, absoluteUrl } from "@/lib/site"

export const metadata: Metadata = {
  title: "Mulch Installation & Landscaping in Bucks County, PA",
  description:
    "Mulch installation, edging, weed control & bed cleanup in Bucks & Montgomery County, PA. College athletes delivering premium results. Free quotes.",
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  "name": "Varsity Mulching LLC",
  "url": SITE_URL,
  "logo": absoluteUrl("/images/vm-logo.png"),
  "image": absoluteUrl("/images/vm-logo.png"),
  "telephone": "+1-267-389-9789",
  "email": "hello@varsitymulching.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "PO Box 2031",
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
  "sameAs": [
    "https://www.facebook.com/varsitymulching",
    "https://www.instagram.com/varsitymulching",
  ],
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Bucks County, PA" },
    { "@type": "AdministrativeArea", "name": "Montgomery County, PA" },
    { "@type": "City", "name": "Doylestown, PA" },
    { "@type": "City", "name": "Newtown, PA" },
    { "@type": "City", "name": "Lansdale, PA" },
    { "@type": "City", "name": "Sellersville, PA" },
    { "@type": "City", "name": "Buckingham, PA" },
    { "@type": "City", "name": "New Hope, PA" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:30",
      "closes": "17:00"
    }
  ],
  "paymentAccepted": "Cash, Credit Card, Venmo, Zelle",
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "271",
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
        "name": "Flower Bed Edging",
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
      <MoreThanMulchSection />
      <ServicesOverview />
      <WinningRosterSection />
      <TestimonialsSection />
      <ServiceAreaSection />
      <CtaSection />
      <Footer />
      <MobileCallButton />
    </main>
  )
}
