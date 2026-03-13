"use client"

import { useState } from "react"
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

// Sample customer reviews - in production these would come from a database
const initialReviews = [
  {
    id: 1,
    name: "Jennifer S.",
    county: "Montgomery County",
    message: "The Varsity crew did an amazing job on our front beds. Professional, quick, and the mulch looks fantastic!",
    date: "March 5, 2026",
  },
  {
    id: 2,
    name: "Robert M.",
    county: "Chester County",
    message: "These young guys really know what they're doing. Great attention to detail and they cleaned up perfectly after.",
    date: "February 20, 2026",
  },
]

export default function MediaPage() {
  const [reviews, setReviews] = useState(initialReviews)
  const [formData, setFormData] = useState({
    name: "",
    county: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission - in production this would save to a database
    setTimeout(() => {
      const newReview = {
        id: reviews.length + 1,
        name: formData.name,
        county: formData.county,
        message: formData.message,
        date: new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }),
      }
      setReviews([newReview, ...reviews])
      setFormData({ name: "", county: "", message: "" })
      setIsSubmitting(false)
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 3000)
    }, 500)
  }

  return (
    <main>
      <Navbar />

      {/* Hero Section - no top stripes, handled by navbar */}
      <section className="relative bg-vm-navy px-4 pt-32 pb-20 md:px-12 md:pt-40 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-blue uppercase">
            Media & Blog
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
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
                  allowTransparency={true}
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

      {/* Customer Reviews Section */}
      <section className="relative bg-muted/50 px-4 py-20 md:px-12 md:py-28 lg:px-20">
        {/* Varsity stripes - two thick parallel lines */}
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2.5 w-full bg-vm-gold" />
          <div className="h-2.5 w-full bg-vm-navy" />
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left - Submit a Review */}
            <div>
              <p className="mb-3 text-sm font-semibold tracking-widest text-vm-blue-dark uppercase">
                Share Your Experience
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-vm-navy md:text-4xl text-balance">
                We Love Hearing From You
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                We always want to know what our customers are up to and what they think. Share your experience with Varsity Mulching and let us know how we did!
              </p>

              {/* Review Form */}
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-vm-navy mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="John D."
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-vm-navy placeholder:text-muted-foreground focus:border-vm-blue focus:outline-none focus:ring-1 focus:ring-vm-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="county" className="block text-sm font-medium text-vm-navy mb-1.5">
                      County
                    </label>
                    <input
                      type="text"
                      id="county"
                      value={formData.county}
                      onChange={(e) => setFormData({ ...formData, county: e.target.value })}
                      required
                      placeholder="Montgomery County"
                      className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-vm-navy placeholder:text-muted-foreground focus:border-vm-blue focus:outline-none focus:ring-1 focus:ring-vm-blue"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-vm-navy mb-1.5">
                    Your Review
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="Tell us about your experience with Varsity Mulching..."
                    className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-vm-navy placeholder:text-muted-foreground focus:border-vm-blue focus:outline-none focus:ring-1 focus:ring-vm-blue resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex rounded-full bg-vm-navy px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-vm-navy-light hover:shadow-lg disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </button>
                {submitted && (
                  <p className="text-sm font-medium text-green-600">
                    Thank you for your review!
                  </p>
                )}
              </form>
            </div>

            {/* Right - Recent Reviews */}
            <div>
              <p className="mb-3 text-sm font-semibold tracking-widest text-vm-blue-dark uppercase">
                Customer Stories
              </p>
              <h3 className="text-2xl font-bold tracking-tight text-vm-navy md:text-3xl">
                What People Are Saying
              </h3>
              
              <div className="mt-8 space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="rounded-2xl border border-border bg-card p-6">
                    <p className="text-base leading-relaxed text-vm-navy/80">
                      "{review.message}"
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                      <div>
                        <p className="text-sm font-semibold text-vm-navy">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.county}</p>
                      </div>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
