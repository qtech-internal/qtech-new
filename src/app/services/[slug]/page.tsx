import { notFound } from 'next/navigation'
import { Check } from 'lucide-react'
import { caseStudies, getCaseStudy, getService, services } from '@/lib/content'
import { createMetadata } from '@/lib/seo'
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema'
import JsonLd from '@/components/JsonLd'
import PageAnalytics from '@/components/PageAnalytics'
import { CallToAction, CaseStudyCard, PageHero, PrimaryHeroActions, QuestionAnswerSection, SectionHeading } from '@/components/PageSections'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return createMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    image: null,
  })
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()
  const proof = getCaseStudy(service.proofSlug) ?? caseStudies[0]

  return (
    <>
      <PageAnalytics eventName="service_view" label={service.slug} />
      <JsonLd data={[
        serviceSchema(service),
        faqSchema(service.faqs),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.shortTitle, path: `/services/${service.slug}` },
        ]),
      ]} />
      <PageHero eyebrow={service.eyebrow} title={service.title} description={service.hero}>
        <PrimaryHeroActions location={`service_${service.slug}`} />
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">When this fits</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950">The situations this engagement is designed for.</h2>
            <ul className="mt-8 space-y-4">
              {service.bestFor.map((item) => (
                <li key={item} className="flex gap-3 text-lg leading-8 text-slate-600">
                  <span className="check mt-1"><Check size={15} aria-hidden="true" /></span>{item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] bg-[#f5f6fb] p-7 sm:p-10">
            <p className="eyebrow">Typical deliverables</p>
            <ul className="mt-7 divide-y divide-slate-200">
              {service.deliverables.map((item, index) => (
                <li key={item} className="flex items-center gap-4 py-4 text-lg font-medium text-slate-900">
                  <span className="text-sm font-bold text-[#6558ff]">0{index + 1}</span>{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#0b1020] py-20 text-white sm:py-28">
        <div className="site-container">
          <SectionHeading eyebrow="How QuadB approaches it" title="Enough structure to move quickly without hiding the trade-offs." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-3">
            {service.approach.map((step, index) => (
              <article key={step.title} className="bg-[#0b1020] p-8 sm:p-10">
                <p className="text-sm font-semibold text-[#58e6c6]">0{index + 1}</p>
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {proof ? (
        <section className="py-20 sm:py-28">
          <div className="site-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <SectionHeading eyebrow="Relevant proof" title={`${proof.title}: ${proof.service}`} description={proof.summary} />
            <CaseStudyCard caseStudy={proof} />
          </div>
        </section>
      ) : null}

      <QuestionAnswerSection
        eyebrow="Common questions"
        title={`What founders ask about ${service.shortTitle.toLowerCase()}.`}
        items={service.faqs}
      />

      <CallToAction eyebrow={`Need ${service.shortTitle.toLowerCase()}?`} title="Start with the product decision that cannot stay unresolved." />
    </>
  )
}
