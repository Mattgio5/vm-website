import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/hero-carousel"
import { ServicesOverview } from "@/components/services-overview"
import { CompetitionSection } from "@/components/competition-section"
import { HowItWorks } from "@/components/how-it-works"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroCarousel />
      <ServicesOverview />
      <CompetitionSection />
      <HowItWorks />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
