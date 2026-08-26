'use client'

import { useEffect } from 'react'
import { trackEvent, type AnalyticsEvent } from '@/lib/analytics'

export default function PageAnalytics({ eventName, label }: { eventName: AnalyticsEvent; label: string }) {
  useEffect(() => {
    trackEvent(eventName, { label })
  }, [eventName, label])

  return null
}
