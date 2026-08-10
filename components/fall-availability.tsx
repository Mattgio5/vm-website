/**
 * Fall availability indicator — "Badge + Line" style.
 * Currently a manual OPEN status; will become a percentage of remaining
 * capacity once we have a customer test number.
 */

const BODY =
  "We’re currently accepting new clients for fall landscaping services in Bucks & Montgomery County. Availability is limited as we build our fall routes."

type Tone = "dark" | "light"

function PulseDot() {
  return (
    <span className="relative flex h-3 w-3 shrink-0">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-60" />
      <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
    </span>
  )
}

export function FallAvailability({ tone = "dark" }: { tone?: Tone }) {
  return (
    <div className="max-w-lg">
      <span
        className={
          tone === "dark"
            ? "inline-flex items-center gap-2 rounded-full border border-green-400/40 bg-green-500/15 px-4 py-1.5 text-sm font-semibold tracking-wide text-green-300 uppercase"
            : "inline-flex items-center gap-2 rounded-full border border-green-600/30 bg-green-500/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-green-700 uppercase"
        }
      >
        <PulseDot />
        Fall Availability: Open
      </span>
      <p
        className={
          tone === "dark"
            ? "mt-2.5 text-sm leading-relaxed text-white/75"
            : "mt-2.5 text-sm leading-relaxed text-muted-foreground"
        }
      >
        {BODY}
      </p>
    </div>
  )
}
