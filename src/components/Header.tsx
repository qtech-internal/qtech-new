'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { BookingLink } from './TrackedLinks'
import { navigation } from '@/lib/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!open) return
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstLinkRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
      if (event.key === 'Tab') {
        const menu = document.getElementById('mobile-navigation')
        const focusable = menu?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        )
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <header className="site-header">
      <nav className="site-container flex h-20 items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="logo" aria-label="QuadB Technologies home">
          <span className="logo-mark" aria-hidden="true">QB</span>
          <span>QuadB Technologies</span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className="nav-link" aria-current={active ? 'page' : undefined}>
                {item.label}
              </Link>
            )
          })}
          <BookingLink className="button button-primary ml-3" location="header" />
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="icon-button lg:hidden"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="mobile-menu-backdrop lg:hidden" onMouseDown={() => setOpen(false)}>
          <div
            id="mobile-navigation"
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-200 pb-6">
              <span className="font-semibold text-slate-950">Navigate</span>
              <button className="icon-button" type="button" aria-label="Close navigation" onClick={() => setOpen(false)}>
                <X aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-1 flex-col gap-2 py-8">
              <Link ref={firstLinkRef} href="/" className="mobile-nav-link" onClick={() => setOpen(false)}>Home</Link>
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="mobile-nav-link" onClick={() => setOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
            <BookingLink className="button button-primary w-full justify-center" location="mobile_header" />
          </div>
        </div>
      ) : null}
    </header>
  )
}
