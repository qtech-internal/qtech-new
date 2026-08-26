import Link from 'next/link'
import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { navigation, siteConfig } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1020] text-white">
      <div className="site-container py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr_0.8fr]">
          <div>
            <Link href="/" className="logo text-white">
              <span className="logo-mark logo-mark-light" aria-hidden="true">QB</span>
              <span>QuadB Technologies</span>
            </Link>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
              Founder-led AI product engineering and fractional CTO leadership for funded startups and SMEs.
            </p>
          </div>

          <div>
            <p className="footer-label">Explore</p>
            <ul className="mt-5 space-y-3">
              {navigation.slice(0, 3).map((item) => (
                <li key={item.href}>
                  <Link className="footer-link" href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li><Link className="footer-link" href="/privacy">Privacy</Link></li>
              <li><Link className="footer-link" href="/terms">Terms</Link></li>
            </ul>
          </div>

          <div>
            <p className="footer-label">Start a conversation</p>
            <ul className="mt-5 space-y-4 text-slate-300">
              <li>
                <a className="footer-contact" href={`mailto:${siteConfig.email}`}>
                  <Mail aria-hidden="true" size={18} />
                  <span className="break-all">{siteConfig.email}</span>
                </a>
              </li>
              <li className="footer-contact">
                <MapPin aria-hidden="true" size={18} />
                <span>{siteConfig.location}</span>
              </li>
              <li>
                <a className="footer-contact" href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">
                  LinkedIn <ArrowUpRight aria-hidden="true" size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} QuadB Technologies. All rights reserved.</p>
          <p>Registered partnership · GSTIN {siteConfig.gstin}</p>
        </div>
      </div>
    </footer>
  )
}
