import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesOverview } from "@/components/services/services-overview"
import { ServicesCta } from "@/components/services/services-cta"
import { DayInTheLife } from "@/components/services/day-in-the-life"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Landscaping Services in Bucks County, PA",
  description:
    "Mulch installation, edging, weed control and bed cleanup across Bucks & Montgomery County, PA. Doylestown, Newtown, Lansdale and nearby.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services" },
}

const services = [
  { slug: "mulch-installation", name: "Mulch Installation" },
  { slug: "edges", name: "Flower Bed Edging" },
  { slug: "weed-control", name: "Weed Control" },
  { slug: "bed-cleanup", name: "Bed Cleanup" },
  { slug: "fall-cleanup", name: "Fall Cleanup" },
  { slug: "supplements", name: "Supplements & Add-ons" },
]

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
  ],
}

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.name,
    url: `${SITE_URL}/services/${s.slug}`,
  })),
}

export default function ServicesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListLd) }}
      />
      <Navbar />
      <ServicesHero />
      <DayInTheLife />
      <ServicesOverview />
      <ServicesCta />
      <Footer />
    </main>
  )
}
