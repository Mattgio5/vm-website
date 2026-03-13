import { Leaf, Mountain, Droplets, TreePine } from "lucide-react"

const products = [
  {
    icon: Leaf,
    title: "Premium Mulch",
    description:
      "Hardwood, cedar, cypress, and colored varieties. Perfect for beds, paths, and playgrounds.",
    color: "bg-vm-blue/15 text-vm-navy",
  },
  {
    icon: Mountain,
    title: "Topsoil & Fill",
    description:
      "Screened topsoil, garden mix, and fill dirt. Ideal for grading, gardens, and raised beds.",
    color: "bg-vm-yellow/30 text-vm-navy",
  },
  {
    icon: Droplets,
    title: "Stone & Gravel",
    description:
      "River rock, pea gravel, crushed limestone, and decorative stone for every project.",
    color: "bg-vm-blue/15 text-vm-navy",
  },
  {
    icon: TreePine,
    title: "Compost & Blend",
    description:
      "Nutrient-rich compost and custom soil blends to supercharge your garden growth.",
    color: "bg-vm-yellow/30 text-vm-navy",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-blue-dark uppercase">
            Our Products
          </p>
          <h2 className="font-varsity text-3xl tracking-wide text-vm-navy md:text-4xl lg:text-5xl text-balance uppercase">
            Everything Your Yard Needs
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            From premium mulch to quality stone, we source and deliver the best
            materials for any outdoor project.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-vm-blue/40 hover:shadow-lg md:p-8"
            >
              <div
                className={`mb-5 inline-flex rounded-xl p-3 ${product.color}`}
              >
                <product.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-vm-navy">{product.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
