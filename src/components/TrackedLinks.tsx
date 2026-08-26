'use client'

import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { trackEvent, type AnalyticsEvent } from '@/lib/analytics'
import { siteConfig } from '@/lib/site'

interface TrackedLinkProps extends ComponentProps<typeof Link> {
  eventName: AnalyticsEvent
  eventLabel: string
}

export function TrackedLink({ eventName, eventLabel, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        trackEvent(eventName, { label: eventLabel })
        onClick?.(event)
      }}
    />
  )
}

export function BookingLink({
  className,
  location,
  children,
}: {
  className?: string
  location: string
  children?: ReactNode
}) {
  return (
    <a
      className={className}
      href={siteConfig.calendlyUrl}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackEvent('cta_book_call', { location })}
    >
      {children ?? 'Book a 30-minute discovery call'}
      <ArrowUpRight aria-hidden="true" size={18} />
    </a>
  )
}

export function OutboundLink({
  href,
  className,
  label,
  children,
}: {
  href: string
  className?: string
  label: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackEvent('outbound_link', { label, url: href })}
    >
      {children}
    </a>
  )
}
