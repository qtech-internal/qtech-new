'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import type { CaseStudy } from '@/lib/content'
import { CaseStudyCard } from './PageSections'

export default function WorkExplorer({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [query, setQuery] = useState('')
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return caseStudies
    return caseStudies.filter((item) =>
      [item.title, item.category, item.service, item.summary, ...item.technology]
        .join(' ')
        .toLowerCase()
        .includes(normalized),
    )
  }, [caseStudies, query])

  return (
    <div>
      <div className="relative mx-auto mb-10 max-w-xl">
        <Search className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true" size={20} />
        <label htmlFor="work-search" className="sr-only">Search selected work</label>
        <input
          id="work-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by product, service or technology"
          className="form-input pl-14"
        />
      </div>
      <p className="sr-only" aria-live="polite">{results.length} case studies found</p>
      {results.length ? (
        <div className="grid gap-6 lg:grid-cols-2">
          {results.map((caseStudy) => <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />)}
        </div>
      ) : (
        <div className="rounded-3xl border border-dashed border-slate-300 p-12 text-center">
          <p className="text-lg font-semibold text-slate-950">No matching case studies</p>
          <p className="mt-2 text-slate-600">Try “AI”, “product engineering” or “blockchain”.</p>
        </div>
      )}
    </div>
  )
}
