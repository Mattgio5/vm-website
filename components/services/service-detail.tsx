import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface ServiceDetailProps {
  title: string
  tagline: string
  description: string
  longDescription: string
  image: string
  aboutHeading?: string
  features?: string[]
  featuresHeading?: string
  featuresNote?: string
  benefits: { title: string; description: string }[]
  process?: { step: number; title: string; description: string }[]
  relatedServices: { slug: string; title: string }[]
  calculator?: ReactNode
}

export function ServiceDetail({
  title,
  tagline,
  description,
  longDescription,
  image,
  aboutHeading = "About This Service",
  features = [],
  featuresHeading = "What's Included",
  featuresNote,
  benefits,
  process = [],
  relatedServices,
  calculator,
}: ServiceDetailProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-vm-navy/70 via-vm-navy/50 to-vm-navy/80" />
        </div>

        <div className="relative z-10 flex h-full items-center px-4 pt-24 md:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-7xl">
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
                  <BreadcrumbPage className="text-white">{title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-wider text-vm-blue uppercase">
                {tagline}
              </p>
              <h1 className="font-varsity mt-2 text-4xl tracking-wide text-white md:text-5xl lg:text-6xl text-balance uppercase">
                {title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-white/80 md:text-xl">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative bg-background px-4 py-16 md:px-12 md:py-24 lg:px-20">
        {/* Varsity stripes - two thick parallel lines */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Left column - main service content */}
          <div className="lg:col-span-2">
            <h2 className="font-varsity text-2xl tracking-wide text-vm-navy md:text-3xl uppercase">
              {aboutHeading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {longDescription}
            </p>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-vm-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-vm-navy-light"
              >
                Request a Quote
              </Link>
            </div>

            {/* Calculator (if provided) — lives in the main flow so the sidebar stays compact */}
            {calculator && <div className="mt-10">{calculator}</div>}

            {/* Features */}
            {features.length > 0 && (
              <div className="mt-10">
                <h3 className="font-varsity text-lg tracking-wide text-vm-navy uppercase">{featuresHeading}</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                    >
                      <span className="h-2 w-2 rounded-full bg-vm-blue" />
                      <span className="text-sm font-medium text-vm-navy">{feature}</span>
                    </li>
                  ))}
                </ul>
                {featuresNote && (
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground italic border-l-4 border-vm-blue/40 pl-4">
                    {featuresNote}
                  </p>
                )}
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex rounded-full bg-vm-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-vm-navy-light"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            )}

            {/* Process */}
            {process.length > 0 && (
              <div className="mt-12">
                <h3 className="font-varsity text-lg tracking-wide text-vm-navy uppercase">Our Process</h3>
                <div className="mt-6 grid gap-4">
                  {process.map((step) => (
                    <div
                      key={step.step}
                      className="flex gap-4 rounded-xl border border-border bg-card p-5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-vm-navy text-sm font-bold text-white">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-vm-navy">{step.title}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex rounded-full bg-vm-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-vm-navy-light"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
            )}

            {/* Why Varsity — in main column so the sticky sidebar stays shorter than this column */}
            <div className="mt-12">
              <h3 className="font-varsity text-lg tracking-wide text-vm-navy uppercase">Why Varsity</h3>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <h4 className="font-semibold text-vm-navy">{benefit.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column - compact sticky sidebar */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            {/* CTA Card */}
            <div className="rounded-2xl border border-vm-blue/30 bg-vm-blue/10 p-6">
              <h3 className="font-varsity text-xl tracking-wide text-vm-navy uppercase">
                Get a Free Quote
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ready to get started? Contact us for a free, no-obligation estimate.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="inline-flex justify-center rounded-full bg-vm-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-vm-navy-light"
                >
                  Request Quote
                </Link>
                <a
                  href="tel:+12674891567"
                  className="inline-flex justify-center rounded-full border-2 border-vm-navy px-6 py-3 text-sm font-semibold text-vm-navy transition-all hover:bg-vm-navy hover:text-white"
                >
                  (267) 489-1567
                </a>
              </div>
            </div>

            {/* Related Services */}
            <div className="mt-8">
              <h3 className="font-varsity text-lg tracking-wide text-vm-navy uppercase">Related Services</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-vm-navy transition-all hover:border-vm-blue/40 hover:bg-vm-blue/10"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
