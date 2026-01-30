'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="relative  overflow-hidden bg-hero bg-cover bg-center bg-no-repeat">
      {/* Navigation */}
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-6 py-6">
        <Link href="/" className="text-white text-2xl font-bold">
          QuadB Tech
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            href="/" 
            className={`transition-colors font-medium  px-4 py-2 rounded-full ${
              pathname === '/' 
                ? 'text-white bg-[#141415]' 
                : 'text-gray-300 hover:text-white '
            }`}
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className={`transition-colors font-medium  px-4 py-2 rounded-full ${
              pathname === '/services' 
                ? 'text-white bg-[#141415] ' 
                : 'text-gray-300 hover:text-white '
            }`}
          >
            Services
          </Link>
          <Link 
            href="/profile" 
            className={`transition-colors font-medium   px-4 py-2 rounded-full ${
              pathname === '/profile' 
                ? 'text-white bg-[#141415]' 
                : 'text-gray-300 hover:text-white '
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
            <Link 
              href="/" 
              className={`transition-colors ${
                pathname === '/' 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`transition-colors ${
                pathname === '/services' 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Services
            </Link>
            <Link 
              href="/profile" 
              className={`transition-colors ${
                pathname === '/profile' 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              How we work
            </Link>
            <Link href="/contact" className="bg-white text-gray-900 px-6 py-2 rounded-full hover:bg-gray-100 transition-all duration-300 w-fit text-sm">
              Start a Project
              <Image src="/arrow.png" alt="arrow" width={16} height={16} className="inline-block ml-2" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}