import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesOverview } from "@/components/services/services-overview"
import { ServicesCta } from "@/components/services/services-cta"

export const metadata = {
  title: "Our Services | Varsity Mulch",
  description:
    "Professional landscaping services including mulch installation, edging, weed control, and bed cleanup. Transform your yard with Varsity Mulch.",
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
