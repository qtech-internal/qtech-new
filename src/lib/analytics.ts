export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID
export const CONSENT_STORAGE_KEY = 'quadb-analytics-consent'

export type AnalyticsEvent =
  | 'cta_book_call'
  | 'cta_view_work'
  | 'contact_form_start'
  | 'contact_form_submit'
  | 'service_view'
  | 'case_study_view'
  | 'outbound_link'

export function trackEvent(
  eventName: AnalyticsEvent,
  parameters: Record<string, string | number | boolean> = {},
) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('event', eventName, parameters)
}

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
    turnstile?: {
      reset: () => void
    }
  }
}
