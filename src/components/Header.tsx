'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className="relative overflow-hidden bg-hero bg-cover bg-center bg-no-repeat">
      {/* Navigation */}
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-6 relative z-50">
        <Link href="/" className="text-white text-2xl font-bold">
          QuadB Tech
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className={`transition-colors font-medium px-4 py-2 rounded-full ${
              pathname === '/' 
                ? 'text-white bg-[#141415]' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className={`transition-colors font-medium px-4 py-2 rounded-full ${
              pathname === '/services' 
                ? 'text-white bg-[#141415]' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            Services
          </Link>
          <Link 
            href="/profile" 
            className={`transition-colors font-medium px-4 py-2 rounded-full ${
              pathname === '/profile' 
                ? 'text-white bg-[#141415]' 
                : 'text-gray-300 hover:text-white'
            }`}
          >
            How we work
          </Link>
          <Link href="/contact" className="bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold text-sm">
            Start a Project
            <Image src="/arrow.png" alt="arrow" width={16} height={16} className="inline-block ml-2" />
          </Link>
        </div>

        <button 
          className="md:hidden text-white z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-hero bg-cover bg-center bg-no-repeat transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Optional: Add a semi-transparent overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        
        <div className="flex flex-col h-full relative z-10">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20">
            <Link href="/" className="text-white text-xl font-bold">
              QuadB Tech
            </Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-gray-300 transition-colors p-1"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col flex-1 px-6 py-8 space-y-4">
            <Link 
              href="/" 
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                pathname === '/' 
                  ? 'text-white bg-white/20 shadow-lg backdrop-blur-sm' 
                  : 'text-gray-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            
            <Link 
              href="/services" 
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                pathname === '/services' 
                  ? 'text-white bg-white/20 shadow-lg backdrop-blur-sm' 
                  : 'text-gray-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Services
            </Link>
            
            <Link 
              href="/profile" 
              className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 ${
                pathname === '/profile' 
                  ? 'text-white bg-white/20 shadow-lg backdrop-blur-sm' 
                  : 'text-gray-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              How we work
            </Link>

            {/* Divider */}
            <div className="border-t border-white/20 my-4"></div>

            {/* Additional Links */}
            <Link 
              href="/privacy" 
              className="flex items-center px-4 py-3 rounded-xl text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Privacy Policy
            </Link>

            <Link 
              href="/terms" 
              className="flex items-center px-4 py-3 rounded-xl text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Terms & Conditions
            </Link>
          </div>

          {/* CTA Button */}
          <div className="p-6 border-t border-white/20">
            <Link 
              href="/contact" 
              className="flex items-center justify-center w-full bg-gradient-to-r from-white to-gray-100 text-blue-900 px-6 py-3 rounded-xl hover:from-gray-100 hover:to-white transition-all duration-300 font-semibold shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}