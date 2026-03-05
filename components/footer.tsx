import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

const footerLinks = {
  Products: [
    { label: "Premium Mulch", href: "#products" },
    { label: "Topsoil & Fill", href: "#products" },
    { label: "Stone & Gravel", href: "#products" },
    { label: "Compost & Blend", href: "#products" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Delivery Area", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  Resources: [
    { label: "Mulch Calculator", href: "#calculator" },
    { label: "FAQs", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Bulk Pricing", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer id="about" className="bg-vm-navy px-4 py-16 md:px-12 md:py-20 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <span className="font-serif text-2xl font-bold text-white">
              Varsity Mulch
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Your trusted source for premium mulch, topsoil, stone, and
              landscaping supplies. Fast delivery, fair prices, and expert advice.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-vm-blue"
              >
                <Phone className="h-4 w-4" />
                (555) 123-4567
              </a>
              <a
                href="mailto:info@varsitymulch.com"
                className="flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-vm-blue"
              >
                <Mail className="h-4 w-4" />
                info@varsitymulch.com
              </a>
              <span className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 shrink-0" />
                Serving the greater metro area
              </span>
            </div>
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
