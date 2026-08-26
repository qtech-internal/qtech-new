import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Layers3, ShieldCheck, Sparkles } from 'lucide-react'
import { caseStudies, services } from '@/lib/content'
import { companyProof } from '@/lib/site'
import { createMetadata } from '@/lib/seo'
import { faqSchema, webPageSchema } from '@/lib/schema'
import InteractiveGlobe from '@/components/InteractiveGlobe'
import JsonLd from '@/components/JsonLd'
import {
  CallToAction,
  CaseStudyCard,
  FounderCard,
  PrimaryHeroActions,
  QuestionAnswerSection,
  SectionHeading,
  ServiceCard,
} from '@/components/PageSections'

export const metadata = createMetadata({
  title: 'Founder-led AI Product Engineering',
  description:
    'Fractional CTO leadership and senior-led AI, SaaS, fintech, web and mobile product engineering for funded startups and SMEs.',
  path: '/',
})

const operatingPrinciples = [
  {
    icon: Sparkles,
    title: 'Start with the business constraint',
    description: 'Product, data and engineering decisions begin with the operating problem—not a fashionable technology.',
  },
  {
    icon: Layers3,
    title: 'Connect strategy to implementation',
    description: 'The roadmap, architecture and delivery plan are shaped together, so decisions survive contact with the build.',
  },
  {
    icon: ShieldCheck,
    title: 'Engineer trust into the system',
    description: 'Security, observability, human review and maintainability are product requirements from the beginning.',
  },
]

const homeMedia = caseStudies.filter((caseStudy) =>
  ['geniuscfo-ai', 'blockseblock', 'heebee'].includes(caseStudy.slug),
)

const founderQuestions = [
  {
    question: 'What does QuadB Technologies do?',
    answer:
      'QuadB provides fractional CTO leadership, AI product engineering and end-to-end SaaS, fintech, web and mobile product engineering.',
  },
  {
    question: 'Who is QuadB best suited for?',
    answer:
      'QuadB is best suited for funded startups and SMEs with a real product, an important technical decision and a need for senior accountability through delivery.',
  },
  {
    question: 'Who leads a QuadB engagement?',
    answer:
      'Vinayak Kalra, Founder and Technical Lead, works directly with founders and operating teams across product strategy, architecture and delivery oversight.',
  },
  {
    question: 'Where is QuadB Technologies based?',
    answer:
      'QuadB Technologies is based in Ludhiana, Punjab, India and works with product teams in India and international markets.',
  },
  {
    question: 'How can we start a conversation?',
    answer:
      'Book a 30-minute discovery call or send a project brief through the contact page. Start with the product decision, workflow or delivery bottleneck that needs senior attention.',
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={[
        webPageSchema({
          name: 'Founder-led AI Product Engineering',
          description: 'Fractional CTO leadership and senior-led AI, SaaS, fintech, web and mobile product engineering for funded startups and SMEs.',
          path: '/',
        }),
        faqSchema(founderQuestions),
      ]} />
      <section className="home-hero">
        <div className="home-hero-grid" aria-hidden="true" />
        <div className="site-container relative z-10 grid items-center gap-8 py-14 sm:py-20 lg:min-h-[720px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-4 lg:py-20">
          <div className="relative z-20 max-w-3xl">
            <p className="eyebrow eyebrow-light">Founder-led · Building products since 2016</p>
            <h1 className="home-display-title mt-6">
              <span>AI product</span>{' '}
              <span>engineering,</span>{' '}
              <span className="home-display-emphasis">with senior leadership built in.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              QuadB helps funded startups and SMEs turn difficult product decisions into reliable AI, SaaS, fintech, web and mobile systems—led directly by founder and technical lead Vinayak Kalra.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PrimaryHeroActions location="home_hero" />
            </div>
            <p className="home-hero-note mt-8">Direct technical involvement from product strategy through production delivery.</p>
          </div>
          <InteractiveGlobe />
        </div>
      </section>

      <section className="home-media-section" aria-labelledby="products-in-production">
        <div className="site-container py-10 sm:py-14">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Products in production</p>
              <h2 id="products-in-production" className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-3xl">
                A first look at the systems behind the proof.
              </h2>
            </div>
            <Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 underline decoration-[#6558ff] decoration-2 underline-offset-4">
              View all selected work <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </div>
          <div className="home-media-grid mt-8">
            {homeMedia.map((caseStudy, index) => (
              <Link href={`/work/${caseStudy.slug}`} className={`home-media-card home-media-card-${index + 1}`} key={caseStudy.slug}>
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.imageAlt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition duration-500 hover:scale-[1.025]"
                />
                <span className="home-media-label">
                  <span>{caseStudy.category}</span>
                  <strong>{caseStudy.title}</strong>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="site-container grid divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {companyProof.map((proof) => (
            <div key={proof.label} className="py-8 text-center sm:px-6 sm:py-10">
              <p className="text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl">{proof.value}</p>
              <p className="mt-2 text-sm text-slate-500">{proof.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f6fb] py-20 sm:py-28">
        <div className="site-container">
          <SectionHeading
            eyebrow="What QuadB does"
            title="Three ways to move a complex product forward."
            description="Choose focused technical leadership, an AI product build or end-to-end product engineering. Every engagement stays senior-led and outcome-oriented."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {services.map((service) => <ServiceCard key={service.slug} service={service} />)}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1020] py-20 text-white sm:py-28">
        <div className="site-container">
          <SectionHeading
            eyebrow="Why teams choose QuadB"
            title="Senior technical judgment stays connected to delivery."
            description="Founders choose QuadB when the product needs more than feature output: the engagement reduces ambiguity early, preserves context through implementation and makes progress visible to the people accountable for the business."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 lg:grid-cols-3">
            {operatingPrinciples.map(({ icon: Icon, title, description }, index) => (
              <div key={title} className="bg-[#0b1020] p-8 sm:p-10">
                <div className="flex items-center justify-between">
                  <Icon className="text-[#58e6c6]" aria-hidden="true" />
                  <span className="text-sm text-slate-500">0{index + 1}</span>
                </div>
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="site-container">
          <FounderCard />
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#f5f6fb] py-20 sm:py-28">
        <div className="site-container">
          <SectionHeading
            eyebrow="Selected work"
            title="Case studies where architecture and operations both mattered."
            description="Four focused examples across AI, connected operations, platform ecosystems and Bitcoin-native product engineering."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      <QuestionAnswerSection
        eyebrow="Questions founders ask"
        title="Direct answers before the first call."
        items={founderQuestions}
      />

      <CallToAction />
    </>
  )
}
