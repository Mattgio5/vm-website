import type { Metadata, Viewport } from 'next'
import { Open_Sans, Bowlby_One_SC } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SITE_URL } from '@/lib/site'
import './globals.css'

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
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
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
      </body>
    </html>
  )
}
