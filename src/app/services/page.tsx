import { generateSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServicesGrid from '@/components/ServicesGrid'

export const metadata = generateSEO({
  title: 'Our Services - QuadB Tech',
  description: 'From concept to launch - design, development, AI, marketing and support all under one roof.',
})

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <ServicesGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}