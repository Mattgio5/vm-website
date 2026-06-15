import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

type Entry = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

const entries: Entry[] = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/services/mulch-installation', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/services/edges', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/weed-control', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/bed-cleanup', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/supplements', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/services/fall-cleanup', changeFrequency: 'monthly', priority: 0.75 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/gallery', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/faq', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/schedule-a-quote', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.6 },
  { path: '/blog/why-pulling-weeds-bucks-county', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/media', changeFrequency: 'monthly', priority: 0.4 },
  { path: '/careers', changeFrequency: 'monthly', priority: 0.4 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return entries.map(({ path, changeFrequency, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
