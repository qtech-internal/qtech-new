<<<<<<< HEAD
export default function WorkSection() {
=======
'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function WorkSection() {
  const [activeTab, setActiveTab] = useState('Web2')

>>>>>>> 09ff300413203e0271401640dbdb5d3d3415655f
  const projects = [
    {
      title: "Project 1",
      description: "We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success.",
<<<<<<< HEAD
      image: "🔗"
=======
      image: "/project1.png"
>>>>>>> 09ff300413203e0271401640dbdb5d3d3415655f
    },
    {
      title: "Project 2", 
      description: "We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success.",
<<<<<<< HEAD
      image: "📦"
=======
      image: "/project2.png"
>>>>>>> 09ff300413203e0271401640dbdb5d3d3415655f
    },
    {
      title: "Project 3",
      description: "We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success.",
<<<<<<< HEAD
      image: "👔"
=======
      image: "/project3.png"
>>>>>>> 09ff300413203e0271401640dbdb5d3d3415655f
    },
    {
      title: "Project 4",
      description: "We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success.",
<<<<<<< HEAD
      image: "🔬"
=======
      image: "/project4.png"
>>>>>>> 09ff300413203e0271401640dbdb5d3d3415655f
    },
    {
      title: "Project 5",
      description: "We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success.",
<<<<<<< HEAD
      image: "💼"
=======
      image: "/project4.png"
>>>>>>> 09ff300413203e0271401640dbdb5d3d3415655f
    }
  ]

  return (
<<<<<<< HEAD
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
=======
    <section className="px-6 py-20 -mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#615FFF] text-sm font-semibold tracking-wider uppercase mb-8 block">OUR WORK</span>
        </div>

        {/* Tab buttons and View more */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setActiveTab('Web2')}
              className={`px-8 py-2.5 rounded-full font-medium text-sm transition-all ${
                activeTab === 'Web2' 
                  ? 'bg-[#615FFF] text-white' 
                  : 'bg-transparent text-[#615FFF] border border-[#615FFF] hover:bg-[#615FFF]/10'
              }`}
            >
              Web2
            </button>
            <button 
              onClick={() => setActiveTab('Web3')}
              className={`px-8 py-2.5 rounded-full font-medium text-sm transition-all ${
                activeTab === 'Web3' 
                  ? 'bg-[#615FFF] text-white' 
                  : 'bg-transparent text-[#615FFF] border border-[#615FFF] hover:bg-[#615FFF]/10'
              }`}
            >
              Web3
            </button>
          </div>

          <button className="text-[#615FFF] hover:text-white hover:bg-[#615FFF] transition-colors font-medium text-sm flex items-center space-x-2 px-6 py-2.5 border border-[#615FFF] rounded-full">
            <span>View more</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Projects Horizontal Scroll */}
        <div className="overflow-x-auto overflow-y-hidden scrollbar-hide -mx-6 px-6">
          <div className="flex gap-6 pb-4 min-w-max">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer flex-shrink-0 w-[320px]"
              >
                {/* Project Image */}
                <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
>>>>>>> 09ff300413203e0271401640dbdb5d3d3415655f
        </div>
      </div>
    </section>
  )
}