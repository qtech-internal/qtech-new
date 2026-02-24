export const SITE_CONFIG = {
  name: 'Next.js App',
  description: 'A modern Next.js application built with TypeScript and Tailwind CSS',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://quadbtech.com',
  ogImage: '/images/partners-5.png',
  links: {
    twitter: 'https://twitter.com/yourusername',
    github: 'https://github.com/yourusername',
  },
}

export const NAVIGATION = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
]