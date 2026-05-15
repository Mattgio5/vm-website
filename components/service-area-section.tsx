import Image from "next/image"

export function ServiceAreaSection() {
  return (
    <section className="relative bg-vm-navy px-4 py-20 md:px-12 md:py-28 lg:px-20">
      {/* Varsity stripes - two thick parallel lines at top */}
      <div className="absolute top-0 left-0 right-0 flex flex-col">
        <div className="h-2.5 w-full bg-vm-gold" />
        <div className="h-2.5 w-full bg-vm-navy" />
      </div>
      
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold uppercase">
              Service Area
            </p>
            <h2 className="font-varsity text-3xl tracking-wide text-white md:text-4xl text-balance uppercase">
              Proudly Serving Greater Philadelphia
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
              We operate throughout the greater Philly area, bringing professional mulching services to residential and commercial properties alike.
            </p>
          </div>

          {/* Map Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/service-area-map.jpg"
                alt="Service area map highlighting Bucks County and Montgomery County, PA"
                width={1208}
                height={805}
                sizes="(min-width: 768px) 28rem, 100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
