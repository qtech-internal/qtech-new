export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#141414] backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 ">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Section - Company Info */}
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">QuadB Tech</h2>
              <p className="text-white opacity-80 leading-relaxed text-sm sm:text-base max-w-md mx-auto lg:mx-0">
                QuadB Tech is a boutique innovation studio crafting next-generation digital solutions powered by Blockchain, AI, Web3, and the Metaverse. We partner with visionary startups and forward-thinking enterprises to build secure, scalable, and future-ready products that push the boundaries of what's possible.
              </p>
            </div>
            
            {/* Right Section - Navigation & CTA */}
            <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-end space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Navigation */}
              <nav className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8">
                <a href="/services" className="text-white opacity-80 hover:text-white transition-colors text-sm sm:text-base">
                  Services
                </a>
                <a href="/profile" className="text-white opacity-80 hover:text-white transition-colors text-sm sm:text-base">
                  How we work
                </a>
                <a href="/contact" className="text-white opacity-80 hover:text-white transition-colors text-sm sm:text-base">
                  Contact
                </a>
              </nav>
              
              {/* CTA Button */}
              <button className="bg-transparent border border-white text-white px-4 sm:px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base">
                Learn more →
              </button>
            </div>
          </div>
          
          {/* Bottom Section - Legal Links */}
          <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-8">
            <a href="/privacy" className="text-white opacity-64 hover:text-white transition-colors text-xs sm:text-sm">
              Privacy Policy
            </a>
            <a href="/terms" className="text-white opacity-64 hover:text-white transition-colors text-xs sm:text-sm">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}