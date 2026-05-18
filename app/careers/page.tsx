import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Careers | Varsity Mulching",
  description:
    "Join the Varsity Mulching team. We're looking for hardworking, friendly college students who take pride in transforming yards across Pennsylvania.",
}

const coreValues = [
  {
    title: "Hustle",
    description:
      "We show up ready to work. Every yard, every customer, every day—we bring energy and effort that gets the job done right.",
  },
  {
    title: "Reliability",
    description:
      "Our customers count on us, and our teammates count on each other. When we say we'll be there, we're there—on time and prepared.",
  },
  {
    title: "Pride",
    description:
      "We take ownership of our work. A finished yard should look so good that you'd want to put your name on it—because we do.",
  },
  {
    title: "Teamwork",
    description:
      "Landscaping is a team sport. We communicate, support each other, and celebrate wins together. No one succeeds alone here.",
  },
]

const teamReviews = [
  {
    title: "Team Member Feedback",
    quote:
      "Best summer job I've had. The work is physical but rewarding, and you actually see the results of what you do at the end of every day. Plus the crew is awesome.",
  },
  {
    title: "Team Member Feedback",
    quote:
      "Management is fair and flexible with schedules, which is huge when you're balancing school. They genuinely care about the team and make sure everyone's set up to succeed.",
  },
  {
    title: "Team Member Feedback",
    quote:
      "There's a real sense of camaraderie here. We work hard together, grab food after long days, and actually enjoy coming to work. It doesn't feel like just a job.",
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
            <Link
              href="#open-positions"
              className="inline-flex rounded-full bg-vm-blue px-8 py-4 text-base font-semibold text-vm-navy transition-all hover:bg-vm-blue-dark hover:shadow-lg"
            >
              Join The Team
            </Link>
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
            Our Culture is Shaped by Our 4 Core Values
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

      {/* Team Reviews Section */}
      <section className="relative bg-vm-blue/30 px-4 py-20 md:px-12 md:py-28 lg:px-20">
        {/* Varsity stripes - two thick parallel lines at top */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-navy" />
          <div className="h-2.5 w-full bg-vm-gold" />
        </div>
        
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16 items-start">
            {/* Left - Heading */}
            <div>
              {/* Star Rating Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-vm-gold/50 bg-vm-gold/20 px-4 py-2 shadow-sm">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 text-vm-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-vm-navy">(Team Reviews)</span>
              </div>

              <h2 className="mt-6 font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl text-balance uppercase">
                What Varsity Teammates Are Saying
              </h2>
              <div className="mt-5 h-[2px] w-16 bg-vm-gold" />
            </div>

            {/* Right - Review Cards */}
            <div className="grid gap-4 md:grid-cols-3">
              {teamReviews.map((review, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl bg-card/90 p-6 pt-7 shadow-sm ring-1 ring-vm-navy/5"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-vm-gold" />
                  <span
                    aria-hidden="true"
                    className="font-varsity pointer-events-none absolute right-4 top-3 select-none text-3xl leading-none text-vm-gold/40"
                  >
                    &ldquo;
                  </span>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-vm-gold-dark uppercase">
                    {review.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-vm-navy/85 italic">
                    {review.quote}
                  </p>
                </div>
              ))}
            </div>
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
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-vm-navy px-8 py-4 text-base font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
