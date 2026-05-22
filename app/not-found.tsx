import Link from "next/link"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist. Browse our services or get a free quote.",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <main>
      <Navbar />
      <section className="relative bg-background px-4 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-vm-gold uppercase">
            404
          </p>
          <h1 className="font-varsity text-4xl tracking-wide text-vm-navy md:text-5xl lg:text-6xl text-balance uppercase">
            We couldn&apos;t find that page.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-vm-navy/80 md:text-lg">
            It may have moved, or the link could be off. Try one of these instead:
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/services/mulch-installation", label: "Mulch Installation" },
              { href: "/gallery", label: "Gallery" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Get a Quote" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block rounded-xl border border-border bg-card px-5 py-4 text-center font-semibold text-vm-navy transition-colors hover:border-vm-gold hover:bg-vm-gold/10"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-12 text-sm text-muted-foreground">
            Or call us at{" "}
            <a href="tel:+12673899789" className="font-semibold text-vm-navy hover:text-vm-blue-dark">
              (267) 389-9789
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
