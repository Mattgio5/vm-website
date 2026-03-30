import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/services/service-detail"

export const metadata = {
  title: "Landscape Edging in Chester County & Bucks County, PA | Varsity Mulching",
  description:
    "Professional landscape edging in Chester County, Bucks County & Montgomery County, PA. Crisp, clean borders that define your beds and prevent grass invasion. Serving West Chester, Doylestown & Malvern.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Landscape Edging",
  "name": "Professional Landscape Edging",
  "description": "Crisp, clean borders that define your beds and prevent grass invasion. Spade-cut edges, metal and plastic edging installation.",
  "url": "https://www.varsitymulching.com/services/edges",
  "provider": {
    "@type": "LocalBusiness",
    "@id": "https://www.varsitymulching.com/#business",
    "name": "Varsity Mulching LLC",
    "telephone": "+1-267-489-1567"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 40.3101,
      "longitude": -75.1290
    },
    "geoRadius": "48280"
  },
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "price": "200-800",
      "priceCurrency": "USD"
    }
  },
  "hoursAvailable": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "14:00"
    }
  ]
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.varsitymulching.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.varsitymulching.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Landscape Edging", "item": "https://www.varsitymulching.com/services/edges" }
  ]
}

export default function EdgesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
      {/* SEO Section: Why Professional Edging Matters */}
      <section className="relative bg-muted px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
            More Than Looks
          </p>
          <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl uppercase">
            Why Professional Edging Matters
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Edging is about more than just aesthetics; it is a functional component of your yard.
          </p>
          <ul className="mt-6 space-y-5">
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">Stop Grass Invasion: </span>
                <span className="text-muted-foreground">A deep, professional edge creates a physical trench that prevents turf grass roots from creeping into your flowerbeds and choking out your plants.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">Keep Mulch in its Place: </span>
                <span className="text-muted-foreground">Tired of mulch washing onto your grass or driveway after a rainstorm? Varsity Mulching&apos;s precision edging acts as a natural basin, keeping your premium triple-ground mulch exactly where it belongs.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">Mow with Ease: </span>
                <span className="text-muted-foreground">Clean borders create a clear &ldquo;strike zone&rdquo; for mowers and trimmers, protecting your delicate plantings from accidental damage and making your weekly yard work faster and easier.</span>
              </div>
            </li>
          </ul>

          <h3 className="font-varsity mt-12 text-2xl tracking-wide text-vm-navy uppercase">
            The Natural Hand-Cut Edge
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            While some companies rely on flimsy plastic strips, we recommend the timeless look of a natural hand-cut edge. This traditional technique involves carving a crisp, vertical trench into the soil.
          </p>
          <ul className="mt-6 space-y-5">
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">The Look: </span>
                <span className="text-muted-foreground">A deep, architectural shadow line that looks clean, organic, and high-end.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">The Benefit: </span>
                <span className="text-muted-foreground">It allows for better drainage and makes it easy to refresh your beds each season without dealing with cracked or heaving plastic barriers.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">The Varsity Touch: </span>
                <span className="text-muted-foreground">Our crew uses specialized equipment and steady hands to ensure every curve is smooth and every straight line is true.</span>
              </div>
            </li>
          </ul>

          <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            Don&apos;t let a blurred property line or messy grass creep take away from the beauty of your home. Professional edging is the fastest way to give your landscape a structured, high-end look that lasts all season. Whether you are refreshing your current garden beds or starting from scratch, our team is ready to provide the precision and clean finish your yard deserves. Let us handle the heavy lifting and the meticulous detail work so you can simply step back and enjoy a perfectly manicured view.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
