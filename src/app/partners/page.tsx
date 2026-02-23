import { generateSEO } from '@/lib/seo'
import JsonLd, { organizationSchema, websiteSchema } from '@/components/JsonLd'
import Header from '@/components/Header'
import PartnersAiSection from '@/components/PartnersHeroSection'
import Footer from '@/components/Footer'
import WhyQuadb from '@/components/WhyQuadb'
import OurGccSection from '@/components/OurGccSection'

export const metadata = generateSEO({
  title: 'QuadB Tech - Innovation Studio',
  description: 'QuadB Tech is a boutique innovation studio crafting next-generation digital solutions powered by Blockchain, AI, Web3, and the Metaverse.',
})

export default function AI() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <div 
        className="min-h-screen"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, transparent 15%, #adb9f7 15%, #adb9f7 22%, #ffffff 25%)`
        }}
      >
        <Header />
        <main className='mb-10'>
          <PartnersAiSection />
          <WhyQuadb />
          <OurGccSection />
        </main>
        <Footer />
      </div>
    </>
  )
}