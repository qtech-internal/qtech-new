// @vitest-environment node

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const resendMock = vi.hoisted(() => ({ send: vi.fn() }))

vi.mock('resend', () => ({
  Resend: class {
    emails = { send: resendMock.send }
  },
}))

import { POST } from './route'

const validLead = {
  name: 'Asha Mehta',
  email: 'asha@example.com',
  company: 'Acme Labs',
  engagement: 'AI product engineering',
  timeline: 'Within 1–2 months',
  brief: 'We need to turn a manual workflow into a dependable AI-assisted product.',
  consent: true,
}

function request(body: unknown) {
  return new Request('http://localhost/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-forwarded-for': '203.0.113.4' },
    body: JSON.stringify(body),
  })
}

describe('POST /api/contact', () => {
  beforeEach(() => {
    process.env.RESEND_API_KEY = 'test-key'
    delete process.env.TURNSTILE_SECRET_KEY
    delete process.env.UPSTASH_REDIS_REST_URL
    delete process.env.UPSTASH_REDIS_REST_TOKEN
    resendMock.send.mockReset()
  })

  afterEach(() => {
    delete process.env.RESEND_API_KEY
  })

  it('rejects invalid submissions before delivery', async () => {
    const response = await POST(request({}))
    expect(response.status).toBe(400)
    expect(resendMock.send).not.toHaveBeenCalled()
  })

  it('quietly accepts honeypot submissions without delivery', async () => {
    const response = await POST(request({ ...validLead, website: 'spam.example' }))
    expect(response.status).toBe(200)
    expect(resendMock.send).not.toHaveBeenCalled()
  })

  it('delivers valid inquiries with the lead as Reply-To', async () => {
    resendMock.send.mockResolvedValue({ data: { id: 'email-id' }, error: null })
    const response = await POST(request(validLead))
    expect(response.status).toBe(201)
    expect(resendMock.send).toHaveBeenCalledWith(expect.objectContaining({
      replyTo: 'asha@example.com',
      to: 'vinayak.kalra@quadbtech.com',
    }))
  })

  it('returns a safe error when Resend rejects the message', async () => {
    resendMock.send.mockRejectedValue(new Error('provider unavailable'))
    const response = await POST(request(validLead))
    expect(response.status).toBe(502)
    await expect(response.json()).resolves.toEqual({
      message: 'The inquiry could not be delivered. Please email us directly.',
    })
  })
})
