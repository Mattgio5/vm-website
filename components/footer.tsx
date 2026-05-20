import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  Services: [
    { label: "Mulch Installation", href: "/services/mulch-installation" },
    { label: "Flower Bed Edging", href: "/services/edges" },
    { label: "Weed Control", href: "/services/weed-control" },
    { label: "Bed Cleanup", href: "/services/bed-cleanup" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Careers", href: "/careers" },
    { label: "Media", href: "/media" },
  ],
  Contact: [
    { label: "(267) 489-1567", href: "tel:+12674891567" },
    { label: "hello@varsitymulching.com", href: "mailto:hello@varsitymulching.com" },
    { label: "Serving Bucks & Montgomery County, PA", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer id="about" className="relative bg-vm-navy px-4 py-16 md:px-12 md:py-20 lg:px-20">
      {/* Varsity stripes - two thick parallel lines at top */}
      <div className="absolute top-0 left-0 right-0 flex flex-col">
        <div className="h-2.5 w-full bg-vm-gold" />
        <div className="h-2.5 w-full bg-vm-navy" />
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/images/vm-logo.png"
                alt="Varsity Mulching LLC"
                width={120}
                height={80}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Locally owned mulch installation and landscape services
              for Bucks &amp; Montgomery County, PA. Free quotes.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-4 text-sm font-semibold tracking-wider text-white/80 uppercase">
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors hover:text-vm-blue"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-xs text-white/35">
            {`© ${new Date().getFullYear()} Varsity Mulch. All rights reserved.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
