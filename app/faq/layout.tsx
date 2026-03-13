export const metadata = {
  title: "FAQ | Varsity Mulching — Mulch & Landscaping Questions Answered",
  description:
    "Answers to common questions about mulch installation, edging, weed control & bed cleanup services in Chester County & Bucks County, PA. Pricing, scheduling & more.",
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How often should I remulch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once a year is common. Most people do it in the spring. If your beds get heavy sun or washout, a mid-season top-off helps. We are happy to give our thoughts for unique situations!",
      },
    },
    {
      "@type": "Question",
      "name": "How long have you been doing this?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We have been proudly serving the community for just over 5 years.",
      },
    },
    {
      "@type": "Question",
      "name": "Why just mulching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most landscaping companies use mulching as a stepping stone to bigger, more expensive jobs. We went the other direction. We figured if we focused on one thing and built a real system around it — right materials, trained crews, consistent process — we could do it better and faster than anyone treating it as an afterthought. That's the whole idea behind Varsity. We're not trying to upsell you on a patio. We're just trying to make your beds look great.",
      },
    },
    {
      "@type": "Question",
      "name": "What else do you do besides mulching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mulching is the main thing, but we also handle edging, weed control, and bed cleanups. If you need extras like bush removal, trimming, planting, or seasonal maintenance, we do that too. Most people bundle a few of these together when we're already out there.",
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
