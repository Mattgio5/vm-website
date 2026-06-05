import type { Metadata, Viewport } from 'next'
import { Open_Sans, Bowlby_One_SC } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SITE_URL } from '@/lib/site'
import Script from 'next/script'
import { Suspense } from 'react'
import { AnalyticsTracker } from '@/components/analytics-tracker'
import './globals.css'

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const META_PIXEL_ID = '2602896006774846'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

const bowlbyOneSc = Bowlby_One_SC({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-varsity-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: '_g3QByJq47ZO1tjuIuGxcJ5LOleNLGOOVoJEiqu1470',
  },
  title: {
    default: 'Varsity Mulching | Mulch Installation & Landscaping in Bucks County, PA',
    template: '%s | Varsity Mulching',
  },
  description:
    'Mulch installation, bed cleanup, edging and weed control for Bucks & Montgomery County homes. Locally owned — serving Doylestown, Newtown, Lansdale & nearby.',
  applicationName: 'Varsity Mulching',
  authors: [{ name: 'Varsity Mulching LLC' }],
  keywords: [
    'mulch installation',
    'landscaping',
    'bed cleanup',
    'flower bed edging',
    'weed control',
    'Doylestown PA',
    'Bucks County',
    'Montgomery County',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Varsity Mulching',
    url: '/',
    locale: 'en_US',
    images: [
      {
        url: '/images/vm-logo.png',
        width: 1200,
        height: 630,
        alt: 'Varsity Mulching — Professional Mulch & Landscaping',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/vm-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '96x96', type: 'image/x-icon' },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/icon-light-32x32.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#89CFF0',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${bowlbyOneSc.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />

        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}

        {/* Meta Pixel — base code fires the initial PageView */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
        </Script>

        {/* SPA route-change tracker — fires GA4 + Meta pageviews and lead events */}
        <Suspense fallback={null}>
          <AnalyticsTracker />
        </Suspense>
      </body>
    </html>
  )
}
