import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/services/service-detail"

export const metadata = {
  title: "Mulch Installation | Varsity Mulch",
  description:
    "Professional mulch installation services. Premium hardwood, cedar, and colored mulch varieties professionally installed by our expert team.",
}

export default function MulchInstallationPage() {
  return (
    <main>
      <Navbar />
      <ServiceDetail
        title="Mulch Installation"
        tagline="Premium mulch, professionally installed"
        image="/images/service-mulch.jpg"
        description="Transform your landscape with a fresh layer of premium mulch. Our team handles everything from bed preparation to final installation."
        longDescription="A fresh layer of mulch does wonders for your landscape. It suppresses weeds, retains soil moisture, regulates soil temperature, and adds a polished look to your beds. Our professional mulch installation service takes the heavy lifting off your hands. We source high-quality mulch in a variety of types and colors, deliver it to your property, and install it with precision and care. Whether you need a small touch-up or a complete landscape refresh, we have the expertise and equipment to get the job done right."
        features={[
          "Premium hardwood mulch",
          "Cedar & cypress options",
          "Colored mulch varieties",
          "Old mulch removal",
          "Bed edging & shaping",
          "Weed barrier installation",
          "Proper depth application",
          "Clean-up included",
        ]}
        benefits={[
          {
            title: "Quality Materials",
            description:
              "We source only premium mulch from trusted suppliers, ensuring rich color and long-lasting performance.",
          },
          {
            title: "Expert Installation",
            description:
              "Our trained crews know the right depth and techniques for optimal results that last.",
          },
          {
            title: "Hassle-Free Service",
            description:
              "We handle delivery, installation, and cleanup. You just enjoy your beautiful yard.",
          },
        ]}
        process={[
          {
            step: 1,
            title: "Consultation & Quote",
            description:
              "We assess your property, discuss your preferences, and provide a detailed estimate.",
          },
          {
            step: 2,
            title: "Bed Preparation",
            description:
              "We clean out debris, remove weeds, and edge the beds for a clean, defined look.",
          },
          {
            step: 3,
            title: "Mulch Installation",
            description:
              "Fresh mulch is applied at the proper depth, spread evenly, and carefully shaped around plants.",
          },
          {
            step: 4,
            title: "Final Cleanup",
            description:
              "We clean up any excess material and leave your property looking immaculate.",
          },
        ]}
        relatedServices={[
          { slug: "edges", title: "Landscape Edging" },
          { slug: "weed-control", title: "Weed Control" },
          { slug: "bed-cleanup", title: "Bed Cleanup" },
        ]}
      />
      <Footer />
    </main>
  )
}
