import { generateSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata = generateSEO({
  title: 'Contact Us - QuadB Tech',
  description: 'Get in touch with QuadB Tech. Drop us a message and let\'s discuss your next project.',
})

export default function ContactPage() {
  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: 'url(/hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />
      
      <main className="px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}