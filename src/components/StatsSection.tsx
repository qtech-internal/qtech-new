export default function StatsSection() {
  const stats = [
    {
      number: "25+",
      label: "blockchain projects",
      description: "Smart Contracts, NFTs, DeFi, and Web3 Integrations",
      icon: "₿"
    },
    {
      number: "75+",
      label: "mobile apps",
      description: "iOS, Android, and Cross-Platform Solutions",
      icon: "📱"
    },
    {
      number: "15+",
      label: "AI & ML projects",
      description: "Recommendation Engines, Predictive Analytics, and Automation",
      icon: "⚙️"
    },
    {
      number: "50+",
      label: "web platforms",
      description: "from SaaS to E-Commerce and Enterprise Systems",
      icon: "💻"
    }
  ]

  return (
    <section className="relative -mt-20 px-6 z-20">
      <div className="max-w-6xl mx-auto">
        {/* Blue indicator showing screen size */}
        
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-3">
                  <span className="text-2xl">{stat.icon}</span>
                  <span className="text-5xl lg:text-6xl font-bold text-gray-900">{stat.number}</span>
                </div>
                <div className="text-gray-900 font-semibold text-lg mb-2">{stat.label}</div>
                <div className="text-gray-600 text-sm leading-relaxed">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}