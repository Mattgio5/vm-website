import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/services/service-detail"

export const metadata = {
  title: "Landscape Edging in Chester County & Bucks County, PA | Varsity Mulching",
  description:
    "Professional landscape edging in Chester County, Bucks County & Montgomery County, PA. Crisp, clean borders that define your beds and prevent grass invasion. Serving West Chester, Doylestown & Malvern.",
}

export default function EdgesPage() {
  return (
    <main>
      <Navbar />
      <ServiceDetail
        title="Landscape Edging"
        tagline="Crisp, clean borders that last"
        image="/images/service-edges.jpg"
        description="Nothing sharpens up a yard like clean edges. That crisp line between lawn and bed makes the whole property look intentional and well-kept."
        longDescription="We cut precise borders that separate your grass from your mulch beds—no blurry boundaries, no grass creeping where it doesn't belong. Whether you want that classic spade-cut look or permanent edging installed, we get it done right. The result is a cleaner yard that stays cleaner longer, with less time spent trimming and maintaining those in-between zones."
        features={[
          "Precision spade-cut edges",
          "Metal edging installation",
          "Plastic edging options",
          "Curved & straight designs",
          "Bed reshaping",
          "Grass barrier creation",
          "Trench cutting",
          "Material haul-away",
        ]}
        benefits={[
          {
            title: "Clean Appearance",
            description:
              "Sharp edges instantly elevate the look of your landscape, creating defined, intentional borders.",
          },
          {
            title: "Reduced Maintenance",
            description:
              "Proper edging keeps grass out of your beds, meaning less weeding and trimming for you.",
          },
          {
            title: "Lasting Results",
            description:
              "Our edging techniques and materials are designed to maintain their shape season after season.",
          },
        ]}
        process={[
          {
            step: 1,
            title: "Edge Assessment",
            description:
              "We evaluate your current edges and discuss the best approach for your landscape design.",
          },
          {
            step: 2,
            title: "Line Marking",
            description:
              "We mark the desired edge lines, ensuring smooth curves and clean straight sections.",
          },
          {
            step: 3,
            title: "Edge Cutting",
            description:
              "Using professional tools, we cut crisp, consistent edges at the proper depth and angle.",
          },
          {
            step: 4,
            title: "Finishing Touches",
            description:
              "Excess soil and turf are removed, leaving behind clean, defined borders.",
          },
        ]}
        relatedServices={[
          { slug: "mulch-installation", title: "Mulch Installation" },
          { slug: "bed-cleanup", title: "Bed Cleanup" },
          { slug: "weed-control", title: "Weed Control" },
        ]}
      />
      <Footer />
    </main>
  )
}
