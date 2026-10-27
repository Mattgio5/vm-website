import Image from "next/image"
import Link from "next/link"
import { FallingLeaves } from "@/components/falling-leaves"

/**
 * Homepage fall spotlight: Leaf Cleanup & Removal and Complete Fall Cleanup.
 * Three looks for the same content, previewed at /preview/home-a|b|c:
 *
 *  - "cards":  light section, two big photo cards (pairs with leaves drifting
 *              over the hero).
 *  - "pile":   navy section, leaves fall behind the cards and pile up along
 *              the bottom edge.
 *  - "blower": navy section where the visitor's cursor/finger is a leaf
 *              blower that pushes the falling leaves around.
 */

const FALL_SERVICES = [
  {
    title: "Leaf Cleanup & Removal",
    badge: "$100 Off",
    body: "We clear, collect, and haul away the leaves from your lawn. No raking, no bagging, no piles at the curb.",
    points: ["Lawn leaves cleared", "Collected & hauled away", "Quote now, cleanup after the leaf drop"],
    image: "/images/service-cleanup.webp",
    alt: "Varsity crew member clearing leaves with a backpack blower",
    href: "/offers/leaf-cleanup-100-off",
    cta: "Get $100 Off",
  },
  {
    title: "Complete Fall Cleanup",
    badge: null,
    body: "Put the whole property to bed for winter: everything in a leaf cleanup, plus the landscape beds.",
    points: ["Leaves cleared from beds", "Seasonal pruning", "Bed maintenance before winter"],
    image: "/images/service-bed-cleanup.jpg",
    alt: "Varsity crew raking out a landscape bed",
    href: "/services/fall-cleanup",
    cta: "Learn More",
  },
] as const

type Look = "cards" | "pile" | "blower"

function Stripes() {
  return (
    <div className="absolute top-0 right-0 left-0 z-10 flex flex-col">
      <div className="h-2.5 w-full bg-vm-gold" />
      <div className="h-2.5 w-full bg-vm-navy" />
    </div>
  )
}

function FallServiceCards({ dark }: { dark: boolean }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {FALL_SERVICES.map((s) => (
        <Link
          key={s.title}
          href={s.href}
          className={`group relative flex flex-col overflow-hidden rounded-2xl border shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl ${
            dark ? "border-white/15 bg-vm-navy-light/90 backdrop-blur-sm" : "border-border bg-card"
          }`}
        >
          <div className="relative aspect-[16/9] overflow-hidden">
            <Image
              src={s.image}
              alt={s.alt}
              fill
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {s.badge && (
              <span className="font-varsity absolute top-4 right-4 rotate-[-4deg] rounded-xl border-2 border-vm-navy bg-vm-gold px-3 py-1.5 text-xl tracking-wide text-vm-navy shadow-lg">
                {s.badge}
              </span>
            )}
          </div>
          <div className="flex grow flex-col p-6 md:p-7">
            <h3
              className={`font-varsity text-2xl tracking-wide uppercase md:text-3xl ${
                dark ? "text-white" : "text-vm-navy"
              }`}
            >
              {s.title}
            </h3>
            <p className={`mt-2 text-base leading-relaxed ${dark ? "text-white/80" : "text-muted-foreground"}`}>
              {s.body}
            </p>
            <ul className="mt-4 space-y-2">
              {s.points.map((p) => (
                <li
                  key={p}
                  className={`flex items-center gap-2.5 text-sm font-semibold ${
                    dark ? "text-white/90" : "text-vm-navy/90"
                  }`}
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-vm-gold text-[0.65rem] font-bold text-vm-navy">
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <span className="mt-6 inline-flex w-fit rounded-full bg-vm-gold px-6 py-3 text-sm font-bold text-vm-navy transition-colors group-hover:bg-vm-gold-dark">
              {s.cta} →
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

const COPY: Record<Look, { eyebrow: string; heading: string; intro: string }> = {
  cards: {
    eyebrow: "Fall Services",
    heading: "We Clear. We Collect. We Haul Away.",
    intro: "Take back your fall weekends. Our crews clear, collect, and haul away the leaves so you don't have to.",
  },
  pile: {
    eyebrow: "Fall Services",
    heading: "The Leaves Are Coming Down. We've Got Them.",
    intro: "Skip the raking and the bags at the curb. Get a free quote now and we'll schedule your cleanup around the leaf drop.",
  },
  blower: {
    eyebrow: "Fall Services",
    heading: "Go Ahead, Blow Them Away.",
    intro: "Move your mouse (or tap) through the leaves. Or let our crew handle the real thing.",
  },
}

export function FallServicesSection({ look }: { look: Look }) {
  const dark = look !== "cards"
  const copy = COPY[look]

  return (
    <section
      id="fall-services"
      className={`relative overflow-hidden px-4 pt-20 md:px-12 md:pt-28 lg:px-20 ${
        dark ? "bg-vm-navy" : "bg-muted/50"
      } ${look === "pile" ? "pb-28 md:pb-36" : "pb-20 md:pb-28"}`}
    >
      <Stripes />
      {dark && <FallingLeaves mode={look === "pile" ? "pile" : "blower"} density={look === "blower" ? 1.4 : 1} />}

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <p
            className={`mb-3 text-sm font-semibold tracking-widest uppercase ${
              dark ? "text-vm-gold" : "text-vm-gold-dark"
            }`}
          >
            {copy.eyebrow}
          </p>
          <h2
            className={`font-varsity text-3xl tracking-wide text-balance uppercase md:text-4xl lg:text-5xl ${
              dark ? "text-white" : "text-vm-navy"
            }`}
          >
            {copy.heading}
          </h2>
          <p className={`mt-4 text-base leading-relaxed md:text-lg ${dark ? "text-white/80" : "text-muted-foreground"}`}>
            {copy.intro}
          </p>
        </div>

        <FallServiceCards dark={dark} />
      </div>
    </section>
  )
}
