// @vitest-environment jsdom

import { beforeEach, describe, expect, it, vi } from 'vitest'
import { trackEvent } from './analytics'

describe('trackEvent', () => {
  beforeEach(() => {
    window.gtag = vi.fn()
  })

  it('forwards conversion events and properties to GA4', () => {
    trackEvent('cta_book_call', { location: 'hero' })
    expect(window.gtag).toHaveBeenCalledWith('event', 'cta_book_call', { location: 'hero' })
  })
})
