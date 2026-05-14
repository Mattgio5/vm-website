export function DayInTheLife() {
  return (
    <section className="relative bg-vm-navy px-4 py-20 md:px-12 md:py-28 lg:px-20">
      {/* Varsity stripes */}
      <div className="absolute top-0 left-0 right-0 flex flex-col">
        <div className="h-2.5 w-full bg-vm-gold" />
        <div className="h-2.5 w-full bg-white/20" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
        {/* Vertical reel */}
        <div className="mx-auto w-full max-w-sm md:order-2">
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-3xl border-2 border-vm-gold/40 bg-black shadow-2xl">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/videos/day-in-the-life-poster.jpg"
              aria-label="A day in the life of a Varsity Mulching crew"
            >
              <source src="/videos/day-in-the-life.webm" type="video/webm" />
              <source src="/videos/day-in-the-life.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Copy */}
        <div className="md:order-1">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold uppercase">
            See It For Yourself
          </p>
          <h2 className="font-varsity text-3xl tracking-wide text-white md:text-4xl lg:text-5xl text-balance uppercase">
            A Day in the Life of a Varsity Crew
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
            From prep to install to clean-up — this is what a Varsity Mulching crew looks like on the ground. The same hustle and detail on every property we touch.
          </p>
        </div>
      </div>
    </section>
  )
}
