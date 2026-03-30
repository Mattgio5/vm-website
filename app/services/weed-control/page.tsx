import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/services/service-detail"

export const metadata = {
  title: "Weed Control in Chester County & Bucks County, PA | Varsity Mulching",
  description:
    "Professional weed control for landscape beds in Chester County, Bucks County & Montgomery County, PA. Pre-emergent treatments, manual removal & landscape fabric. Serving West Chester, Doylestown & Malvern.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Weed Control",
  "name": "Professional Weed Control",
  "description": "Pre-emergent treatments, manual weed removal, and landscape fabric installation for landscape beds in Chester County, Bucks County and Montgomery County, PA.",
  "url": "https://www.varsitymulching.com/services/weed-control",
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
      "price": "150-600",
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
    { "@type": "ListItem", "position": 3, "name": "Weed Control", "item": "https://www.varsitymulching.com/services/weed-control" }
  ]
}

export default function WeedControlPage() {
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
        title="Weed Control"
        tagline="Keep weeds at bay, the right way"
        image="/images/service-weed.jpg"
        description="Weeds steal water, nutrients, and attention from your plants. We stop them before they get the chance."
        longDescription="Nobody wants to spend their weekends pulling weeds. We tackle them two ways: removing what's already there (roots and all) and putting down pre-emergent treatments so new ones don't pop up. For beds that need extra protection, we install landscape fabric that blocks weeds while letting water through. The goal is simple—keep your beds looking clean without constant upkeep."
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
      {/* SEO Section: Two-Step Approach */}
      <section className="relative bg-muted px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
            Our Method
          </p>
          <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl uppercase">
            Varsity Mulching&apos;s Two Step Approach to Weed Control
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            A beautiful, mulch-filled garden bed is only as good as the weed prevention beneath it. At Varsity Mulching, we don&apos;t just cover up your problems—we use a two-stage approach to ensure your landscape stays clean and your maintenance remains minimal. Understanding the difference between pre-emergent and targeted spray is the key to a weed-free season.
          </p>

          <h3 className="font-varsity mt-12 text-2xl tracking-wide text-vm-navy uppercase">
            Pre-Emergent (The Shield Against New Growth)
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Think of pre-emergent weed control as a preventive &ldquo;barrier&rdquo; for your soil. Its primary job is to stop weed seeds from ever becoming seedlings. When we apply a pre-emergent treatment to your beds, it creates a layer in the top inch of the soil. When a weed seed begins to germinate and tries to send out its first tiny root, it effectively &ldquo;shuts down&rdquo; the weed before you ever see a green leaf.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground italic border-l-4 border-vm-blue/40 pl-4">
            Important Note: Pre-emergent is purely preventive. It has no effect on weeds that already have established root systems. That is why timing and the second step of our process are so critical.
          </p>

          <h3 className="font-varsity mt-12 text-2xl tracking-wide text-vm-navy uppercase">
            Targeted Weed Control Spray (The Weapon Against Existing Weeds)
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            For any weeds that have already broken through the surface or have deep, existing roots, Varsity Mulching uses a professional-grade targeted spray. Unlike a barrier, this treatment is systemic.
          </p>
          <ul className="mt-6 space-y-5">
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">Absorption: </span>
                <span className="text-muted-foreground">Our team carefully applies the spray directly to the leaves and stems of active weeds.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">The Process: </span>
                <span className="text-muted-foreground">The plant absorbs the solution, carrying it from the leaves all the way down to the very tip of the root.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">The Waiting Period: </span>
                <span className="text-muted-foreground">This method requires a bit of patience. The spray needs time to take full effect, effectively &ldquo;drying out&rdquo; the weed from the inside out.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">The Result: </span>
                <span className="text-muted-foreground">Once the weed has turned brown and brittle, it can be easily removed without leaving behind live root fragments that could cause a regrowth.</span>
              </div>
            </li>
          </ul>

          <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            If you only use a spray, new seeds will germinate a week later. If you only use a pre-emergent, your existing weeds will continue to thrive. By combining both methods, Varsity Mulching clears the &ldquo;canvas&rdquo; of your current weeds while simultaneously &ldquo;locking the door&rdquo; against future growth. When followed by our premium triple-ground mulch installation, you are left with a landscape that isn&apos;t just beautiful—it&apos;s built to stay that way.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
