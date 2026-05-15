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
        question: "Why college athletes as laborers?",
        answer:
          "We don't exclusively hire college athletes as laborers. But so many local college athletes succeed in our laborer position because they embody our core values of hustle, customer service, and attention to detail. As athletes, the hustle is a given. The attention to detail and customer service come from their connection to the community. Local to Bucks County, college athletes treat our clients' properties like their own. Those values are what make the “Varsity” standard.",
      },
      {
        question: "What types of mulch do you offer? Do you help me pick the right one?",
        answer:
          "Our primary three mulches are triple ground dyed black, triple ground dyed brown, and triple ground undyed mulch. We also offer leaf mulch, nutra mulch, playground mulch, and more. Our estimators are knowledgeable in all of our options and happy to help you choose the right mulch.",
      },
      {
        question: "How often should I remulch?",
        answer:
          "You should remulch your property once per year. Our triple ground mulch decomposes into the most fertile soil for your beds. In order to maintain the heat barrier for your soil and keep your beds looking sharp, once a year is best! Some beds that get heavy sun or washout require a mid-season touch up.",
      },
      {
        question: "Do you remove the old mulch or just layer on top?",
        answer:
          "We do not remove old mulch on every job. Our triple ground mulch decomposes into soil, so if we mulched the property the previous year, there shouldn't be issues of overflow. For new customers who may have used lower-quality mulch in the past, we are happy to add old mulch removal to the quote.",
      },
      {
        question: "What's included — just the spreading, or also bed cleanup, weed pulling, etc.?",
        answer:
          "Every client has different needs, so it depends! Most of our clients have us do the full Spring and Fall cleanups — pull weeds, cleanup, edge, mulch. But some clients just bring in our muscle for the mulch. We are happy to discuss your specific needs on our in-person quote.",
      },
    ],
  },
  {
    title: "Pricing & Scheduling",
    items: [
      {
        question: "How does scheduling work?",
        answer:
          "Once you approve the quote, we will schedule your job for a week. We will then reach out the Friday before that week to confirm a specific date and time. This allows us to account for rain, overflow jobs, and more when creating our schedules. We take pride in showing up when we say we will, and this system allows us to keep our clients informed while giving us the flexibility to work around Mother Nature.",
      },
      {
        question: "How do you price jobs — by square footage, by yard of mulch, flat rate?",
        answer:
          "We price our jobs on a per-job basis. Not all square foot or yard of mulch is created equal. Our estimators have to keep elevation changes, bed layout, and accessibility in mind when putting together a price. If you're looking for a rough range of price per yard of mulch, give our office a call and we'd be happy to give you one.",
      },
      {
        question: "How quickly can you get on my schedule?",
        answer:
          "Job timing depends on where we are in the season. The earlier you book, the more likely we'll have a slot in our peak months of April, May, and June — during those months, we could be booked up to a month out. If you're reaching out in a month like July, we will likely be able to get you in on shorter notice.",
      },
    ],
  },
  {
    title: "What to Expect",
    items: [
      {
        question: "How long have you been doing this?",
        answer: "We started this business in 2021, so this is our 5th year in business.",
      },
      {
        question: "How are your crews trained?",
        answer:
          "Our crew leads come in with years of experience in the landscaping industry. That experience combined with the training and supervision of our General Manager creates the “Varsity” standard that our clients have come to love.",
      },
      {
        question: "How long do jobs typically take?",
        answer:
          "We've found our clients appreciate it if we're able to get in and out of their property within a half day. We would never risk rushing a job, so we make sure there are enough guys on the job to split the workload. Some jobs are shorter and some stretch to a full day, but most take a half day.",
      },
      {
        question: "Do I need to be home during the job?",
        answer:
          "No, you do not need to be home during the job. Our team will have a detailed video of everything discussed on the quote, and you can make the final payment online.",
      },
    ],
  },
  {
    title: "Beyond Mulching",
    items: [
      {
        question: "Why just mulching?",
        answer:
          "Although most of our clients know us for our Varsity-level mulching jobs, we don't just do mulch. We do all the prep work required to make mulch jobs look great, and we do all the maintenance to keep your beds looking great.",
      },
      {
        question: "What else do you do besides mulching?",
        answer:
          "After the Spring cleanup, we do a variety of other services to keep the beds looking sharp all year round. We trim bushes, install plants and shrubbery, treat weeds, touch up beds, and more. When Fall comes around, we do full property cleanups as well as aeration to keep the lawn looking lush and healthy.",
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
              href="/contact"
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
