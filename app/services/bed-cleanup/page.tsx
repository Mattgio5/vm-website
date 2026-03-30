import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/services/service-detail"

export const metadata = {
  title: "Bed Cleanup in Chester County & Bucks County, PA | Varsity Mulching",
  description:
    "Professional landscape bed cleanup in Chester County, Bucks County & Montgomery County, PA. Remove debris, dead plants & old mulch to revitalize your garden beds. Serving West Chester, Doylestown & Malvern.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Bed Cleanup",
  "name": "Professional Landscape Bed Cleanup",
  "description": "Remove debris, dead plants, and old mulch to revitalize your garden beds. Complete bed restoration and soil preparation.",
  "url": "https://www.varsitymulching.com/services/bed-cleanup",
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
      "price": "250-1000",
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
    { "@type": "ListItem", "position": 3, "name": "Bed Cleanup", "item": "https://www.varsitymulching.com/services/bed-cleanup" }
  ]
}

export default function BedCleanupPage() {
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
        title="Bed Cleanup"
        tagline="Revitalize tired, neglected beds"
        image="/images/service-cleanup.jpg"
        description="Beds get cluttered with leaves, dead plants, and old mulch over time. We clear it all out so you can start fresh."
        longDescription="Sometimes a yard just needs a reset. We come in and clear out everything that's built up—leaves, sticks, dead plants, weeds, decomposed mulch—all of it. Then we prep the soil so it's ready for whatever comes next, whether that's new plantings or a fresh layer of mulch. It's a clean slate for your beds without you having to haul a single bag to the curb."
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
      {/* SEO Section: Professional Flower & Garden Bed Clean Up */}
      <section className="relative bg-muted px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
            Start Fresh
          </p>
          <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl uppercase">
            Professional Flower &amp; Garden Bed Clean Up
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Winters can be rough on your property, especially here in Pennsylvania. An early season flower and garden bed clean-up will set your beds to thrive in spring and summer. Here&apos;s how:
          </p>
          <ul className="mt-6 space-y-6">
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">Your Soil Can Breathe: </span>
                <span className="text-muted-foreground">Over the winter, leaves and organic debris form a thick, matted layer that suffocates the earth. By removing this &ldquo;winter crust,&rdquo; oxygen, sunlight, and vital nutrients are able to reach the root zones of your plants. This prevents the mold and fungal growth that often thrives in damp, trapped debris, giving your perennials a healthy head start.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">Your Mulch Sits Correctly: </span>
                <span className="text-muted-foreground">For mulch to do its job, it needs direct contact with the soil. Without old leaves in the way, your new triple-ground mulch can settle firmly against the earth. This creates a superior seal that effectively suppresses weeds and regulates soil temperature. Most importantly, it allows the mulch to begin its natural composting process, slowly feeding your plants from the ground up.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">Encouraging New Growth: </span>
                <span className="text-muted-foreground">Many ornamental grasses and perennials, like Black-Eyed Susan and Bee-Balm, need a clean &ldquo;exit&rdquo; from the soil to thrive. Our team carefully prunes away dead stalks and clears the path for new green shoots, ensuring your plants grow full and vibrant rather than struggling through a tangled mess of old growth.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">The &ldquo;Wow&rdquo; Factor is Instant: </span>
                <span className="text-muted-foreground">There is a distinct, visible difference between a yard that&apos;s simply been mulched and one that&apos;s been professionally prepped, cleared, and detailed. A clean bed allows for those crisp, deep edges and uniform textures that define a high-end landscape.</span>
              </div>
            </li>
          </ul>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            Leave the heavy lifting to the boys at Varsity Mulching. Our crew arrives with the right tools to handle the heavy raking and the meticulous detail work in a fraction of the time. We don&apos;t just move the mess—we haul it away, leaving your property spotless and your landscape perfectly primed for its spring transformation.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
