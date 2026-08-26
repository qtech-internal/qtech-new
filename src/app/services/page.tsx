import { ArrowRight, Check } from 'lucide-react'
import { services } from '@/lib/content'
import { createMetadata } from '@/lib/seo'
import { CallToAction, PageHero, PrimaryHeroActions, SectionHeading, ServiceCard } from '@/components/PageSections'

export const metadata = createMetadata({
  title: 'Services',
  description:
    'Fractional CTO leadership, AI product engineering, and senior-led SaaS, fintech, web and mobile product development.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Senior technical direction, followed through into delivery."
        description="QuadB combines founder-level technology leadership with the engineering capacity to turn decisions into production systems."
      >
        <PrimaryHeroActions location="services_hero" />
      </PageHero>

      <section className="bg-[#f5f6fb] py-20 sm:py-28">
        <div className="site-container">
          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <SectionHeading
            eyebrow="Engagement model"
            title="One accountable technical lead. The right delivery shape around the problem."
          />
          <div className="space-y-4">
            {[
              ['Focused discovery', 'Clarify the product constraint, operating context, evidence and decisions that matter before committing to a build.'],
              ['Decision-ready roadmap', 'Turn uncertainty into scope, architecture, milestones, risks and measurable acceptance criteria.'],
              ['Senior-led execution', 'Keep product and technical direction close to implementation through reviews, release decisions and operating feedback.'],
              ['Transferable ownership', 'Ship documentation, automated delivery and a system the long-term team can understand and operate.'],
            ].map(([title, description]) => (
              <article key={title} className="rounded-3xl border border-slate-200 p-6 sm:p-8">
                <div className="flex gap-4">
                  <span className="check mt-1"><Check size={15} aria-hidden="true" /></span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.025em] text-slate-950">{title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-14">
        <div className="site-container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">Not sure which shape fits?</p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Start with the decision, not a service label.</p>
          </div>
          <a href="/contact" className="button button-primary shrink-0">Describe the bottleneck <ArrowRight aria-hidden="true" size={18} /></a>
        </div>
      </section>

      <CallToAction title="Get senior technical clarity before the next expensive decision." />
    </>
  )
}
