import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { HeroCarousel, type HeroContent } from "@/components/hero-carousel"
import { ServicesOverview } from "@/components/services-overview"
import { WinningRosterSection } from "@/components/winning-roster-section"
import { MoreThanMulchSection } from "@/components/more-than-mulch-section"
import { ServiceAreaSection } from "@/components/service-area-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { MobileCallButton } from "@/components/mobile-call-button"
import { FallingLeaves } from "@/components/falling-leaves"
import { FallServicesSection } from "@/components/fall-services-section"

/**
 * Homepage bodies. "/" renders one of these; the others stay viewable at
 * /preview/home/[option] so a season's version can be swapped back in.
 *
 *   classic — the spring/summer mulch homepage (with More Than Mulch)
 *   a       — fall: leaves drift over the hero; light photo-card spotlight  ← live on "/"
 *   b       — fall: navy spotlight where leaves fall and pile up
 *   c       — fall: navy spotlight where the cursor/finger blows leaves around
 */
export type HomeOption = "classic" | "a" | "b" | "c"

const FALL_HERO: HeroContent = {
  // Brand tagline stays constant across seasons; the headline is the seasonal message.
  eyebrow: "Promote Your Yard to Varsity",
  headlineTop: "Take Back Your",
  headlineAccent: "Fall Weekends.",
  subhead:
    "Leaf cleanup, removal, and complete fall cleanups across Bucks & Montgomery County. We clear, collect, and haul it all away.",
}

export function ClassicHomePage() {
  return (
    <>
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
    </>
  )
}

export function FallHomePage({ option = "a" }: { option?: Exclude<HomeOption, "classic"> }) {
  return (
    <>
      <Navbar />
      <HeroCarousel
        content={FALL_HERO}
        showAvailability={false}
        overlay={<FallingLeaves mode="drift" density={0.8} />}
        aside={
          <Link
            href="/offers/leaf-cleanup-100-off"
            className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-vm-gold px-5 py-2.5 text-sm font-bold text-vm-navy shadow-lg transition-colors hover:bg-vm-gold-dark md:text-base"
          >
            $100 Off Leaf Cleanup &amp; Removal →
          </Link>
        }
      />
      <FallServicesSection look={option === "a" ? "cards" : option === "b" ? "pile" : "blower"} />
      <TestimonialsSection />
      {/* "Expert Quality, Youthful Spirit" */}
      <WinningRosterSection />
      <ServicesOverview
        eyebrow="Year-Round"
        heading="Our Core Services"
        intro="Spring mulch, edging, weed control, and more. The same Varsity standard, every season."
      />
      <ServiceAreaSection />
      <CtaSection />
      <Footer />
      <MobileCallButton />
    </>
  )
}

export function HomePage({ option }: { option: HomeOption }) {
  return option === "classic" ? <ClassicHomePage /> : <FallHomePage option={option} />
}
