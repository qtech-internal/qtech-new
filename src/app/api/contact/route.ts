import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'
import { Resend } from 'resend'
import {
  contactSchema,
  formatLeadMessage,
  getClientIp,
  isHoneypotSubmission,
} from '@/lib/contact'
import { siteConfig } from '@/lib/site'

export const runtime = 'nodejs'

const isProduction = process.env.NODE_ENV === 'production'

function json(body: Record<string, unknown>, status: number) {
  return Response.json(body, {
    status,
    headers: { 'Cache-Control': 'no-store' },
  })
}

async function checkRateLimit(identifier: string) {
  const url = process.env.UPSTASH_REDIS_REST_URL
  const token = process.env.UPSTASH_REDIS_REST_TOKEN

  if (!url || !token) {
    return isProduction ? { success: false, misconfigured: true } : { success: true }
  }

  const ratelimit = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(5, '10 m'),
    analytics: true,
    prefix: 'quadb:contact',
  })
  return ratelimit.limit(identifier)
}

async function verifyTurnstile(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY
  if (!secret) return !isProduction
  if (!token) return false

  const body = new URLSearchParams({ secret, response: token })
  if (ip !== 'unknown') body.set('remoteip', ip)

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
    cache: 'no-store',
  })
  if (!response.ok) return false
  const result = (await response.json()) as { success?: boolean; action?: string }
  return result.success === true && (!result.action || result.action === 'contact')
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return json({ message: 'Invalid request body.' }, 400)
  }

  if (isHoneypotSubmission(body)) {
    return json({ message: 'Inquiry received.' }, 200)
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return json(
      {
        message: parsed.error.issues[0]?.message || 'Please check the form and try again.',
        issues: parsed.error.flatten().fieldErrors,
      },
      400,
    )
  }

  const ip = getClientIp(request.headers)
  try {
    const limit = await checkRateLimit(ip)
    if ('misconfigured' in limit && limit.misconfigured) {
      return json({ message: 'The inquiry form is temporarily unavailable. Please email us directly.' }, 503)
    }
    if (!limit.success) {
      return json({ message: 'Too many inquiries from this connection. Please try again later.' }, 429)
    }
  } catch {
    return json({ message: 'The inquiry form is temporarily unavailable. Please email us directly.' }, 503)
  }

  try {
    const turnstileValid = await verifyTurnstile(parsed.data.turnstileToken, ip)
    if (!turnstileValid) return json({ message: 'Please complete the spam-protection check.' }, 400)
  } catch {
    return json({ message: 'Spam protection could not be verified. Please try again.' }, 502)
  }

  const resendApiKey = process.env.RESEND_API_KEY
  if (!resendApiKey) {
    return json({ message: 'The inquiry form is temporarily unavailable. Please email us directly.' }, 503)
  }

  const resend = new Resend(resendApiKey)
  try {
    const result = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || 'QuadB Website <website@quadbtechnologies.com>',
      to: process.env.CONTACT_TO_EMAIL || siteConfig.email,
      replyTo: parsed.data.email,
      subject: `New ${parsed.data.engagement} inquiry from ${parsed.data.name}`,
      text: formatLeadMessage(parsed.data),
    })

    if (!result.error) return json({ message: 'Inquiry received.' }, 201)
  } catch {
    // Return the same user-safe response for provider errors and network failures.
  }

  return json({ message: 'The inquiry could not be delivered. Please email us directly.' }, 502)
}
