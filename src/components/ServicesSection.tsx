export default function ServicesSection() {
  const services = [
    {
      title: "Mobile App Development",
      description: "Bring your ideas to life with high-performance, user-centric mobile applications designed for iOS, Android, and cross-platform ecosystems. At QuadB Tech, we combine cutting-edge technologies with intuitive design to create apps that engage users, drive growth, and deliver measurable results.",
      icon: "📱"
    },
    {
      title: "Web App Development", 
      description: "Transform your business with custom web applications built for performance, scalability, and user experience.",
      icon: "🌐"
    },
    {
      title: "Blockchain DApp Development",
      description: "Build decentralized applications that leverage blockchain technology for transparency, security, and innovation.",
      icon: "⛓️"
    },
    {
      title: "Game Development",
      description: "Create immersive gaming experiences with cutting-edge graphics, engaging gameplay, and cross-platform compatibility.",
      icon: "🎮"
    },
    {
      title: "ERP & SAAS Solutions",
      description: "Streamline your business operations with custom ERP systems and Software-as-a-Service solutions.",
      icon: "⚙️"
    },
    {
      title: "Maintenance & Scalability",
      description: "Ensure your applications remain secure, updated, and scalable as your business grows.",
      icon: "🔧"
    },
    {
      title: "E-commerce Solutions",
      description: "Build powerful online stores and marketplaces that drive sales and enhance customer experience.",
      icon: "🛒"
    }
  ]

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 block">OUR SERVICES</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl p-8 backdrop-blur-sm border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
              <div className="relative z-10">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm mb-6 transition-colors">
                  Learn more →
                </button>
                <div className="w-full h-48 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-6xl">🤖</div>
                </div>
                <p className="text-white text-lg font-medium">
                  Text Regarding Our AI services.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer">
                <div className="flex items-center space-x-4">
                  <span className="text-2xl">{service.icon}</span>
                  <div>
                    <h3 className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                    {index === 0 && (
                      <p className="text-gray-400 text-sm mt-1 max-w-md">
                        {service.description}
                      </p>
                    )}
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}