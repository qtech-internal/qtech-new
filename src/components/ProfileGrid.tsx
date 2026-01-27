'use client'

import { useState } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'

interface Project {
  id: string
  title: string
  category: string
  description: string
  tags: string[]
  link?: string
}

const projects: Project[] = [
  {
    id: 'clone-branding-1',
    title: 'Clans | Branding + UX/UI | 0→1',
    category: 'Branding',
    description: 'We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success.',
    tags: ['Branding', 'UI/UX', 'Design'],
    link: '#'
  },
  {
    id: 'clone-branding-2',
    title: 'Clans | Branding + UX/UI | 0→1',
    category: 'Branding',
    description: 'We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success.',
    tags: ['Branding', 'UI/UX', 'Design'],
    link: '#'
  },
  {
    id: 'clone-branding-3',
    title: 'Clans | Branding + UX/UI | 0→1',
    category: 'Development',
    description: 'We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success.',
    tags: ['Development', 'Full-stack', 'React'],
    link: '#'
  },
  {
    id: 'clone-branding-4',
    title: 'Clans | Branding + UX/UI | 0→1',
    category: 'Mobile',
    description: 'We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success.',
    tags: ['Mobile', 'React Native', 'iOS'],
    link: '#'
  }
]

const categories = ['All', 'Branding', 'Development', 'Mobile', 'Web', 'Blockchain']

export default function ProfileGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  if (selectedProject) {
    return (
      <div className="animate-fade-in">
        <button
          onClick={() => setSelectedProject(null)}
          className="mb-8 flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
        >
          <ArrowRight className="rotate-180" size={20} />
          Back to Profile
        </button>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {selectedProject.title}
              </h1>
              <p className="text-gray-600 text-sm mb-6 font-bold">
                From concept to launch — design, development, AI, marketing and support all under one roof.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                {selectedProject.description}
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Technologies Used:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.link && (
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 font-medium">
                  View Project
                  <ExternalLink size={16} />
                </button>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 shadow-lg">
              <div className="relative w-full h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                <div className="text-gray-400 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                    <ExternalLink size={32} />
                  </div>
                  <p className="text-sm">Project Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in space-y-12">
      <div className="text-left space-y-4">
        <h1 className="text-4xl lg:text-6xl font-bold text-black">
          OUR PROFILE
        </h1>
        <p className="text-black text-base max-w-xl font-bold">
          From concept to launch — design, development, AI, marketing and support all under one roof.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group bg-white rounded-2xl lg:rounded-3xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/30 flex flex-col min-h-[450px] hover:transform hover:scale-105 overflow-hidden"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative w-full h-72 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div 
                  className="absolute inset-0" 
                  style={{
                    backgroundImage: `
                      linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%),
                      linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)
                    `,
                    backgroundSize: '40px 40px'
                  }}
                />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-32 border-2 border-white/60 rounded-full relative">
                    <div className="absolute inset-4 border border-white/40 rounded-full">
                      <div className="absolute inset-2 border border-white/30 rounded-full">
                        <div className="absolute inset-2 border border-white/20 rounded-full" />
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-4 border-2 border-white/60 rounded-sm" />
                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-3 h-3 border border-white/40 rounded-full" />
                  </div>
                  
                  <div className="absolute inset-0 opacity-30">
                    <div 
                      className="w-full h-full" 
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '20px 20px'
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            </div>

           

            <div className="p-6 lg:p-8 space-y-4 flex-1 flex flex-col bg-white">
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-black group-hover:text-blue-600 transition-colors mb-2">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm lg:text-base leading-relaxed flex-1">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-8">
        <button className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium text-sm">
          View more
        </button>
      </div>
    </div>
  )
}