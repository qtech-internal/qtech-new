import { generateSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProfileGrid from '@/components/ProfileGrid'

export const metadata = generateSEO({
  title: 'Our Profile - QuadB Tech',
  description: 'From concept to launch - design, development, AI, marketing and support all under one roof.',
})

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <ProfileGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}