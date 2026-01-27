export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero bg-cover bg-center bg-no-repeat">
      {/* Globe positioned in center behind everything */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/globe.png" 
          alt="Globe" 
          className="w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] object-contain opacity-50"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-40">
        <div className="grid grid-cols-12 gap-8 items-center min-h-[60vh]">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-5">
  <h1 className="font-pp-neue font-medium text-hero leading-tight-hero tracking-tight-1 uppercase text-white mb-8">
    <span className="block whitespace-nowrap">BUILD YOUR VISION</span>
    <span className="block whitespace-nowrap">INTO A PRODUCT</span>
    <span className="block whitespace-nowrap">PEOPLE LOVE</span>
  </h1>
  
  <p className="text-gray-200 text-lg lg:text-xl max-w-lg mb-12 leading-relaxed">
    From concept to launch — design, development, AI, marketing and support all under one roof.
  </p>
  
  <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 font-medium">
    Learn more →
  </button>
</div>
          
          {/* Right Stats */}
          <div className="col-span-12 lg:col-span-7 flex justify-end">
            <div className="flex space-x-16">
              <div className="text-right">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">10+</div>
                <div className="text-gray-200 text-lg font-medium mb-1">years of experience</div>
                <div className="text-gray-400 text-sm">
                  Delivering Innovation &<br />
                  Scalable Solutions Globally
                </div>
              </div>
              
              <div className="text-right">
                <div className="text-6xl lg:text-7xl font-bold text-white mb-2">200+</div>
                <div className="text-gray-200 text-lg font-medium mb-1">projects delivered</div>
                <div className="text-gray-400 text-sm">
                  across Blockchain, AI, Web3,<br />
                  and Mobile Development
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Company logos section */}
        <div className="mt-16 pt-8 ">
          <p className="text-white opacity-80 text-sm mb-6">We help many Companies →</p>
          <div className="flex flex-wrap items-center gap-12 opacity-70">
            <div className="text-white font-semibold text-xl">Niscalo.io</div>
            <div className="text-white font-semibold text-xl">SAMTIV</div>
            <div className="text-white font-semibold text-xl flex items-center">
              <span className="mr-2">✱</span>IEA.
            </div>
            <div className="text-white font-semibold text-xl">SLAVA</div>
            <div className="text-white font-semibold text-xl flex items-center">
              <span className="mr-2">◆</span>UNICA
            </div>
            <div className="text-white font-semibold text-xl flex items-center">
              <span className="mr-2">||</span>BOXING
            </div>
            <div className="text-white font-semibold text-xl">Niscalo.io</div>
            <div className="text-white font-semibold text-xl">||</div>
          </div>
        </div>
      </div>
    </section>
  )
}