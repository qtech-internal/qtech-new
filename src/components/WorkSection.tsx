'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function WorkSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeTab, setActiveTab] = useState('Web2')
  const router = useRouter()

  const handleViewMore = () => {
    router.push('/how-we-work')
  }

 const web2Projects = [
  {
    title: "SigLab",
    description: "Interactive and modern landing page with smooth animations and responsive design.",
    image: "/siglab.png"
  },
  {
    title: "Xpedition",
    description: "Task and rewards platform with verified workflows, admin dashboards, and real payouts.",
    image: "/xpedition.png"
  },
  {
    title: "Blockseblock",
    description: "Complete hackathon platform with submissions, judging dashboards, and secure payments.",
    image: "/blockseblock.png"
  },
  {
  title: "Heebee Coffee",
  description: "Complete tech revamp for a coffee brand to enable faster order processing, smoother customer experience, and scalable franchise operations.",
  image: "/heebe.png"
},

];

const web3Projects = [
  {
    title: "Olympus",
    description: "Decentralized platform connecting startups with VCs and mentors using smart matching.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop"
  },
  {
    title: "Dfinance",
    description: "DeFi platform enabling lending, borrowing, swaps, and transparent on-chain tracking.",
    image: "/dfinance.png"
  },
  {
    title: "MAHAKA",
    description: "NFT-based ticketing platform with secure minting and ownership verification.",
    image: "/mahaka.png"
  },
  {
    title: "LiftCash",
    description: "Decentralized voting system with transparent governance and token-based rewards.",
    image: "/liftcash.png"
  }
];


  const currentProjects = activeTab === 'Web2' ? web2Projects : web3Projects

  // Handle scroll to update current slide indicator
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const itemWidth = 320 + 24 // card width + gap
      const index = Math.round(scrollLeft / itemWidth)
      setCurrentSlide(index)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  // Reset slide when tab changes
  useEffect(() => {
    setCurrentSlide(0)
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    }
  }, [activeTab])

  const scrollToSlide = (index: number) => {
    const container = scrollContainerRef.current
    if (!container) return
    
    const itemWidth = 320 + 24 // card width + gap
    container.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth'
    })
  }

  return (
    <section className="px-6 py-12 -mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#615FFF] text-sm font-semibold tracking-wider uppercase mb-8 block -mt-8">OUR WORK</span>
        </div>

        {/* Tab buttons and View more */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-8 sm:mb-12">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setActiveTab('Web2')}
              className={`px-8 py-3 rounded-full font-medium text-base transition-all select-none outline-none focus:outline-none ${
                activeTab === 'Web2' 
                  ? 'bg-[#615FFF] text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Web2
            </button>
            <button 
              onClick={() => setActiveTab('Web3')}
              className={`px-8 py-3 rounded-full font-medium text-base transition-all select-none outline-none focus:outline-none ${
                activeTab === 'Web3' 
                  ? 'bg-[#615FFF] text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Web3
            </button>
          </div>

          <button 
            onClick={handleViewMore}
            className="bg-transparent border-2 border-[#615FFF] text-[#615FFF] hover:bg-[#615FFF] hover:text-white transition-all duration-300 font-medium text-base flex items-center gap-2 px-8 py-3 rounded-full"
          >
            <span>View more</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Projects Horizontal Scroll */}
        <div className="overflow-x-auto overflow-y-hidden scrollbar-hide -mx-6 px-6">
          {currentProjects.length > 0 ? (
            <div 
              ref={scrollContainerRef}
              className="flex gap-6 pb-4 min-w-max snap-x snap-mandatory"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {currentProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer flex-shrink-0 w-[320px] snap-center"
                >
                  {/* Project Image */}
                  <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      draggable={false}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="320px"
                      quality={85}
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-medium text-gray-900 mb-3 leading-[24px] tracking-[-0.01em]">{project.title}</h3>
                    <p className="text-gray-600 text-base font-normal leading-[24px] tracking-[0px] font-inter">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-24 h-24 mb-6 text-gray-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No {activeTab} Projects</h3>
              <p className="text-gray-500 max-w-md">
                We don&apos;t have any {activeTab} projects to showcase at the moment. 
                Check back soon or explore the other category.
              </p>
              <button 
                onClick={() => setActiveTab(activeTab === 'Web2' ? 'Web3' : 'Web2')}
                className="mt-6 px-6 py-2 bg-[#615FFF] text-white rounded-full hover:bg-[#615FFF]/90 transition-colors font-medium text-sm"
              >
                View {activeTab === 'Web2' ? 'Web3' : 'Web2'} Projects
              </button>
            </div>
          )}
        </div>

        {/* Slider dots indicator - visible on all screens */}
        <div className="flex justify-center gap-2 mt-2 mb-3 py-4 bg-gray-50 rounded-lg xl:hidden">
          {currentProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`transition-all rounded-full ${
                currentSlide === index 
                  ? 'w-8 h-2 bg-[#615FFF]' 
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}