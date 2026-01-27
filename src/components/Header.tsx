'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative  overflow-hidden bg-hero bg-cover bg-center bg-no-repeat">
      {/* Navigation */}
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        <Link href="/" className="text-white text-2xl font-bold">
          QuadB Tech
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-white hover:text-blue-300 transition-colors font-medium">
            Home
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-white transition-colors font-medium">
            Services
          </Link>
          <Link href="/how-we-work" className="text-gray-300 hover:text-white transition-colors font-medium">
            How we work
          </Link>
          <button className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium text-sm">
            Start a Project →
          </button>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-900/95 backdrop-blur-lg border-t border-white/10">
          <div className="flex flex-col space-y-4 px-6 py-6">
            <Link href="/" className="text-white hover:text-blue-300 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/how-we-work" className="text-gray-300 hover:text-white transition-colors">
              How we work
            </Link>
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 w-fit text-sm">
              Start a Project →
            </button>
          </div>
        </div>
      )}
    </header>
  )
}