export default function WorkSection() {
  const projects = [
    {
      title: "Project 1",
      description: "We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success.",
      image: "🔗"
    },
    {
      title: "Project 2", 
      description: "We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success.",
      image: "📦"
    },
    {
      title: "Project 3",
      description: "We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success.",
      image: "👔"
    },
    {
      title: "Project 4",
      description: "We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success.",
      image: "🔬"
    },
    {
      title: "Project 5",
      description: "We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success.",
      image: "💼"
    }
  ]

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase mb-4 block">OUR WORK</span>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full">Web3</button>
            <button className="bg-transparent border border-gray-600 text-gray-400 px-6 py-2 rounded-full hover:border-white hover:text-white transition-colors">Web2</button>
          </div>
          <div className="flex justify-end">
            <button className="text-blue-400 hover:text-blue-300 transition-colors">
              View more →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer">
              <div className="w-full h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <span className="text-3xl">{project.image}</span>
              </div>
              <h3 className="text-white font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}