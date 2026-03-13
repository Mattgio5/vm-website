const steps = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Use our online calculator or give us a call. We'll help you figure out the right product and quantity.",
  },
  {
    number: "02",
    title: "We Deliver It Fast",
    description:
      "Same-week bulk delivery right to your driveway. No hassle, no heavy lifting on your end.",
  },
  {
    number: "03",
    title: "Enjoy Your Yard",
    description:
      "Spread it, plant it, and enjoy the transformation. Your outdoor space just got a serious upgrade.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-vm-navy px-4 py-20 md:px-12 md:py-28 lg:px-20">
      {/* Varsity stripes at top */}
      <div className="absolute top-0 left-0 right-0 flex h-3">
        <div className="flex-1 bg-vm-gold" />
        <div className="flex-1 bg-vm-navy" />
        <div className="flex-1 bg-vm-gold" />
        <div className="flex-1 bg-vm-navy" />
        <div className="flex-1 bg-vm-gold" />
      </div>
      
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold uppercase">
            How It Works
          </p>
          <h2 className="font-varsity text-3xl tracking-wide text-white md:text-4xl lg:text-5xl text-balance uppercase">
            Simple as 1-2-3
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/60 md:text-lg">
            Getting quality materials delivered shouldn't be complicated.
            Here's how easy we make it.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="group relative">
              <span className="mb-4 block font-varsity text-5xl text-vm-gold/30">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
