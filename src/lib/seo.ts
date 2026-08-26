import type { Metadata } from 'next'
import { siteConfig } from './site'

interface MetadataInput {
  title: string
  description: string
  path?: string
  type?: 'website' | 'article'
  keywords?: string[]
  image?: {
    url: string
    width: number
    height: number
    alt: string
    type?: string
  } | null
}

export function createMetadata({
  title,
  description,
  path = '/',
  type = 'website',
  keywords = [],
  image,
}: MetadataInput): Metadata {
  const canonical = new URL(path, siteConfig.url).toString()
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`
  const socialImage = image === undefined
    ? {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'QuadB Technologies — founder-led AI product engineering',
        type: 'image/png',
      }
    : image
  const resolvedSocialImage = socialImage
    ? {
        ...socialImage,
        url: new URL(socialImage.url, siteConfig.url).toString(),
      }
    : null

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: siteConfig.founder.name, url: siteConfig.linkedinUrl }],
    creator: siteConfig.founder.name,
    publisher: siteConfig.name,
    alternates: { canonical },
    openGraph: {
      type,
      title: fullTitle,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: 'en_IN',
      images: resolvedSocialImage ? [resolvedSocialImage] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: resolvedSocialImage ? [resolvedSocialImage] : [],
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
  }
}
