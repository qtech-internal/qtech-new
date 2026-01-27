import Link from 'next/link'
import { generateSEO } from '@/lib/seo'

export const metadata = generateSEO({
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
  noIndex: true,
})

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Go back home
      </Link>
    </div>
  )
}