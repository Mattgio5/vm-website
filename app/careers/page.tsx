import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
export const metadata: Metadata = {
  title: "Careers — Landscaping & Mulching Jobs in Bucks County, PA",
  description:
    "Join the Varsity Mulching crew. Hiring hardworking college students and crew leads in Bucks & Montgomery County, PA.",
  alternates: { canonical: "/careers" },
  openGraph: { url: "/careers" },
}

const coreValues = [
  {
    title: "Hustle",
    description:
      "We bring energy to every job. Whether it's the first yard of the day or the last, we work hard from start to finish and take pride in doing more than what's expected.",
  },
  {
    title: "Attention to Detail",
    description:
      "We treat every property like it's our own. That means pulling every weed, getting mulch into the tight spots others skip, and leaving the property cleaner than when we arrived.",
  },
  {
    title: "Customer Service",
    description:
      "Our guys are friendly, professional, and easy to work with. We show up when we say we will, keep customers in the loop, and make sure every interaction leaves a good impression.",
  },
]


export default function CareersPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-noise relative min-h-[70vh] flex items-center justify-center overflow-hidden px-4 py-20 md:py-28">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/team/careers-hero.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-vm-navy/65 via-vm-navy/55 to-vm-navy/75" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h1
            className="vm-reveal font-varsity text-4xl tracking-wide text-white md:text-5xl lg:text-6xl text-balance uppercase"
            style={{ animationDelay: "60ms" }}
          >
            Varsity Mulching Careers
          </h1>
          <div
            className="vm-reveal mx-auto mt-5 h-[2px] w-20 bg-vm-gold"
            style={{ animationDelay: "160ms" }}
          />
          <p
            className="vm-reveal mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl"
            style={{ animationDelay: "240ms" }}
          >
            We believe great work starts with great people. Our promise: give hardworking college students the chance to earn good money, build real skills, and be part of a crew that takes pride in every yard we touch.
          </p>
          <div className="vm-reveal mt-10" style={{ animationDelay: "320ms" }}>
            <a
              href="#open-positions"
              className="inline-flex rounded-full bg-vm-blue px-8 py-4 text-base font-semibold text-vm-navy transition-all hover:bg-vm-blue-dark hover:shadow-lg"
            >
              Join The Team
            </a>
          </div>
        </div>
      </section>

      {/* Culture & Values Section */}
      <section className="relative bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
        {/* Varsity stripes - two thick parallel lines */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        
        <div className="mx-auto max-w-4xl">
          <div className="h-1 w-12 bg-vm-gold" />
          <h2 className="font-varsity mt-4 text-3xl tracking-wide text-vm-navy md:text-4xl text-balance uppercase">
            Our Culture is Shaped by Our 3 Core Values
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-border border-l-4 border-l-vm-gold bg-card p-5 pl-6"
              >
                <h3 className="font-varsity text-xl tracking-wide text-vm-navy uppercase">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions CTA */}
      <section id="open-positions" className="relative bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
        {/* Varsity stripes - two thick parallel lines */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto h-1 w-12 bg-vm-gold" />
          <p className="mt-4 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
            Now Hiring
          </p>
          <h2 className="font-varsity mt-2 text-3xl tracking-wide text-vm-navy md:text-4xl text-balance uppercase">
            Ready to Join the Team?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            We&apos;re always looking for motivated college students who want to work hard, earn well, and be part of something they can be proud of. No experience needed&mdash;just a good attitude and willingness to learn.
          </p>
          <div className="mt-9">
            <a
              href="https://varsity-mulching.careerplug.com/account"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-vm-navy px-8 py-4 text-base font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-lg"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
