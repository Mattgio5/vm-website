"use client"

import { Phone } from "lucide-react"

export function MobileCallButton() {
  return (
    <a
      href="tel:+12673899789"
      aria-label="Call Varsity Mulching"
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 flex items-center gap-2.5 rounded-full bg-vm-gold px-6 py-3.5 text-sm font-bold tracking-wide text-vm-navy shadow-xl transition-all active:scale-95 hover:bg-vm-gold-dark md:hidden"
    >
      <Phone className="h-4 w-4 shrink-0" />
      (267) 389-9789
    </a>
  )
}
