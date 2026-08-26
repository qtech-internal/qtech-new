import { Check, MapPin } from 'lucide-react'
import { createMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site'
import { CallToAction, FounderCard, PageHero, PrimaryHeroActions, SectionHeading } from '@/components/PageSections'

export const metadata = createMetadata({
  title: 'About Vinayak and QuadB',
  description:
    'Meet Vinayak Kalra, Founder and Technical Lead at QuadB Technologies, and learn how the founder-led product engineering model works.',
  path: '/about',
})

const principles = [
  ['Clarity before velocity', 'The fastest build is still expensive if the team is solving the wrong problem or hiding a critical trade-off.'],
  ['Architecture serves operations', 'A system is successful when customers, internal teams and long-term maintainers can rely on it.'],
  ['AI needs control surfaces', 'Useful AI products combine probabilistic capability with validation, auditability and human judgment.'],
  ['Ownership outlasts launch', 'Documentation, observability and maintainability are part of delivery—not cleanup for a later team.'],
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About QuadB"
        title="Founder-led by design. Technical accountability stays close."
        description="QuadB Technologies is a product engineering studio led by Vinayak Kalra, working directly with founders and operating teams on the decisions and systems that shape their products."
      >
        <PrimaryHeroActions location="about_hero" />
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className="site-container">
          <FounderCard />
        </div>
      </section>

      <section className="bg-[#f5f6fb] py-20 sm:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <SectionHeading
            eyebrow="Working principles"
            title="A senior-led model for products with consequential decisions."
            description="The studio model stays deliberately focused: understand the operating context, make technical decisions visible and carry them into production."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map(([title, description]) => (
              <article key={title} className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                <span className="check"><Check aria-hidden="true" size={15} /></span>
                <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-slate-950">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-container grid gap-8 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-[#0b1020] p-8 text-white sm:p-10 lg:col-span-2">
            <p className="eyebrow eyebrow-light">Company record</p>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em]">Established work. A clear public identity.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              QuadB Technologies has shipped more than 200 projects across 10+ countries since 2016. Public leadership, contact and delivery accountability now sit directly with Vinayak.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 p-8 sm:p-10">
            <MapPin className="text-[#6558ff]" aria-hidden="true" />
            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">Based in</p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{siteConfig.location}</p>
            <p className="mt-5 text-sm leading-6 text-slate-600">Working with product teams across India and international markets.</p>
          </div>
        </div>
      </section>

      <CallToAction title="Work directly with the person shaping the technical direction." />
    </>
  )
}
