import Image from "next/image"
import { MapPin, ShieldCheck, Star, Trophy, Users } from "lucide-react"
import { testimonials } from "@/lib/testimonials"
import { Stars } from "@/components/offers/offer-chrome"

/** The five differentiators every offer page leads its social proof with. */
export const PROOF_POINTS = [
  { icon: Star, title: "300+ Five-Star Reviews", body: "Rated 5.0 on Google" },
  { icon: ShieldCheck, title: "Licensed & Insured", body: "Real coverage on every crew" },
  { icon: Trophy, title: "Local College Student-Athletes", body: "Hard-working, on-time crews" },
  { icon: Users, title: "Experienced Crew Leads", body: "Seasoned leads on every job" },
  { icon: MapPin, title: "Serving Bucks & Montgomery County", body: "Locally owned in Doylestown" },
] as const

/**
 * Navy proof band that sits directly under an offer hero: five icon badges,
 * then a row of real Google reviews picked by name from lib/testimonials.ts.
 */
export function OfferProofSection({ reviewNames = [] }: { reviewNames?: readonly string[] }) {
  const reviews = reviewNames
    .map((name) => testimonials.find((t) => t.name === name))
    .filter((t): t is NonNullable<typeof t> => Boolean(t))

  return (
    <section className="relative bg-vm-navy-light px-4 py-10 md:px-8 md:py-14">
      <div className="absolute top-0 right-0 left-0 h-1.5 bg-vm-gold" />
      <div className="mx-auto max-w-6xl">
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          {PROOF_POINTS.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-5 text-center last:col-span-2 md:last:col-span-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-vm-gold">
                <Icon className="h-5 w-5 text-vm-navy" strokeWidth={2.5} aria-hidden="true" />
              </span>
              <p className="mt-3 text-sm leading-snug font-bold text-white md:text-base">{title}</p>
              <p className="mt-1 text-xs leading-snug text-white/60 md:text-sm">{body}</p>
            </li>
          ))}
        </ul>

        {reviews.length > 0 && (
          <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={review.name}
                className="flex flex-col rounded-2xl border border-white/10 bg-vm-navy/60 p-5"
              >
                <Stars />
                <blockquote className="mt-3 grow text-base leading-relaxed text-white/85">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
                  {review.image && (
                    <Image
                      src={review.image}
                      alt=""
                      width={36}
                      height={36}
                      sizes="36px"
                      loading="lazy"
                      className="h-9 w-9 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <p className="text-sm font-bold text-white">{review.name}</p>
                    <p className="text-xs text-white/55">Verified Google review</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
