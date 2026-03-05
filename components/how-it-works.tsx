import { ClipboardList, Truck, ThumbsUp } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Tell Us What You Need",
    description:
      "Use our online calculator or give us a call. We'll help you figure out the right product and quantity.",
  },
  {
    number: "02",
    icon: Truck,
    title: "We Deliver It Fast",
    description:
      "Same-week bulk delivery right to your driveway. No hassle, no heavy lifting on your end.",
  },
  {
    number: "03",
    icon: ThumbsUp,
    title: "Enjoy Your Yard",
    description:
      "Spread it, plant it, and enjoy the transformation. Your outdoor space just got a serious upgrade.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-vm-navy px-4 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-blue uppercase">
            How It Works
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl text-balance">
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
              <span className="mb-4 block font-serif text-5xl font-bold text-vm-blue/25">
                {step.number}
              </span>
              <div className="mb-4 inline-flex rounded-xl bg-vm-blue/15 p-3 text-vm-blue">
                <step.icon className="h-6 w-6" />
              </div>
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
