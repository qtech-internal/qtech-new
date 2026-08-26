export default function Loading() {
  return (
    <div className="site-container min-h-[65vh] py-20" role="status" aria-label="Loading page">
      <div className="h-4 w-28 animate-pulse rounded-full bg-slate-200" />
      <div className="mt-7 h-16 max-w-3xl animate-pulse rounded-2xl bg-slate-200" />
      <div className="mt-5 h-7 max-w-xl animate-pulse rounded-xl bg-slate-100" />
      <span className="sr-only">Loading…</span>
    </div>
  )
}
