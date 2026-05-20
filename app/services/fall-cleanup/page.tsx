import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceDetail } from "@/components/services/service-detail"
import { SITE_URL } from "@/lib/site"

export const metadata = {
  title: "Fall Cleanup in Bucks County, PA",
  description:
    "Leaf removal, stick removal, mulch touch-ups and full haul-away across Bucks & Montgomery County, PA. Set your property up for winter.",
  alternates: { canonical: "/services/fall-cleanup" },
  openGraph: { url: "/services/fall-cleanup" },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Fall Cleanup",
  "name": "Professional Fall Cleanup",
  "description":
    "Complete property fall cleanup: leaf removal, organic debris removal, mulch touch-ups and full haul-away to prep your property for winter.",
  "url": `${SITE_URL}/services/fall-cleanup`,
  "provider": {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    "name": "Varsity Mulching LLC",
    "telephone": "+1-267-489-1567",
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 40.3101,
      "longitude": -75.1290,
    },
    "geoRadius": "48280",
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
    { "@type": "ListItem", position: 3, name: "Fall Cleanup", item: `${SITE_URL}/services/fall-cleanup` },
  ],
}

export default function FallCleanupPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />
      <ServiceDetail
        title="Fall Cleanup in Doylestown, PA"
        tagline="Set your property up for winter"
        image="/images/service-cleanup.webp"
        description="When the season ends, a proper fall cleanup is what keeps your lawn and beds healthy through the winter."
        longDescription="We clear all leaves, sticks, and organic debris from your entire property, lawn and mulch beds included, and touch up any beds where mulch has thinned or shifted over the season. Everything gets hauled away, not just blown to the curb."
        featuresNote="Each fall cleanup is customized during your quote. Depending on what your property needs heading into winter, any of the following can be included."
        features={[
          "Leaf removal (lawn and beds)",
          "Stick and branch removal",
          "Organic debris cleanup",
          "Mulch touch-ups",
          "Haul-away",
        ]}
        benefits={[
          {
            title: "The whole property, not just the lawn.",
            description:
              "Leaves on the lawn are the visible problem, but the real damage happens where most cleanup work doesn't reach: under shrubs, along foundation lines, and inside your beds, where matted debris traps moisture against soil all winter. We clear the whole property, top to bottom.",
          },
          {
            title: "Hauled away.",
            description:
              "Every bag, every load, off-site the same day. We dispose of all collected debris properly, so your property goes into winter clean: no piles, no bags, nothing left to deal with on your own.",
          },
          {
            title: "A property ready for winter, not just tidy for now.",
            description:
              "Cleanup isn't about how your yard looks before the snow flies, it's about how it makes it through. We touch up mulch where it's thinned over the season, clear debris from around your perennials and shrubs, and leave your property set up to come out of winter clean instead of needing weeks of recovery in March.",
          },
        ]}
        relatedServices={[
          { slug: "bed-cleanup", title: "Bed Cleanup" },
          { slug: "mulch-installation", title: "Mulch Installation" },
          { slug: "supplements", title: "Supplements" },
        ]}
      />
      {/* SEO Section: Why a Thorough Fall Cleanup Sets Up Next Spring */}
      <section className="relative bg-muted px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
            The Long View
          </p>
          <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl uppercase">
            Why a Thorough Fall Cleanup Sets Up Next Spring
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            A fall cleanup isn&apos;t just about how your yard looks heading into winter, it&apos;s about whether your property makes it through. The leaves and debris that pile up in October and November don&apos;t disappear under the snow. They sit there for four or five months, doing real damage to lawn, beds, and the plants you&apos;re counting on next year.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Here&apos;s what a proper fall cleanup actually prevents:
          </p>
          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">Lawn suffocation. </span>
                <span className="text-muted-foreground">A thick layer of wet, matted leaves blocks sunlight and air from reaching your turf. Within weeks, the grass underneath starts to yellow, thin out, and in some spots die off completely. Come March, you&apos;re looking at bare patches that take all spring to fix.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">Mold and root rot. </span>
                <span className="text-muted-foreground">Damp leaves trapped against soil create ideal conditions for fungal growth, with snow mold being the most common in this region. Both your lawn and your bed plants are vulnerable, especially perennials and dormant ornamentals that need to breathe through the winter.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">Pest nesting. </span>
                <span className="text-muted-foreground">Piles of leaves and brush against the foundation of your house are exactly the kind of cover that mice, voles, and other pests look for to overwinter close to a heat source. Clearing this debris keeps them away from the building.</span>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-vm-blue" />
              <div>
                <span className="font-semibold text-vm-navy">A slow spring. </span>
                <span className="text-muted-foreground">A property buried under winter debris doesn&apos;t bounce back when warm weather returns, it limps back. Patchy lawns, weakened plants, and matted bed surfaces take weeks of correction to recover. A property that was cleaned in the fall hits March green and ready.</span>
              </div>
            </li>
          </ul>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            A standard fall cleanup tucks your property in for the cold months and sets you up with a clean slate going into spring. We clear the whole property, haul everything away, and leave you with one less thing to worry about until April.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
