import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/services/service-detail"
import { MulchCalculator } from "@/components/mulch-calculator"

export const metadata = {
  title: "Mulch Installation in Chester County & Bucks County, PA | Varsity Mulching",
  description:
    "Professional mulch installation in Chester County, Bucks County & Montgomery County, PA. Premium hardwood, cedar & colored mulch delivered and installed. Serving West Chester, Doylestown, Malvern & Exton.",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Mulch Installation",
  "name": "Professional Mulch Installation",
  "description": "Premium mulch delivered and professionally installed for garden beds. Hardwood, cedar, and colored mulch options available.",
  "url": "https://www.varsitymulching.com/services/mulch-installation",
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
      "price": "350-1500",
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
    { "@type": "ListItem", "position": 3, "name": "Mulch Installation", "item": "https://www.varsitymulching.com/services/mulch-installation" }
  ]
}

export default function MulchInstallationPage() {
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
        title="Mulch Installation in Doylestown, PA"
        tagline="Premium mulch, professionally installed"
        image="/images/service-mulch.webp"
        description="Fresh mulch does more than look good. It locks in moisture, keeps weeds down, and protects your plants through the seasons."
        longDescription="We bring everything you need right to your driveway: premium mulch, the crew to spread it, and the know-how to do it right. Our team preps your beds, clears out the old stuff when needed, and lays down a clean, even layer that makes your whole yard pop. No mess left behind, no heavy bags to haul yourself. Just a finished product you can be proud of."
        featuresHeading="Options"
        features={[
          "Triple-ground dyed black",
          "Triple-ground dyed brown",
          "Triple-ground undyed",
          "Leaf mulch",
          "Nutra mulch",
          "Playground mulch",
          "And more",
        ]}
        benefits={[
          {
            title: "Clean material.",
            description:
              "A lot of commercial mulch is ground-up construction waste, which means screws, plastic, and contaminants can end up in your beds. We use only natural raw material, sourced fresh and free of debris.",
          },
          {
            title: "Filtered water in the grind.",
            description:
              "The water used to grind mulch becomes part of it. We use filtered water, so what arrives at your house is mulch and nothing else, with no introduced weed seeds, fungal spores, or contaminants.",
          },
          {
            title: "Naturally dyed for real protection.",
            description:
              "Our color comes from a vegetable oil and charcoal-based dye. The charcoal works as a natural weed suppressant, adding a layer of protection on top of our pre-emergent.",
          },
          {
            title: "An install that shows.",
            description:
              "Premium mulch deserves a premium install. Our crews spread carefully around every plant, shrub, and bed edge, with consistent depth and crisp lines that keep your beds sharp and your plants healthy.",
          },
        ]}
        relatedServices={[
          { slug: "edges", title: "Flower Bed Edging" },
          { slug: "weed-control", title: "Weed Control" },
          { slug: "bed-cleanup", title: "Bed Cleanup" },
        ]}
        calculator={<MulchCalculator />}
      />
      {/* SEO Section: Triple Ground */}
      <section className="relative bg-muted px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
            Why Triple-Ground
          </p>
          <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl uppercase">
            Not All Mulch Is Equal: The Power of Triple-Ground
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              When it comes to mulch, we know you have options. And most homeowners don&apos;t realize how different they actually are. At Varsity Mulching, we only use high-quality, triple-ground mulch. It&apos;s processed more finely than typical big box mulch, which means better coverage, better consistency, and a cleaner look that holds up over time.
            </p>
            <p>
              But the real difference shows up beneath the surface. Because the material is more finely ground, it breaks down more evenly and actually improves your soil throughout the season instead of just sitting on top of it.
            </p>
          </div>
          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">Natural decomposition. </span>
                <span className="text-muted-foreground">Over the course of the season, the bottom layer of your mulch slowly breaks down, turning into rich, dark compost.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">Plant-safe color. </span>
                <span className="text-muted-foreground">Our mulch is dyed with vegetable-based colorants, not harsh chemicals, so as it breaks down it continues feeding your soil instead of contaminating it.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">Temperature and moisture control. </span>
                <span className="text-muted-foreground">Dyed mulch helps regulate soil temperature and retain moisture, protecting roots from extreme heat and reducing stress on your plants.</span>
              </div>
            </li>
          </ul>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            You&apos;ll notice the difference year after year: no large bark chunks, no patchy fading, no mulch that dries out and blows away. It looks better, lasts longer, and actually improves your landscape over time.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
