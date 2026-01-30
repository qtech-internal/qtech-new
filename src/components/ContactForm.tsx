'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'

interface FormData {
  name: string
  companyName: string
  phoneNumber: string
  city: string
  message: string
}

const INITIAL_FORM_DATA: FormData = {
  name: '',
  companyName: '',
  phoneNumber: '',
  city: '',
  message: ''
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Only check if fields are not empty strings
    if (!formData.name.trim() || !formData.message.trim()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS configuration - using your exact keys
      const serviceId = 'service_38pd38l'
      const templateId = 'template_ps76yo5'
      const publicKey = '543dCM6EejEi_ZpAm'

      // Prepare template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.companyName, // Using company name field as email if needed
        phone_number: formData.phoneNumber || 'Not provided',
        city: formData.city || 'Not provided',
        message: formData.message,
        to_name: 'QuadB Tech',
      }

      // Send email using EmailJS API
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: templateParams,
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setTimeout(() => {
          setFormData(INITIAL_FORM_DATA)
          setSubmitStatus('idle')
        }, 3000)
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Email send error:', error)
      // Fallback to mailto
      const mailtoLink = `mailto:contact@quadbtech.com?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(formData.name)}%0D%0ACompany: ${encodeURIComponent(formData.companyName)}%0D%0APhone: ${encodeURIComponent(formData.phoneNumber)}%0D%0ACity: ${encodeURIComponent(formData.city)}`
      window.location.href = mailtoLink
      setSubmitStatus('error')
    }
    
    setIsSubmitting(false)
  }, [formData])

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start animate-fade-in">
      {/* Left Side - Full Image with Text Overlay */}
      <div className="relative bg-black rounded-3xl overflow-hidden order-2 lg:order-1 animate-fade-in h-[500px] lg:h-[600px]" style={{ animationDelay: '0.2s' }}>
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/mobile.gif"
            alt="AI Head Wireframe"
            fill
            className="object-cover w-full h-full"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Text Content Overlay */}
        <div className="absolute inset-0 z-10 p-6 lg:p-12 flex flex-col justify-between">
          {/* Top Text */}
          <div className="flex-shrink-0">
            <p className="text-white text-base lg:text-lg leading-relaxed font-medium">
              From concept to launch - <span className="font-semibold">design, development, AI, marketing</span> and support all under one roof.
            </p>
          </div>
          
          {/* Bottom Text - Positioned at very bottom */}
          <div className="flex-shrink-0 space-y-2">
            <p className="text-gray-300 text-sm">Some Details to be given here.</p>
            <p className="text-gray-300 text-sm leading-relaxed">
              From concept to launch - design, development, AI, marketing and support all under one roof.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="space-y-6 lg:space-y-8 order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-2 lg:mb-4">
            GOT A PROJECT?
          </h1>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-6 lg:mb-8">
            DROP US A MESSAGE
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm lg:text-base"
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={handleInputChange}
              className="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm lg:text-base"
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm lg:text-base"
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-sm lg:text-base"
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '1.0s' }}>
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 lg:px-6 py-3 lg:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 resize-none text-sm lg:text-base"
            />
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '1.1s' }}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-gray-900 px-6 lg:px-8 py-3 lg:py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold text-base lg:text-lg disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              {isSubmitting ? 'Sending message...' : 'Send message'}
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="text-green-400 text-center p-3 lg:p-4 bg-green-400/10 rounded-lg border border-green-400/20 text-sm lg:text-base animate-fade-in">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="text-red-400 text-center p-3 lg:p-4 bg-red-400/10 rounded-lg border border-red-400/20 text-sm lg:text-base animate-fade-in">
              Failed to send message. Please try again or contact us directly.
            </div>
          )}
        </form>
      </div>
    </div>
  )
}