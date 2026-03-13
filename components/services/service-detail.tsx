import Image from "next/image"
import Link from "next/link"
import type { ReactNode } from "react"

interface ServiceDetailProps {
  title: string
  tagline: string
  description: string
  longDescription: string
  image: string
  features: string[]
  benefits: { title: string; description: string }[]
  process: { step: number; title: string; description: string }[]
  relatedServices: { slug: string; title: string }[]
  calculator?: ReactNode
}

export function ServiceDetail({
  title,
  tagline,
  description,
  longDescription,
  image,
  features,
  benefits,
  process,
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
            <Link
              href="/services"
              className="mb-6 inline-flex text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              Back to All Services
            </Link>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-wider text-vm-blue uppercase">
                {tagline}
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
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
          <div className="h-2.5 w-full bg-vm-navy" />
          <div className="h-2.5 w-full bg-vm-gold" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Left column - Description & Features */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-vm-navy md:text-3xl">
              About This Service
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {longDescription}
            </p>

            {/* Features */}
            <div className="mt-10">
              <h3 className="text-lg font-bold text-vm-navy">What&apos;s Included</h3>
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
            </div>

            {/* Process */}
            <div className="mt-12">
              <h3 className="text-lg font-bold text-vm-navy">Our Process</h3>
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
            </div>
          </div>

          {/* Right column - CTA & Benefits */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            {/* Calculator (if provided) */}
            {calculator && <div className="mb-6">{calculator}</div>}

            {/* CTA Card */}
            <div className="rounded-2xl border border-vm-blue/30 bg-vm-blue/10 p-6">
              <h3 className="text-xl font-bold text-vm-navy">
                Get a Free Quote
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ready to get started? Contact us for a free, no-obligation estimate.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <Link
                  href="#quote"
                  className="inline-flex justify-center rounded-full bg-vm-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-vm-navy-light"
                >
                  Request Quote
                </Link>
                <a
                  href="tel:+15551234567"
                  className="inline-flex justify-center rounded-full border-2 border-vm-navy px-6 py-3 text-sm font-semibold text-vm-navy transition-all hover:bg-vm-navy hover:text-white"
                >
                  (555) 123-4567
                </a>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-vm-navy">Why Choose Us</h3>
              <div className="mt-4 space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit.title}>
                    <h4 className="font-semibold text-vm-navy">{benefit.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Services */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-vm-navy">Related Services</h3>
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
