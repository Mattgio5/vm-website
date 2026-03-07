import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/services/service-detail"
import { Sparkles } from "lucide-react"

export const metadata = {
  title: "Bed Cleanup | Varsity Mulch",
  description:
    "Professional landscape bed cleanup services. Remove debris, dead plants, and old mulch to revitalize your garden beds.",
}

export default function BedCleanupPage() {
  return (
    <main>
      <Navbar />
      <ServiceDetail
        title="Bed Cleanup"
        tagline="Revitalize tired, neglected beds"
        icon={Sparkles}
        image="/images/service-cleanup.jpg"
        description="Give your landscape beds a fresh start with comprehensive cleanup services that remove debris, dead material, and prepare for new growth."
        longDescription="Over time, landscape beds accumulate leaves, debris, dead plants, and decomposed mulch that make them look tired and unkempt. Our bed cleanup service is a complete renovation for your garden beds. We remove all debris and dead plant material, extract weeds and unwanted vegetation, clear out old mulch when needed, and prepare the soil for fresh plantings or a new layer of mulch. Whether your beds need a seasonal refresh or a complete overhaul, our cleanup service restores them to pristine condition."
        features={[
          "Debris removal",
          "Dead plant extraction",
          "Old mulch removal",
          "Weed elimination",
          "Leaf clearing",
          "Soil preparation",
          "Edge restoration",
          "Haul-away included",
        ]}
        benefits={[
          {
            title: "Complete Refresh",
            description:
              "Start with a clean slate—no debris, no dead plants, no old mulch getting in the way.",
          },
          {
            title: "Better Plant Health",
            description:
              "Removing decomposed material and improving soil conditions helps your plants flourish.",
          },
          {
            title: "Curb Appeal",
            description:
              "Clean, well-maintained beds dramatically improve your property's overall appearance.",
          },
        ]}
        process={[
          {
            step: 1,
            title: "Initial Assessment",
            description:
              "We evaluate the current state of your beds and identify what needs to be removed or addressed.",
          },
          {
            step: 2,
            title: "Debris Removal",
            description:
              "Leaves, branches, dead plants, and accumulated debris are cleared from all beds.",
          },
          {
            step: 3,
            title: "Deep Cleaning",
            description:
              "Old mulch is removed if needed, weeds are extracted, and edges are redefined.",
          },
          {
            step: 4,
            title: "Preparation",
            description:
              "Beds are prepped and ready for fresh mulch, new plantings, or other improvements.",
          },
        ]}
        relatedServices={[
          { slug: "mulch-installation", title: "Mulch Installation" },
          { slug: "weed-control", title: "Weed Control" },
          { slug: "edges", title: "Landscape Edging" },
        ]}
      />
      <Footer />
    </main>
  )
}
