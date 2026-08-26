import { z } from 'zod'

export const engagementTypes = [
  'Fractional CTO',
  'AI product engineering',
  'Product engineering',
  'Something else',
] as const

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.').max(80),
  email: z.string().trim().email('Please enter a valid work email.').max(160),
  company: z.string().trim().max(120).optional().default(''),
  engagement: z.enum(engagementTypes),
  timeline: z.string().trim().max(80).optional().default(''),
  brief: z.string().trim().min(20, 'Please share at least a few sentences.').max(3000),
  consent: z.literal(true),
  website: z.string().max(200).optional().default(''),
  turnstileToken: z.string().max(2048).optional().default(''),
  utmSource: z.string().max(200).optional().default(''),
  utmCampaign: z.string().max(200).optional().default(''),
  landingPage: z.string().max(500).optional().default(''),
  referrer: z.string().max(500).optional().default(''),
})

export type ContactPayload = z.infer<typeof contactSchema>

export function isHoneypotSubmission(value: unknown) {
  if (!value || typeof value !== 'object') return false
  const website = (value as Record<string, unknown>).website
  return typeof website === 'string' && website.trim().length > 0
}

export function getClientIp(headers: Headers) {
  return (
    headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headers.get('x-real-ip') ||
    'unknown'
  )
}

export function formatLeadMessage(data: ContactPayload) {
  const lines = [
    `New QuadB website inquiry`,
    '',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company || 'Not provided'}`,
    `Engagement: ${data.engagement}`,
    `Timeline: ${data.timeline || 'Not provided'}`,
    '',
    'Project brief:',
    data.brief,
    '',
    'Attribution:',
    `UTM source: ${data.utmSource || 'Not provided'}`,
    `UTM campaign: ${data.utmCampaign || 'Not provided'}`,
    `Landing page: ${data.landingPage || 'Not provided'}`,
    `Referrer: ${data.referrer || 'Not provided'}`,
  ]

  return lines.join('\n')
}
