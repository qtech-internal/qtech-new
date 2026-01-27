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
      <div 
        className="min-h-screen"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, transparent 15%, #adb9f7 15%, #adb9f7 18%, #ffffff 25%)`
        }}
      >
        <Header />
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <WorkSection />
        <ProcessSection />
        <Footer />
      </div>
    </>
  )
}