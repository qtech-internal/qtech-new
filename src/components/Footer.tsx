import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#141414] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-8 lg:mb-12">
            {/* Left Section - Company Info */}
            <div className="w-full lg:max-w-md">
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">QuadB Tech</h2>
              <p className="text-white/70 leading-relaxed text-sm sm:text-base">
                QuadB Tech is a boutique innovation studio crafting next-generation digital solutions powered by Blockchain, AI, Web3, and the Metaverse. We partner with visionary startups and forward-thinking enterprises to build secure, scalable, and future-ready products that push the boundaries of what&apos;s possible.
              </p>
            </div>

            {/* Right Section - Navigation & CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 lg:gap-12 w-full lg:w-auto">
              <Link href="/services" className="text-white/70 hover:text-white transition-colors text-sm sm:text-base">
                Services
              </Link>
              <Link href="/how-we-work" className="text-white/70 hover:text-white transition-colors text-sm sm:text-base">
                How we work
              </Link>
              <Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm sm:text-base">
                Contact
              </Link>
              
              <Link 
                href="/contact"
                className="bg-transparent border border-white/30 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-white/10 transition-all text-sm flex items-center space-x-2 w-full sm:w-auto justify-center sm:justify-start"
              >
                <span>Learn more</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Bottom Section - Legal Links */}
          <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 lg:gap-12">
            <Link href="/privacy" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white transition-colors text-xs sm:text-sm">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
