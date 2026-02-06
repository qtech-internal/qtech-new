import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero bg-cover bg-center bg-no-repeat pb-6 sm:pb-10">
      {/* Globe positioned to start below "PEOPLE LOVE" text */}
      <div className="absolute inset-0 flex items-center justify-center top-[60%] sm:top-[75%] -mt-6 sm:-mt-12 ml-6 sm:ml-12">
        <img
          src="/globe.gif"
          alt="Globe"
          className="w-[800px] h-[800px] sm:w-[800px] sm:h-[800px] lg:w-[1100px] lg:h-[1100px] object-contain globe-filter-natural opacity-40"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10 pb-6 sm:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center min-h-[50vh] sm:min-h-[60vh]">
          {/* Left Content */}
          <div className="lg:col-span-5 text-center lg:text-left lg:mt-0 mt-20">
            <h1 className="font-pp-neue font-medium text-3xl sm:text-4xl md:text-5xl lg:text-hero leading-tight tracking-tight-1 uppercase text-white mb-6 sm:mb-8">
               <span className="block lg:whitespace-nowrap">BUILD YOUR VISION</span>
              <span className="block lg:whitespace-nowrap">INTO A PRODUCT</span>
              <span className="block lg:whitespace-nowrap">PEOPLE LOVE</span>
            
            </h1>

            <p className="text-gray-200 text-base sm:text-lg lg:text-[16px] max-w-lg mx-auto lg:mx-0 mb-8 sm:mb-12 leading-relaxed">
              <span className="block">From concept to launch — <b>design, development</b>,</span>
              <span className="block"><b>AI, marketing</b> and support all under one roof.</span>
            </p>

            <Link href="/services">
              <button className="group bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 font-medium text-sm sm:text-base cursor-pointer">
                Learn more 
                  <Image src="/arrow.png" alt="arrow" width={16} height={16} className="inline-block ml-2 filter invert brightness-150 group-hover:invert-0 group-hover:brightness-100 transition-all duration-300" />
              </button>
            </Link>
          </div>

          {/* Right Stats */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end mt-8 lg:mt-0 lg:ml-auto lg:mr-[-2rem]">
            <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 lg:space-x-16 text-center sm:text-left">
              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-2 lg:mt-48">10+</div>
                <div className="text-white text-lg sm:text-xl font-medium mb-1">years of experience</div>
                <div className="text-white opacity-80 text-sm">
                  across Blockchain, AI,<br />
                  Web3, and Mobile Develop<br />
                  ment
                </div>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-2 lg:mt-48">200+</div>
                <div className="text-white text-lg sm:text-xl font-medium mb-1">projects delivered</div>
                <div className="text-white opacity-80 text-sm">
                  across Blockchain, AI,<br />
                  Web3, and Mobile Development
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company logos section */}
        <div className="mt-8 sm:mt-16 pt-4 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="text-white text-base sm:text-lg text-center sm:text-left">
              <div className="font-medium opacity-80">We help many</div>
              <div className="font-semibold flex items-center justify-center sm:justify-start">
                Companies 
                <img src="/chevron.png" alt="Arrow" className="h-5 w-5 sm:h-6 sm:w-6 ml-1 mt-0.5" />
              </div>
            </div>
           
            <div className="overflow-hidden flex-1 w-full">
              <div className="flex items-center gap-6 sm:gap-8 opacity-70 animate-scroll whitespace-nowrap">
                <img src="/Niscala.png" alt="Niscala.io" className="h-4 sm:h-5 lg:h-6 w-auto object-contain" />
                <img src="/Samtiv.png" alt="SAMTIV" className="h-4 sm:h-5 lg:h-6 w-auto object-contain" />
                <img src="/lea.png" alt="IEA" className="h-4 sm:h-5 lg:h-6 w-auto object-contain" />
                <img src="/Slavica.png" alt="SLAVA" className="h-4 sm:h-5 lg:h-6 w-auto object-contain" />
                <img src="/Unica.png" alt="UNICA" className="h-4 sm:h-5 lg:h-6 w-auto object-contain" />
                <img src="/Vector.png" alt="BOXING" className="h-4 sm:h-5 lg:h-6 w-auto object-contain" />
                <img src="/Niscala.png" alt="Niscala.io" className="h-4 sm:h-5 lg:h-6 w-auto object-contain" />
                <img src="/Samtiv.png" alt="SAMTIV" className="h-4 sm:h-5 lg:h-6 w-auto object-contain" />
                <img src="/lea.png" alt="IEA" className="h-4 sm:h-5 lg:h-6 w-auto object-contain" />
                <img src="/Slavica.png" alt="SLAVA" className="h-4 sm:h-5 lg:h-6 w-auto object-contain" />
                <img src="/Unica.png" alt="UNICA" className="h-4 sm:h-5 lg:h-6 w-auto object-contain" />
                <img src="/Vector.png" alt="BOXING" className="h-4 sm:h-5 lg:h-6 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}