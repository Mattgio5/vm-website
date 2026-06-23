import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SITE_URL } from "@/lib/site"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Why Pruning Every Plant the Same Way Can Hurt Your Landscape",
  description:
    "Japanese maples, hydrangeas, and fruit trees each require a different pruning approach and schedule. Learn why one-size-fits-all trimming can cost you blooms, shape, and long-term plant health.",
  alternates: { canonical: "/blog/why-pruning-every-plant-the-same-way-can-hurt-your-landscape" },
  openGraph: {
    url: "/blog/why-pruning-every-plant-the-same-way-can-hurt-your-landscape",
    type: "article",
    publishedTime: "2026-06-23",
  },
}

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Why Pruning Every Plant the Same Way Can Hurt Your Landscape",
  description:
    "Japanese maples, hydrangeas, and fruit trees each require a different pruning approach and schedule. Learn why one-size-fits-all trimming can cost you blooms, shape, and long-term plant health.",
  datePublished: "2026-06-23",
  dateModified: "2026-06-23",
  url: `${SITE_URL}/blog/why-pruning-every-plant-the-same-way-can-hurt-your-landscape`,
  author: {
    "@type": "Person",
    name: "Matt Giordano",
  },
  publisher: {
    "@type": "Organization",
    name: "Varsity Mulching LLC",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/vm-logo.png`,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_URL}/blog/why-pruning-every-plant-the-same-way-can-hurt-your-landscape`,
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Why Pruning Every Plant the Same Way Can Hurt Your Landscape",
      item: `${SITE_URL}/blog/why-pruning-every-plant-the-same-way-can-hurt-your-landscape`,
    },
  ],
}

const questions = [
  "What type of plant is this?",
  "Does it bloom on old wood or new wood?",
  "Am I trying to shape it, thin it, reduce its size, or improve its health?",
  "Is this the right time of year to prune it?",
]

export default function WhyPruningPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <section className="bg-noise relative overflow-hidden bg-vm-navy px-4 pt-32 pb-20 md:px-12 md:pt-40 md:pb-28 lg:px-20">
        <div className="relative z-10 mx-auto max-w-3xl">
          <Link
            href="/media"
            className="vm-reveal inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-vm-gold/80 uppercase transition-colors hover:text-vm-gold"
            style={{ animationDelay: "0ms" }}
          >
            ← Media
          </Link>
          <p
            className="vm-reveal mt-5 text-sm font-semibold tracking-widest text-vm-gold uppercase"
            style={{ animationDelay: "60ms" }}
          >
            Pruning &middot; Landscape Maintenance
          </p>
          <h1
            className="vm-reveal font-varsity mt-3 text-3xl tracking-wide text-white md:text-4xl lg:text-5xl text-balance uppercase"
            style={{ animationDelay: "120ms" }}
          >
            Why Pruning Every Plant the Same Way Can Hurt Your Landscape
          </h1>
          <div
            className="vm-reveal mx-auto mt-5 h-[2px] w-20 bg-vm-gold"
            style={{ animationDelay: "200ms" }}
          />
          <p
            className="vm-reveal mt-5 text-base leading-relaxed text-white/70 md:text-lg"
            style={{ animationDelay: "280ms" }}
          >
            Published June 23, 2026 &middot; By Matt Giordano
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="relative bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>

        <div className="mx-auto max-w-2xl">
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Early summer is when many homeowners head outside to clean up their landscape beds.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Shrubs are getting full. Branches are hanging over walkways. Beds that looked neat in
            spring can suddenly start to feel overgrown. For a lot of homeowners, the natural
            instinct is to grab the hedge trimmer and cut everything back at once.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            It may feel efficient, but pruning is not one-size-fits-all.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Different plants respond very differently to being cut. Some can handle a hard trim at
            certain times of year. Others can lose their shape, their blooms, or even their
            long-term health if they are pruned the wrong way.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            To keep your landscape looking its best, the real key is knowing what plant you are
            dealing with before you start cutting.
          </p>
        </div>
      </section>

      {/* Japanese Maples */}
      <section className="relative bg-muted/40 px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-2xl">
          <h2 className="font-varsity text-2xl tracking-wide text-vm-navy md:text-3xl uppercase">
            Japanese Maples — Shape Matters
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Japanese maples are a great example.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            The beauty of a Japanese maple comes from its delicate, airy structure. These trees are
            not meant to look like rounded hedges or tightly clipped shrubs. Their value comes from
            the natural branching pattern, layered canopy, and graceful shape.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            That is why using a hedge trimmer on a Japanese maple is usually the wrong approach.
          </p>

          <figure className="mt-10">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/blog/Japanese_Maple.jpg"
                alt="Japanese maple tree with delicate layered canopy and graceful branching structure"
                fill
                sizes="(min-width: 768px) 672px, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              The beauty of a Japanese maple comes from its natural branching pattern — not a uniform shape.
            </figcaption>
          </figure>

          <p className="mt-10 text-base leading-relaxed text-muted-foreground md:text-lg">
            Instead of shearing the outside of the tree, Japanese maples are usually better
            maintained through selective pruning. This means removing individual shoots and branches
            with care, rather than cutting the entire plant into a uniform shape.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Selective pruning can help reduce density, improve airflow, remove crossing or damaged
            branches, and preserve the natural form that makes Japanese maples such a standout
            feature in the landscape.
          </p>

          <blockquote className="relative mt-10 overflow-hidden rounded-2xl bg-vm-navy px-7 py-8">
            <div className="absolute inset-x-0 top-0 flex flex-col">
              <div className="h-1.5 w-full bg-vm-gold" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-vm-gold">
              The Goal of Selective Pruning
            </p>
            <p className="mt-3 text-lg font-semibold leading-snug text-white md:text-xl">
              The goal is not to force the tree into a shape. The goal is to reveal and maintain the
              shape it already wants to have.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Hydrangeas */}
      <section className="relative bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-2xl">
          <h2 className="font-varsity text-2xl tracking-wide text-vm-navy md:text-3xl uppercase">
            Hydrangeas — Timing Can Determine Whether They Bloom
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Hydrangeas are another plant where pruning mistakes are extremely common.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Have you ever wondered why one hydrangea is covered in blooms while another produces
            almost none?
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            A lot of the time, the answer comes down to timing.
          </p>

          <figure className="mt-10">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/blog/Hydrangea.jpg"
                alt="Hydrangea shrub in full bloom with large flower clusters"
                fill
                sizes="(min-width: 768px) 672px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              Pruning a hydrangea at the wrong time of year can eliminate next season&apos;s blooms before they ever open.
            </figcaption>
          </figure>

          <p className="mt-10 text-base leading-relaxed text-muted-foreground md:text-lg">
            Many of the classic blue and pink hydrangeas bloom on old wood. That means they develop
            next year&apos;s flower buds on stems that are already growing today. If those stems are
            cut back during a spring cleanup, many of the season&apos;s blooms can disappear before
            they ever have a chance to open.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            From the outside, it may look like you are just cleaning up the plant. But if the wrong
            stems are removed at the wrong time, you may also be removing the flowers.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Other hydrangeas work differently. Popular varieties like Limelight hydrangeas bloom on
            new growth. These can often be pruned during late winter or early spring because their
            flower buds form on the new stems they produce that season.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            That is why two hydrangeas in the same neighborhood can require completely different
            pruning schedules. Before cutting back a hydrangea, it is important to know what type it
            is. Otherwise, a quick spring cleanup can turn into a bloomless summer.
          </p>
        </div>
      </section>

      {/* Fruit Trees */}
      <section className="relative bg-muted/40 px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-2xl">
          <h2 className="font-varsity text-2xl tracking-wide text-vm-navy md:text-3xl uppercase">
            Fruit Trees — Pruning Affects More Than Appearance
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Fruit trees require an even more specialized approach.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Pruning a fruit tree is not just about making it look cleaner. Proper pruning can
            increase sunlight penetration, improve airflow, strengthen branch structure, and support
            healthy fruit production.
          </p>

          <figure className="mt-10">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/blog/cherry_tree.jpg"
                alt="Cherry tree with blossoms — stone fruit trees like cherries require specialized pruning timing"
                fill
                sizes="(min-width: 768px) 672px, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-muted-foreground">
              Stone fruit trees like cherries are often best pruned in late fall after cooler weather arrives.
            </figcaption>
          </figure>

          <p className="mt-10 text-base leading-relaxed text-muted-foreground md:text-lg">
            A fruit tree with too much crowded growth can struggle to move air through the canopy.
            Dense branching can also block sunlight from reaching the interior of the tree, which
            can affect both plant health and fruit quality.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            But even among fruit trees, there is no universal pruning schedule. Many fruit trees are
            pruned during dormancy, when the tree is not actively growing. However, stone fruit
            trees such as peaches, plums, and cherries are often better left until late fall, after
            cooler weather arrives.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            That difference matters. A pruning schedule that works well for one type of fruit tree
            may not be ideal for another. The right timing depends on the species, the condition of
            the tree, and the goal of the pruning.
          </p>
        </div>
      </section>

      {/* The Main Rule */}
      <section className="relative bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-2xl">
          <h2 className="font-varsity text-2xl tracking-wide text-vm-navy md:text-3xl uppercase">
            The Main Rule: Identify Before You Cut
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            The biggest pruning mistake homeowners make is treating every plant the same.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            A hedge trimmer can be useful for certain plants, but it is not the right tool for
            everything. Some plants need shaping. Some need thinning. Some should barely be touched
            at certain times of year. Others need a more aggressive prune to stay healthy and
            productive.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            The correct approach depends on the plant. Before cutting back your landscape, ask a few
            simple questions:
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {questions.map((q) => (
              <li
                key={q}
                className="relative overflow-hidden rounded-xl border border-border bg-card px-5 py-4 shadow-sm ring-1 ring-vm-navy/5"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-vm-gold" />
                <p className="pl-3 text-sm font-medium text-vm-navy md:text-base">{q}</p>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            Those questions can be the difference between a healthier, better-looking landscape and
            a plant that loses its blooms, shape, or long-term structure.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-vm-navy px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-white/10" />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-vm-gold uppercase">
            Protect the Plants That Make Your Property Stand Out
          </p>
          <h2 className="font-varsity mt-3 text-3xl tracking-wide text-white md:text-4xl uppercase text-balance">
            Your Landscape Doesn&apos;t Need a One-Size-Fits-All Trim. It Needs a Plan.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
            If you would like one of the Varsity Mulching experts to create a pruning plan for your
            property, we would be happy to help identify your plants, discuss their maintenance
            needs, and recommend the right approach for each one.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/schedule-a-quote"
              className="inline-flex items-center gap-2 rounded-full bg-vm-gold px-7 py-3.5 text-sm font-semibold text-vm-navy transition-all hover:bg-vm-gold/90 hover:shadow-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-vm-gold/60 hover:bg-vm-gold/10"
            >
              See Our Services
            </Link>
          </div>
          <p className="mt-10 text-sm text-white/50">
            &mdash; Matt Giordano, Founder of Varsity Mulching
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
