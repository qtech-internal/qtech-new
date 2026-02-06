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
    }, 10000) // Change step every 10 seconds

    return () => clearInterval(interval)
  }, [steps.length])

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 lg:py-20 -mt-20 sm:-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4 sm:mb-6 -mt-8">
            How we work
          </h2>
          <p className="text-[#141414] opacity-64 text-sm sm:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed px-2">
            At QuadB Tech, we follow a <span className="font-semibold">transparent, collaborative,</span> and <span className="font-semibold">results-driven approach</span> to deliver high-quality digital solutions. Our process ensures every project is executed efficiently while meeting your unique business goals.
          </p>
        </div>

        {/* Progress Line with Dots - Hidden on mobile, shown on larger screens */}
        <div className="relative mb-8 sm:mb-12 lg:mb-16 hidden sm:block">
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
                className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full transition-all duration-500 z-10 ${
                  index <= activeStep 
                    ? 'bg-[#615FFF] scale-110' 
                    : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Steps Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`cursor-pointer transition-all duration-300 p-4 sm:p-0 rounded-lg sm:rounded-none ${
                index === activeStep 
                  ? 'opacity-100 bg-blue-50 sm:bg-transparent' 
                  : 'opacity-40 sm:opacity-40'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl flex-shrink-0 border-2 transition-all duration-300 mx-auto sm:mx-0 ${
                  index === activeStep 
                    ? 'bg-transparent border-[#141414] text-[#141414]'
                    : 'bg-transparent border-black text-black opacity-64'
                }`}>
                  {step.number}
                </div>
                <div className="flex-1 min-w-0 text-center sm:text-left">
                  <h3 className={`text-lg sm:text-xl lg:text-2xl font-medium mb-2 sm:mb-3 transition-colors duration-300 ${
                    index === activeStep ? 'text-[#141414]' : 'text-black opacity-64'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`leading-relaxed text-sm sm:text-base lg:text-lg transition-colors duration-300 font-normal ${
                    index === activeStep ? 'text-[#141414]' : 'text-black opacity-64'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Step Indicators */}
        <div className="flex justify-center space-x-2 mt-6 sm:hidden">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeStep ? 'bg-[#615FFF] w-6' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}