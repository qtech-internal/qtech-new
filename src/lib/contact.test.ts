import { describe, expect, it } from 'vitest'
import {
  contactSchema,
  formatLeadMessage,
  getClientIp,
  isHoneypotSubmission,
} from './contact'

const validLead = {
  name: 'Asha Mehta',
  email: 'asha@example.com',
  company: 'Example Labs',
  engagement: 'AI product engineering' as const,
  timeline: 'Within 1–2 months',
  brief: 'We need to productionize an internal AI operations workflow.',
  consent: true as const,
  website: '',
  turnstileToken: 'test-token',
  utmSource: 'linkedin',
  utmCampaign: 'founder-post',
  landingPage: 'https://quadbtechnologies.com/contact',
  referrer: 'https://www.linkedin.com/',
}

describe('contactSchema', () => {
  it('accepts a complete inquiry', () => {
    expect(contactSchema.safeParse(validLead).success).toBe(true)
  })

  it('rejects an invalid email, short brief and missing consent', () => {
    const result = contactSchema.safeParse({ ...validLead, email: 'nope', brief: 'short', consent: false })
    expect(result.success).toBe(false)
  })

  it('detects honeypot submissions', () => {
    expect(isHoneypotSubmission({ website: 'https://spam.test' })).toBe(true)
    expect(isHoneypotSubmission({ website: '' })).toBe(false)
  })

  it('uses the first forwarded IP address', () => {
    expect(getClientIp(new Headers({ 'x-forwarded-for': '203.0.113.9, 10.0.0.1' }))).toBe('203.0.113.9')
  })

  it('formats attribution and reply information in the lead message', () => {
    const message = formatLeadMessage(contactSchema.parse(validLead))
    expect(message).toContain('Asha Mehta')
    expect(message).toContain('UTM source: linkedin')
    expect(message).toContain('AI product engineering')
  })
})
