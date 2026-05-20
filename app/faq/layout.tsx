import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ — Mulch & Landscaping Questions Answered",
  description:
    "Pricing, scheduling, materials and process — answers to common mulching and landscaping questions for Bucks & Montgomery County, PA.",
  alternates: { canonical: "/faq" },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why college athletes as laborers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We don't exclusively hire college athletes as laborers. But so many local college athletes succeed in our laborer position because they embody our core values of hustle, customer service, and attention to detail. As athletes, the hustle is a given. The attention to detail and customer service come from their connection to the community. Local to Bucks County, college athletes treat our clients' properties like their own. Those values are what make the “Varsity” standard.",
      },
    },
    {
      "@type": "Question",
      "name": "What types of mulch do you offer? Do you help me pick the right one?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our primary three mulches are triple ground dyed black, triple ground dyed brown, and triple ground undyed mulch. We also offer leaf mulch, nutra mulch, playground mulch, and more. Our estimators are knowledgeable in all of our options and happy to help you choose the right mulch.",
      },
    },
    {
      "@type": "Question",
      "name": "How often should I remulch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You should remulch your property once per year. Our triple ground mulch decomposes into the most fertile soil for your beds. In order to maintain the heat barrier for your soil and keep your beds looking sharp, once a year is best! Some beds that get heavy sun or washout require a mid-season touch up.",
      },
    },
    {
      "@type": "Question",
      "name": "Do you remove the old mulch or just layer on top?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We do not remove old mulch on every job. Our triple ground mulch decomposes into soil, so if we mulched the property the previous year, there shouldn't be issues of overflow. For new customers who may have used lower-quality mulch in the past, we are happy to add old mulch removal to the quote.",
      },
    },
    {
      "@type": "Question",
      "name": "What's included — just the spreading, or also bed cleanup, weed pulling, etc.?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every client has different needs, so it depends! Most of our clients have us do the full Spring and Fall cleanups — pull weeds, cleanup, edge, mulch. But some clients just bring in our muscle for the mulch. We are happy to discuss your specific needs on our in-person quote.",
      },
    },
    {
      "@type": "Question",
      "name": "How does scheduling work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once you approve the quote, we will schedule your job for a week. We will then reach out the Friday before that week to confirm a specific date and time. This allows us to account for rain, overflow jobs, and more when creating our schedules. We take pride in showing up when we say we will, and this system allows us to keep our clients informed while giving us the flexibility to work around Mother Nature.",
      },
    },
    {
      "@type": "Question",
      "name": "How do you price jobs — by square footage, by yard of mulch, flat rate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We price our jobs on a per-job basis. Not all square foot or yard of mulch is created equal. Our estimators have to keep elevation changes, bed layout, and accessibility in mind when putting together a price. If you're looking for a rough range of price per yard of mulch, give our office a call and we'd be happy to give you one.",
      },
    },
    {
      "@type": "Question",
      "name": "How quickly can you get on my schedule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Job timing depends on where we are in the season. The earlier you book, the more likely we'll have a slot in our peak months of April, May, and June — during those months, we could be booked up to a month out. If you're reaching out in a month like July, we will likely be able to get you in on shorter notice.",
      },
    },
    {
      "@type": "Question",
      "name": "How long have you been doing this?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We started this business in 2021, so this is our 5th year in business.",
      },
    },
    {
      "@type": "Question",
      "name": "How are your crews trained?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our crew leads come in with years of experience in the landscaping industry. That experience combined with the training and supervision of our General Manager creates the “Varsity” standard that our clients have come to love.",
      },
    },
    {
      "@type": "Question",
      "name": "How long do jobs typically take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We've found our clients appreciate it if we're able to get in and out of their property within a half day. We would never risk rushing a job, so we make sure there are enough guys on the job to split the workload. Some jobs are shorter and some stretch to a full day, but most take a half day.",
      },
    },
    {
      "@type": "Question",
      "name": "Do I need to be home during the job?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, you do not need to be home during the job. Our team will have a detailed video of everything discussed on the quote, and you can make the final payment online.",
      },
    },
    {
      "@type": "Question",
      "name": "Why just mulching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Although most of our clients know us for our Varsity-level mulching jobs, we don't just do mulch. We do all the prep work required to make mulch jobs look great, and we do all the maintenance to keep your beds looking great.",
      },
    },
    {
      "@type": "Question",
      "name": "What else do you do besides mulching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After the Spring cleanup, we do a variety of other services to keep the beds looking sharp all year round. We trim bushes, install plants and shrubbery, treat weeds, touch up beds, and more. When Fall comes around, we do full property cleanups as well as aeration to keep the lawn looking lush and healthy.",
      },
    },
  ],
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  )
}
