'use client'

import { FormEvent, useRef, useState } from 'react'
import Script from 'next/script'
import { CheckCircle2, LoaderCircle } from 'lucide-react'
import { engagementTypes } from '@/lib/contact'
import { trackEvent } from '@/lib/analytics'
import { BookingLink } from './TrackedLinks'

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [state, setState] = useState<SubmitState>('idle')
  const [message, setMessage] = useState('')
  const started = useRef(false)
  const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  const markStarted = () => {
    if (started.current) return
    started.current = true
    trackEvent('contact_form_start', { location: 'contact_page' })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setState('submitting')
    setMessage('Sending your inquiry…')

    const form = event.currentTarget
    const formData = new FormData(form)
    const params = new URLSearchParams(window.location.search)
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      engagement: formData.get('engagement'),
      timeline: formData.get('timeline'),
      brief: formData.get('brief'),
      consent: formData.get('consent') === 'on',
      website: formData.get('website'),
      turnstileToken: formData.get('cf-turnstile-response') ?? '',
      utmSource: params.get('utm_source') ?? '',
      utmCampaign: params.get('utm_campaign') ?? '',
      landingPage: window.location.href,
      referrer: document.referrer,
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = (await response.json()) as { message?: string }

      if (!response.ok) throw new Error(result.message || 'Unable to send your inquiry.')

      form.reset()
      window.turnstile?.reset()
      setState('success')
      setMessage('Thanks — your inquiry is in Vinayak’s inbox.')
      trackEvent('contact_form_submit', { engagement: String(payload.engagement) })
    } catch (error) {
      setState('error')
      setMessage(error instanceof Error ? error.message : 'Unable to send your inquiry. Please email us directly.')
    }
  }

  return (
    <>
      {turnstileSiteKey ? (
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      ) : null}
      <form className="space-y-5" onSubmit={handleSubmit} onFocus={markStarted} noValidate={false}>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Your name" htmlFor="name" required>
            <input className="form-input" id="name" name="name" type="text" autoComplete="name" minLength={2} maxLength={80} required />
          </Field>
          <Field label="Work email" htmlFor="email" required>
            <input className="form-input" id="email" name="email" type="email" autoComplete="email" maxLength={160} required />
          </Field>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Company or website" htmlFor="company">
            <input className="form-input" id="company" name="company" type="text" autoComplete="organization" maxLength={120} />
          </Field>
          <Field label="What do you need?" htmlFor="engagement" required>
            <select className="form-input" id="engagement" name="engagement" defaultValue="" required>
              <option value="" disabled>Select an engagement</option>
              {engagementTypes.map((type) => <option value={type} key={type}>{type}</option>)}
            </select>
          </Field>
        </div>

        <Field label="Target timeline" htmlFor="timeline">
          <select className="form-input" id="timeline" name="timeline" defaultValue="">
            <option value="">Not decided yet</option>
            <option value="As soon as possible">As soon as possible</option>
            <option value="Within 1–2 months">Within 1–2 months</option>
            <option value="Within 3–6 months">Within 3–6 months</option>
            <option value="Exploring for later">Exploring for later</option>
          </select>
        </Field>

        <Field label="Tell us about the product, decision or bottleneck" htmlFor="brief" required>
          <textarea className="form-input min-h-40 resize-y" id="brief" name="brief" minLength={20} maxLength={3000} required />
        </Field>

        <div className="pointer-events-none absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
          <input className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#6558ff]" type="checkbox" name="consent" required />
          <span>I agree that QuadB Technologies may use these details to respond to this inquiry, as described in the <a href="/privacy" className="font-semibold text-slate-950 underline">privacy policy</a>.</span>
        </label>

        {turnstileSiteKey ? (
          <div
            className="cf-turnstile"
            data-sitekey={turnstileSiteKey}
            data-theme="light"
            data-action="contact"
          />
        ) : null}

        <button className="button button-primary w-full justify-center sm:w-auto" type="submit" disabled={state === 'submitting'}>
          {state === 'submitting' ? <LoaderCircle className="animate-spin" aria-hidden="true" size={18} /> : null}
          {state === 'submitting' ? 'Sending…' : 'Send inquiry'}
        </button>

        <div className="min-h-8" aria-live="polite" aria-atomic="true">
          {message ? (
            <p className={state === 'error' ? 'form-status form-status-error' : 'form-status form-status-success'}>
              {state === 'success' ? <CheckCircle2 aria-hidden="true" size={18} /> : null}
              {message}
            </p>
          ) : null}
        </div>

        {state === 'success' ? (
          <BookingLink className="inline-flex items-center gap-2 font-semibold text-[#5145e5] underline decoration-2 underline-offset-4" location="contact_success">
            Choose a time for a 30-minute call
          </BookingLink>
        ) : null}
      </form>
    </>
  )
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string
  htmlFor: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-900" htmlFor={htmlFor}>
        {label}{required ? <span className="ml-1 text-[#6558ff]" aria-hidden="true">*</span> : null}
      </label>
      {children}
    </div>
  )
}
