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
    description: 'Transform your ideas into robust, scalable, and high-performing web applications with QuadB Tech. We create modern technologies, intuitive design, and secure architecture to build web apps that are fast, secure, and user-friendly.',
    detailedDescription: 'Transform your ideas into robust, scalable web applications that drive results. At QuadB Tech, we build modern web solutions with engaging design to build web applications that are fast, secure, and user-friendly.',
    icon: Globe,
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
      <div className="animate-fade-in">
        {/* Back Button */}
        <button
          onClick={() => setSelectedService(null)}
          className="mb-8 flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
        >
          <ArrowRight className="rotate-180" size={20} />
          Back to Services
        </button>

        {/* Service Detail View */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {selectedService.title} {selectedService.subtitle}
              </h1>
              <p className="text-gray-600 text-sm mb-6">
                From concept to launch — design, development, AI, marketing and support all under one roof.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                {selectedService.detailedDescription}
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Key Features:</h3>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium">
                Learn more
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-lg">
              <div className="w-full h-96 flex items-center justify-center">
                <selectedService.icon size={120} className="text-blue-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8 lg:space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-black">
          OUR SERVICES
        </h1>
        <p className="text-black text-sm lg:text-base max-w-2xl">
          From concept to launch — design, development, AI, marketing and support all under one roof.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <div
              key={service.id}
              className="group bg-white rounded-2xl lg:rounded-3xl p-8 lg:p-10 border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/30 flex flex-col min-h-[350px] hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-8">
                <div className="w-14 h-14 lg:w-16 lg:h-16 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Icon size={28} className="text-blue-500 lg:w-8 lg:h-8" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 flex-1 flex flex-col">
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-black leading-tight mb-2">
                    {service.title}
                  </h3>
                  <h4 className="text-xl lg:text-2xl font-bold text-black leading-tight">
                    {service.subtitle}
                  </h4>
                </div>

                <p className="text-gray-700 text-sm lg:text-base leading-relaxed flex-1">
                  {service.description}
                </p>

                <button 
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-2 px-6 lg:px-7 py-3 lg:py-3.5 bg-transparent border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm lg:text-base font-medium self-start mt-auto"
                >
                  Learn more
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform lg:w-5 lg:h-5" />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* View More Button */}
      <div className="flex justify-center pt-8">
        <button className="px-8 py-3 bg-transparent border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium text-sm">
          View more
        </button>
      </div>

      {/* Bottom Image Section */}
      <div className="relative mt-12 lg:mt-16">
        <div className="absolute right-0 bottom-0 w-72 h-72 lg:w-96 lg:h-96 opacity-30 pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/hand-vr.png"
              alt="VR Hand"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}