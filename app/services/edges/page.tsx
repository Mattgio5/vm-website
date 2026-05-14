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
        tagline="The detail that finishes a yard"
        image="/images/service-edges.webp"
        description="Edging is the detail that separates a good yard from a great one."
        longDescription="Our crew hand-cuts every line with edging spades, carving a deep, vertical trench that gives your beds a sharp, architectural look the moment we're done. Whether you're refreshing existing beds or starting from scratch, we set the lines, clear the debris, and leave you with crisp, finished edges that frame your landscape all season."
        benefits={[
          {
            title: "The Look",
            description:
              "A sharp, consistent edge is what makes a finished yard pop. We hand-cut every line with edging spades, taking the time to get the trench deep, vertical, and even from start to finish.",
          },
          {
            title: "Lines That Hold",
            description:
              "An edge has to be cut deep enough to do its job — blocking grass roots, holding mulch, draining water — without being so deep that it caves in or looks excavated. Getting that balance right takes experience and the right tools. Our crew has both.",
          },
          {
            title: "The Details That Matter",
            description:
              "The hardest part of edging isn't the long straight runs — it's the tight curves around trees, corners at hardscaping, and the irregular spots where consistency is hardest. We treat those areas with the same attention as the easy ones.",
          },
          {
            title: "Effortless Looks, Real Work",
            description:
              "A great edge looks effortless. It isn't. Hire the crew that puts the work in.",
          },
        ]}
        relatedServices={[
          { slug: "mulch-installation", title: "Mulch Installation" },
          { slug: "bed-cleanup", title: "Bed Cleanup" },
          { slug: "weed-control", title: "Weed Control" },
        ]}
      />
      {/* SEO Section: Hand-Cut */}
      <section className="relative bg-muted px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
            Why Hand-Cut
          </p>
          <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl uppercase">
            Not All Edging Is Equal: The Power of Hand-Cut
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            A great edge is one of those details most homeowners notice without knowing why. It&apos;s the clean line between lawn and bed that makes a property feel cared for, intentional, and finished. But edging isn&apos;t just an aesthetic detail. A properly cut edge does real work in your landscape every day.
          </p>
          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">It stops grass invasion. </span>
                <span className="text-muted-foreground">A deep, vertical trench creates a physical barrier that turf roots can&apos;t easily cross, keeping your lawn from creeping into your beds and choking out the plants you actually want there.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">It keeps mulch where it belongs. </span>
                <span className="text-muted-foreground">That same trench acts as a natural basin during heavy rain, holding your mulch in the bed instead of letting it wash out onto your grass or driveway.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">It makes mowing faster and safer. </span>
                <span className="text-muted-foreground">A clean, visible border gives your mower and trimmer a clear strike zone, which protects your plants from accidental damage and shaves time off every weekly cut.</span>
              </div>
            </li>
          </ul>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            The catch is that most edges aren&apos;t cut to actually do these things. Machinery edges round off the trench and leave a shallow, soft line that grass crosses again within weeks. Plastic strips look fine on day one but crack, heave, and shift as soil freezes and thaws, leaving you with a maintenance problem and a yard that looks worse a few years in than it did the day it was installed.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Hand-cut edging is the old-school technique for a reason: it drains naturally, holds its shape, and can be re-cut clean each spring with the same spade work. No materials to rip out, no plastic to fight, no compromise on the look. The trench you get on installation day is the same trench you get all season, and the season after that.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
