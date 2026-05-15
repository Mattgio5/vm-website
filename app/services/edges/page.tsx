import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/services/service-detail"

export const metadata = {
  title: "Flower Bed Edging in Doylestown, PA | Varsity Mulching",
  description:
    "Professional flower bed edging in Doylestown, PA and across Bucks, Chester & Montgomery County. Hand-cut, deep, clean borders that define your beds and keep mulch in place.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Flower Bed Edging",
  "name": "Professional Flower Bed Edging",
  "description": "Hand-cut, deep, clean borders that define flower and garden beds, stop grass invasion, and keep mulch in place.",
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
    { "@type": "ListItem", "position": 3, "name": "Flower Bed Edging", "item": "https://www.varsitymulching.com/services/edges" }
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
        title="Flower Bed Edging in Doylestown, PA"
        tagline="The detail that finishes a yard"
        image="/images/service-edges.webp"
        description="Edging is the detail that separates a good yard from a great one."
        aboutHeading="Experience the Precision of Varsity Flower Bed Edging"
        longDescription="Professional bed edging provides the sharp, clean lines that separate your lush lawn from your vibrant garden beds, instantly elevating your home's curb appeal from &ldquo;maintained&rdquo; to &ldquo;estate-quality.&rdquo; At Varsity Mulching, we specialize in cutting edges that define the flower and garden beds. That definition not only results in a cleaner, fresher look to your property — it also keeps the beds' mulch in place and minimizes the spread into the lawn."
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
      {/* SEO Section: Why Professional Edging Matters */}
      <section className="relative bg-muted px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
            Function, Not Just Form
          </p>
          <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl uppercase">
            Why Professional Edging Matters
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Edging is about more than just aesthetics; it is a functional component of your yard.
          </p>
          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">Stop Grass Invasion. </span>
                <span className="text-muted-foreground">A deep, professional edge creates a physical trench that prevents turf grass roots from creeping into your flowerbeds and choking out your plants.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">Keep Mulch in its Place. </span>
                <span className="text-muted-foreground">Tired of mulch washing onto your grass or driveway after a rainstorm? Varsity Mulching&apos;s precision edging acts as a natural basin, keeping your premium triple-ground mulch exactly where it belongs.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">Mow with Ease. </span>
                <span className="text-muted-foreground">Clean borders create a clear &ldquo;strike zone&rdquo; for mowers and trimmers, protecting your delicate plantings from accidental damage and making your weekly yard work faster and easier.</span>
              </div>
            </li>
          </ul>

          <p className="mt-10 text-base leading-relaxed text-muted-foreground md:text-lg">
            While some companies rely on flimsy plastic strips, we recommend the timeless look of a natural hand-cut edge. This traditional technique involves carving a crisp, vertical trench into the soil.
          </p>
          <ul className="mt-6 space-y-5">
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">The Look. </span>
                <span className="text-muted-foreground">A deep, architectural shadow line that looks clean, organic, and high-end.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">The Benefit. </span>
                <span className="text-muted-foreground">It allows for better drainage and makes it easy to refresh your beds each season without dealing with cracked or heaving plastic barriers.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">The Varsity Touch. </span>
                <span className="text-muted-foreground">Our crew uses specialized equipment and steady hands to ensure every curve is smooth and every straight line is true.</span>
              </div>
            </li>
          </ul>

          <p className="mt-10 text-base leading-relaxed text-muted-foreground md:text-lg">
            Don&apos;t let a blurred property line or messy grass creep take away from the beauty of your home. Professional edging is the fastest way to give your landscape a structured, high-end look that lasts all season. Whether you are refreshing your current garden beds or starting from scratch, our team is ready to provide the precision and clean finish your yard deserves.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Let us handle the heavy lifting and the meticulous detail work so you can simply step back and enjoy a perfectly manicured view.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
