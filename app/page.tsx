import { Navbar } from "@/components/navbar"
import { HeroCarousel } from "@/components/hero-carousel"
import { ProductsSection } from "@/components/products-section"
import { HowItWorks } from "@/components/how-it-works"
import { CalculatorSection } from "@/components/calculator-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroCarousel />
      <ProductsSection />
      <HowItWorks />
      <CalculatorSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
