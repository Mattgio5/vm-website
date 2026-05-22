import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"
import { CalendlyEmbed } from "./calendly-embed"
import {
  ZONE_LABELS,
  buildCalendlyWidgetUrl,
  getCalendlyUrlForZone,
  isValidZone,
  VALID_ZONES,
  type Zone,
} from "@/lib/scheduling"

export const dynamicParams = false

export function generateStaticParams() {
  return VALID_ZONES.map((zone) => ({ zone }))
}

type Params = { zone: string }
type SearchParams = Record<string, string | string[] | undefined>

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}) {
  const { zone } = await params
  if (!isValidZone(zone)) return {}
  const label = ZONE_LABELS[zone]
  return {
    title: `${label.title} — Schedule a Free Quote`,
    description: `Pick a time that works for you. Free, no-obligation quotes for ${label.coverage}.`,
    // Post-conversion funnel page — keep out of the index.
    robots: { index: false, follow: true },
  }
}

export default async function SchedulePage({
  params,
  searchParams,
}: {
  params: Promise<Params>
  searchParams: Promise<SearchParams>
}) {
  const { zone } = await params
  if (!isValidZone(zone)) notFound()

  // General zone → thank you page, no Calendly
  if (zone === "general") {
    return (
      <main>
        <Navbar />
        <section className="relative min-h-[70vh] bg-vm-navy px-4 py-20 flex items-center md:px-12 lg:px-20">
          <div className="absolute top-0 left-0 right-0 flex flex-col">
            <div className="h-2.5 w-full bg-vm-gold" />
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-vm-gold">
              Quote Request Received
            </p>
            <h1 className="mt-4 font-varsity text-4xl tracking-wide text-white md:text-5xl lg:text-6xl uppercase">
              Thanks &mdash; We Got It.
            </h1>
            <div className="mx-auto mt-6 h-[2px] w-16 bg-vm-gold" />
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-white/80">
              A representative from Varsity Mulching will be in touch with you shortly to discuss your project and schedule your free quote.
            </p>
            <p className="mt-4 text-sm text-white/55">
              Questions in the meantime? Give us a call.
            </p>
            <a
              href="tel:+12673899789"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-vm-gold px-8 py-4 text-base font-bold text-vm-navy transition-all hover:bg-vm-gold-dark hover:shadow-lg"
            >
              (267) 389-9789
            </a>
            <div className="mt-6">
              <a href="/" className="text-sm text-white/40 hover:text-white/70 transition-colors">
                ← Back to home
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  const search = await searchParams
  const baseUrl = getCalendlyUrlForZone(zone as Zone)
  const widgetUrl = buildCalendlyWidgetUrl(baseUrl, search)
  const label = ZONE_LABELS[zone as Zone]

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-vm-navy" />
          <div className="absolute inset-0 bg-gradient-to-b from-vm-navy via-vm-navy/95 to-vm-navy-light/80" />
        </div>
        <div className="relative z-10 flex h-full items-center px-4 pt-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold uppercase">
              Schedule a Free Quote
            </p>
            <h1 className="font-varsity text-3xl tracking-wide text-white md:text-4xl lg:text-5xl text-balance uppercase">
              {label.title}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              {label.coverage}. Pick a time that works for you below &mdash; we&apos;ll confirm by email.
            </p>
          </div>
        </div>
      </section>

      {/* Embed */}
      <section className="relative bg-background px-4 py-12 md:px-12 md:py-16 lg:px-20">
        {/* Varsity stripes */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>

        <div className="mx-auto max-w-4xl pt-8">
          <CalendlyEmbed calendlyUrl={widgetUrl} />

          <p className="mt-8 text-center text-sm text-muted-foreground">
            Need to talk first? Call us at{" "}
            <a
              href="tel:+12673899789"
              className="font-semibold text-vm-navy hover:text-vm-blue-dark"
            >
              (267) 389-9789
            </a>{" "}
            &middot; Mon&ndash;Fri 7:30am&ndash;5pm
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
