import { generateSEO } from '@/lib/seo'
import JsonLd, { organizationSchema, websiteSchema } from '@/components/JsonLd'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ProcessSection from '@/components/ProcessSection'
import ServicesSection from '@/components/ServicesSection'
import WorkSection from '@/components/WorkSection'
import StatsSection from '@/components/StatsSection'
import AboutSection from '@/components/AboutSection'
import Footer from '@/components/Footer'

export const metadata = generateSEO({
  title: 'QuadB Tech - Innovation Studio',
  description: 'QuadB Tech is a boutique innovation studio crafting next-generation digital solutions powered by Blockchain, AI, Web3, and the Metaverse.',
})

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
=======
      <div 
        className="min-h-screen"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, transparent 15%, #adb9f7 15%, #adb9f7 18%, #ffffff 25%)`
        }}
      >
>>>>>>> 09ff300413203e0271401640dbdb5d3d3415655f
        <Header />
        <HeroSection />
        <StatsSection />
        <AboutSection />
<<<<<<< HEAD
        <ProcessSection />
        <ServicesSection />
        <WorkSection />
=======
        <ServicesSection />
        <WorkSection />
        <ProcessSection />
>>>>>>> 09ff300413203e0271401640dbdb5d3d3415655f
        <Footer />
      </div>
    </>
  )
}