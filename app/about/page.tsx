import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About Varsity Mulching | Locally Owned in Doylestown, PA",
  description:
    "Varsity Mulching is a locally owned landscaping business run by college student athletes, serving Chester County, Bucks County & Montgomery County, PA with premium mulching services.",
}

const team = [
  { name: "Jacob", role: "General Manager", hometown: "Doylestown, PA", photo: "/images/team/jacob.jpg" },
  { name: "Chase", role: "Lead Estimator", hometown: "Lansdale, PA", photo: "/images/team/chase.jpg" },
  { name: "Tyler", role: "Crew Lead", hometown: "Doylestown, PA", photo: "/images/team/tyler.jpg" },
  { name: "Klay", role: "Crew Lead", hometown: "Furlong, PA", photo: "/images/team/klay.jpg" },
  { name: "Niko", role: "Crew Lead", hometown: "Doylestown, PA", photo: "/images/team/niko.jpg" },
  { name: "Connor", role: "Crew Lead", hometown: "Doylestown, PA", photo: "/images/team/connor.jpg" },
]

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-noise relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/videos/hero-poster.jpg"
            aria-label="Varsity Mulching crew at work"
          >
            <source src="/videos/hero-video.webm" type="video/webm" />
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-vm-navy/65 via-vm-navy/45 to-vm-navy/75" />
        </div>

        <div className="relative z-10 flex h-full items-center px-4 pt-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1
              className="vm-reveal font-varsity text-4xl tracking-wide text-white md:text-5xl lg:text-6xl text-balance uppercase"
              style={{ animationDelay: "60ms" }}
            >
              Our Story
            </h1>
            <div
              className="vm-reveal mx-auto mt-5 h-[2px] w-20 bg-vm-gold"
              style={{ animationDelay: "160ms" }}
            />
            <p
              className="vm-reveal mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80"
              style={{ animationDelay: "240ms" }}
            >
              We&apos;re a small business in the greater Philadelphia area employing hometown talent to keep your yard fresh each year.
            </p>
            <div className="vm-reveal mt-8" style={{ animationDelay: "320ms" }}>
              <a
                href="/contact"
                className="inline-flex rounded-full bg-vm-gold px-7 py-3.5 text-base font-semibold text-vm-navy transition-all hover:bg-vm-gold-dark hover:shadow-lg"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Varsity Mulching Story */}
      <section className="relative bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
        {/* Varsity stripes - two thick parallel lines */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="h-1 w-12 bg-vm-gold" />
          <h2 className="font-varsity mt-4 text-3xl tracking-wide text-vm-navy md:text-4xl uppercase">
            The Varsity Mulching Story
          </h2>
          <p className="mt-2 text-lg font-semibold text-vm-blue-dark">
            Expert Quality. Youthful Spirit
          </p>
          <p className="mt-3 text-sm font-semibold tracking-wide text-muted-foreground">
            The Kid Next Door: Good Landscapes Start With Good Neighbors.
          </p>

          <div className="mt-12 grid gap-12 md:grid-cols-5 md:gap-16">
            {/* Photo - Sticky on scroll */}
            <div className="md:col-span-2">
              <div className="md:sticky md:top-32">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-muted shadow-lg">
                  {/* Gold accent stripe */}
                  <div className="absolute inset-x-0 top-0 z-10 h-1.5 bg-vm-gold" />
                  <Image
                    src="/images/team/matt.jpg"
                    alt="Matt Giordano, founder of Varsity Mulching"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="md:col-span-3">
              <blockquote className="relative">
                {/* Decorative quote mark */}
                <span
                  aria-hidden="true"
                  className="font-varsity pointer-events-none absolute -left-1 -top-8 select-none text-7xl leading-none text-vm-gold/30 md:-top-10 md:text-8xl"
                >
                  &ldquo;
                </span>
                <p className="text-lg leading-relaxed text-vm-navy/85 md:text-xl md:leading-relaxed">
                  I started Varsity Mulching with a few of my hockey teammates in high school. We chose the name Varsity because that&apos;s what we were at the time. As the business grew, Varsity came to mean something more. It became a standard for attention to detail, clear communication, and customer service that people could rely on.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-vm-navy/85 md:text-xl md:leading-relaxed">
                  As we scaled, I wanted to protect that standard. That&apos;s why we partnered with three local colleges to bring student athletes from the fields to our clients&apos; mulch beds. We pair them with highly experienced crew leads who know the work and set expectations on every job. The result is a dependable, professional experience that delivers consistent results without losing what made Varsity special in the first place.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-vm-navy/85 md:text-xl md:leading-relaxed">
                  Everyone&apos;s hired the neighbor&apos;s kid to spread some mulch. Varsity is that kid — just with better equipment and a system that works every time. Our crews are college kids from the area. You&apos;ve probably seen them around. They&apos;re local, they show up, and they do the job right.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-vm-navy/85 md:text-xl md:leading-relaxed">
                  Thank you for being part of our story.
                </p>

                {/* Signature */}
                <div className="mt-12 flex items-center gap-5">
                  <div className="h-px flex-1 bg-vm-gold/40" />
                  <div className="text-right">
                    <p className="font-varsity text-xl tracking-wide text-vm-navy uppercase">
                      &mdash; Matt Giordano
                    </p>
                    <p className="mt-1 text-xs font-semibold tracking-widest text-vm-gold-dark uppercase">
                      Founder, Varsity Mulching
                    </p>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="relative bg-muted/50 px-4 py-20 md:px-12 md:py-28 lg:px-20">
        {/* Varsity stripes - two thick parallel lines */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="mx-auto h-1 w-12 bg-vm-gold" />
            <h2 className="font-varsity mt-4 text-3xl tracking-wide text-vm-navy md:text-4xl text-balance uppercase">
              Meet the Team: The Power Behind the Polish
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
              At Varsity Mulching, we believe that a great landscape is built on two things: expert strategy and unmatched hustle. Our unique &ldquo;Power Pair&rdquo; staffing model ensures that every job is overseen by a seasoned professional and executed with the energy of a division-level athlete. When you see a Varsity crew pull into your driveway, here is the team you&apos;re meeting:
            </p>
          </div>

          {/* Team Grid */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="relative overflow-hidden rounded-2xl border border-border bg-card px-5 pt-6 pb-5 before:absolute before:left-0 before:right-0 before:top-0 before:h-1 before:bg-vm-gold before:content-['']"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={`${member.name}, ${member.role} at Varsity Mulching`}
                      fill
                      sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-muted">
                      <span className="font-varsity text-5xl tracking-wide text-vm-navy/40 uppercase">
                        {member.name[0]}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <p className="font-semibold text-vm-navy">{member.name}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="mt-1 text-xs text-vm-blue-dark">{member.hometown}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Interested in joining the crew?{" "}
              <a href="/careers" className="font-semibold text-vm-blue-dark hover:underline">
                Check out our careers page
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Why Local Matters */}
      <section className="relative bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
        {/* Varsity stripes - two thick parallel lines */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="mx-auto h-1 w-12 bg-vm-gold" />
            <p className="mt-4 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
              Why Choose Us
            </p>
            <h2 className="font-varsity mt-2 text-3xl tracking-wide text-vm-navy md:text-4xl text-balance uppercase">
              Neighbors Helping Neighbors
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              When you hire Varsity, you&apos;re supporting local college students and keeping your dollars in the community.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <p className="font-varsity text-5xl leading-none text-vm-navy md:text-6xl">3</p>
              <span className="mt-3 block h-[2px] w-10 bg-vm-gold" />
              <p className="mt-4 text-lg font-semibold text-vm-navy">Partner Colleges</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We recruit hardworking student athletes from three local Pennsylvania colleges.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <p className="font-varsity text-5xl leading-none text-vm-navy md:text-6xl">10+</p>
              <span className="mt-3 block h-[2px] w-10 bg-vm-gold" />
              <p className="mt-4 text-lg font-semibold text-vm-navy">Crews Ready to Help</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                With crews across the greater Philly area, we can be a help everywhere.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <p className="font-varsity text-5xl leading-none text-vm-navy md:text-6xl">2021</p>
              <span className="mt-3 block h-[2px] w-10 bg-vm-gold" />
              <p className="mt-4 text-lg font-semibold text-vm-navy">Est. &amp; Growing</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                From a few high schoolers to a full team, we&apos;ve grown through word of mouth ever since.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
