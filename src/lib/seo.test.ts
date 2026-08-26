import { describe, expect, it } from 'vitest'
import { createMetadata } from './seo'

describe('createMetadata', () => {
  it('creates a unique canonical URL on the production domain', () => {
    const metadata = createMetadata({
      title: 'AI Product Engineering',
      description: 'Production AI systems.',
      path: '/services/ai-product-engineering',
    })
    expect(metadata.alternates?.canonical).toBe('https://quadbtechnologies.com/services/ai-product-engineering')
    expect(metadata.openGraph?.url).toBe('https://quadbtechnologies.com/services/ai-product-engineering')
  })

  it('uses the finished social preview asset', () => {
    const metadata = createMetadata({ title: 'Work', description: 'Selected work.', path: '/work' })
    expect(metadata.twitter?.images).toEqual([
      expect.objectContaining({
        url: 'https://quadbtechnologies.com/og.png',
        width: 1200,
        height: 630,
      }),
    ])
  })

  it('supports route-specific social previews', () => {
    const metadata = createMetadata({
      title: 'BlockseBlock Case Study',
      description: 'A connected builder ecosystem.',
      path: '/work/blockseblock',
      type: 'article',
      image: {
        url: '/work/blockseblock-platform.webp',
        width: 1200,
        height: 630,
        alt: 'BlockseBlock builder ecosystem',
        type: 'image/webp',
      },
    })
    expect(metadata.openGraph?.images).toEqual([
      expect.objectContaining({
        url: 'https://quadbtechnologies.com/work/blockseblock-platform.webp',
        alt: 'BlockseBlock builder ecosystem',
      }),
    ])
  })

  it('can explicitly clear inherited social images for a detail without media', () => {
    const metadata = createMetadata({
      title: 'Fractional CTO',
      description: 'Senior technical direction.',
      path: '/services/fractional-cto',
      image: null,
    })
    expect(metadata.openGraph?.images).toEqual([])
    expect(metadata.twitter?.images).toEqual([])
  })
})
