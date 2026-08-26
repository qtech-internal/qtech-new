import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import { BookingLink } from '@/components/TrackedLinks'
import { PageHero } from '@/components/PageSections'
import { createMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site'

export const metadata = createMetadata({
  title: 'Contact',
  description:
    'Book a 30-minute discovery call with Vinayak Kalra or send a project inquiry to QuadB Technologies.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Start a conversation"
        title="Bring the product decision that needs senior attention."
        description="Share the product, bottleneck or technical decision. Vinayak reviews inquiries directly and will respond with the most useful next step."
      >
        <BookingLink className="button button-light" location="contact_hero" />
        <a className="button button-ghost-light" href={`mailto:${siteConfig.email}`}>
          Email Vinayak <ArrowUpRight aria-hidden="true" size={18} />
        </a>
      </PageHero>

      <section className="bg-[#f5f6fb] py-20 sm:py-28">
        <div className="site-container grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
          <aside className="rounded-[2rem] bg-[#0b1020] p-7 text-white sm:p-10">
            <p className="eyebrow eyebrow-light">Direct contact</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">No sales handoff.</h2>
            <p className="mt-5 leading-7 text-slate-300">
              Your inquiry goes to Vinayak. A useful first message explains the operating problem, what has already been tried and the decision or outcome that matters next.
            </p>
            <div className="mt-10 space-y-5 border-t border-white/10 pt-8">
              <a className="flex items-start gap-3 text-slate-200 hover:text-white" href={`mailto:${siteConfig.email}`}>
                <Mail className="mt-1 shrink-0 text-[#58e6c6]" aria-hidden="true" size={19} />
                <span className="break-all">{siteConfig.email}</span>
              </a>
              <p className="flex items-start gap-3 text-slate-200">
                <MapPin className="mt-1 shrink-0 text-[#58e6c6]" aria-hidden="true" size={19} />
                <span>{siteConfig.location}</span>
              </p>
            </div>
          </aside>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <div className="mb-8">
              <p className="eyebrow">Project inquiry</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950">Tell us what needs to move.</h2>
              <p className="mt-3 text-slate-600">Required fields are marked with an asterisk.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
