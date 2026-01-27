'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function WorkSection() {
  const [activeTab, setActiveTab] = useState('Web2')

  const projects = [
    {
      title: "Project 1",
      description: "We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success.",
      image: "/project1.png"
    },
    {
      title: "Project 2", 
      description: "We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success.",
      image: "/project2.png"
    },
    {
      title: "Project 3",
      description: "We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success.",
      image: "/project3.png"
    },
    {
      title: "Project 4",
      description: "We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success.",
      image: "/project4.png"
    },
    {
      title: "Project 5",
      description: "We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success.",
      image: "/project4.png"
    }
  ]

  return (
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
        </div>
      </div>
    </section>
  )
}