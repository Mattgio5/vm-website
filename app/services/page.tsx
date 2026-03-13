import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesOverview } from "@/components/services/services-overview"
import { ServicesCta } from "@/components/services/services-cta"

export const metadata = {
  title: "Landscaping Services in Chester County & Bucks County, PA | Varsity Mulching",
  description:
    "Professional mulch installation, landscape edging, weed control & bed cleanup in Chester County, Bucks County & Montgomery County, PA. Serving West Chester, Doylestown, Malvern, Exton & Downingtown.",
}

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServicesHero />
      <ServicesOverview />
      <ServicesCta />
      <Footer />
    </main>
  )
}
