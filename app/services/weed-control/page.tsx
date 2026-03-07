import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/services/service-detail"

export const metadata = {
  title: "Weed Control | Varsity Mulch",
  description:
    "Professional weed control services for landscape beds. Pre-emergent treatments, manual removal, and landscape fabric installation.",
}

export default function WeedControlPage() {
  return (
    <main>
      <Navbar />
      <ServiceDetail
        title="Weed Control"
        tagline="Keep weeds at bay, the right way"
        image="/images/service-weed.jpg"
        description="Protect your landscape investment with comprehensive weed control that stops weeds before they start and eliminates existing ones."
        longDescription="Weeds are more than an eyesore—they compete with your plants for water, nutrients, and sunlight. Our weed control services take a multi-pronged approach to keeping your beds weed-free. We start by removing existing weeds, roots and all, then apply pre-emergent treatments that create a barrier to prevent new weeds from germinating. For long-term protection, we can install professional-grade landscape fabric beneath your mulch. The result? Cleaner beds, healthier plants, and less time spent pulling weeds."
        features={[
          "Pre-emergent application",
          "Manual weed removal",
          "Root extraction",
          "Landscape fabric",
          "Spot treatments",
          "Eco-friendly options",
          "Seasonal programs",
          "Bed restoration",
        ]}
        benefits={[
          {
            title: "Preventive Approach",
            description:
              "Pre-emergent treatments stop weeds before they sprout, saving time and preserving bed appearance.",
          },
          {
            title: "Healthier Plants",
            description:
              "Without weeds stealing resources, your ornamental plants thrive and look their best.",
          },
          {
            title: "Time Savings",
            description:
              "Effective weed control means you spend less time maintaining and more time enjoying your yard.",
          },
        ]}
        process={[
          {
            step: 1,
            title: "Weed Assessment",
            description:
              "We identify existing weeds and assess the conditions that may be encouraging growth.",
          },
          {
            step: 2,
            title: "Removal & Treatment",
            description:
              "Existing weeds are carefully removed, and appropriate treatments are applied.",
          },
          {
            step: 3,
            title: "Prevention Layer",
            description:
              "Pre-emergent products or landscape fabric are installed to prevent future weed growth.",
          },
          {
            step: 4,
            title: "Follow-Up Plan",
            description:
              "We provide recommendations and optional maintenance programs to keep weeds under control.",
          },
        ]}
        relatedServices={[
          { slug: "mulch-installation", title: "Mulch Installation" },
          { slug: "bed-cleanup", title: "Bed Cleanup" },
          { slug: "edges", title: "Landscape Edging" },
        ]}
      />
      <Footer />
    </main>
  )
}
