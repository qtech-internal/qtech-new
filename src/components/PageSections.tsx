import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react'
import type { CaseStudy, Service } from '@/lib/content'
import { siteConfig } from '@/lib/site'
import { BookingLink, TrackedLink } from './TrackedLinks'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      {description ? <p className="section-copy mt-5">{description}</p> : null}
    </div>
  )
}

export function QuestionAnswerSection({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string
  title: string
  items: Array<{ question: string; answer: string }>
}) {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="questions-heading">
      <div className="site-container grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:gap-20">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 id="questions-heading" className="section-title mt-4">{title}</h2>
          <p className="section-copy mt-5">
            These answers describe the working model in plain language. A discovery call can then focus on the specific product decision or constraint.
          </p>
        </div>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {items.map((item) => (
            <article key={item.question} className="py-7 first:pt-0 last:pb-0 sm:py-8">
              <h3 className="text-xl font-semibold tracking-[-0.025em] text-slate-950 sm:text-2xl">{item.question}</h3>
              <p className="mt-3 max-w-3xl leading-7 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  children?: React.ReactNode
}) {
  return (
    <section className="page-hero">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="site-container relative z-10 py-20 sm:py-28 lg:py-32">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <h1 className="page-title mt-5 max-w-5xl">{title}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">{description}</p>
        {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  )
}

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card group">
      <div className="flex items-start justify-between gap-6">
        <span className="service-number">{service.number}</span>
        <ArrowUpRight className="text-slate-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#6558ff]" aria-hidden="true" />
      </div>
      <p className="mt-10 text-sm font-semibold text-[#6558ff]">{service.eyebrow}</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{service.title}</h3>
      <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
      <Link href={`/services/${service.slug}`} className="stretched-link mt-8 inline-flex items-center gap-2 font-semibold text-slate-950">
        Explore this service <ArrowRight size={18} aria-hidden="true" />
      </Link>
    </article>
  )
}

const accentClasses: Record<CaseStudy['accent'], string> = {
  coral: 'from-[#ff7a3d]/25 via-[#f35081]/15 to-white',
  mint: 'from-[#20d9b0]/20 via-[#6558ff]/10 to-white',
  blue: 'from-[#43b8ff]/25 via-[#6558ff]/15 to-white',
  gold: 'from-[#f6c765]/30 via-[#f59e0b]/10 to-white',
}

export function CaseStudyCard({ caseStudy, priority = false }: { caseStudy: CaseStudy; priority?: boolean }) {
  return (
    <article className="case-card group">
      <Link href={`/work/${caseStudy.slug}`} className="block focus:outline-none">
        <div className={`case-image relative bg-gradient-to-br ${accentClasses[caseStudy.accent]}`}>
          <Image
            src={caseStudy.image}
            alt={caseStudy.imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`transition duration-500 group-hover:scale-[1.02] ${caseStudy.slug === 'covenant' ? 'object-contain p-20' : caseStudy.slug === 'blockseblock' ? 'object-contain' : 'object-cover'}`}
          />
        </div>
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <p className="eyebrow">{caseStudy.category}</p>
            <ArrowUpRight className="text-slate-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#6558ff]" aria-hidden="true" />
          </div>
          <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{caseStudy.title}</h3>
          <p className="mt-4 leading-7 text-slate-600">{caseStudy.summary}</p>
          {caseStudy.outcomes[0]?.value ? (
            <p className="mt-6 border-t border-slate-200 pt-5 text-sm text-slate-600">
              <strong className="mr-2 text-xl text-slate-950">{caseStudy.outcomes[0].value}</strong>
              {caseStudy.outcomes[0].label}
            </p>
          ) : null}
        </div>
      </Link>
    </article>
  )
}

export function FounderCard({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`founder-card ${compact ? 'founder-card-compact' : ''}`}>
      <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-slate-100">
        <Image
          src={siteConfig.founder.image}
          alt="Vinayak Kalra, Founder and Technical Lead at QuadB Technologies"
          fill
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="object-cover object-top"
        />
        <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-slate-950/85 p-5 text-white backdrop-blur">
          <p className="text-xl font-semibold">{siteConfig.founder.name}</p>
          <p className="mt-1 text-sm text-slate-300">{siteConfig.founder.title}</p>
        </div>
      </div>
      {!compact ? (
        <div className="flex flex-col justify-center py-4 lg:py-10">
          <p className="eyebrow">Direct founder involvement</p>
          <h2 className="section-title mt-4">Senior decisions stay close to the work.</h2>
          <p className="section-copy mt-6">
            Vinayak works directly with founders and operating teams across product strategy, architecture and delivery. The person shaping the technical direction remains accountable as the product moves into implementation.
          </p>
          <ul className="mt-7 space-y-3 text-slate-700">
            {['200+ projects delivered', 'Experience across 10+ countries', 'AI, SaaS, fintech and complex platforms'].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="check"><Check aria-hidden="true" size={15} /></span>{item}
              </li>
            ))}
          </ul>
          <a className="mt-8 inline-flex w-fit items-center gap-2 font-semibold text-slate-950 underline decoration-[#6558ff] decoration-2 underline-offset-4" href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">
            <ArrowUpRight aria-hidden="true" size={18} /> View Vinayak on LinkedIn
          </a>
        </div>
      ) : null}
    </div>
  )
}

export function CallToAction({
  eyebrow = 'Have a product decision to make?',
  title = 'Bring the hard part. We’ll make the path clearer.',
}: {
  eyebrow?: string
  title?: string
}) {
  return (
    <section className="bg-[#6558ff] text-white">
      <div className="site-container py-16 sm:py-24">
        <p className="eyebrow eyebrow-light">{eyebrow}</p>
        <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.05em] sm:text-6xl">{title}</h2>
          <BookingLink className="button button-light shrink-0" location="footer_cta" />
        </div>
      </div>
    </section>
  )
}

export function PrimaryHeroActions({ location }: { location: string }) {
  return (
    <>
      <BookingLink className="button button-light" location={location} />
      <TrackedLink href="/work" className="button button-ghost-light" eventName="cta_view_work" eventLabel={location}>
        View selected work <ArrowRight aria-hidden="true" size={18} />
      </TrackedLink>
    </>
  )
}
