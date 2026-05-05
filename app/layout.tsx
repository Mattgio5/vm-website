import type { Metadata, Viewport } from 'next'
import { Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const openSans = Open_Sans({ 
  subsets: ['latin'], 
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://varsitymulching.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    google: '_g3QByJq47ZO1tjuIuGxcJ5LOleNLGOOVoJEiqu1470',
  },
  title: 'Varsity Mulching | Professional Mulch & Landscaping in Chester County, Bucks County & Montgomery County, PA',
  description:
    'Professional mulch installation, landscape edging, weed control & bed cleanup serving Chester County, Bucks County & Montgomery County, PA. Locally owned — serving West Chester, Doylestown, Malvern, Exton & more.',
  openGraph: {
    type: 'website',
    siteName: 'Varsity Mulching',
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
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
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
    <html lang="en" className={openSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.cdnfonts.com/css/superstar-m54"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
