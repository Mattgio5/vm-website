import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Gallery | Varsity Mulch",
  description: "Browse our portfolio of completed mulching, edging, and landscape bed projects across Pennsylvania.",
}

// Gallery projects sorted newest to oldest with testimonials embedded
const projects = [
  {
    id: 1,
    location: "West Chester, PA",
    service: "Mulch Installation",
    season: "Spring 26",
    image: "/placeholder.svg?height=400&width=600",
    testimonial: {
      name: "Sarah M.",
      quote: "The team was professional, punctual, and left our yard looking better than we ever imagined.",
    },
  },
  {
    id: 2,
    location: "Malvern, PA", 
    service: "Full Bed Renovation",
    season: "Spring 26",
    image: "/placeholder.svg?height=400&width=600",
    testimonial: {
      name: "Mike T.",
      quote: "Great communication from start to finish. The mulch looks fantastic and the price was very fair.",
    },
  },
  {
    id: 3,
    location: "Exton, PA",
    service: "Landscape Edging",
    season: "Spring 26",
    image: "/placeholder.svg?height=400&width=600",
    testimonial: {
      name: "Jennifer L.",
      quote: "We've used Varsity Mulching for two seasons now. They're reliable and always do a thorough job.",
    },
  },
  // CTA box will go here (index 3 in the grid = row 2, col 1)
  {
    id: 4,
    location: "Downingtown, PA",
    service: "Mulch & Weed Control",
    season: "Fall 25",
    image: "/placeholder.svg?height=400&width=600",
    testimonial: {
      name: "David R.",
      quote: "Finally found a company that actually shows up when they say they will. Highly recommend!",
    },
  },
  {
    id: 5,
    location: "Phoenixville, PA",
    service: "Bed Cleanup",
    season: "Fall 25",
    image: "/placeholder.svg?height=400&width=600",
    testimonial: {
      name: "Karen W.",
      quote: "They cleaned up years of neglected beds in just one afternoon. Couldn't be happier with the results.",
    },
  },
  {
    id: 6,
    location: "Collegeville, PA",
    service: "Mulch Installation",
    season: "Summer 25",
    image: "/placeholder.svg?height=400&width=600",
    testimonial: {
      name: "Tom B.",
      quote: "Fair pricing, great work, and the crew was respectful of our property. Will definitely use again.",
    },
  },
  {
    id: 7,
    location: "King of Prussia, PA",
    service: "Full Yard Package",
    season: "Summer 25",
    image: "/placeholder.svg?height=400&width=600",
    testimonial: {
      name: "Lisa P.",
      quote: "Our neighbors keep asking who did our yard. Best investment we've made in our home's curb appeal.",
    },
  },
  {
    id: 8,
    location: "Wayne, PA",
    service: "Landscape Edging",
    season: "Spring 25",
    image: "/placeholder.svg?height=400&width=600",
    testimonial: {
      name: "Chris M.",
      quote: "The edging made such a difference. Clean lines and a polished look we couldn't achieve ourselves.",
    },
  },
  {
    id: 9,
    location: "Paoli, PA",
    service: "Mulch Installation",
    season: "Spring 25",
    image: "/placeholder.svg?height=400&width=600",
    testimonial: {
      name: "Amanda S.",
      quote: "Quick, efficient, and left no mess behind. The yard looks amazing and the mulch is holding up great.",
    },
  },
  {
    id: 10,
    location: "Devon, PA",
    service: "Bed Cleanup & Mulch",
    season: "Fall 24",
    image: "/placeholder.svg?height=400&width=600",
    testimonial: {
      name: "Robert H.",
      quote: "They transformed our overgrown beds into something we're actually proud of. Worth every penny.",
    },
  },
  {
    id: 11,
    location: "Berwyn, PA",
    service: "Weed Control",
    season: "Fall 24",
    image: "/placeholder.svg?height=400&width=600",
    testimonial: {
      name: "Nancy K.",
      quote: "No more weekends pulling weeds. The pre-emergent treatment has kept our beds clean all season.",
    },
  },
]

export default function GalleryPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative bg-vm-blue px-4 pt-32 pb-16 md:px-12 md:pt-40 md:pb-20 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-varsity text-4xl tracking-wide text-vm-navy md:text-5xl lg:text-6xl text-balance uppercase">
            Our Work
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-vm-navy/70 md:text-lg">
            Take a look at some of the yards we've helped transform across Pennsylvania. Real projects, real results.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative bg-background px-4 py-16 md:px-12 md:py-24 lg:px-20">
        {/* Varsity stripes - two thick parallel lines */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-navy" />
          <div className="h-2.5 w-full bg-vm-gold" />
        </div>
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
                {/* Testimonial */}
                <div className="mt-3 rounded-lg bg-vm-blue/20 px-3 py-2">
                  <p className="text-sm italic text-vm-navy/80">"{project.testimonial.quote}"</p>
                  <p className="mt-1 text-xs font-medium text-vm-navy">— {project.testimonial.name}</p>
                </div>
                {/* Location & Service */}
                <div className="mt-2">
                  <p className="text-base font-medium text-vm-navy">{project.location}</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Service: <span className="underline underline-offset-2">{project.service}</span>
                  </p>
                </div>
              </div>
            ))}

            {/* CTA Box (Row 2, Column 1) */}
            <div className="flex items-center justify-center rounded-xl bg-vm-blue/40 p-8 border-2 border-vm-gold/30">
              <div className="text-center">
                <h3 className="font-varsity text-2xl tracking-wide text-vm-navy md:text-3xl text-balance leading-tight uppercase">
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
                {/* Testimonial */}
                <div className="mt-3 rounded-lg bg-vm-blue/20 px-3 py-2">
                  <p className="text-sm italic text-vm-navy/80">"{project.testimonial.quote}"</p>
                  <p className="mt-1 text-xs font-medium text-vm-navy">— {project.testimonial.name}</p>
                </div>
                {/* Location & Service */}
                <div className="mt-2">
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

      <Footer />
    </main>
  )
}
