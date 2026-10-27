import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { HomePage, type HomeOption } from "@/components/home/home-page"

/**
 * Internal previews of the homepage versions, including the saved spring
 * "classic" one. Not linked anywhere, noindex, and not in the sitemap.
 */
export const metadata: Metadata = {
  title: "Homepage Preview",
  robots: { index: false, follow: false },
}

const OPTIONS: { id: HomeOption; label: string }[] = [
  { id: "classic", label: "Classic" },
  { id: "a", label: "A · Drift (live)" },
  { id: "b", label: "B · Pile" },
  { id: "c", label: "C · Blower" },
]

export function generateStaticParams() {
  return OPTIONS.map((o) => ({ option: o.id }))
}

export default async function HomePreview({ params }: { params: Promise<{ option: string }> }) {
  const { option } = await params
  if (!OPTIONS.some((o) => o.id === option)) notFound()

  return (
    <main>
      <HomePage option={option as HomeOption} />
      <nav
        aria-label="Preview options"
        className="fixed bottom-4 left-4 z-[60] flex gap-1 rounded-full border border-white/20 bg-black/80 p-1 text-xs font-bold text-white shadow-xl backdrop-blur"
      >
        {OPTIONS.map((o) => (
          <Link
            key={o.id}
            href={`/preview/home/${o.id}`}
            className={`rounded-full px-3 py-2 ${o.id === option ? "bg-vm-gold text-vm-navy" : "hover:bg-white/15"}`}
          >
            {o.label}
          </Link>
        ))}
      </nav>
    </main>
  )
}
