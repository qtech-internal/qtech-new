'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ServicesSection() {
  type Service = {
    title: string
    titleLine1?: string
    titleLine2?: string
    description: string
    image: string
    desktopImage: string
    icon: JSX.Element
  }

  const services: Service[] = [
    {
      title: "Mobile App Development",
      titleLine1: "Mobile App",
      titleLine2: "Development",
      description: "Bring your ideas to life with high-performance, user-centric mobile applications designed for iOS, Android, and cross-platform ecosystems. At QuadB Tech, we combine cutting-edge technologies with intuitive design to create apps that engage users, drive growth, and deliver measurable results.",
      image: "/mobileapp.png",
      desktopImage: "/appdesktop.jpg",
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
      desktopImage: "/webappdesktop.jpg",
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
      desktopImage: "/blockchaindesktop.jpg",
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
      desktopImage: "/gamedesktop.jpg",
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
      desktopImage: "/erpdesktop.jpg",
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
      desktopImage: "/maintaindesktop.jpg",
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
      desktopImage: "/ecommersedesktop.jpg",
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
    <section className="px-4 sm:px-6 py-8 sm:py-12 lg:py-16 -mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-[#615FFF] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 block -mt-7">OUR SERVICES</span>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
          {/* Left side - Card */}
          <div className="flex justify-center xl:justify-start mb-8 xl:mb-0">
            <div className="bg-gradient-to-br from-[#7B68EE] via-[#9370DB] to-[#BA55D3] rounded-[2rem] lg:rounded-[2.5rem] p-0 relative overflow-hidden w-full max-w-[500px] xl:max-w-[450px] h-[400px] sm:h-[500px] lg:h-[550px] xl:h-[650px]">
              <div className="relative h-full">
                {/* Image container */}
                <div className="relative h-full">
                  {/* Desktop Image - hidden on mobile */}
                  <Image
                    src={selectedService.desktopImage}
                    alt={selectedService.title}
                    fill
                    draggable={false}
                    className="hidden xl:block object-cover pointer-events-none rounded-[2rem] lg:rounded-[2.5rem]"
                    sizes="450px"
                    quality={85}
                  />
                  {/* Mobile Image - hidden on desktop */}
                  <Image
                    src={selectedService.image}
                    alt={selectedService.title}
                    fill
                    draggable={false}
                    className="xl:hidden object-cover pointer-events-none rounded-[2rem] lg:rounded-[2.5rem]"
                    sizes="(max-width: 1280px) 100vw, 450px"
                    quality={85}
                  />
                  
                  {/* Gradient overlay at bottom - subtle blur effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-[35%] backdrop-blur-xl bg-gradient-to-t from-white/30 via-white/20 to-transparent rounded-b-[2rem] lg:rounded-b-[2.5rem]"></div>
                  
                  {/* Learn more button */}
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
                    <button 
                      className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full text-sm transition-all border border-white/30 font-normal flex items-center space-x-2"
                      aria-label={`Learn more about ${selectedService.title}`}
                    >
                      <span>Learn more</span>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                  
                  {/* Text content at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 xl:p-10 z-10">
                    <p className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl leading-tight font-normal">
                      {selectedService.description.split('.')[0]}.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Service list */}
          <div className="space-y-0  xl:-ml-32">
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
                    <div className="pr-4 flex-shrink-0">
                      {service.titleLine1 && selectedService.title === service.title ? (
                        <h3 className={`text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] font-medium transition-colors leading-tight text-[#615FFF]`}>
                          <span className="block">{service.titleLine1}</span>
                          <span className="block">{service.titleLine2}</span>
                        </h3>
                      ) : (
                        <h3 className={`text-xl sm:text-2xl lg:text-[28px] xl:text-[32px] font-medium transition-colors leading-tight ${
                          selectedService.title === service.title 
                            ? 'text-[#615FFF]' 
                            : 'text-[#141414] hover:text-[#615FFF]'
                        }`}>
                          {service.title}
                        </h3>
                      )}
                    </div>
                    
                    {/* Show description on right for desktop when selected, otherwise show icon */}
                    {selectedService.title === service.title ? (
                      <div className="hidden lg:flex flex-1 pl-8">
                        <p className="text-gray-600 text-base font-normal leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    ) : (
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
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
                  
                  {/* Description below title for mobile only when selected */}
                  {selectedService.title === service.title && (
                    <div className="lg:hidden pb-4 px-2">
                      <p className="text-gray-600 text-sm sm:text-base font-normal leading-relaxed">
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