import Image from "next/image"

export function ServicesHero() {
  return (
    <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-mulch.jpg"
          alt="Professional landscaping services"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-vm-navy/60 via-vm-navy/40 to-vm-navy/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-4 pt-24 md:px-12 lg:px-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold tracking-widest text-vm-blue uppercase">
              Professional Services
            </p>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              Transform Your Landscape
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-white/80 md:text-xl">
              From fresh mulch installation to complete bed renovations, our expert
              team delivers quality results that make your property shine.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
