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
      <main className=" px-2 sm:px-6   lg:pt-0 pb-0 ">
        <div className="max-w-7xl mx-auto ">
          <ServicesGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}