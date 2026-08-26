import { describe, expect, it } from 'vitest'
import { caseStudies, getCaseStudy, getService, services } from './content'

describe('public content model', () => {
  it('defines every planned service route', () => {
    expect(services.map((service) => service.slug)).toEqual([
      'fractional-cto',
      'ai-product-engineering',
      'product-engineering',
    ])
  })

  it('defines the four approved case studies', () => {
    expect(caseStudies.map((caseStudy) => caseStudy.slug)).toEqual([
      'geniuscfo-ai',
      'covenant',
      'blockseblock',
      'heebee',
    ])
  })

  it('keeps verified outcomes scoped to their case studies', () => {
    expect(getCaseStudy('heebee')?.outcomes[0].value).toBe('15 min → 30 sec')
    expect(getCaseStudy('blockseblock')?.outcomes[0].value).toBe('100,000+')
  })

  it('provides visible answer-first content for every service', () => {
    expect(services.every((service) => service.faqs.length >= 3)).toBe(true)
    expect(services.flatMap((service) => service.faqs).every((item) => item.question.endsWith('?') && item.answer.length > 60)).toBe(true)
  })

  it('provides primary image metadata for every shareable case study', () => {
    expect(caseStudies.every((caseStudy) => caseStudy.imageWidth > 0 && caseStudy.imageHeight > 0 && caseStudy.imageType.startsWith('image/'))).toBe(true)
  })

  it('returns undefined for unknown routes', () => {
    expect(getService('unknown')).toBeUndefined()
    expect(getCaseStudy('unknown')).toBeUndefined()
  })
})
