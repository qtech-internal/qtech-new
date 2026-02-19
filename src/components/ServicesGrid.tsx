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
  const [showAllServices, setShowAllServices] = useState(false)
  const INITIAL_VISIBLE_COUNT = 3

  if (selectedService) {
    return (
      <div className="animate-fade-in space-y-12 mt-16 mb-10">
        {/* Services Header Section - Same as main page */}
        <div className="relative">
          {/* Service background overlay - positioned top right */}
          <div className="absolute -top-[66px] sm:-top-[65px] lg:-top-[66px] -right-0  w-[500px] sm:w-[900px] lg:w-[1780px] h-[300px] lg:h-[410px] opacity-30 pointer-events-none overflow-hidden">
            <div className="w-full h-full relative">
              <img
                src="/servicebg.png"
                alt="Service background"
                className="w-full h-full object-cover object-left"
                loading="lazy"
                decoding="async"
                style={{
                  filter: 'brightness(1.2) contrast(1.1)'
                }}
              />
            </div>
          </div>

          {/* Header */}
          <div className="relative text-left space-y-4 z-10 px-4 sm:px-0 sm:ml-6">
            <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-medium text-black">
              OUR SERVICES
            </h1>
          </div>
        </div>

        {/* Selected Service Detail Content */}
        <div className="px-4 sm:px-0 sm:ml-6">
          {/* Back Button */}
          <button
            onClick={() => setSelectedService(null)}
            className="mb-8 flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
          >
            <ArrowRight className="rotate-180" size={20} />
            Back to Services
          </button>

          {/* Service Detail View */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              <div>
                <h1 className="text-[28px] sm:text-[36px] lg:text-[48px] font-medium text-gray-900 mb-3 sm:mb-4">
                  {selectedService.title} {selectedService.subtitle}
                </h1>
                <p className="text-gray-900 text-[14px] sm:text-[16px] lg:text-[18px] mb-4 sm:mb-6 font-medium leading-relaxed">
                  From concept to launch — design, development, AI, marketing and support all under one roof.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-700 leading-relaxed text-[14px] sm:text-[16px] lg:text-[18px] mt-6 sm:mt-8 lg:mt-20">
                  {selectedService.detailedDescription}
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative pr-4 sm:pr-8 lg:pr-12">
              <div className="rounded-3xl">
                <div className="w-full h-48 xs:h-56 sm:h-64 lg:h-96 flex items-center justify-center relative overflow-hidden rounded-2xl select-none">
                  <Image
                    src={selectedService.image}
                    alt={`${selectedService.title} ${selectedService.subtitle}`}
                    fill
                    draggable={false}
                    className="object-contain pointer-events-none"
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
   <div className="space-y-4 lg:space-y-8 overflow-hidden pb-32 lg:pb-0">
      {/* Header */}
      <div className="relative">
        {/* Service background overlay - covering full right space */}
        <div className="absolute -top-[66px] sm:-top-[65px] lg:-top-[66px] -right-0  w-[500px] sm:w-[900px] lg:w-[1780px] h-[300px] lg:h-[410px] opacity-30 pointer-events-none overflow-hidden">
            <div className="w-full h-full relative">
              <img
                src="/servicebg.png"
                alt="Service background"
                className="w-full h-full object-cover object-left"
                loading="lazy"
                decoding="async"
                style={{
                  filter: 'brightness(1.2) contrast(1.1)'
                }}
              />
            </div>
          </div>

        {/* Header */}
        <div className="relative text-left space-y-4 z-10 px-4 sm:px-0 lg:ml-5 mt-10">
          <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] font-medium text-black">
            OUR SERVICES
          </h1>
          <p className="text-black text-[14px] sm:text-[16px] lg:text-[18px] max-w-xl font-medium leading-relaxed ml-1">
            From concept to launch — design,<br />
            development, AI, marketing and<br />
            support all under one roof.
          </p>
        </div>
      </div>

      {/* Services Grid with VR Image on Right Side */}
      <div className="relative min-h-[600px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-12 lg:mt-16 px-2 xs:px-3 sm:px-6 py-4 xs:py-6 sm:py-8">
          {services
            .slice(0, showAllServices ? services.length : INITIAL_VISIBLE_COUNT)
            .map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group bg-white rounded-xl xs:rounded-2xl lg:rounded-3xl p-4 xs:p-5 sm:p-6 lg:p-8 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/30 flex flex-col min-h-[300px] xs:min-h-[330px] sm:min-h-[350px] hover:transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header with Title and Icon */}
                <div className="flex items-start justify-between mb-4 xs:mb-5 sm:mb-6">
                  <div className="flex-1">
                    <h3 className="text-[32px] font-medium text-[#141414] leading-tight mb-1">
                      {service.title}
                    </h3>
                    <h4 className="text-[32px] font-medium text-[#141414] leading-tight">
                      {service.subtitle}
                    </h4>
                  </div>

                  {/* Icon on the right */}
                  <div className="ml-2 xs:ml-3 sm:ml-4 flex-shrink-0">
                    <div className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <Icon size={20} className="text-blue-500 xs:w-5 xs:h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 xs:space-y-4 sm:space-y-6 flex-1 flex flex-col">
                  <p className="text-gray-700 text-base font-normal leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <button
                    className="inline-flex items-center gap-1.5 xs:gap-2 px-4 xs:px-5 sm:px-6 lg:px-7 py-2 xs:py-2.5 sm:py-3 lg:py-3.5 bg-transparent border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-xs xs:text-sm sm:text-sm lg:text-lg font-medium self-start mt-auto"
                    aria-label={`Learn more about ${service.title} ${service.subtitle}`}
                  >
                    View {service.title} details
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform xs:w-4 xs:h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Show View More/Less button when there are more services than initial count */}
        {services.length > INITIAL_VISIBLE_COUNT && (
          <div className="flex justify-center mt-6 xs:mt-8 sm:mt-10 lg:mt-16 mb-1">
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="px-6 xs:px-7 sm:px-8 py-2.5 xs:py-3 sm:py-3 lg:py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium text-sm xs:text-base sm:text-base lg:text-lg shadow-lg hover:shadow-xl"
            >
              {showAllServices ? 'View less' : 'View more'}
            </button>
          </div>
        )}

        {/* VR Image Section - positioned outside grid on the right */}
        {showAllServices && (
          <div className="hidden lg:block absolute bottom-0 right-0 w-full -mb-64 pointer-events-none">
            <div className="relative w-full h-[1000px]">
              <Image
                src="/service.png"
                alt="VR Experience"
                fill
                draggable={false}
                className="object-contain object-right-bottom mix-blend-multiply"
                loading="lazy"
                sizes="66vw"
              />
            </div>
          </div>
        )}

        {/* VR Image for mobile/tablet - appears after all cards when expanded */}
        {showAllServices && (
          <div className="lg:hidden relative w-full px-0 mt-4 xs:mt-5 sm:mt-6 mb-0">
            <div className="relative w-full h-[150px] xs:h-[180px] sm:h-[250px] mx-2 xs:mx-3 sm:mx-0">
              <Image
                src="/service.png"
                alt="VR Experience"
                fill
                draggable={false}
                className="object-contain object-center mix-blend-multiply"
                loading="lazy"
                sizes="100vw"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}