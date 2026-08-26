'use client'

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="site-container flex min-h-[65vh] flex-col items-start justify-center py-20">
      <p className="eyebrow">Something went wrong</p>
      <h1 className="mt-4 text-5xl font-semibold tracking-[-0.055em] text-slate-950">This page could not be loaded.</h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">Please try again. If the problem continues, use the contact page to reach Vinayak directly.</p>
      <button type="button" onClick={reset} className="button button-primary mt-8">Try again</button>
    </section>
  )
}
