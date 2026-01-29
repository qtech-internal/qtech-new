'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Smartphone, Globe, Blocks, Gamepad2, Settings, ShoppingCart, TrendingUp } from 'lucide-react'

interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  detailedDescription: string
  icon: any
  detailIcon: string
  image: string
  features: string[]
}

const services: Service[] = [
  {
    id: 'mobile-app',
    title: 'Mobile App',
    subtitle: 'Development',
    description: 'Bring your ideas to life with high-performance, user-centric mobile applications designed for iOS, Android, and cross-platform ecosystems. At QuadB Tech, we combine cutting-edge technologies with intuitive design to create apps that engage users, drive growth, and deliver measurable results.',
    detailedDescription: 'Bring your ideas to life with high-performance, user-centric mobile applications designed for iOS, Android, and cross-platform ecosystems. At QuadB Tech, we combine cutting-edge technologies with intuitive design to create apps that engage users, drive growth, and deliver measurable results.',
    icon: Smartphone,
    detailIcon: '/mobileapp.png',
    image: '/mobileapp.png',
    features: [
      'Native iOS & Android Development',
      'Cross-platform Solutions',
      'UI/UX Design Excellence',
      'Performance Optimization',
      'App Store Deployment'
    ]
  },
  {
    id: 'web-app',
    title: 'Web App',
    subtitle: 'Development',
    description: 'Transform your ideas to robust, scalable, and high-performing web applications with QuadB Tech. We create modern technologies, intuitive design, and secure architecture to build web apps that are fast, secure, and user-friendly.',
    detailedDescription: 'Transform your ideas into robust, scalable web applications that drive results. At QuadB Tech, we build modern web solutions with engaging design to build web applications that are fast, secure, and user-friendly.',
    icon: Globe,
    detailIcon: '/webapp.jpeg',
    image: '/webapp.jpeg',
    features: [
      'Responsive Web Design',
      'Progressive Web Apps',
      'Full-stack Development',
      'API Integration',
      'Cloud Deployment'
    ]
  },
  {
    id: 'blockchain',
    title: 'Blockchain DApp',
    subtitle: 'Development',
    description: 'Unlock the power of decentralized technology with secure, scalable, and high-performance blockchain solutions. QuadB Tech specializes in crafting smart contracts, DApps, and blockchain infrastructure to innovate, build transparent, and future-ready decentralized systems.',
    detailedDescription: 'Unlock the power of decentralized applications with our comprehensive blockchain solutions. We leverage blockchain to eliminate intermediaries, enhance security, and create transparent, trustless systems.',
    icon: Blocks,
    detailIcon: '/blockchain.jpg',
    image: '/blockchain.jpg',
    features: [
      'Smart Contract Development',
      'DeFi Solutions',
      'NFT Marketplaces',
      'Web3 Integration',
      'Blockchain Consulting'
    ]
  },
  {
    id: 'game',
    title: 'Game',
    subtitle: 'Development',
    description: 'Bring your gaming vision to life with immersive, engaging games for mobile, web, and desktop platforms. At QuadB Tech, we combine innovative technology, stunning design, and captivating gameplay experiences that captivate players across platforms.',
    detailedDescription: 'Bring your gaming vision to life with immersive, engaging games for mobile, web, and desktop platforms. Our expert team creates captivating gameplay experiences that keep players engaged.',
    icon: Gamepad2,
    detailIcon: '/game.png',
    image: '/game.png',
    features: [
      '2D & 3D Game Development',
      'Unity & Unreal Engine',
      'Mobile Gaming',
      'Multiplayer Solutions',
      'Game Analytics'
    ]
  },
  {
    id: 'erp-saas',
    title: 'ERP & SAAS',
    subtitle: 'Solutions',
    description: 'Streamline your business operations with custom ERP and cloud-based SaaS solutions designed to streamline processes, improve efficiency, and drive growth. At QuadB Tech, we craft scalable, robust, and user-friendly software that adapts to your unique business needs.',
    detailedDescription: 'Streamline your business operations with custom ERP and cloud-based platforms designed for scalability. At QuadB Tech, we build scalable, robust, and user-friendly solutions that meet your unique business needs.',
    icon: Settings,
    detailIcon: '/erp.png',
    image: '/erp.png',
    features: [
      'Custom ERP Development',
      'SaaS Platform Creation',
      'Business Process Automation',
      'Cloud Integration',
      'Data Analytics'
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance &',
    subtitle: 'Scalability',
    description: 'Ensure your digital products remain robust, secure, and scalable with our ongoing maintenance and scalability services. At QuadB Tech, we keep your systems performing optimally, planning for and business growth.',
    detailedDescription: 'Ensure your digital products remain robust, secure, and scalable with our comprehensive maintenance services. We keep your systems performing optimally while planning for future growth.',
    icon: TrendingUp,
    detailIcon: '/maintain.png',
    image: '/maintain.png',
    features: [
      'Performance Monitoring',
      'Security Updates',
      'Scalability Planning',
      'Bug Fixes & Improvements',
      '24/7 Support'
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    subtitle: 'Solutions',
    description: 'Build seamless, scalable, and high-converting online stores with QuadB Tech. We combine modern technologies, intuitive design, and secure infrastructure to deliver e-commerce solutions that delight customers and drive sales.',
    detailedDescription: 'Build powerful online stores with secure payment processing, inventory management, and seamless user experiences. Our e-commerce solutions drive sales and enhance customer satisfaction.',
    icon: ShoppingCart,
    detailIcon: '/ecommerse.jpeg',
    image: '/ecommerse.jpeg',
    features: [
      'Custom E-commerce Development',
      'Payment Gateway Integration',
      'Inventory Management',
      'Mobile Commerce',
      'Analytics & Reporting'
    ]
  }
]

export default function ServicesGrid() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  if (selectedService) {
    return (
      <div className="animate-fade-in space-y-12">
        {/* Services Header Section - Same as main page */}
        <div className="relative">
          {/* Globe overlay - mobile friendly */}
         <div className="absolute -top-[50px] lg:-top-[100px] -left-20 sm:-left-40 lg:-left-60 -right-20 sm:-right-40 lg:-right-60 h-[200px] sm:h-[200px] lg:h-[400px] opacity-50 pointer-events-none overflow-hidden">
        <div
          className="w-full h-full relative"
          style={{
            maskImage: `
              linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%),
              linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,1) 60%)
            `,
            maskComposite: 'intersect',
            WebkitMaskImage: `
              linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%),
              linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 50%)
            `,
            WebkitMaskComposite: 'source-in'
          }}
        >
          <img
            src="/globe.png"
            alt="Globe overlay"
            className="w-full h-full object-cover scale-[2.5]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

          {/* Header */}
          <div className="relative text-left space-y-4 z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-black">
              OUR SERVICES
            </h1>
          </div>
        </div>

        {/* Selected Service Detail Content */}
        <div className="px-4 sm:px-0">
          {/* Back Button */}
          <button
            onClick={() => setSelectedService(null)}
            className="mb-8 flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
          >
            <ArrowRight className="rotate-180" size={20} />
            Back to Services
          </button>

          {/* Service Detail View */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6 lg:space-y-8">
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
                  {selectedService.title} {selectedService.subtitle}
                </h1>
                <p className="text-gray-900 text-sm mb-6 font-bold">
                  From concept to launch — design, development, AI, marketing and support all under one roof.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-base lg:text-lg mt-8 lg:mt-20">
                  {selectedService.detailedDescription}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="rounded-3xl  ">
                <div className="w-full h-64 lg:h-96 flex items-center justify-center relative overflow-hidden rounded-2xl">
                  <Image
                    src={selectedService.image}
                    alt={`${selectedService.title} ${selectedService.subtitle}`}
                    fill
                    className="object-contain"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4 lg:space-y-6 -mt-8 overflow-hidden">
      {/* Header */}

      <div className="absolute top-10 left-0 sm:-left-40 lg:-left-60 right-0 sm:-right-40 lg:-right-60 h-[400px] sm:h-[500px] lg:h-[500px] opacity-50 pointer-events-none overflow-hidden">
        <div
          className="w-full h-full relative"
          style={{
            maskImage: `
              linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%),
              linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,1) 60%)
            `,
            maskComposite: 'intersect',
            WebkitMaskImage: `
              linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%),
              linear-gradient(to right, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,1) 60%)
            `,
            WebkitMaskComposite: 'source-in'
          }}
        >
          <img
            src="/globe.png"
            alt="Globe overlay"
            className="w-full h-full object-cover scale-[2.5]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <div className="relative text-left space-y-4 z-10 -mt-20 px-4 sm:px-0">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-medium text-black">
          OUR SERVICES
        </h1>
        <p className="text-black text-sm sm:text-base max-w-xl font-bold leading-relaxed">
          From concept to launch — design,<br />
          development, AI, marketing and<br />
          support all under one roof.
        </p>
      </div>

      {/* Services Grid with VR Image on Right Side */}
      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-12 lg:mt-16 px-8 sm:px-6 py-8 pb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/30 flex flex-col min-h-[350px] hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header with Title and Icon */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-3xl font-medium text-black leading-tight mb-1">
                      {service.title}
                    </h3>
                    <h4 className="text-xl lg:text-2xl font-bold text-black leading-tight">
                      {service.subtitle}
                    </h4>
                  </div>

                  {/* Icon on the right */}
                  <div className="ml-4 flex-shrink-0">
                    <div className="w-12 h-12 lg:w-14 lg:h-14 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <Icon size={24} className="text-blue-500 lg:w-7 lg:h-7" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-6 flex-1 flex flex-col">
                  <p className="text-gray-700 text-sm lg:text-base font-normal leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-2 px-6 lg:px-7 py-3 lg:py-3.5 bg-transparent border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm lg:text-lg font-medium self-start mt-auto"
                  >
                    Learn more
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform lg:w-5 lg:h-5" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* VR Image Section - positioned outside grid on the right */}
        <div className="hidden lg:block absolute bottom-0 right-0 w-full -mb-64 pointer-events-none">
          <div className="relative w-full h-[800px]">
            <Image
              src="/service.png"
              alt="VR Experience"
              fill
              className="object-contain object-right-bottom mix-blend-multiply"
              loading="lazy"
              sizes="66vw"
            />

            {/* View More Button positioned over the image */}
            <div className="absolute bottom-80 left-1/2 transform -translate-x-1/4 z-10 pointer-events-auto">
              <button className="px-6 lg:px-8 py-3 lg:py-3.5 bg-white/90 backdrop-blur-sm border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium text-sm lg:text-base shadow-lg">
                View more
              </button>
            </div>
          </div>
        </div>

        {/* VR Image for mobile/tablet - appears after all cards */}
        <div className="lg:hidden relative w-full px-0 mt-6 mb-0">
          <div className="relative w-full h-[200px] sm:h-[250px] mx-4 sm:mx-0">
            <Image
              src="/service.png"
              alt="VR Experience"
              fill
              className="object-contain object-center mix-blend-multiply"
              loading="lazy"
              sizes="100vw"
            />

            {/* View More Button positioned over the image */}
            <div className="absolute bottom-4 right-1/2 transform -translate-x-1/8 z-10">
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-white/90 backdrop-blur-sm border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium text-xs sm:text-sm shadow-lg">
                View more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}