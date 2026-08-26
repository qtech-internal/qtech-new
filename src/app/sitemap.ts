import type { MetadataRoute } from 'next'
import { caseStudies, services } from '@/lib/content'
import { siteConfig } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/work', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.2, changeFrequency: 'yearly' as const },
    ...services.map((service) => ({
      path: `/services/${service.slug}`,
      priority: 0.85,
      changeFrequency: 'monthly' as const,
    })),
    ...caseStudies.map((caseStudy) => ({
      path: `/work/${caseStudy.slug}`,
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    })),
  ]

  return pages.map((page) => ({
    url: `${siteConfig.url}${page.path}`,
    lastModified: new Date('2026-08-12'),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }))
}
