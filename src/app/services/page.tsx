import { generateSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ServicesGrid from '@/components/ServicesGrid'

export const metadata = generateSEO({
  title: 'Services',
  description: 'Explore QuadB Tech\'s comprehensive services including Mobile App Development, Web App Development, Blockchain DApps, Smart Contracts, Game Development, ERP & SaaS Solutions, Maintenance & Scalability, and E-commerce Solutions.',
  keywords: ['Mobile App Development', 'Web App Development', 'Blockchain DApp', 'Smart Contract Development', 'Game Development', 'ERP Solutions', 'SaaS Solutions', 'E-commerce Solutions'],
})

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="px-2 sm:px-6 pt-20 sm:pt-16 lg:pt-16 pb-0">
        <div className="max-w-7xl mx-auto ">
          <ServicesGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}