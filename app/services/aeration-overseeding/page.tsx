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
    "Late-summer and early-fall core aeration and overseeding to relieve soil compaction and grow a thicker lawn. Serving Doylestown, Newtown and nearby.",
  alternates: { canonical: "/services/aeration-overseeding" },
  openGraph: { url: "/services/aeration-overseeding" },
}

const benefits = [
  "Relieve soil compaction",
  "Improve seed-to-soil contact",
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

      {/* Hero Section */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "calc(65vh)", minHeight: "520px" }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lawn_image.png"
            alt="Thick, healthy lawn after core aeration and overseeding"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-vm-navy/70 via-vm-navy/50 to-vm-navy/80" />
        </div>

        <div className="relative z-10 flex h-full items-center px-4 pt-24 pb-16 md:px-12 lg:px-20">
          <div className="max-w-2xl">
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
              Over time, soil becomes compacted from foot traffic, pets, mowing and seasonal weather. Core
              aeration and overseeding work together to loosen the soil, improve seed-to-soil contact and
              help thin lawns grow back thicker.
            </p>
            <div className="mt-8">
              <Link
                href="/schedule-a-quote"
                className="inline-flex rounded-full bg-vm-gold px-7 py-3.5 text-base font-semibold text-vm-navy transition-all hover:bg-vm-gold-dark hover:shadow-lg"
              >
                Get a Free Quote
              </Link>
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
            <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
              Why We Do It
            </p>
            <h2 className="font-varsity text-2xl tracking-wide text-vm-navy md:text-3xl uppercase">
              Give New Seed a Real Chance to Take Root
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Spreading grass seed over hard, compacted soil often produces disappointing results. Much of
              the seed remains on the surface, where it can dry out or wash away before taking root.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Core aeration removes small plugs of soil from across the lawn, creating openings for water,
              air and nutrients to reach the root zone. Overseeding immediately afterward allows new seed to
              settle into those openings and make better contact with the soil.
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
                Because this growing window is limited, aeration and overseeding are offered seasonally and
                scheduling fills quickly.
              </p>
              <div className="mt-6">
                <Link
                  href="/schedule-a-quote"
                  className="inline-flex rounded-full bg-vm-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-vm-navy-light"
                >
                  Request Your Fall Lawn Quote
                </Link>
              </div>
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
              <h3 className="font-varsity text-xl tracking-wide text-vm-navy uppercase">Get a Free Quote</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Scheduling fills quickly during our late-summer and early-fall aeration window.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/schedule-a-quote"
                  className="inline-flex justify-center rounded-full bg-vm-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-vm-navy-light"
                >
                  Request Quote
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
            Ready for a Thicker Lawn This Fall?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-vm-navy/70">
            Aeration and overseeding scheduling fills quickly — request your quote today to lock in a spot
            in the late-summer and early-fall window.
          </p>
          <Link
            href="/schedule-a-quote"
            className="mt-6 inline-flex rounded-full bg-vm-navy px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-lg"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
