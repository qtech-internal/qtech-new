import { generateSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProfileGrid from '@/components/ProfileGrid'

export const metadata = generateSEO({
  title: 'How We Work',
  description: 'Learn about QuadB Tech\'s development process and methodology. We combine innovation, expertise, and partnership to deliver exceptional digital solutions.',
  keywords: ['Development Process', 'Methodology', 'Web3 Development', 'Blockchain Development', 'Software Development'],
})

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="px-2 sm:px-6 pt-20 sm:pt-16 lg:pt-16 pb-0">
        <div className="max-w-7xl mx-auto">
          <ProfileGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}