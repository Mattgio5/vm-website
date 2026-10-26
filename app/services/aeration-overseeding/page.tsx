import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { SITE_URL } from "@/lib/site"
import { AerationFAQ } from "@/components/services/aeration-faq"
import { aerationFaqs } from "@/lib/aeration-faqs"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata: Metadata = {
  title: "Core Aeration & Overseeding in Bucks County, PA",
  description:
    "Core aeration and overseeding in Bucks & Montgomery County. We're no longer taking on aeration customers for the 2026 season and may resume in spring 2027.",
  alternates: { canonical: "/services/aeration-overseeding" },
  openGraph: { url: "/services/aeration-overseeding" },
}

const benefits = [
  "Relieve soil compaction",
  "Improve water, air, and nutrient movement",
  "Fill in thin or worn areas",
  "Encourage stronger root growth",
  "Build a thicker, more resilient lawn",
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Core Aeration & Overseeding",
  name: "Core Aeration & Overseeding",
  description:
    "Core aeration and overseeding to relieve soil compaction, improve seed-to-soil contact, and help thin lawns grow back thicker.",
  url: `${SITE_URL}/services/aeration-overseeding`,
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Varsity Mulching LLC",
    telephone: "+1-267-389-9789",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 40.3101,
      longitude: -75.129,
    },
    geoRadius: "48280",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: aerationFaqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Core Aeration & Overseeding",
      item: `${SITE_URL}/services/aeration-overseeding`,
    },
  ],
}

export default function AerationOverseedingPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />

      {/* Hero Section — two-column: copy left, season-closed notice right.
          The 2026 season is over (too cold for seed to establish); the quote
          form and $269 offer come back if we reopen in spring 2027. */}
      <section className="relative w-full overflow-visible">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/lawn_image.png"
            alt="Thick, healthy lawn after core aeration and overseeding"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-vm-navy/70 via-vm-navy/55 to-vm-navy/80" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-4 pt-28 pb-14 md:grid-cols-2 md:items-center md:gap-10 md:px-12 md:pt-32 md:pb-20 lg:gap-14 lg:px-20">
          {/* Left: existing hero copy + fall offer */}
          <div>
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild className="text-white/70 hover:text-white">
                    <Link href="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild className="text-white/70 hover:text-white">
                    <Link href="/services">Services</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/50" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white">Aeration &amp; Overseeding</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <p className="text-sm font-semibold tracking-wider text-vm-blue uppercase">
              A Thicker, Healthier Lawn Starts Below the Surface
            </p>
            <h1 className="font-varsity mt-2 text-4xl tracking-wide text-white md:text-5xl lg:text-6xl text-balance uppercase">
              Core Aeration &amp; Overseeding
            </h1>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/80">
              Loosen compacted soil and help thin lawns grow back thicker.
            </p>

          </div>

          {/* Right: season-closed notice */}
          <div className="md:pl-2 lg:pl-6">
            <div className="rounded-3xl border border-vm-gold/40 bg-vm-navy/85 p-6 shadow-2xl backdrop-blur-sm md:p-8">
              <p className="text-xs font-bold tracking-[0.15em] text-vm-gold uppercase">
                2026 Season Closed
              </p>
              <h2 className="font-varsity mt-2 text-2xl leading-tight tracking-wide text-white md:text-3xl">
                No Longer Taking On Customers for the 2026 Season
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                It&apos;s now too cold for aeration and overseeding. New grass seed needs warm soil
                to germinate and enough time to establish before winter, and that window has closed
                for this year.
              </p>
              <p className="mt-3 text-base leading-relaxed text-white/85">
                We may start back up in spring 2027. Thanks to everyone who trusted us with their
                lawns this fall!
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/services/fall-cleanup"
                  className="inline-flex justify-center rounded-full bg-vm-gold px-6 py-3 text-sm font-semibold text-vm-navy transition-all hover:bg-vm-gold/90 hover:shadow-lg"
                >
                  See Fall Cleanup
                </Link>
                <a
                  href="tel:+12673899789"
                  className="inline-flex justify-center rounded-full border-2 border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  (267) 389-9789
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Do It */}
      <section className="relative bg-background px-4 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-2">
            <h2 className="font-varsity text-2xl tracking-wide text-vm-navy md:text-3xl uppercase">
              Why Your Lawn Looks Thin After Summer
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              After a long, hot summer, Pennsylvania lawns are often left thin, patchy, and worn down. Heat
              and dry conditions stress the grass, while mowing, foot traffic, pets, and everyday use
              compact the soil beneath it. This makes it harder for water, air, and nutrients to reach the
              roots the lawn depends on.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Core aeration removes small plugs of soil to relieve compaction and open the root zone. We
              then overseed the lawn to introduce new grass into thin and worn areas, helping it recover
              with thicker, stronger growth.
            </p>

            <p className="mt-8 text-base font-semibold text-vm-navy">
              With proper watering and favorable growing conditions, this process can help:
            </p>
            <ul className="mt-4 space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vm-gold text-xs font-bold text-vm-navy">
                    ✓
                  </span>
                  <span className="text-base text-vm-navy/85">{item}</span>
                </li>
              ))}
            </ul>

            {/* Two-Step Process */}
            <div className="mt-14">
              <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
                Our Process
              </p>
              <h2 className="font-varsity text-2xl tracking-wide text-vm-navy md:text-3xl uppercase">
                Our Two-Step Process
              </h2>

              <div className="mt-8 grid gap-6">
                <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                  <span className="text-4xl font-bold text-vm-blue/30">01</span>
                  <h3 className="mt-2 text-xl font-bold text-vm-navy md:text-2xl">Core Aeration</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    We use professional equipment to remove small plugs of soil from across the lawn. These
                    openings reduce compaction and allow water, air and nutrients to move deeper into the
                    root zone.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    The soil plugs are left on the lawn intentionally and will break down naturally over
                    time.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                  <span className="text-4xl font-bold text-vm-blue/30">02</span>
                  <h3 className="mt-2 text-xl font-bold text-vm-navy md:text-2xl">Overseeding</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    Immediately after aeration, we apply grass seed across the lawn. The newly created
                    openings provide better contact between the seed and soil, giving the new grass a better
                    opportunity to germinate and establish.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    After the service, we provide clear watering and mowing instructions to help you care
                    for the newly seeded lawn.
                  </p>
                </div>
              </div>

              {/* Aeration diagram */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-sm">
                <Image
                  src="/images/aeration.png"
                  alt="Diagram showing compacted soil before aeration, soil cores after aeration, and thicker roots weeks later"
                  width={1536}
                  height={1024}
                  className="w-full"
                />
              </div>
            </div>

            {/* Timing Matters */}
            <div className="mt-14 rounded-2xl border border-vm-gold/30 bg-vm-gold/5 p-6 md:p-8">
              <h2 className="font-varsity text-xl tracking-wide text-vm-navy md:text-2xl uppercase">
                Timing Matters
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Late summer and early fall are generally the best times to aerate and overseed lawns in
                Bucks and Montgomery County.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                The intense summer heat is beginning to pass, while the soil is still warm enough for grass
                seed to germinate. The new grass then has the fall and spring growing seasons to develop
                before facing the next summer.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Because this growing window is limited, aeration and overseeding are offered seasonally.
                Once the soil cools in late fall, seed can no longer establish, which is why our 2026
                season is now closed.
              </p>
            </div>

            {/* FAQ */}
            <div className="mt-14">
              <h2 className="font-varsity text-2xl tracking-wide text-vm-navy md:text-3xl uppercase">
                Frequently Asked Questions
              </h2>
              <div className="mt-6">
                <AerationFAQ />
              </div>
            </div>
          </div>

          {/* Right column - sticky sidebar */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-2xl border border-vm-blue/30 bg-vm-blue/10 p-6">
              <h3 className="font-varsity text-xl tracking-wide text-vm-navy uppercase">2026 Season Closed</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                It&apos;s too cold to aerate and overseed. We may start back up in spring 2027.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/services/fall-cleanup"
                  className="inline-flex justify-center rounded-full bg-vm-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-vm-navy-light"
                >
                  See Fall Cleanup
                </Link>
                <a
                  href="tel:+12673899789"
                  className="inline-flex justify-center rounded-full border-2 border-vm-navy px-6 py-3 text-sm font-semibold text-vm-navy transition-all hover:bg-vm-navy hover:text-white"
                >
                  (267) 389-9789
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-varsity text-lg tracking-wide text-vm-navy uppercase">Related Services</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href="/services/fall-cleanup"
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-vm-navy transition-all hover:border-vm-blue/40 hover:bg-vm-blue/10"
                >
                  Fall Cleanup
                </Link>
                <Link
                  href="/services/weed-control"
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-vm-navy transition-all hover:border-vm-blue/40 hover:bg-vm-blue/10"
                >
                  Weed Control
                </Link>
                <Link
                  href="/services/supplements"
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-vm-navy transition-all hover:border-vm-blue/40 hover:bg-vm-blue/10"
                >
                  Supplements
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-vm-blue px-4 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-varsity text-2xl tracking-wide text-vm-navy md:text-3xl uppercase">
            Aeration Is Done for 2026
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-vm-navy/70">
            We&apos;re no longer taking on aeration and overseeding customers this season and may start
            back up in spring 2027. Still need help getting the yard ready for winter?
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/services/fall-cleanup"
              className="inline-flex rounded-full bg-vm-gold px-7 py-3.5 text-base font-semibold text-vm-navy transition-all hover:bg-vm-gold/90 hover:shadow-lg"
            >
              See Fall Cleanup
            </Link>
            <Link
              href="/schedule-a-quote"
              className="inline-flex rounded-full bg-vm-navy px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
