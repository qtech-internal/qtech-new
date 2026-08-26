'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { CONSENT_STORAGE_KEY, GA_TRACKING_ID } from '@/lib/analytics'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!GA_TRACKING_ID) return
    const frame = window.requestAnimationFrame(() => {
      setVisible(!window.localStorage.getItem(CONSENT_STORAGE_KEY))
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

  const choose = (value: 'granted' | 'denied') => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, value)
    window.gtag?.('consent', 'update', {
      analytics_storage: value,
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    })
    window.dispatchEvent(new Event('quadb-consent-changed'))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <aside
      className="fixed bottom-4 left-4 right-4 z-[70] mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl sm:flex sm:items-center sm:gap-6"
      aria-label="Analytics preferences"
    >
      <p className="text-sm leading-6 text-slate-600 sm:flex-1">
        We use analytics to understand which work and services are useful. No advertising cookies.
        Read the <Link href="/privacy" className="font-semibold text-slate-950 underline">privacy policy</Link>.
      </p>
      <div className="mt-4 flex gap-3 sm:mt-0">
        <button type="button" className="button button-secondary button-small" onClick={() => choose('denied')}>
          Decline
        </button>
        <button type="button" className="button button-primary button-small" onClick={() => choose('granted')}>
          Accept analytics
        </button>
      </div>
    </aside>
  )
}
