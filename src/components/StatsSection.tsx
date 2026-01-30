import Image from 'next/image'

export default function StatsSection() {
  const stats = [
    {
      number: "25+",
      label: "blockchain projects",
      description: "Smart Contracts, NFTs, DeFi, and Web3 Integrations",
      icon: "/beta.png"
    },
    {
      number: "75+",
      label: "mobile apps",
      description: "iOS, Android, and Cross-Platform Solutions",
      icon: "/phone.png"
    },
    {
      number: "15+",
      label: "AI & ML projects",
      description: "Recommendation Engines, Predictive Analytics, and Automation",
      icon: "/setting.png"
    },
    {
      number: "50+",
      label: "web platforms",
      description: "from SaaS to E-Commerce and Enterprise Systems",
      icon: "/webdev.png"
    }
  ]

  return (
    <>
      {/* Stats Card - positioned to overlap hero and gradient */}
      <section className="relative -mt-6 px-6 z-30">
        <div className="max-w-[77rem] mx-auto">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="flex items-center space-x-4 mb-3">
                    <span className="text-5xl lg:text-6xl font-bold text-gray-900">{stat.number}</span>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Image
                        src={stat.icon}
                        alt={`${stat.label} icon`}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="text-gray-900 font-semibold text-lg mb-2">{stat.label}</div>
                  <div className="text-gray-600 text-sm leading-relaxed">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}