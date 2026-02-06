// Schema.org structured data generators for SEO

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'QuadB Tech',
  description: 'A boutique innovation studio crafting next-generation digital solutions powered by Blockchain, AI, Web3, and the Metaverse.',
  url: 'https://qtech-new.vercel.app',
  logo: 'https://qtech-new.vercel.app/logo.png',
  sameAs: [
    'https://twitter.com/QuadBTech',
    'https://linkedin.com/company/quadbtech',
    'https://github.com/qtech-internal',
  ],
  contact: {
    '@type': 'ContactPoint',
    telephone: '+1-XXX-XXX-XXXX',
    contactType: 'Sales',
    email: 'support@quadbtech.com',
  },
  location: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
  },
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'QuadB Tech',
  description: 'Digital Solutions Provider - Web3, Blockchain, AI Development',
  url: 'https://qtech-new.vercel.app',
  telephone: '+1-XXX-XXX-XXXX',
  email: 'support@quadbtech.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'Country',
    name: 'US',
  },
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
}

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const serviceSchema = (service: {
  name: string
  description: string
  image?: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  image: service.image,
  provider: {
    '@type': 'Organization',
    name: 'QuadB Tech',
    url: 'https://qtech-new.vercel.app',
  },
  areaServed: {
    '@type': 'Country',
    name: 'US',
  },
})

export const faqSchema = (questions: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: questions.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
})
