import Image from "next/image"
import Link from "next/link"
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
  longDescription?: string
  image: string
  aboutHeading?: string
  features?: string[]
  featuresHeading?: string
  featuresNote?: string
  featuresInSidebar?: boolean
  benefits?: { title: string; description: string }[]
  benefitsIntro?: string
  benefitsOutro?: string
  process?: { step: number; title: string; description: string }[]
  relatedServices: { slug: string; title: string }[]
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
  featuresInSidebar = false,
  benefits = [],
  benefitsIntro,
  benefitsOutro,
  process = [],
  relatedServices,
}: ServiceDetailProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-noise relative h-[100svh] min-h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-vm-navy/75 via-vm-navy/55 to-vm-navy/85" />
        </div>

        <div className="relative z-10 flex h-full items-center px-4 pt-24 md:px-12 lg:px-20">
          <div className="mx-auto w-full max-w-7xl">
            <Breadcrumb className="vm-reveal mb-6" style={{ animationDelay: "0ms" }}>
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
              <p
                className="vm-reveal inline-flex items-center gap-2 rounded-full border border-vm-gold/50 bg-vm-navy/40 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-vm-gold uppercase backdrop-blur-sm md:text-sm"
                style={{ animationDelay: "80ms" }}
              >
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-vm-gold" />
                {tagline}
              </p>
              <h1
                className="vm-reveal font-varsity mt-4 text-4xl tracking-wide text-white md:text-5xl lg:text-6xl text-balance uppercase"
                style={{ animationDelay: "160ms" }}
              >
                {title}
              </h1>
              <div
                className="vm-reveal mt-5 h-[2px] w-20 bg-vm-gold"
                style={{ animationDelay: "240ms" }}
              />
              <p
                className="vm-reveal mt-5 text-lg leading-relaxed text-white/80 md:text-xl"
                style={{ animationDelay: "320ms" }}
              >
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
            {/* About — only render when there's a long description to show */}
            {longDescription && (
              <>
                <div className="h-1 w-12 bg-vm-gold" />
                <h2 className="font-varsity mt-4 text-2xl tracking-wide text-vm-navy md:text-3xl uppercase">
                  {aboutHeading}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  {longDescription
                    .split(/\n\s*\n/)
                    .map((para, i) => (
                      <p key={i}>{para}</p>
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
              </>
            )}

            {/* Features (default position: left column) */}
            {features.length > 0 && !featuresInSidebar && (
              <div className={longDescription ? "mt-12" : ""}>
                <div className="h-1 w-12 bg-vm-gold" />
                <h3 className="font-varsity mt-4 text-xl tracking-wide text-vm-navy uppercase md:text-2xl">{featuresHeading}</h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-vm-gold-dark"
                      >
                        <path
                          fill="currentColor"
                          d="M7.629 14.071L3.85 10.293l1.414-1.414 2.364 2.364 6.293-6.293 1.414 1.414z"
                        />
                      </svg>
                      <span className="text-sm font-medium text-vm-navy">{feature}</span>
                    </li>
                  ))}
                </ul>
                {featuresNote && (
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground italic border-l-4 border-vm-gold/50 pl-4">
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
              <div className={longDescription || (features.length > 0 && !featuresInSidebar) ? "mt-12" : ""}>
                <div className="h-1 w-12 bg-vm-gold" />
                <h3 className="font-varsity mt-4 text-xl tracking-wide text-vm-navy uppercase md:text-2xl">Our Process</h3>
                <div className="mt-6 grid gap-4">
                  {process.map((step) => (
                    <div
                      key={step.step}
                      className="grid grid-cols-[auto_1fr] gap-5 rounded-xl border border-border bg-card p-5 md:gap-6 md:p-6"
                    >
                      <div className="flex flex-col items-center">
                        <span className="font-varsity text-4xl leading-none tracking-wide text-vm-navy md:text-5xl">
                          {String(step.step).padStart(2, "0")}
                        </span>
                        <span className="mt-1 h-[2px] w-6 bg-vm-gold" />
                      </div>
                      <div className="pt-1">
                        <h4 className="text-base font-bold text-vm-navy md:text-lg">{step.title}</h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground md:text-base">
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

            {/* Why Varsity — bullet format with optional intro/outro paragraphs */}
            {(benefits.length > 0 || benefitsIntro || benefitsOutro) && (
              <div className="mt-12">
                <div className="h-1 w-12 bg-vm-gold" />
                <h3 className="font-varsity mt-4 text-xl tracking-wide text-vm-navy uppercase md:text-2xl">Why Varsity</h3>
                {benefitsIntro && (
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {benefitsIntro}
                  </p>
                )}
                {benefits.length > 0 && (
                  <ul className="mt-6 space-y-5">
                    {benefits.map((benefit) => (
                      <li key={benefit.title} className="flex gap-4">
                        <span
                          aria-hidden="true"
                          className="mt-[10px] block h-[2px] w-5 shrink-0 bg-vm-gold md:mt-[12px] md:w-6"
                        />
                        <div>
                          <span className="font-semibold text-vm-navy">{benefit.title} </span>
                          <span className="text-base leading-relaxed text-muted-foreground md:text-lg">{benefit.description}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                {benefitsOutro && (
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {benefitsOutro}
                  </p>
                )}
              </div>
            )}

          </div>

          {/* Right column - compact sticky sidebar */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            {/* CTA Card — stadium-ticket style: navy fill, gold top accent */}
            <div className="relative overflow-hidden rounded-2xl bg-vm-navy text-white shadow-xl">
              {/* Gold top accent */}
              <div className="h-1.5 w-full bg-vm-gold" />
              <div className="p-6">
                <h3 className="font-varsity text-xl tracking-wide uppercase md:text-2xl">
                  Get a Free Quote
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  Ready to get started? Contact us for a free, no-obligation estimate.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex justify-center rounded-full bg-vm-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-vm-navy transition-all hover:bg-vm-gold-dark hover:shadow-lg"
                  >
                    Request Quote
                  </Link>
                  <a
                    href="tel:+12674891567"
                    className="inline-flex justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
                  >
                    (267) 489-1567
                  </a>
                </div>
              </div>
            </div>

            {/* Features in sidebar (when featuresInSidebar is true) */}
            {features.length > 0 && featuresInSidebar && (
              <div className="mt-8">
                <div className="h-1 w-10 bg-vm-gold" />
                <h3 className="font-varsity mt-3 text-lg tracking-wide text-vm-navy uppercase">{featuresHeading}</h3>
                <ul className="mt-4 space-y-2">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
                    >
                      <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 shrink-0 text-vm-gold-dark">
                        <path fill="currentColor" d="M7.629 14.071L3.85 10.293l1.414-1.414 2.364 2.364 6.293-6.293 1.414 1.414z" />
                      </svg>
                      <span className="text-sm font-medium text-vm-navy">{feature}</span>
                    </li>
                  ))}
                </ul>
                {featuresNote && (
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground italic border-l-4 border-vm-gold/50 pl-4">
                    {featuresNote}
                  </p>
                )}
              </div>
            )}

            {/* Related Services */}
            <div className="mt-8">
              <div className="h-1 w-10 bg-vm-gold" />
              <h3 className="font-varsity mt-3 text-lg tracking-wide text-vm-navy uppercase">Related Services</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {relatedServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-vm-navy transition-colors hover:border-vm-gold/60 hover:bg-vm-gold/10"
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
