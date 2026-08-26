import { createMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site'

export const metadata = createMetadata({
  title: 'Privacy Policy',
  description: 'How QuadB Technologies collects, uses, protects and retains website and inquiry information.',
  path: '/privacy',
})

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-24">
      <article className="legal-copy site-container max-w-4xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-6xl">Privacy Policy</h1>
        <p className="mt-5 text-sm text-slate-500">Last updated: 12 August 2026</p>

        <p className="mt-8 text-lg">
          This policy explains how QuadB Technologies (“QuadB”, “we”, “us”) handles personal information collected through this website and related inquiry channels.
        </p>

        <h2>1. Business responsible for your information</h2>
        <p>
          QuadB Technologies is a registered partnership in Punjab, India (GSTIN {siteConfig.gstin}). Its principal place of business is {siteConfig.registeredAddress}. Questions may be sent to <a className="font-semibold text-slate-950 underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>

        <h2>2. Information we collect</h2>
        <ul>
          <li>Inquiry information such as your name, work email, company, requested engagement, timeline and project brief.</li>
          <li>Attribution information such as landing page, referrer and UTM campaign parameters.</li>
          <li>Basic technical and security information used to prevent abuse, including IP-derived rate-limit records and Cloudflare Turnstile verification.</li>
          <li>Analytics information, only after consent, about page visits and interactions with services, case studies, booking links and forms.</li>
        </ul>

        <h2>3. How we use information</h2>
        <ul>
          <li>To review and respond to inquiries, arrange discovery calls and prepare relevant proposals.</li>
          <li>To secure the website, detect automated submissions and enforce reasonable rate limits.</li>
          <li>To understand website performance and improve content when analytics consent has been granted.</li>
          <li>To comply with legal, tax, accounting or dispute-resolution obligations.</li>
        </ul>

        <h2>4. Service providers</h2>
        <p>
          We use Resend to deliver inquiry emails, Calendly for voluntary call scheduling, Cloudflare Turnstile for spam protection, Upstash for rate limiting, Google Analytics 4 for consent-based measurement, and our hosting provider to deliver the website. Their handling of information is governed by their respective terms and privacy policies.
        </p>

        <h2>5. Cookies and analytics choices</h2>
        <p>
          Google Analytics is disabled until you accept analytics. Advertising storage and ad-personalization signals remain disabled. Your choice is stored on your device and may be reset by clearing site storage. Essential security and form functions do not depend on analytics consent.
        </p>

        <h2>6. Retention</h2>
        <p>
          Unconverted inquiry information is retained for up to 12 months unless a longer period is required for an active discussion, legal obligation or dispute. Contract, tax and accounting records may be retained for the periods required by applicable law. Security records are kept only as long as reasonably necessary to prevent abuse.
        </p>

        <h2>7. International processing</h2>
        <p>
          Some service providers may process information outside India. We select established providers and use the contractual and technical safeguards available for those transfers.
        </p>

        <h2>8. Your choices and rights</h2>
        <p>
          You may ask to access, correct or delete inquiry information, withdraw consent, or object to further contact by emailing {siteConfig.email}. We may retain limited records where required by law or necessary to establish or defend legal claims.
        </p>

        <h2>9. Security and children</h2>
        <p>
          We use reasonable technical and organizational safeguards, but no internet transmission is completely secure. This website and its services are intended for business users and are not directed to children.
        </p>

        <h2>10. Changes and contact</h2>
        <p>
          We may update this policy when the website, service providers or applicable requirements change. The current version will always show its latest update date. Privacy questions may be sent to <a className="font-semibold text-slate-950 underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </article>
    </section>
  )
}
