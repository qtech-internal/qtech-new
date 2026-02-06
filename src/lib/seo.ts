import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  noIndex?: boolean
}

const defaultSEO = {
  title: 'QuadB Tech',
  description: 'QuadB Tech is a boutique innovation studio crafting next-generation digital solutions powered by Blockchain, AI, Web3, and the Metaverse. We partner with visionary startups and forward-thinking enterprises.',
  keywords: ['Blockchain', 'AI', 'Web3', 'DApp Development', 'Smart Contracts', 'Mobile App Development', 'Web Development', 'Cloud Solutions', 'Metaverse'],
  image: '/og-image.jpg',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://qtech-new.vercel.app',
  type: 'website' as const,
}

export function generateSEO({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  noIndex = false,
}: SEOProps = {}): Metadata {
  const seo = {
    title: title ? `${title} | ${defaultSEO.title}` : defaultSEO.title,
    description: description || defaultSEO.description,
    keywords: keywords || defaultSEO.keywords,
    image: image || defaultSEO.image,
    url: url || defaultSEO.url,
    type,
  }

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords.join(', '),
    authors: [{ name: 'QuadB Tech' }],
    creator: 'QuadB Tech',
    publisher: 'QuadB Tech',
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    openGraph: {
      type: seo.type,
      title: seo.title,
      description: seo.description,
      url: seo.url,
      images: [
        {
          url: seo.image,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
      siteName: defaultSEO.title,
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [seo.image],
      creator: '@QuadBTech',
    },
    alternates: {
      canonical: seo.url,
    },
  }
}