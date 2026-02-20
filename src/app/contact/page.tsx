import { generateSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata = generateSEO({
  title: 'Contact Us',
  description: 'Get in touch with QuadB Tech. We\'d love to hear about your project and discuss how we can help bring your vision to life. Contact us today for a free consultation.',
  keywords: ['Contact', 'Get in Touch', 'Project Consultation', 'Web Development', 'Blockchain Solutions'],
})

export default function ContactPage() {
  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: 'url(/hero.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />
      
      <main className="px-4 sm:px-6 pt-20 sm:pt-24 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}