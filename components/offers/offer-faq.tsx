"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { OFFER_FAQS } from "@/lib/aeration-offer"

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-vm-navy/10 last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-vm-blue-dark"
      >
        <span className="text-base font-semibold text-vm-navy md:text-lg">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-vm-navy/60 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-base leading-relaxed text-muted-foreground">{answer}</p>
        </div>
      )}
    </div>
  )
}

export function OfferFAQ() {
  return (
    <div className="rounded-2xl border border-border bg-card px-5 md:px-8">
      {OFFER_FAQS.map((item) => (
        <FAQItem key={item.question} question={item.question} answer={item.answer} />
      ))}
    </div>
  )
}
