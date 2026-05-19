/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ],
  },
  async rewrites() {
    // The Flask quote-scheduler returns redirect URLs like
    //   https://varsitymulching.com/schedule-central-bucks?sid=...&utm_*
    // Rewrite those into a single dynamic [zone] route so we have one page
    // template instead of five duplicates.
    return [
      { source: '/schedule-central-bucks', destination: '/schedule/central-bucks' },
      { source: '/schedule-south-bucks', destination: '/schedule/south-bucks' },
      { source: '/schedule-montco-west', destination: '/schedule/montco-west' },
      { source: '/schedule-north-bucks', destination: '/schedule/north-bucks' },
      { source: '/schedule-general', destination: '/schedule/general' },
    ]
  },
}

export default nextConfig
