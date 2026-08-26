export const siteConfig = {
  name: 'QuadB Technologies',
  shortName: 'QuadB',
  url: 'https://quadbtechnologies.com',
  description:
    'Founder-led AI product engineering and fractional CTO leadership for funded startups and SMEs.',
  email: 'vinayak.kalra@quadbtech.com',
  calendlyUrl: 'https://calendly.com/kalravinayak07/30min',
  linkedinUrl: 'https://www.linkedin.com/in/vinayakkalra-kaifoundry/',
  location: 'Ludhiana, Punjab, India',
  legalName: 'QuadB Technologies',
  gstin: '03AAAFQ8372P1ZS',
  legalStructure: 'registered partnership',
  registeredAddress:
    'Mehmoodpura, House No. 582/1, Adj. Bank Street, Old Madhopuri, Ludhiana, Punjab 141008, India',
  founder: {
    name: 'Vinayak Kalra',
    title: 'Founder & Technical Lead',
    image: '/vinayak-kalra-founder.webp',
  },
} as const

export const navigation = [
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const

export const companyProof = [
  { value: '200+', label: 'projects delivered' },
  { value: '10+', label: 'countries served' },
  { value: 'Since 2016', label: 'building digital products' },
] as const
