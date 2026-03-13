import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "About Us | Varsity Mulching",
  description:
    "Learn about Varsity Mulching - a local Pennsylvania business run by college student athletes, delivering premium mulching services with attention to detail.",
}

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* IMAGE NEEDED: Hero image showing the Varsity Mulching team working together on a job site, preferably showing college-aged workers in action */}
          <div className="h-full w-full bg-vm-navy/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-vm-navy/60 via-vm-navy/40 to-vm-navy/70" />
        </div>

        <div className="relative z-10 flex h-full items-center px-4 pt-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-varsity text-4xl tracking-wide text-white md:text-5xl lg:text-6xl text-balance uppercase">
              Our Story
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              We're a small business in the greater Philadelphia area employing hometown talent to keep your yard fresh each year.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="relative bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
        {/* Varsity stripes - two thick parallel lines */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-5 md:gap-16">
            {/* Photo - Sticky on scroll */}
            <div className="md:col-span-2">
              <div className="md:sticky md:top-32">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted">
                  {/* IMAGE NEEDED: Professional but approachable photo of the founder/owner, ideally in casual business attire or Varsity Mulching branded clothing */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <span className="text-sm">Founder Photo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="md:col-span-3">
              <blockquote className="relative">
                <p className="text-lg leading-relaxed text-vm-navy/80 md:text-xl md:leading-relaxed">
                  I started Varsity Mulching with a few of my hockey teammates in high school. We chose the name Varsity because that's what we were at the time. As the business grew, Varsity came to mean something more. It became a standard for attention to detail, clear communication, and customer service that people could rely on.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-vm-navy/80 md:text-xl md:leading-relaxed">
                  As we scaled, I wanted to protect that standard. That's why we partnered with three local colleges to bring student athletes from the fields to our clients' mulch beds. We pair them with experienced crew leads who know the work and set expectations on every job.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-vm-navy/80 md:text-xl md:leading-relaxed">
                  The result is a dependable, professional experience that delivers consistent results without losing what made Varsity special in the first place.
                </p>
                <p className="mt-6 text-lg leading-relaxed text-vm-navy/80 md:text-xl md:leading-relaxed">
                  Thank you for being a part of our story!
                </p>

                {/* Signature */}
                <div className="mt-10 flex items-center gap-4">
                  <div className="h-px flex-1 bg-border" />
                  <div className="text-right">
                    <p className="font-semibold text-vm-navy text-lg">
                      — Matt Giordano
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Founder, Varsity Mulching
                    </p>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* The Varsity Crew - Moved above Neighbors Helping Neighbors */}
      <section className="relative bg-muted/50 px-4 py-20 md:px-12 md:py-28 lg:px-20">
        {/* Varsity stripes - two thick parallel lines */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl text-balance uppercase">
              The Varsity Crew
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              College athletes who bring the same discipline and teamwork from the field to your yard.
            </p>
          </div>

          {/* Team Grid - 8 members */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Team Member 1 */}
            <div className="group rounded-2xl border border-border bg-card p-5">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                {/* IMAGE NEEDED: Headshot of team member 1, casual/friendly style */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <span className="text-xs">Photo</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-vm-navy">Team Member Name</p>
                <p className="text-sm text-muted-foreground">Crew Lead</p>
                <p className="mt-1 text-xs text-vm-blue-dark">Hometown, PA</p>
                <p className="text-xs text-vm-blue-dark">School Name &apos;25</p>
                <p className="mt-2 text-xs text-muted-foreground italic">
                  "Love the cheesesteaks at Pat's"
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="group rounded-2xl border border-border bg-card p-5">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                {/* IMAGE NEEDED: Headshot of team member 2, casual/friendly style */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <span className="text-xs">Photo</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-vm-navy">Team Member Name</p>
                <p className="text-sm text-muted-foreground">Crew Lead</p>
                <p className="mt-1 text-xs text-vm-blue-dark">Hometown, PA</p>
                <p className="text-xs text-vm-blue-dark">School Name &apos;26</p>
                <p className="mt-2 text-xs text-muted-foreground italic">
                  "Nothing beats Wawa runs"
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="group rounded-2xl border border-border bg-card p-5">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                {/* IMAGE NEEDED: Headshot of team member 3, casual/friendly style */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <span className="text-xs">Photo</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-vm-navy">Team Member Name</p>
                <p className="text-sm text-muted-foreground">Field Technician</p>
                <p className="mt-1 text-xs text-vm-blue-dark">Hometown, PA</p>
                <p className="text-xs text-vm-blue-dark">School Name &apos;27</p>
                <p className="mt-2 text-xs text-muted-foreground italic">
                  "Eagles games with the family"
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="group rounded-2xl border border-border bg-card p-5">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                {/* IMAGE NEEDED: Headshot of team member 4, casual/friendly style */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <span className="text-xs">Photo</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-vm-navy">Team Member Name</p>
                <p className="text-sm text-muted-foreground">Field Technician</p>
                <p className="mt-1 text-xs text-vm-blue-dark">Hometown, PA</p>
                <p className="text-xs text-vm-blue-dark">School Name &apos;27</p>
                <p className="mt-2 text-xs text-muted-foreground italic">
                  "The trails at Valley Forge"
                </p>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="group rounded-2xl border border-border bg-card p-5">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                {/* IMAGE NEEDED: Headshot of team member 5, casual/friendly style */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <span className="text-xs">Photo</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-vm-navy">Team Member Name</p>
                <p className="text-sm text-muted-foreground">Field Technician</p>
                <p className="mt-1 text-xs text-vm-blue-dark">Hometown, PA</p>
                <p className="text-xs text-vm-blue-dark">School Name &apos;26</p>
                <p className="mt-2 text-xs text-muted-foreground italic">
                  "Summer nights on the shore"
                </p>
              </div>
            </div>

            {/* Team Member 6 */}
            <div className="group rounded-2xl border border-border bg-card p-5">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                {/* IMAGE NEEDED: Headshot of team member 6, casual/friendly style */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <span className="text-xs">Photo</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-vm-navy">Team Member Name</p>
                <p className="text-sm text-muted-foreground">Field Technician</p>
                <p className="mt-1 text-xs text-vm-blue-dark">Hometown, PA</p>
                <p className="text-xs text-vm-blue-dark">School Name &apos;28</p>
                <p className="mt-2 text-xs text-muted-foreground italic">
                  "The Philly skyline at night"
                </p>
              </div>
            </div>

            {/* Team Member 7 */}
            <div className="group rounded-2xl border border-border bg-card p-5">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                {/* IMAGE NEEDED: Headshot of team member 7, casual/friendly style */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <span className="text-xs">Photo</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-vm-navy">Team Member Name</p>
                <p className="text-sm text-muted-foreground">Field Technician</p>
                <p className="mt-1 text-xs text-vm-blue-dark">Hometown, PA</p>
                <p className="text-xs text-vm-blue-dark">School Name &apos;27</p>
                <p className="mt-2 text-xs text-muted-foreground italic">
                  "Reading Terminal Market"
                </p>
              </div>
            </div>

            {/* Team Member 8 */}
            <div className="group rounded-2xl border border-border bg-card p-5">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
                {/* IMAGE NEEDED: Headshot of team member 8, casual/friendly style */}
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <span className="text-xs">Photo</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-vm-navy">Team Member Name</p>
                <p className="text-sm text-muted-foreground">Field Technician</p>
                <p className="mt-1 text-xs text-vm-blue-dark">Hometown, PA</p>
                <p className="text-xs text-vm-blue-dark">School Name &apos;26</p>
                <p className="mt-2 text-xs text-muted-foreground italic">
                  "Tailgates at the Linc"
                </p>
              </div>
            </div>
          </div>

          {/* Join the Team CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Interested in joining the crew?{" "}
              <a href="/careers" className="font-semibold text-vm-blue-dark hover:underline">
                Check out our open positions
              </a>
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
            <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
              Why Choose Us
            </p>
            <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl text-balance uppercase">
              Neighbors Helping Neighbors
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              When you hire Varsity, you're supporting local college students and keeping your dollars in the community.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <p className="font-varsity text-4xl text-vm-gold-dark">3</p>
              <p className="mt-2 text-lg font-semibold text-vm-navy">Partner Colleges</p>
              <p className="mt-2 text-sm text-muted-foreground">
                We recruit hardworking student athletes from three local Pennsylvania colleges.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <p className="font-varsity text-4xl text-vm-gold-dark">10+</p>
              <p className="mt-2 text-lg font-semibold text-vm-navy">Crews Ready to Help</p>
              <p className="mt-2 text-sm text-muted-foreground">
                With crews across the greater Philly area, we can be a help everywhere.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <p className="font-varsity text-4xl text-vm-gold-dark">2021</p>
              <p className="mt-2 text-lg font-semibold text-vm-navy">Est. & Growing</p>
              <p className="mt-2 text-sm text-muted-foreground">
                From a few high schoolers to a full team, we've grown through word of mouth ever since.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
