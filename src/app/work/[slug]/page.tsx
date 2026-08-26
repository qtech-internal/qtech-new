import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import { caseStudies, getCaseStudy } from '@/lib/content'
import { createMetadata } from '@/lib/seo'
import { breadcrumbSchema, caseStudySchema } from '@/lib/schema'
import JsonLd from '@/components/JsonLd'
import PageAnalytics from '@/components/PageAnalytics'
import { BookingLink, OutboundLink } from '@/components/TrackedLinks'
import { CallToAction, SectionHeading } from '@/components/PageSections'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }))
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = getCaseStudy(slug)
  if (!caseStudy) return {}
  return createMetadata({
    title: `${caseStudy.title} Case Study`,
    description: caseStudy.summary,
    path: `/work/${caseStudy.slug}`,
    type: 'article',
    image: {
      url: caseStudy.image,
      width: caseStudy.imageWidth,
      height: caseStudy.imageHeight,
      alt: caseStudy.imageAlt,
      type: caseStudy.imageType,
    },
  })
}

const backgrounds = {
  coral: 'from-[#ff7a3d]/25 via-[#f35081]/15 to-white',
  mint: 'from-[#20d9b0]/20 via-[#6558ff]/10 to-white',
  blue: 'from-[#43b8ff]/25 via-[#6558ff]/15 to-white',
  gold: 'from-[#f6c765]/30 via-[#f59e0b]/10 to-white',
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = getCaseStudy(slug)
  if (!caseStudy) notFound()
  const currentIndex = caseStudies.findIndex((item) => item.slug === caseStudy.slug)
  const next = caseStudies[(currentIndex + 1) % caseStudies.length]

  return (
    <>
      <PageAnalytics eventName="case_study_view" label={caseStudy.slug} />
      <JsonLd data={[
        caseStudySchema(caseStudy),
        breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
          { name: caseStudy.title, path: `/work/${caseStudy.slug}` },
        ]),
      ]} />

      <section className="bg-[#0b1020] text-white">
        <div className="site-container grid gap-12 py-20 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow eyebrow-light">{caseStudy.category}</p>
            <h1 className="mt-5 text-5xl font-medium tracking-[-0.06em] sm:text-7xl">{caseStudy.title}</h1>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.15em] text-slate-400">{caseStudy.service}</p>
            <p className="mt-6 text-lg leading-8 text-slate-300">{caseStudy.summary}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <BookingLink className="button button-light" location={`case_${caseStudy.slug}`} />
              <OutboundLink className="button button-ghost-light" href={caseStudy.externalUrl} label={`case_${caseStudy.slug}`}>
                View live product <ArrowUpRight aria-hidden="true" size={18} />
              </OutboundLink>
            </div>
          </div>
          <div className={`relative min-h-[340px] overflow-hidden rounded-[2rem] bg-gradient-to-br sm:min-h-[480px] ${backgrounds[caseStudy.accent]}`}>
            <Image
              src={caseStudy.image}
              alt={caseStudy.imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className={caseStudy.slug === 'covenant' ? 'object-contain p-20 sm:p-32' : caseStudy.slug === 'blockseblock' ? 'object-contain' : 'object-cover'}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="site-container grid divide-y divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
          {caseStudy.outcomes.map((outcome) => (
            <div key={outcome.label} className="py-9 sm:px-10 sm:py-12 first:pl-0 last:pr-0">
              {outcome.value ? <p className="text-3xl font-semibold tracking-[-0.05em] text-[#5145e5] sm:text-4xl">{outcome.value}</p> : null}
              <h2 className={`${outcome.value ? 'mt-2' : ''} text-xl font-semibold text-slate-950`}>{outcome.label}</h2>
              <p className="mt-3 leading-7 text-slate-600">{outcome.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">The challenge</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-slate-950">The operating problem behind the product.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{caseStudy.challenge}</p>
          </div>
          <div className="rounded-[2rem] bg-[#f5f6fb] p-7 sm:p-10">
            <p className="eyebrow">QuadB’s role</p>
            <p className="mt-5 text-2xl font-medium leading-9 tracking-[-0.03em] text-slate-950">{caseStudy.role}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f6fb] py-20 sm:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <SectionHeading eyebrow="What was built" title="A product architecture shaped around the real workflow." />
          <div className="space-y-4">
            {caseStudy.solution.map((item, index) => (
              <article key={item} className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex gap-4">
                  <span className="check mt-1"><Check size={15} aria-hidden="true" /></span>
                  <div>
                    <p className="text-sm font-bold text-[#6558ff]">0{index + 1}</p>
                    <p className="mt-2 text-lg leading-8 text-slate-700">{item}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="site-container">
          <p className="eyebrow">Product capabilities</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {caseStudy.technology.map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 py-12">
        <div className="site-container flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="eyebrow">Next case study</p>
            <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{next.title}</p>
          </div>
          <a href={`/work/${next.slug}`} className="button button-secondary">Read the case study <ArrowRight aria-hidden="true" size={18} /></a>
        </div>
      </section>

      <CallToAction title="Build the next product with the same level of technical ownership." />
    </>
  )
}
