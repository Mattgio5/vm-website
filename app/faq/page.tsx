"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"

type FAQItem = {
  question: string
  answer: string
}

type FAQSection = {
  title: string
  items: FAQItem[]
}

const faqSections: FAQSection[] = [
  {
    title: "Getting Started",
    items: [
      {
        question: "What types of mulch do you offer? Do you help me pick the right one?",
        answer: "",
      },
      {
        question: "How often should I remulch?",
        answer: "Once a year is common. Most people do it in the spring. If your beds get heavy sun or washout, a mid-season top-off helps. We are happy to give our thoughts for unique situations!",
      },
      {
        question: "Do you remove the old mulch or just layer on top?",
        answer: "",
      },
      {
        question: "What's included — just the spreading, or also bed cleanup, weed pulling, etc.?",
        answer: "",
      },
    ],
  },
  {
    title: "Pricing & Scheduling",
    items: [
      {
        question: "What can I expect for pricing?",
        answer: "",
      },
      {
        question: "How do you price jobs — by square footage, by yard of mulch, flat rate?",
        answer: "",
      },
      {
        question: "How quickly can you get on my schedule?",
        answer: "",
      },
      {
        question: "Do you offer seasonal contracts or is it one-off?",
        answer: "",
      },
    ],
  },
  {
    title: "What to Expect",
    items: [
      {
        question: "How long have you been doing this?",
        answer: "We have been proudly serving the community for just over 5 years.",
      },
      {
        question: "How are your crews trained?",
        answer: "",
      },
      {
        question: "Who supervises the job?",
        answer: "",
      },
      {
        question: "How long do jobs typically take?",
        answer: "",
      },
      {
        question: "Do I need to be home during the job?",
        answer: "",
      },
      {
        question: "What if it rains — do you reschedule?",
        answer: "",
      },
    ],
  },
  {
    title: "Beyond Mulching",
    items: [
      {
        question: "Why just mulching?",
        answer: "Most landscaping companies use mulching as a stepping stone to bigger, more expensive jobs. We went the other direction. We figured if we focused on one thing and built a real system around it — right materials, trained crews, consistent process — we could do it better and faster than anyone treating it as an afterthought. That's the whole idea behind Varsity. We're not trying to upsell you on a patio. We're just trying to make your beds look great.",
      },
      {
        question: "What else do you do besides mulching?",
        answer: "Mulching is the main thing, but we also handle edging, weed control, and bed cleanups. If you need extras like bush removal, trimming, planting, or seasonal maintenance, we do that too. Most people bundle a few of these together when we're already out there.",
      },
    ],
  },
]

function FAQAccordion({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-vm-navy/10 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-vm-blue-dark"
      >
        <span className="pr-4 text-base font-medium text-vm-navy md:text-lg">
          {item.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-vm-navy/60 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-5">
          {item.answer ? (
            <p className="text-base leading-relaxed text-muted-foreground">
              {item.answer}
            </p>
          ) : (
            <p className="text-base italic text-muted-foreground/60">
              Answer coming soon.
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-vm-blue/20 to-background px-4 pb-16 pt-32 md:px-12 md:pb-20 md:pt-40 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-varsity text-4xl tracking-wide text-vm-navy uppercase md:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-base leading-relaxed text-vm-navy/70 md:text-lg">
            We're happy to help! Here are answers to some of the questions we get most often. If you don't see what you're looking for, feel free to reach out.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="px-4 py-16 md:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-3xl space-y-12">
          {faqSections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-6 font-varsity text-2xl tracking-wide text-vm-navy uppercase md:text-3xl">
                {section.title}
              </h2>
              <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                {section.items.map((item, index) => (
                  <FAQAccordion key={index} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-vm-navy px-4 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="absolute top-0 left-0 right-0 flex flex-col">
          <div className="h-2 w-full bg-vm-gold" />
        </div>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-varsity text-2xl tracking-wide text-white uppercase md:text-3xl">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
            We're here to help. Reach out and we'll get back to you as soon as we can.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#quote"
              className="inline-flex rounded-full bg-vm-blue px-7 py-3.5 text-base font-semibold text-vm-navy transition-all hover:bg-vm-blue-dark hover:shadow-lg"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+12674891567"
              className="inline-flex rounded-full border-2 border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
