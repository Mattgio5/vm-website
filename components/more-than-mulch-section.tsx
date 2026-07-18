import Image from "next/image"
import Link from "next/link"

const bigProjects = [
  "Planting Design & Installation",
  "Rock Bed Installations",
  "Drainage & Regrading",
  "Landscape Renovations",
]

export function MoreThanMulchSection() {
  return (
    <section className="relative bg-muted/50 px-4 py-20 md:px-12 md:py-28 lg:px-20">
      {/* Varsity stripes - two thick parallel lines */}
      <div className="absolute top-0 left-0 right-0 flex flex-col">
        <div className="h-2.5 w-full bg-vm-gold" />
        <div className="h-2.5 w-full bg-vm-navy" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl lg:text-5xl uppercase">
              More Than Mulch
            </h2>
            <p className="mt-3 text-lg font-semibold text-vm-blue-dark">
              The same Varsity quality, on bigger projects.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              In July, August, and September, our full-time team — with landscaping experience well beyond mulch — shifts
              its focus to project-based work like the ones you see here:
            </p>
            <ul className="mt-6 space-y-3">
              {bigProjects.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-vm-gold text-xs font-bold text-vm-navy">
                    ✓
                  </span>
                  <span className="font-semibold text-vm-navy">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/schedule-a-quote"
              className="mt-8 inline-flex rounded-full bg-vm-navy px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-lg"
            >
              Start Your Project
            </Link>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-border shadow-md">
                <Image
                  src="/images/projects/project-redesign-before.webp"
                  alt="Overgrown front bed before Varsity Mulching landscape redesign"
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-vm-navy/85 px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
                  Before
                </span>
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-border shadow-md">
                <Image
                  src="/images/projects/project-redesign-after.webp"
                  alt="Redesigned front bed with blue spruces after Varsity Mulching renovation"
                  fill
                  sizes="(min-width: 768px) 22vw, 45vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-vm-gold px-3 py-1 text-xs font-bold tracking-wide text-vm-navy uppercase">
                  After
                </span>
              </div>
            </div>
            <blockquote className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-sm italic leading-relaxed text-vm-navy/85">
                &ldquo;In just 5 hours, moldy azaleas and senior-citizen junipers were replaced by 8 youthful
                blue spruces. They are much more than a mulch outfit!&rdquo;
              </p>
              <footer className="mt-2 text-xs font-semibold text-vm-gold-dark">— Bill W., Lansdale</footer>
            </blockquote>

            <div className="relative aspect-[21/9] overflow-hidden rounded-2xl border border-border shadow-md">
              <Image
                src="/images/projects/project-rock-bed.webp"
                alt="Rock bed installation with river stone and new plantings by Varsity Mulching"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <blockquote className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-sm italic leading-relaxed text-vm-navy/85">
                &ldquo;Each year we&apos;ve had Varsity do our mulch. Little by little we&apos;ve been asking for
                help with different projects, and now we&apos;ve had another great experience with this rock bed
                installation.&rdquo;
              </p>
              <footer className="mt-2 text-xs font-semibold text-vm-gold-dark">— Michelle, Perkasie</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
