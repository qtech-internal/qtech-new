import type { CaseStudy, Service } from './content'
import { siteConfig } from './site'

const absolute = (path: string) => new URL(path, siteConfig.url).toString()
const expertise = [
  'Fractional CTO leadership',
  'AI product engineering',
  'AI agents and workflow automation',
  'SaaS product engineering',
  'Fintech product engineering',
  'Web and mobile product engineering',
]

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  email: siteConfig.email,
  taxID: siteConfig.gstin,
  foundingDate: '2016',
  description: siteConfig.description,
  knowsAbout: expertise,
  logo: absolute('/icon-512.png'),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ludhiana',
    addressRegion: 'Punjab',
    addressCountry: 'IN',
  },
  founder: {
    '@id': `${siteConfig.url}/#vinayak-kalra`,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: siteConfig.email,
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: [siteConfig.linkedinUrl],
}

export const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${siteConfig.url}/#vinayak-kalra`,
  name: siteConfig.founder.name,
  jobTitle: siteConfig.founder.title,
  image: absolute(siteConfig.founder.image),
  url: absolute('/about'),
  sameAs: [siteConfig.linkedinUrl],
  worksFor: { '@id': `${siteConfig.url}/#organization` },
  knowsAbout: expertise,
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: 'en-IN',
  publisher: { '@id': `${siteConfig.url}/#organization` },
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    url: absolute(`/services/${service.slug}`),
    provider: { '@id': `${siteConfig.url}/#organization` },
    areaServed: 'Worldwide',
    serviceType: service.shortTitle,
  }
}

export function webPageSchema({
  name,
  description,
  path,
  about,
}: {
  name: string
  description: string
  path: string
  about?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${absolute(path)}#webpage`,
    name,
    description,
    url: absolute(path),
    inLanguage: 'en-IN',
    isPartOf: { '@id': `${siteConfig.url}/#website` },
    about: about ?? expertise,
    primaryImageOfPage: { '@type': 'ImageObject', url: absolute('/og.png') },
  }
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function caseStudySchema(caseStudy: CaseStudy) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${caseStudy.title} case study`,
    description: caseStudy.summary,
    url: absolute(`/work/${caseStudy.slug}`),
    image: absolute(caseStudy.image),
    genre: 'Case study',
    mainEntityOfPage: absolute(`/work/${caseStudy.slug}`),
    author: { '@id': `${siteConfig.url}/#vinayak-kalra` },
    publisher: { '@id': `${siteConfig.url}/#organization` },
    about: caseStudy.service,
  }
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  }
}
