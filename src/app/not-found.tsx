import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page not found | QuadB Technologies',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <section className="site-container flex min-h-[65vh] flex-col items-start justify-center py-20">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-7xl">That page is not here.</h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">The address may have changed during the website overhaul. The current services and case studies are available from the home page.</p>
      <Link href="/" className="button button-primary mt-8">Return home</Link>
    </section>
  )
}
