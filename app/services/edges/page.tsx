import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/services/service-detail"
import { Scissors } from "lucide-react"

export const metadata = {
  title: "Landscape Edging | Varsity Mulch",
  description:
    "Professional landscape edging services. Crisp, clean borders that define your beds and prevent grass invasion.",
}

export default function EdgesPage() {
  return (
    <main>
      <Navbar />
      <ServiceDetail
        title="Landscape Edging"
        tagline="Crisp, clean borders that last"
        icon={Scissors}
        image="/images/service-edges.jpg"
        description="Define your landscape beds with precision-cut edges that create a polished, professional appearance and keep grass where it belongs."
        longDescription="Clean, well-defined edges are the hallmark of a professionally maintained landscape. Our edging services create crisp borders between your lawn and garden beds, giving your property a manicured look that impresses. Beyond aesthetics, proper edging serves a practical purpose: it creates a barrier that prevents grass runners from invading your mulched areas, reducing maintenance and keeping your beds looking neat. We offer both traditional spade-cut edges and permanent edging installation using quality metal or plastic materials."
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
