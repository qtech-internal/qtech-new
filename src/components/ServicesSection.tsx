'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ServicesSection() {
  const services = [
    {
      title: "Mobile App Development",
      description: "Bring your ideas to life with high-performance, user-centric mobile applications designed for iOS, Android, and cross-platform ecosystems. At QuadB Tech, we combine cutting-edge technologies with intuitive design to create apps that engage users, drive growth, and deliver measurable results.",
      image: "/mobileapp.png",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="2"/>
          <line x1="12" y1="18" x2="12" y2="18" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Web App Development", 
      description: "Transform your business with custom web applications built for performance, scalability, and user experience. We create modern, responsive web solutions that drive results.",
      image: "/webapp.jpeg",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2"/>
          <line x1="2" y1="12" x2="22" y2="12" strokeWidth="2"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Blockchain DApp Development",
      description: "Build decentralized applications that leverage blockchain technology for transparency, security, and innovation. Create the future of digital interactions.",
      image: "/blockchain.jpg",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Game Development",
      description: "Create immersive gaming experiences with cutting-edge graphics, engaging gameplay, and cross-platform compatibility. Bring your game ideas to life.",
      image: "/game.png",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M6 11h4M8 9v4M15 10h.01M18 10h.01M6 15h12a4 4 0 004-4V9a4 4 0 00-4-4H6a4 4 0 00-4 4v2a4 4 0 004 4z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "ERP & SAAS Solutions",
      description: "Streamline your business operations with custom ERP systems and Software-as-a-Service solutions. Optimize your workflow and productivity.",
      image: "/erp.png",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Maintenance & Scalability",
      description: "Ensure your applications remain secure, updated, and scalable as your business grows. Keep your systems running smoothly.",
      image: "/maintain.png",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "E-commerce Solutions",
      description: "Build powerful online stores and marketplaces that drive sales and enhance customer experience. Create seamless shopping experiences.",
      image: "/ecommerse.jpeg",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  const [selectedService, setSelectedService] = useState(services[0])
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 -mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#615FFF] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 block">OUR SERVICES</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2  items-start">
          {/* Left side - Card */}
          <div className="flex justify-center lg:justify-start">
            <div className="bg-gradient-to-br from-[#7B68EE] via-[#9370DB] to-[#BA55D3] rounded-[2rem] sm:rounded-[2.5rem] p-0 relative overflow-hidden w-full max-w-[500px] sm:max-w-[420px] h-[300px] sm:h-[500px] lg:h-[800px]">
              <div className="relative h-full flex flex-col">
                {/* Image container */}
                <div className="flex-1 relative">
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    className="object-cover"
                  />
                  {/* Learn more button */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                    <button className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm transition-all border border-white/30 font-medium flex items-center space-x-2">
                      <span>Learn more</span>
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Text content at bottom */}
                <div className="bg-gradient-to-b from-transparent via-purple-900/80 to-purple-900/95 backdrop-blur-sm p-4 sm:p-6 lg:p-20 absolute bottom-0 left-0 right-0">
                  <p className="text-white/90 text-lg sm:text-xl lg:text-3xl leading-relaxed font-semibold text-nowrap lg:-ml-12">
                    {selectedService.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Service list */}
          <div className="space-y-0  lg:-ml-32">
            {services.map((service, index) => (
              <div key={index}>
                <div 
                  className={`transition-colors group cursor-pointer ${
                    index !== services.length - 1 ? 'border-b border-gray-300' : ''
                  } ${selectedService.title === service.title ? 'pb-4 sm:pb-5 lg:pb-6' : ''}`}
                  onClick={() => setSelectedService(service)}
                  onMouseEnter={() => setHoveredService(service.title)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Title and Icon Row */}
                  <div className="flex items-center justify-between py-4 sm:py-5 lg:py-6">
                    <div className={`pr-4 ${selectedService.title === service.title ? 'flex-shrink-0 lg:w-1/3' : 'flex-1'}`}>
                      <h3 className={`text-lg sm:text-xl lg:text-2xl font-medium transition-colors ${
                        selectedService.title === service.title 
                          ? 'text-[#615FFF] font-semibold' 
                          : 'text-black hover:text-[#615FFF]'
                      }`}>
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Show description on right for desktop, icon for non-selected */}
                    {selectedService.title === service.title ? (
                      <div className="hidden lg:flex flex-1 w-2/3 pl-4">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    ) : (
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                        hoveredService === service.title
                          ? 'bg-gray-200' 
                          : 'bg-transparent'
                      }`}>
                        <div className="text-black">
                          {service.icon}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Description below title for mobile */}
                  {selectedService.title === service.title && (
                    <div className="lg:hidden pb-4 px-4">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}