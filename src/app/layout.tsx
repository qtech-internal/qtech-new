import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import Script from 'next/script'
import { generateSEO } from '@/lib/seo'
import { organizationSchema } from '@/lib/schema'
import './globals.css'

const neueMontreal = localFont({
  src: [
    {
      path: '../../public/neue-montreal-font-family/neuemontreal-light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/neue-montreal-font-family/neuemontreal-lightitalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/neue-montreal-font-family/neuemontreal-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/neue-montreal-font-family/neuemontreal-italic.otf',
      weight: '400',
      style: 'italic',
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
    {
      path: '../../public/neue-montreal-font-family/neuemontreal-bolditalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-neue-montreal',
  display: 'swap',
})

export const metadata: Metadata = generateSEO({
  title: 'QuadB Tech - Next-Generation Digital Solutions',
  description: 'QuadB Tech is a boutique innovation studio crafting next-generation digital solutions powered by Blockchain, AI, Web3, and the Metaverse. Expert Web3 DApp development, smart contracts, mobile apps, and cloud solutions.',
  keywords: ['Blockchain DApp Development', 'Web3', 'Smart Contracts', 'Mobile App Development', 'Web Development', 'Cloud Solutions', 'AI Solutions', 'Metaverse Development'],
  url: 'https://qtech-new.vercel.app',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={neueMontreal.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${neueMontreal.className} antialiased`}>
        {children}
        
      </body>
    </html>
  )
}