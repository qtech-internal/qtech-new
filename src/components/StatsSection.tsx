'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const stats = [
    {
      number: 25,
      suffix: "+",
      label: "blockchain projects",
      description: "Smart Contracts, NFTs, DeFi, and Web3 Integrations",
      icon: "/images/bitcoin.png"
    },
    {
      number: 75,
      suffix: "+",
      label: "mobile apps",
      description: "iOS, Android, and Cross-Platform Solutions",
      icon: "/images/electric.png"
    },
    {
      number: 15,
      suffix: "+",
      label: "AI & ML projects",
      description: "Recommendation Engines, Predictive Analytics, and Automation",
      icon: "/images/mind.png"
    },
    {
      number: 50,
      suffix: "+",
      label: "web platforms",
      description: "from SaaS to E-Commerce and Enterprise Systems",
      icon: "/images/correct.png"
    }
  ]

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const currentRef = sectionRef.current
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <>
      {/* Stats Card - positioned to overlap hero and gradient */}
      <section ref={sectionRef} className="relative -mt-6 px-6 z-30">
        <div className="max-w-[77rem] mx-auto">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StatCard 
                  key={index} 
                  stat={stat} 
                  isVisible={isVisible}
                  delay={index * 100} // Stagger animation
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
    </>
  )
}

// Separate component for each stat card with counter animation
function StatCard({ stat, isVisible, delay }: { stat: any, isVisible: boolean, delay: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    // Delay before starting animation
    const delayTimeout = setTimeout(() => {
      const duration = 2000 // 2 seconds
      const steps = 60 // 60 frames
      const increment = stat.number / steps
      const stepDuration = duration / steps

      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        if (currentStep <= steps) {
          setCount(Math.min(Math.ceil(increment * currentStep), stat.number))
        } else {
          setCount(stat.number)
          clearInterval(timer)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }, delay)

    return () => clearTimeout(delayTimeout)
  }, [isVisible, stat.number, delay])

  return (
    <div className="text-left">
      <div className="flex items-center space-x-4 mb-3">
        <span className="text-[64px] lg:text-[80px] font-normal text-gray-900 leading-none">
          {count}{stat.suffix}
        </span>
        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Image
            src={stat.icon}
            alt={`${stat.label} icon`}
            width={20}
            height={20}
            draggable={false}
            className="object-contain w-8 h-8"
            quality={100}
          />
        </div>
      </div>
      <div className="text-gray-900 font-medium text-[24px] mb-2">{stat.label}</div>
      <div className="text-gray-600 text-xl font-normal leading-relaxed">{stat.description}</div>
    </div>
  )
}