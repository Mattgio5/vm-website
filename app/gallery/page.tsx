import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Project Gallery — Mulch & Landscaping in Bucks County, PA",
  description:
    "Completed mulching, edging and bed projects across Doylestown, Newtown, Lansdale and Bucks & Montgomery County, PA.",
  alternates: { canonical: "/gallery" },
}

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Gallery", item: `${SITE_URL}/gallery` },
  ],
}

// Gallery projects with real images and short SEO descriptions
const projects = [
  {
    id: 1,
    image: "/images/gallery/vm-gallery-01.png",
    description: "Backyard slope landscaped with fresh black mulch, river-rock border, and a natural stone stepping-stone path.",
  },
  {
    id: 2,
    image: "/images/gallery/vm-gallery-02.png",
    description: "Side-of-house mulch bed with a long sweeping curved edge — clean lines that lift any Bucks County backyard.",
  },
  {
    id: 3,
    image: "/images/gallery/vm-gallery-03.png",
    description: "Two crisp circular shrub islands of fresh black mulch on an open front lawn — instant curb appeal.",
  },
  {
    id: 4,
    image: "/images/gallery/vm-gallery-04.png",
    description: "Narrow side-yard mulch bed running the length of a driveway, hand-edged for a sharp turf line.",
  },
  {
    id: 5,
    image: "/images/gallery/vm-gallery-05.png",
    description: "Single circular front-lawn island bed framing mature shrubs with a fresh coat of premium black mulch.",
  },
  {
    id: 6,
    image: "/images/gallery/vm-gallery-06.png",
    description: "Front-walk mulch bed with red-brick border, freshly mulched around a young ornamental tree.",
  },
  {
    id: 7,
    image: "/images/gallery/vm-gallery-07.png",
    description: "Foundation bed wrapping the side of a Montgomery County home with a clean, sweeping mulched border.",
  },
  {
    id: 8,
    image: "/images/gallery/vm-gallery-08.png",
    description: "Stucco-home front entry beds packed with ornamental shrubs and freshly installed black mulch.",
  },
  {
    id: 9,
    image: "/images/gallery/vm-gallery-09.png",
    description: "Curved front-yard mulch bed with boxwoods and low shrubs framing a stone walkway and porch.",
  },
  {
    id: 10,
    image: "/images/gallery/vm-gallery-10.png",
    description: "Long mulch bed running along a black iron property fence — refreshed with deep black mulch and a hand-cut edge.",
  },
  {
    id: 11,
    image: "/images/gallery/vm-gallery-11.png",
    description: "Brick-foundation side bed with low boxwoods and shrubs, freshly mulched with a crisp turf-line edge.",
  },
  {
    id: 12,
    image: "/images/gallery/vm-gallery-12.png",
    description: "Curved iron-fence bed around two young staked saplings, dressed with fresh dark mulch.",
  },
  {
    id: 13,
    image: "/images/gallery/vm-gallery-13.png",
    description: "Pond-side bed with stone accents, a Japanese maple, and fresh black mulch for a manicured shoreline finish.",
  },
  {
    id: 14,
    image: "/images/gallery/vm-gallery-14.png",
    description: "Side-yard foundation bed with low boxwoods and ornamental grasses, freshly mulched and crisply edged.",
  },
]

export default function GalleryPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative bg-vm-blue px-4 pt-32 pb-16 md:px-12 md:pt-40 md:pb-20 lg:px-20">
        <div className="mx-auto max-w-6xl text-center">
          <h1
            className="vm-reveal font-varsity text-4xl tracking-wide text-vm-navy md:text-5xl lg:text-6xl text-balance uppercase"
            style={{ animationDelay: "60ms" }}
          >
            Our Work
          </h1>
          <div
            className="vm-reveal mx-auto mt-5 h-[2px] w-20 bg-vm-gold"
            style={{ animationDelay: "160ms" }}
          />
          <p
            className="vm-reveal mx-auto mt-5 max-w-2xl text-base leading-relaxed text-vm-navy/70 md:text-lg"
            style={{ animationDelay: "240ms" }}
          >
            Take a look at some of the yards we&apos;ve helped transform across the greater Philadelphia area.
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
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {/* First 3 projects (Row 1) */}
            {projects.slice(0, 3).map((project, idx) => (
              <figure key={project.id} className="flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted shadow-sm ring-1 ring-vm-navy/5">
                  <Image
                    src={project.image}
                    alt={project.description}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    priority={idx === 0}
                    className="object-cover"
                  />
                </div>
                {/* Caption — yearbook-style with gold tick */}
                <figcaption className="mt-4 flex gap-3">
                  <span aria-hidden="true" className="mt-[10px] h-[2px] w-4 shrink-0 bg-vm-gold" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                </figcaption>
              </figure>
            ))}

            {/* CTA Box (Row 2, Column 1) */}
            <div className="relative flex items-center justify-center overflow-hidden rounded-xl bg-vm-blue/40 p-8 ring-1 ring-vm-navy/5 shadow-sm">
              <div className="absolute inset-x-0 top-0 h-1.5 bg-vm-gold" />
              <div className="text-center">
                <h2 className="font-varsity text-2xl tracking-wide text-vm-navy md:text-3xl text-balance leading-tight uppercase">
                  Ready to<br />transform<br />your yard?
                </h2>
                <span aria-hidden="true" className="mx-auto mt-4 block h-[2px] w-10 bg-vm-gold" />
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
              <figure key={project.id} className="flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted shadow-sm ring-1 ring-vm-navy/5">
                  <Image
                    src={project.image}
                    alt={project.description}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                {/* Caption — yearbook-style with gold tick */}
                <figcaption className="mt-4 flex gap-3">
                  <span aria-hidden="true" className="mt-[10px] h-[2px] w-4 shrink-0 bg-vm-gold" />
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
