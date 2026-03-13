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
  metadataBase: new URL('https://www.varsitymulching.com'),
  alternates: {
    canonical: './',
  },
  verification: {
    google: 'wWh3PMapCDTpBp5zFQcrL7wdiDPqY2Q4Ysqa2FApNos',
  },
  title: 'Varsity Mulching | Professional Mulch & Landscaping in Chester County, Bucks County & Montgomery County, PA',
  description:
    'Professional mulch installation, landscape edging, weed control & bed cleanup serving Chester County, Bucks County & Montgomery County, PA. Locally owned — serving West Chester, Doylestown, Malvern, Exton & more.',
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
