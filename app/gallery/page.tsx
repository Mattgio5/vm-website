import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Gallery | Varsity Mulch",
  description: "Browse our portfolio of completed mulching, edging, and landscape bed projects across Pennsylvania.",
}

// Gallery projects sorted newest to oldest
const projects = [
  {
    id: 1,
    location: "West Chester, PA",
    service: "Mulch Installation",
    season: "Spring 26",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    location: "Malvern, PA", 
    service: "Full Bed Renovation",
    season: "Spring 26",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    location: "Exton, PA",
    service: "Landscape Edging",
    season: "Spring 26",
    image: "/placeholder.svg?height=400&width=600",
  },
  // CTA box will go here (index 3 in the grid = row 2, col 1)
  {
    id: 4,
    location: "Downingtown, PA",
    service: "Mulch & Weed Control",
    season: "Fall 25",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    location: "Phoenixville, PA",
    service: "Bed Cleanup",
    season: "Fall 25",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    location: "Collegeville, PA",
    service: "Mulch Installation",
    season: "Summer 25",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 7,
    location: "King of Prussia, PA",
    service: "Full Yard Package",
    season: "Summer 25",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 8,
    location: "Wayne, PA",
    service: "Landscape Edging",
    season: "Spring 25",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 9,
    location: "Paoli, PA",
    service: "Mulch Installation",
    season: "Spring 25",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 10,
    location: "Devon, PA",
    service: "Bed Cleanup & Mulch",
    season: "Fall 24",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 11,
    location: "Berwyn, PA",
    service: "Weed Control",
    season: "Fall 24",
    image: "/placeholder.svg?height=400&width=600",
  },
]

// Customer testimonials
const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Chester County",
    quote: "The team was professional, punctual, and left our yard looking better than we ever imagined. Highly recommend!",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Mike T.",
    location: "Montgomery County",
    quote: "Great communication from start to finish. The mulch looks fantastic and the price was very fair for the quality of work.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Jennifer L.",
    location: "Delaware County",
    quote: "We've used Varsity Mulching for two seasons now. They're reliable, hardworking, and always do a thorough job.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 4,
    name: "David R.",
    location: "Chester County",
    quote: "Finally found a company that actually shows up when they say they will. The edging work completely transformed our front yard.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function GalleryPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-vm-blue px-4 pt-32 pb-16 md:px-12 md:pt-40 md:pb-20 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-bold tracking-tight text-vm-navy md:text-5xl lg:text-6xl text-balance">
            Our Work
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-vm-navy/70 md:text-lg">
            Take a look at some of the yards we've helped transform across Pennsylvania. Real projects, real results.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-background px-4 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* First 3 projects (Row 1) */}
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                  {/* Season Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-full bg-vm-blue px-3 py-1.5">
                    <svg className="h-3.5 w-3.5 text-vm-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs font-semibold text-vm-navy">{project.season}</span>
                  </div>
                  {/* IMAGE NEEDED: Project photo */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-muted">
                    <span className="text-sm">Project Photo</span>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-base font-medium text-vm-navy">{project.location}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Service: <span className="underline underline-offset-2">{project.service}</span>
                  </p>
                </div>
              </div>
            ))}

            {/* CTA Box (Row 2, Column 1) */}
            <div className="flex items-center justify-center rounded-xl bg-vm-blue/40 p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold tracking-tight text-vm-navy md:text-3xl text-balance leading-tight">
                  Ready to<br />transform<br />your yard?
                </h3>
                <Link
                  href="/services"
                  className="mt-6 inline-flex rounded-full bg-vm-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-lg"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            {/* Remaining projects (Row 2 col 2-3, then Row 3+) */}
            {projects.slice(3).map((project) => (
              <div key={project.id} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                  {/* Season Badge */}
                  <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-full bg-vm-blue px-3 py-1.5">
                    <svg className="h-3.5 w-3.5 text-vm-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs font-semibold text-vm-navy">{project.season}</span>
                  </div>
                  {/* IMAGE NEEDED: Project photo */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-muted">
                    <span className="text-sm">Project Photo</span>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-base font-medium text-vm-navy">{project.location}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Service: <span className="underline underline-offset-2">{project.service}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="bg-card px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 md:mb-16">
            <p className="mb-3 text-sm font-semibold tracking-widest text-vm-blue-dark uppercase">
              Customer Stories
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-vm-navy md:text-4xl text-balance">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="rounded-2xl border border-border bg-background p-6 md:p-8">
                <div className="flex items-start gap-4">
                  {/* Photo */}
                  <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full bg-muted">
                    {/* IMAGE NEEDED: Customer photo or placeholder avatar */}
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-xs">
                      Photo
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-vm-navy">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <p className="mt-4 text-base leading-relaxed text-vm-navy/80">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
