'use client'

import { useState, useEffect } from 'react'

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: "1",
      title: "Discovery & Planning",
      description: "We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success."
    },
    {
      number: "2", 
      title: "Design & Prototyping",
      description: "Our creative team crafts intuitive UI/UX designs and interactive prototypes to visualize the product and gather feedback before development begins."
    },
    {
      number: "3",
      title: "Development & Implementation", 
      description: "Our developers build scalable, secure, and high-performance solutions using the latest technologies. We follow agile methodologies for continuous progress and adaptability."
    }
  ]

  // Auto-advance through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 10000) // Change step every 3 seconds

    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <section className="px-6 py-20 -mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            How we work
          </h2>
          <p className="text-[#141414] opacity-64 text-base lg:text-lg max-w-4xl mx-auto leading-relaxed">
            At QuadB Tech, we follow a <span className="font-semibold">transparent, collaborative,</span> and <span className="font-semibold">results-driven approach</span> to deliver high-quality digital solutions. Our process ensures every project is executed efficiently while meeting your unique business goals.
          </p>
        </div>

        {/* Progress Line with Dots */}
        <div className="relative mb-16">
          {/* Background Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -translate-y-1/2"></div>
          
          {/* Active Progress Line */}
          <div 
            className="absolute top-1/2 left-0 h-0.5 bg-[#615FFF] -translate-y-1/2 transition-all duration-500 ease-in-out"
            style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          ></div>

          {/* Dots */}
          <div className="relative flex justify-between">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-6 h-6 rounded-full transition-all duration-500 z-10 ${
                  index <= activeStep 
                    ? 'bg-[#615FFF] scale-110' 
                    : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Steps Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`cursor-pointer transition-all duration-300 ${
                index === activeStep ? 'opacity-100' : 'opacity-40'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 border-2 transition-all duration-300 ${
                  index === activeStep 
                    ? 'bg-transparent border-[#141414] text-[#141414]'
                    : 'bg-transparent border-black text-black opacity-64'
                }`}>
                  {step.number}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`text-2xl font-medium mb-3 transition-colors duration-300 ${
                    index === activeStep ? 'text-[#141414]' : 'text-black opacity-64'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`leading-relaxed text-base lg:text-lg transition-colors duration-300 font-normal ${
                    index === activeStep ? 'text-[#141414]' : 'text-black opacity-64'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}