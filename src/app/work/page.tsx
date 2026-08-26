import { caseStudies } from '@/lib/content'
import { createMetadata } from '@/lib/seo'
import { CallToAction, PageHero, PrimaryHeroActions } from '@/components/PageSections'
import WorkExplorer from '@/components/WorkExplorer'

export const metadata = createMetadata({
  title: 'Selected Work',
  description:
    'Case studies across AI product engineering, connected operations, platform ecosystems and Bitcoin-native product development.',
  path: '/work',
})

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Technical depth that shows up in the product."
        description="A focused set of products where architecture, operating workflows and user experience had to work as one system."
      >
        <PrimaryHeroActions location="work_hero" />
      </PageHero>
      <section className="py-20 sm:py-28">
        <div className="site-container">
          <WorkExplorer caseStudies={caseStudies} />
        </div>
      </section>
      <CallToAction title="Have a product with equally hard edges? Let’s make them explicit." />
    </>
  )
}
