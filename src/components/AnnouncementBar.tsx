'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentBar, setCurrentBar] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  // Auto-rotate between bars every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBar((prev) => (prev + 1) % 2)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Hide on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
      
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible || isScrolled) return null

  const bars = [
    {
      gradient: 'from-[#f59e0b] via-[#fb923c] to-[#f59e0b]',
      content: (
        <>
          {/* AI-First Culture */}
          <Link 
            href="/ai" 
            className="flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform group"
          >
            <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-white font-semibold text-xs sm:text-sm whitespace-nowrap">AI-First Culture</span>
          </Link>

          {/* Vertical Divider */}
          <div className="w-px h-5 sm:h-6 bg-white/40"></div>

          {/* Phone */}
          <a 
            href="tel:+917206246045" 
            className="flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform group"
          >
            <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-white font-medium text-xs sm:text-sm whitespace-nowrap">+91-7206246045</span>
          </a>

          {/* Vertical Divider - Hidden on mobile */}
          <div className="hidden sm:block w-px h-5 sm:h-6 bg-white/40"></div>

          {/* Email - Hidden on mobile */}
          <a 
            href="mailto:nishant.chawla@quadbtech.com" 
            className="hidden sm:flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform group"
          >
            <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-white font-medium text-xs sm:text-sm whitespace-nowrap">nishant.chawla@quadbtech.com</span>
          </a>
        </>
      )
    },
    {
      gradient: 'from-[#4f46e5] via-[#6366f1] to-[#4f46e5]',
      content: (
        <>
          {/* Build GCC */}
          <Link 
            href="/partners" 
            className="flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform group"
          >
            <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <span className="text-white font-semibold text-xs sm:text-sm whitespace-nowrap">Build Your GCC</span>
          </Link>

          {/* Vertical Divider */}
          <div className="w-px h-5 sm:h-6 bg-white/40"></div>

          {/* Explore Services */}
          <Link 
            href="/services" 
            className="flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform group"
          >
            <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-white font-medium text-xs sm:text-sm whitespace-nowrap">Explore Services</span>
          </Link>

          {/* Vertical Divider - Hidden on mobile */}
          <div className="hidden sm:block w-px h-5 sm:h-6 bg-white/40"></div>

          {/* Contact Us - Hidden on mobile */}
          <Link 
            href="/contact" 
            className="hidden sm:flex items-center gap-1.5 sm:gap-2 hover:scale-105 transition-transform group"
          >
            <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <span className="text-white font-medium text-xs sm:text-sm whitespace-nowrap">Contact Us</span>
          </Link>
        </>
      )
    }
  ]

  return (
    <div className={`fixed top-[72px] sm:top-[80px] left-0 right-0 z-40 bg-gradient-to-r ${bars[currentBar].gradient} shadow-lg transition-all duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Desktop Layout */}
        <div className="hidden sm:flex items-center justify-center py-2.5 sm:py-3 relative">
          {/* Content - Centered */}
          <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8">
            {bars[currentBar].content}
          </div>

          {/* Close Button - Absolute positioned on right */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-2 sm:right-4 text-white/70 hover:text-white transition-colors p-1.5 hover:bg-white/20 rounded-full"
            aria-label="Close announcement"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Indicator Dots */}
          <div className="absolute left-2 sm:left-4 flex gap-1.5">
            {bars.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBar(index)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  currentBar === index ? 'bg-white w-4' : 'bg-white/50'
                }`}
                aria-label={`Go to announcement ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Layout - 3 Lines */}
        <div className="sm:hidden py-1.5 relative">
          {/* Close Button - Top Right */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-1 right-1 text-white/80 hover:text-white transition-colors p-1 hover:bg-white/20 rounded-full z-10"
            aria-label="Close announcement"
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Indicator Dots - Top Left */}
          <div className="absolute top-1.5 left-1.5 flex gap-1 z-10">
            {bars.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBar(index)}
                className={`w-1 h-1 rounded-full transition-all ${
                  currentBar === index ? 'bg-white w-3' : 'bg-white/60'
                }`}
                aria-label={`Go to announcement ${index + 1}`}
              />
            ))}
          </div>

          {/* Content in 3 Lines */}
          <div className="flex flex-col items-center justify-center gap-1 pt-1">
            {currentBar === 0 ? (
              <>
                {/* Line 1: AI-First Culture */}
                <Link 
                  href="/ai" 
                  className="flex items-center gap-1.5 hover:scale-105 transition-transform group w-full justify-center py-0.5"
                >
                  <div className="bg-white/25 p-1 rounded-full group-hover:bg-white/35 transition-colors">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-xs">AI-First Culture</span>
                </Link>

                {/* Line 2: Phone */}
                <a 
                  href="tel:+18886618967" 
                  className="flex items-center gap-1.5 hover:scale-105 transition-transform group w-full justify-center py-0.5"
                >
                  <div className="bg-white/25 p-1 rounded-full group-hover:bg-white/35 transition-colors">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-white font-medium text-xs">+1-888-661-8967</span>
                </a>

                {/* Line 3: Email */}
                <a 
                  href="mailto:sales@netsmartz.com" 
                  className="flex items-center gap-1.5 hover:scale-105 transition-transform group w-full justify-center py-0.5"
                >
                  <div className="bg-white/25 p-1 rounded-full group-hover:bg-white/35 transition-colors">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-white font-medium text-xs">sales@netsmartz.com</span>
                </a>
              </>
            ) : (
              <>
                {/* Line 1: Build GCC */}
                <Link 
                  href="/partners" 
                  className="flex items-center gap-1.5 hover:scale-105 transition-transform group w-full justify-center py-0.5"
                >
                  <div className="bg-white/25 p-1 rounded-full group-hover:bg-white/35 transition-colors">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-xs">Build Your GCC</span>
                </Link>

                {/* Line 2: Explore Services */}
                <Link 
                  href="/services" 
                  className="flex items-center gap-1.5 hover:scale-105 transition-transform group w-full justify-center py-0.5"
                >
                  <div className="bg-white/25 p-1 rounded-full group-hover:bg-white/35 transition-colors">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-white font-medium text-xs">Explore Services</span>
                </Link>

                {/* Line 3: Contact Us */}
                <Link 
                  href="/contact" 
                  className="flex items-center gap-1.5 hover:scale-105 transition-transform group w-full justify-center py-0.5"
                >
                  <div className="bg-white/25 p-1 rounded-full group-hover:bg-white/35 transition-colors">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <span className="text-white font-medium text-xs">Contact Us</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
