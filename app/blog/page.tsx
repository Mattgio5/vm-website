import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Blog — Landscaping Tips & Advice for Bucks County Homeowners",
  description:
    "Expert landscaping tips, weed control advice, and seasonal guides from Varsity Mulching — serving Bucks County and Montgomery County, PA.",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog" },
}

const posts = [
  {
    slug: "why-pulling-weeds-bucks-county",
    title: "Why Pulling Weeds May Be Making Your Bucks County Property Look Worse",
    date: "June 15, 2026",
    category: "Weed Control",
    excerpt:
      "Hand-pulling breaks the stem while leaving the root network intact — giving aggressive weeds like Canada Thistle exactly what they need to come back stronger. Here's the science-based 4-step sequence that actually works.",
  },
]

export default function BlogPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-noise relative overflow-hidden bg-vm-navy px-4 pt-32 pb-20 md:px-12 md:pt-40 md:pb-28 lg:px-20">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p
            className="vm-reveal text-sm font-semibold tracking-widest text-vm-gold uppercase"
            style={{ animationDelay: "0ms" }}
          >
            From the Field
          </p>
          <h1
            className="vm-reveal font-varsity mt-3 text-4xl tracking-wide text-white md:text-5xl lg:text-6xl text-balance uppercase"
            style={{ animationDelay: "80ms" }}
          >
            Landscaping Tips &amp; Advice
          </h1>
          <div
            className="vm-reveal mx-auto mt-5 h-[2px] w-20 bg-vm-gold"
            style={{ animationDelay: "160ms" }}
          />
          <p
            className="vm-reveal mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80"
            style={{ animationDelay: "240ms" }}
          >
            Expert guides and seasonal advice for Bucks County homeowners who want better-looking
            yards with less work.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="relative bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm ring-1 ring-vm-navy/5 transition-all hover:shadow-md hover:ring-vm-navy/15"
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-vm-gold" />
                <div className="p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-vm-gold/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-vm-gold-dark">
                      {post.category}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="font-varsity mt-4 text-xl tracking-wide text-vm-navy transition-colors group-hover:text-vm-blue-dark md:text-2xl uppercase">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {post.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-vm-navy transition-all group-hover:gap-2.5 group-hover:text-vm-blue-dark">
                    Read article
                    <span aria-hidden="true">&rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
