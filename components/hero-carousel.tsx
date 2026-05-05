import Link from "next/link"

export function HeroCarousel() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: 'calc(100vh - 1px)', minHeight: '600px' }}
    >
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/hero-mulch.jpg"
        aria-label="Varsity Mulching crew at work"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-vm-navy/25" />

      {/* Static content card */}
      <div className="relative z-10 flex h-full flex-col justify-center px-4 pt-28 pb-40 md:px-12 md:pt-32 md:pb-36 lg:px-20">
        <div className="w-full max-w-xl rounded-2xl border border-white/30 bg-white/65 p-8 shadow-2xl backdrop-blur-xl md:p-10">
          <h1 className="font-varsity text-4xl leading-tight tracking-wide text-vm-navy md:text-5xl lg:text-6xl uppercase">
            Your Yard,<br />Your Way.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-vm-navy/75 md:text-lg">
            From garden beds to driveways, we have the materials to transform your yard.
          </p>
          <Link
            href="/services"
            className="mt-6 inline-flex rounded-full bg-vm-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-lg md:px-7 md:py-3.5 md:text-base"
          >
            See Our Services
          </Link>
        </div>
      </div>

      {/* Happy customers CTA */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-end px-4 pb-8 md:px-12 md:pb-10 lg:px-20">
        <Link
          href="/gallery"
          className="hidden rounded-full border border-white/40 bg-white/70 px-5 py-2.5 text-sm font-semibold text-vm-navy shadow-lg backdrop-blur-md transition-all hover:bg-white/90 hover:shadow-xl md:inline-flex"
        >
          Hear From Previous Customers
        </Link>
      </div>
    </section>
  )
}
