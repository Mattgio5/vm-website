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
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    description:
      "Our customers count on us, and our teammates count on each other. When we say we'll be there, we're there—on time and prepared.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Pride",
    description:
      "We take ownership of our work. A finished yard should look so good that you'd want to put your name on it—because we do.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    title: "Teamwork",
    description:
      "Landscaping is a team sport. We communicate, support each other, and celebrate wins together. No one succeeds alone here.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
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
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 py-20 md:py-28">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1600')" }}
        >
          {/* IMAGE NEEDED: Team working together on a job site, friendly atmosphere, maybe loading mulch or finishing a yard */}
          <div className="absolute inset-0 bg-vm-navy/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
            Varsity Mulching Careers
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
            We believe great work starts with great people. Our promise: give hardworking college students the chance to earn good money, build real skills, and be part of a crew that takes pride in every yard we touch.
          </p>
          <div className="mt-10">
            <Link
              href="#open-positions"
              className="inline-flex rounded-full bg-vm-blue px-8 py-4 text-base font-semibold text-vm-navy transition-all hover:bg-vm-blue/90 hover:shadow-lg"
            >
              Join The Team
            </Link>
          </div>
        </div>
      </section>

      {/* Culture & Values Section */}
      <section className="bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left - Team Photos Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* IMAGE NEEDED: 4 photos of team members - working, having fun, on job sites, etc. */}
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
                  Team Photo 1
                </div>
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
                  Team Photo 2
                </div>
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
                  Team Photo 3
                </div>
              </div>
              <div className="aspect-[4/5] overflow-hidden rounded-xl bg-muted">
                <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
                  Team Photo 4
                </div>
              </div>
            </div>

            {/* Right - Core Values */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-vm-navy md:text-4xl text-balance">
                Our Culture is Shaped by Our 4 Core Values
              </h2>

              <div className="mt-8 space-y-4">
                {coreValues.map((value) => (
                  <div
                    key={value.title}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 rounded-full bg-vm-blue/20 p-2.5 text-vm-navy">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-vm-navy">
                          {value.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Reviews Section */}
      <section className="bg-vm-blue/30 px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16 items-start">
            {/* Left - Heading */}
            <div>
              {/* Star Rating Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-vm-blue px-4 py-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 text-amber-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-vm-navy">(Team Reviews)</span>
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-vm-navy md:text-4xl text-balance">
                What Varsity Teammates Are Saying
              </h2>
            </div>

            {/* Right - Review Cards */}
            <div className="grid gap-4 md:grid-cols-3">
              {teamReviews.map((review, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-card/80 p-6"
                >
                  <p className="text-base font-semibold text-vm-navy">
                    {review.title}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-vm-navy/80">
                    {review.quote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions CTA */}
      <section id="open-positions" className="bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-blue-dark uppercase">
            Now Hiring
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-vm-navy md:text-4xl text-balance">
            Ready to Join the Team?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            We're always looking for motivated college students who want to work hard, earn well, and be part of something they can be proud of. No experience needed—just a good attitude and willingness to learn.
          </p>
          <div className="mt-8">
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
