import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog & News — Landscaping Tips in Bucks County, PA",
  description:
    "Updates, tips and behind-the-scenes from Varsity Mulching as we transform yards across Bucks & Montgomery County, PA.",
  alternates: { canonical: "/media" },
}

const FACEBOOK_URL = "https://www.facebook.com/people/Varsity-Mulching/61550553115186/"

// Sample company posts - in production these would come from a database/CMS
const companyPosts = [
  {
    id: 1,
    title: "Spring Season Kickoff",
    date: "March 15, 2026",
    excerpt: "The crew is back and ready for another great season! We've been prepping equipment and can't wait to get out there.",
    image: "/images/hero-mulch.jpg",
  },
  {
    id: 2,
    title: "New Partnership with Local College",
    date: "February 28, 2026",
    excerpt: "Excited to announce we're partnering with another local college to bring even more talented student athletes to our team.",
    image: "/images/hero-delivery.jpg",
  },
  {
    id: 3,
    title: "End of Season Wrap-Up",
    date: "November 10, 2025",
    excerpt: "What a season! Thank you to all our amazing customers who trusted us with their yards this year.",
    image: "/images/hero-yard.jpg",
  },
]

export default function MediaPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section - no top stripes, handled by navbar */}
      <section className="bg-noise relative overflow-hidden bg-vm-navy px-4 pt-32 pb-20 md:px-12 md:pt-40 md:pb-28 lg:px-20">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p
            className="vm-reveal text-sm font-semibold tracking-widest text-vm-gold uppercase"
            style={{ animationDelay: "0ms" }}
          >
            Media &amp; Blog
          </p>
          <h1
            className="vm-reveal font-varsity mt-3 text-4xl tracking-wide text-white md:text-5xl lg:text-6xl text-balance uppercase"
            style={{ animationDelay: "80ms" }}
          >
            Stories from the Field
          </h1>
          <div
            className="vm-reveal mx-auto mt-5 h-[2px] w-20 bg-vm-gold"
            style={{ animationDelay: "160ms" }}
          />
          <p
            className="vm-reveal mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80"
            style={{ animationDelay: "240ms" }}
          >
            See what we&apos;ve been up to and hear from our happy customers across Pennsylvania.
          </p>

          {/* Social Links */}
          <div
            className="vm-reveal mt-8 flex flex-wrap items-center justify-center gap-3"
            style={{ animationDelay: "320ms" }}
          >
            <Link
              href="https://www.instagram.com/varsitymulching/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-vm-gold/60 hover:bg-vm-gold/10"
            >
              Instagram @varsitymulching
            </Link>
            <Link
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-vm-gold/60 hover:bg-vm-gold/10"
            >
              Facebook /VarsityMulching
            </Link>
          </div>
        </div>
      </section>

      {/* Social Feeds */}
      <section className="relative bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
        {/* Varsity stripes - two thick parallel lines */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-12 items-start">
            {/* Left - Instagram Embed */}
            <div>
              <div className="h-1 w-12 bg-vm-gold" />
              <h2 className="font-varsity mt-4 text-3xl tracking-wide text-vm-navy md:text-4xl text-balance uppercase">
                Follow @varsitymulching
              </h2>

              {/* Instagram Embed Container */}
              <div className="relative mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-sm ring-1 ring-vm-navy/5">
                <div className="absolute inset-x-0 top-0 z-10 h-1 bg-vm-gold" />
                <iframe
                  src="https://www.instagram.com/varsitymulching/embed"
                  className="w-full"
                  style={{ minHeight: "560px", border: "none" }}
                  scrolling="no"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Varsity Mulching Instagram Feed"
                />
              </div>
            </div>

            {/* Right - Facebook CTA Card */}
            <div className="lg:sticky lg:top-24">
              <div className="h-1 w-12 bg-vm-gold" />
              <p className="mt-4 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
                Find Us On Facebook
              </p>
              <h2 className="font-varsity mt-2 text-3xl tracking-wide text-vm-navy md:text-4xl text-balance uppercase">
                Like &amp; Follow
              </h2>

              <Link
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-6 block overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-[#1877F2] to-[#0b5fd1] p-6 text-white shadow-md ring-1 ring-vm-navy/5 transition-all hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 z-10 h-1 bg-vm-gold" />
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-7 w-7 text-white"
                      aria-hidden="true"
                    >
                      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.78-3.91 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.57v1.88h2.78l-.45 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                      Facebook
                    </p>
                    <p className="mt-1 text-base font-bold leading-tight">
                      Varsity Mulching
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/85">
                      Behind-the-scenes shots, finished yards, and updates from the crew.
                    </p>
                  </div>
                </div>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-[#1877F2] transition-transform group-hover:translate-x-0.5">
                  Visit Our Page
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </Link>

              <Link
                href="https://www.instagram.com/varsitymulching/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-vm-navy transition-colors hover:border-vm-navy/40"
              >
                <span className="flex items-center gap-2.5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4 text-vm-navy"
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                  Also on Instagram
                </span>
                <span className="text-xs text-muted-foreground">@varsitymulching →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates from the Team */}
      <section className="relative bg-muted/30 px-4 py-20 md:px-12 md:py-28 lg:px-20">
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-3xl">
          <div>
            {/* What We've Been Up To */}
            <div>
              <div className="h-1 w-12 bg-vm-gold" />
              <p className="mt-4 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
                Latest Updates
              </p>
              <h2 className="font-varsity mt-2 text-3xl tracking-wide text-vm-navy md:text-4xl text-balance uppercase">
                What We&apos;ve Been Up To
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                News and highlights from the Varsity Mulching team.
              </p>

              {/* Most Recent Post - Featured */}
              {companyPosts[0] && (
                <div className="relative mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm ring-1 ring-vm-navy/5">
                  <div className="absolute inset-x-0 top-0 z-10 h-1.5 bg-vm-gold" />
                  <div
                    className="aspect-video bg-cover bg-center"
                    style={{ backgroundImage: `url(${companyPosts[0].image})` }}
                  />
                  <div className="p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-vm-gold-dark">
                      Latest
                    </p>
                    <h3 className="mt-2 text-xl font-bold text-vm-navy md:text-2xl">
                      {companyPosts[0].title}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {companyPosts[0].date}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-vm-navy/80 md:text-base">
                      {companyPosts[0].excerpt}
                    </p>
                  </div>
                </div>
              )}

              {/* Older Posts - Compact List */}
              {companyPosts.length > 1 && (
                <div className="mt-4 space-y-3">
                  {companyPosts.slice(1).map((post) => (
                    <div
                      key={post.id}
                      className="flex gap-4 rounded-xl border border-l-4 border-border border-l-vm-gold bg-card p-4 pl-5"
                    >
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-vm-navy">
                          {post.title}
                        </h4>
                        <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {post.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="relative bg-muted/50 px-4 py-20 md:px-12 md:py-28 lg:px-20">
        {/* Varsity stripes - two thick parallel lines */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto h-1 w-12 bg-vm-gold" />
          <p className="mt-4 text-sm font-semibold tracking-widest text-vm-gold-dark uppercase">
            Share Your Experience
          </p>
          <h2 className="font-varsity mt-2 text-3xl tracking-wide text-vm-navy md:text-4xl text-balance uppercase">
            Leave Us a Review
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Had a great experience with Varsity Mulching? We&apos;d love to hear about it! Your feedback helps us grow and helps other homeowners find quality mulching services.
          </p>
          <div className="mt-9">
            <Link
              href="https://www.google.com/search?sca_esv=559361602&hl=en&authuser=0&sxsrf=AB5stBhbtP7Zkf3zL35PjjYFgAcIgxYNug:1692801168575&q=Varsity+Mulching&stick=H4sIAAAAAAAAAONgU1I1qLCwTDZLNDc0SjNOTjJItjS0MqhIMjVMMja2tDAwTDJINDS0XMQqEJZYVJxZUqngW5qTnJGZlw4AQf0SMzwAAAA&mat=IgIIAQ&sa=X&ved=2ahUKEwjU2s_i__KAAxVJLUQIHallAgAQ-rELegQIJRAD&biw=1865&bih=961&dpr=1#lrd=0x89c6a712f3cb0c91:0xb51b339801b0a119,1,,,,"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-vm-navy px-8 py-4 text-base font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-vm-gold">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Write a Google Review
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
