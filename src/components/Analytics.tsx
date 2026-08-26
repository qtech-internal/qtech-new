'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { CONSENT_STORAGE_KEY, GA_TRACKING_ID } from '@/lib/analytics'

export default function Analytics() {
  const pathname = usePathname()
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const syncConsent = () => {
      setEnabled(window.localStorage.getItem(CONSENT_STORAGE_KEY) === 'granted')
    }

    syncConsent()
    window.addEventListener('quadb-consent-changed', syncConsent)
    return () => window.removeEventListener('quadb-consent-changed', syncConsent)
  }, [])

  useEffect(() => {
    if (!enabled || !GA_TRACKING_ID || typeof window.gtag !== 'function') return
    window.gtag('config', GA_TRACKING_ID, {
      page_path: pathname,
      anonymize_ip: true,
    })
  }, [enabled, pathname])

  if (!GA_TRACKING_ID) return null

  return (
    <>
      <Script id="google-consent-default" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('consent', 'default', {
            analytics_storage: 'denied',
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
        `}
      </Script>
      {enabled ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.gtag('consent', 'update', { analytics_storage: 'granted' });
              window.gtag('js', new Date());
              window.gtag('config', '${GA_TRACKING_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}
    </>
  )
}
