import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Project Gallery | Mulch & Landscaping in Chester County, Bucks County & Montgomery County, PA",
  description: "Browse completed mulching, edging & landscape bed projects in West Chester, Doylestown, Malvern, Exton, Downingtown & more across Chester County, Bucks County & Montgomery County, PA.",
}

// Gallery projects with real images and simple descriptions
const projects = [
  {
    id: 1,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5794.JPG-3A8GQnvzZGQ109AidmaQvjWAfgISbp.jpeg",
    description: "Curved front yard bed with fresh black mulch and bright green boxwood shrubs along a stone walkway.",
  },
  {
    id: 2,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5776.JPG-NeKgQFVVRGji0At2YpqxRBrMshPu2R.jpeg",
    description: "Backyard landscape bed around a gazebo and brick patio with various shrubs and fresh mulch.",
  },
  {
    id: 3,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5778.JPG-4dWlSVtNMq8xp4rSPtuTKZQKpjcQ9D.jpeg",
    description: "Large island bed with mature shrubs, stone border accent, and freshly applied black mulch.",
  },
  {
    id: 4,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5780.JPG-LVE3o1tU14VkzjQAZEDoyeQ59knvjV.jpeg",
    description: "Foundation bed along a brick porch with crisp edges and low shrubs freshly mulched.",
  },
  {
    id: 5,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5782.JPG-nP6Lsc5mrDehuaWJ6pKemXAV8c7sIl.jpeg",
    description: "Clean circular tree ring with black mulch around a single tree in an open suburban lawn.",
  },
  {
    id: 6,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5786.JPG-VxeAMGroOCtKGxzfgOVnabZSt8odNI.jpeg",
    description: "Front yard bed near the driveway with a young tree, shrubs, and fresh black mulch.",
  },
  {
    id: 7,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5790.JPG-XSeiXznDzWw7ZqNA7dLCIqEJQ1SdBv.jpeg",
    description: "Shaded garden bed under a large pine tree with hostas and freshly spread mulch.",
  },
  {
    id: 8,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5792.JPG-yb8RfbGAnMyMR6H6SSGhxlDFpVkCuM.jpeg",
    description: "Side yard mulch bed along a black iron fence with ornamental grasses and hostas.",
  },
  {
    id: 9,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5796.JPG-KzSND0J9yzDg9G3OwyDIGehhvbLhEs.jpeg",
    description: "Large tree ring with fresh dark mulch around a mature ivy-covered tree in the front yard.",
  },
  {
    id: 10,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5800.JPG-vmGUBL0BE8sp7xTgcsPMLuxVLsRVOq.jpeg",
    description: "Curved landscape bed around a tree with birdbath, fresh mulch, flowers, and shrubs.",
  },
  {
    id: 11,
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5802.JPG-Bmc9KL0puTqPsATM2hlwAHIWAfQNxf.jpeg",
    description: "Long narrow bed along a patio edge with young trees and freshly applied black mulch.",
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
            Take a look at some of the yards we've helped transform across the greater Philadelphia area.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative bg-muted/40 px-4 py-16 md:px-12 md:py-24 lg:px-20">
        {/* Varsity stripes - two thick parallel lines */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* First 3 projects (Row 1) */}
            {projects.slice(0, 3).map((project, idx) => (
              <div key={project.id} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                  <Image
                    src={project.image}
                    alt={project.description}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    priority={idx === 0}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Description */}
                <div className="mt-3">
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}

            {/* CTA Box (Row 2, Column 1) */}
            <div className="flex items-center justify-center rounded-xl bg-vm-blue/40 p-8 border-2 border-vm-gold/30">
              <div className="text-center">
                <h2 className="font-varsity text-2xl tracking-wide text-vm-navy md:text-3xl text-balance leading-tight uppercase">
                  Ready to<br />transform<br />your yard?
                </h2>
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
                  <Image
                    src={project.image}
                    alt={project.description}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Description */}
                <div className="mt-3">
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
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
