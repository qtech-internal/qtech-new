import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  noIndex?: boolean
}

const defaultSEO = {
  title: 'Next.js App',
  description: 'A modern Next.js application built with TypeScript and Tailwind CSS',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  image: '/og-image.jpg',
  url: 'https://yoursite.com',
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
    authors: [{ name: 'Your Name' }],
    creator: 'Your Name',
    publisher: 'Your Company',
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
      creator: '@yourusername',
    },
    alternates: {
      canonical: seo.url,
    },
  }
}