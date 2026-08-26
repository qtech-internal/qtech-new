import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Analytics from '@/components/Analytics'
import CookieConsent from '@/components/CookieConsent'
import JsonLd from '@/components/JsonLd'
import { createMetadata } from '@/lib/seo'
import { organizationSchema, personSchema, websiteSchema } from '@/lib/schema'
import { siteConfig } from '@/lib/site'
import './globals.css'

const neueMontreal = localFont({
  src: [
    {
      path: '../../public/neue-montreal-font-family/neuemontreal-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/neue-montreal-font-family/neuemontreal-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/neue-montreal-font-family/neuemontreal-mediumitalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/neue-montreal-font-family/neuemontreal-bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-neue-montreal',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...createMetadata({
    title: siteConfig.name,
    description: siteConfig.description,
    path: '/',
    keywords: [
      'fractional CTO India',
      'AI product engineering',
      'AI agents development',
      'SaaS product engineering',
      'fintech development company',
    ],
  }),
  applicationName: siteConfig.name,
  category: 'technology',
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0b1020',
  colorScheme: 'light',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={neueMontreal.variable}>
      <body className={neueMontreal.className}>
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <JsonLd data={[organizationSchema, personSchema, websiteSchema]} />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  )
}
