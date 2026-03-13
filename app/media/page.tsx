import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

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
      <section className="relative bg-vm-navy px-4 pt-32 pb-20 md:px-12 md:pt-40 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-blue uppercase">
            Media & Blog
          </p>
          <h1 className="font-varsity text-4xl tracking-wide text-white md:text-5xl lg:text-6xl text-balance uppercase">
            Stories from the Field
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            See what we've been up to and hear from our happy customers across Pennsylvania.
          </p>
          
          {/* Instagram Link */}
          <div className="mt-8">
            <Link
              href="https://www.instagram.com/varsitymulching/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Follow us on Instagram @varsitymulching
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Instagram Post */}
      <section className="relative bg-background px-4 py-20 md:px-12 md:py-28 lg:px-20">
        {/* Varsity stripes - two thick parallel lines */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Left - Instagram Embed */}
            <div>
              <p className="mb-3 text-sm font-semibold tracking-widest text-vm-blue-dark uppercase">
                Fresh From Instagram
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-vm-navy md:text-4xl text-balance">
                Our Latest Post
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Check out what we've been working on. Follow{" "}
                <Link 
                  href="https://www.instagram.com/varsitymulching/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold text-vm-blue-dark hover:underline"
                >
                  @varsitymulching
                </Link>{" "}
                for more updates.
              </p>

              {/* Instagram Embed Container */}
              <div className="mt-8 rounded-2xl border border-border bg-card overflow-hidden">
                <iframe
                  src="https://www.instagram.com/varsitymulching/embed"
                  className="w-full"
                  style={{ minHeight: "500px", border: "none" }}
                  scrolling="no"
                  title="Varsity Mulching Instagram Feed"
                />
              </div>
            </div>

            {/* Right - What We've Been Up To */}
            <div>
              <p className="mb-3 text-sm font-semibold tracking-widest text-vm-blue-dark uppercase">
                Latest Updates
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-vm-navy md:text-4xl text-balance">
                What We've Been Up To
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                News and highlights from the Varsity Mulching team.
              </p>

              {/* Most Recent Post - Featured */}
              {companyPosts[0] && (
                <div className="mt-8 rounded-2xl border border-border bg-card overflow-hidden">
                  <div 
                    className="aspect-video bg-cover bg-center"
                    style={{ backgroundImage: `url(${companyPosts[0].image})` }}
                  />
                  <div className="p-6">
                    <p className="text-xs font-semibold text-vm-blue-dark uppercase tracking-wider">
                      Latest
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-vm-navy">
                      {companyPosts[0].title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {companyPosts[0].date}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-vm-navy/80">
                      {companyPosts[0].excerpt}
                    </p>
                  </div>
                </div>
              )}

              {/* Older Posts - Compact List */}
              {companyPosts.length > 1 && (
                <div className="mt-4 space-y-3">
                  {companyPosts.slice(1).map((post) => (
                    <div key={post.id} className="rounded-xl border border-border bg-card p-4">
                      <h4 className="text-base font-semibold text-vm-navy">
                        {post.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {post.date}
                      </p>
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
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-blue-dark uppercase">
            Share Your Experience
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-vm-navy md:text-4xl text-balance">
            Leave Us a Review
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Had a great experience with Varsity Mulching? We'd love to hear about it! Your feedback helps us grow and helps other homeowners find quality mulching services.
          </p>
          <div className="mt-8">
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
