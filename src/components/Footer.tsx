export default function Footer() {
  return (
    <footer className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">QuadB Tech</h2>
              <p className="text-gray-300 leading-relaxed max-w-md">
                QuadB Tech is a boutique innovation studio crafting next-generation digital solutions powered by Blockchain, AI, Web3, and the Metaverse. We partner with visionary startups and forward-thinking enterprises to build secure, scalable, and future-ready products that push the boundaries of what's possible.
              </p>
            </div>
            
            <div className="flex items-center justify-end space-x-8">
              <nav className="flex space-x-8">
                <a href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </a>
                <a href="/how-we-work" className="text-gray-300 hover:text-white transition-colors">
                  How we work
                </a>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </nav>
              <button className="bg-transparent border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                Learn more →
              </button>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-8">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms and Conditions
              </a>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 QuadB Tech. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}