import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "./contact-form"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Schedule a Free Quote",
  description:
    "Get a free, no-obligation mulching or landscaping quote in Bucks & Montgomery County, PA. Quick reply from our team.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[340px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="h-full w-full bg-vm-navy" />
          <div className="absolute inset-0 bg-gradient-to-b from-vm-navy via-vm-navy/95 to-vm-navy-light/80" />
        </div>

        <div className="relative z-10 flex h-full items-center px-4 pt-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold uppercase">
              Schedule a Free Quote
            </p>
            <h1 className="font-varsity text-4xl tracking-wide text-white md:text-5xl lg:text-6xl text-balance uppercase">
              Let&apos;s Get Your Yard On the Schedule.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              Fill out the form below and a representative will reach out to you. No-obligation quotes, fast responses, and friendly local service.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section id="quote" className="relative bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
        {/* Varsity stripes - two thick parallel lines */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <p className="mb-2 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
              Request a Quote
            </p>

            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          {/* Sidebar - Contact Info */}
          <aside className="lg:col-span-2">
            <div className="sticky top-32 space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <p className="text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
                  Get In Touch
                </p>

                <div className="mt-6 space-y-5">
                  <a
                    href="tel:+12674891567"
                    className="group flex items-start gap-3 rounded-lg p-2 -m-2 transition-colors hover:bg-vm-blue/10"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-vm-blue/15">
                      <Phone className="h-4 w-4 text-vm-navy" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        Phone
                      </p>
                      <p className="mt-0.5 font-semibold text-vm-navy group-hover:text-vm-blue-dark">
                        (267) 489-1567
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:matthewg@varsitymulching.com"
                    className="group flex items-start gap-3 rounded-lg p-2 -m-2 transition-colors hover:bg-vm-blue/10"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-vm-blue/15">
                      <Mail className="h-4 w-4 text-vm-navy" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        Email
                      </p>
                      <p className="mt-0.5 break-all font-semibold text-vm-navy group-hover:text-vm-blue-dark">
                        matthewg@varsitymulching.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-vm-blue/15">
                      <MapPin className="h-4 w-4 text-vm-navy" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        Service Area
                      </p>
                      <p className="mt-0.5 font-semibold text-vm-navy">
                        Bucks &amp; Montgomery County, PA
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-vm-blue/15">
                      <Clock className="h-4 w-4 text-vm-navy" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        Hours
                      </p>
                      <p className="mt-0.5 font-semibold text-vm-navy">
                        Mon&ndash;Sat &middot; 8am&ndash;6pm
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Quotes returned within 1 business day
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-vm-blue p-6 md:p-8">
                <p className="font-varsity text-2xl tracking-wide text-vm-navy uppercase">
                  Looking to Join the Crew?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-vm-navy/70">
                  Select &ldquo;Career Inquiry&rdquo; in the form, or head over to our open positions.
                </p>
                <a
                  href="/careers"
                  className="mt-4 inline-flex rounded-full bg-vm-navy px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-md"
                >
                  See Open Positions
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  )
}
