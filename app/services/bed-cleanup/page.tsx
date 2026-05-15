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
        title="Bed Cleanup in Doylestown, PA"
        tagline="A clean slate for your beds"
        image="/images/service-cleanup.webp"
        description="Sometimes a yard just needs a reset."
        longDescription="We come in and clear out everything that's built up: leaves, sticks, dead plants, weeds, decomposed mulch, all of it. Then we prep the soil so it's ready for whatever comes next, whether that's new plantings or a fresh layer of mulch. It's a clean slate for your beds without you having to haul a single bag to the curb."
        featuresNote="Each cleanup is customized to your property. Depending on what your beds need, any of the following can be included, scoped during your quote."
        features={[
          "Debris removal",
          "Leaf removal",
          "Dead growth removal",
          "Old mulch removal",
          "Weed removal",
          "Haul-away",
        ]}
        benefits={[
          {
            title: "Down to the Soil, Not Just the Surface",
            description:
              "A real cleanup gets your beds back to bare soil so what comes next has a clean foundation. The matted, decomposed layer underneath builds up all season and needs to come out, not just get covered over. We work all the way down.",
          },
          {
            title: "Plants Respected",
            description:
              "A good cleanup means knowing what to remove and what to leave alone. Live perennials, dormant ornamentals, and emerging shoots get carefully worked around. We treat the live parts of your bed like the asset they are.",
          },
          {
            title: "Hauled Off, Not Piled Up",
            description:
              "Debris bagged at the curb or stacked in a corner of your yard is still your problem. We load every bit of it into our trucks and haul it off-site the same day. You come home to a clean property, not a project waiting on trash day.",
          },
        ]}
        relatedServices={[
          { slug: "mulch-installation", title: "Mulch Installation" },
          { slug: "weed-control", title: "Weed Control" },
          { slug: "edges", title: "Flower Bed Edging" },
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
            Why an Early-Season Bed Cleanup Pays Off All Year
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Winters can be rough on your property, especially here in Pennsylvania. An early-season flower and garden bed cleanup will set your beds up to thrive in spring and summer. Here&apos;s how:
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
            Leave the heavy lifting to the crew at Varsity Mulching. We arrive with the right tools to handle the heavy raking and the meticulous detail work in a fraction of the time. We don&apos;t just move the mess. We haul it away, leaving your property spotless and your landscape perfectly primed for its spring transformation.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
