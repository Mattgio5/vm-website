"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { aerationFaqs } from "@/lib/aeration-faqs"

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-vm-navy/10 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-vm-blue-dark"
      >
        <span className="pr-4 text-base font-medium text-vm-navy md:text-lg">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-vm-navy/60 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
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

export function AerationFAQ() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
      {aerationFaqs.map((item) => (
        <FAQItem key={item.question} question={item.question} answer={item.answer} />
      ))}
    </div>
  )
}
