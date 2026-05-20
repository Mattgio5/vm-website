import Image from "next/image"
import Link from "next/link"

export function WinningRosterSection() {
  return (
    <section className="relative bg-vm-navy px-4 py-20 md:px-12 md:py-28 lg:px-20">
      {/* Varsity stripes */}
      <div className="absolute top-0 left-0 right-0 flex flex-col">
        <div className="h-2.5 w-full bg-vm-gold" />
        <div className="h-2.5 w-full bg-white/20" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold uppercase">
            Our Crew
          </p>
          <h2 className="font-varsity text-3xl tracking-wide text-white md:text-4xl lg:text-5xl text-balance uppercase">
            The Winning Roster: Expert Quality, Youthful Spirit
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80 md:text-lg">
            We believe the best results come from a balanced team. That&apos;s why every Varsity crew is a hand-picked &ldquo;power pair&rdquo;:
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* The Hustle */}
          <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-vm-navy/40">
              <Image
                src="/images/team/hustle.webp"
                alt="Varsity Mulching crew at work"
                fill
                loading="lazy"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm font-semibold tracking-widest text-vm-gold uppercase mb-3">
                The Hustle
              </p>
              <p className="text-base leading-relaxed text-white/85">
                We partner with local colleges to hire student athletes. These are disciplined, hardworking individuals who bring the same winning energy to your flower beds as they do to the field.
              </p>
            </div>
          </div>

          {/* The Strategy */}
          <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-vm-navy/40">
              <Image
                src="/images/team/strategy.webp"
                alt="Varsity Mulching team lead reviewing the job"
                fill
                loading="lazy"
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="p-6 md:p-8">
              <p className="text-sm font-semibold tracking-widest text-vm-gold uppercase mb-3">
                The Strategy
              </p>
              <p className="text-base leading-relaxed text-white/85">
                Every team is anchored by a Highly Experienced Team Lead. These veterans provide the unrivaled landscaping knowledge and technical oversight to ensure every edge is crisp and every plant is handled with care.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-lg font-semibold text-white md:text-xl">
            The result? A job done faster, better, and with a level of enthusiasm you won&apos;t find anywhere else.
          </p>
          <Link
            href="/about"
            className="shrink-0 inline-flex rounded-full bg-vm-gold px-7 py-3.5 text-base font-semibold text-vm-navy transition-all hover:bg-vm-gold/90 hover:shadow-lg"
          >
            Learn More About Our Team
          </Link>
        </div>
      </div>
    </section>
  )
}
