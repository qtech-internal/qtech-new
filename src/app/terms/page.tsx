import { createMetadata } from '@/lib/seo'
import { siteConfig } from '@/lib/site'

export const metadata = createMetadata({
  title: 'Terms and Conditions',
  description: 'Terms governing the QuadB Technologies website, inquiries and professional service engagements.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-24">
      <article className="legal-copy site-container max-w-4xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.055em] text-slate-950 sm:text-6xl">Terms and Conditions</h1>
        <p className="mt-5 text-sm text-slate-500">Last updated: 12 August 2026</p>

        <p className="mt-8 text-lg">
          These terms govern use of this website and provide the general framework for discussions with QuadB Technologies. A signed proposal, statement of work or other written agreement will control a specific client engagement.
        </p>

        <h2>1. Business identity</h2>
        <p>
          QuadB Technologies is a registered partnership in Punjab, India, with GSTIN {siteConfig.gstin} and principal place of business at {siteConfig.registeredAddress}. Contact: <a className="font-semibold text-slate-950 underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>

        <h2>2. Website information and inquiries</h2>
        <p>
          Website content is general information about capabilities and past work. It is not a binding offer, technical assurance or professional advice. Sending an inquiry, booking a call or receiving an initial response does not create a client relationship or confidentiality obligation unless agreed in writing.
        </p>

        <h2>3. Professional services</h2>
        <p>
          Fractional CTO, product strategy, AI engineering and software-development services will be governed by an agreed scope covering deliverables, milestones, responsibilities, acceptance criteria, fees and any project-specific assumptions. Changes to scope or dependencies may require a written change request.
        </p>

        <h2>4. Client responsibilities</h2>
        <ul>
          <li>Provide timely, accurate requirements, access, feedback and authorized decision-makers.</li>
          <li>Confirm rights to all data, content, systems and third-party services supplied for the work.</li>
          <li>Review deliverables and raise material issues within the agreed review periods.</li>
          <li>Use delivered systems lawfully and maintain credentials, operational controls and backups allocated to the client.</li>
        </ul>

        <h2>5. Fees, taxes and payment</h2>
        <p>
          Fees, schedules, expenses, taxes and late-payment terms will be stated in the applicable proposal or agreement. Unless explicitly included, third-party subscriptions, cloud usage, model usage, app-store fees and similar external costs are the client’s responsibility.
        </p>

        <h2>6. Intellectual property</h2>
        <p>
          Each party retains its pre-existing intellectual property, tools, methods and know-how. Ownership or licensing of project-specific deliverables will follow the signed agreement and usually becomes effective after payment of applicable fees. Third-party and open-source components remain subject to their own licenses.
        </p>

        <h2>7. Confidentiality and data</h2>
        <p>
          Confidentiality obligations, security requirements, data-processing roles and permitted portfolio use will be defined where relevant in the project agreement or a separate confidentiality agreement. Public case studies will use only approved names, visuals and verified outcomes.
        </p>

        <h2>8. Third-party services and AI systems</h2>
        <p>
          Projects may depend on cloud platforms, APIs, models, payment providers or other third parties whose availability and terms are outside QuadB’s control. AI outputs can be probabilistic and must be used with the validation, monitoring and human-review controls agreed for the specific workflow.
        </p>

        <h2>9. Warranties and liability</h2>
        <p>
          Specific warranties and remedies will be set out in the project agreement. To the maximum extent permitted by law, website content is provided “as is,” and QuadB is not liable for decisions made solely from general website information. Any liability cap, excluded loss categories and claim process for paid work will follow the signed agreement.
        </p>

        <h2>10. Suspension and termination</h2>
        <p>
          Either party may suspend or terminate an engagement as permitted by the applicable agreement, including for material breach or non-payment. The agreement will govern payment for completed work, transition responsibilities and provisions that survive termination.
        </p>

        <h2>11. Acceptable website use</h2>
        <p>
          You may not attempt unauthorized access, interfere with website operation, submit malicious or automated traffic, misrepresent your identity, or use website content in a way that infringes another party’s rights.
        </p>

        <h2>12. Governing law and courts</h2>
        <p>
          These website terms are governed by the laws of India. Courts with jurisdiction in Ludhiana, Punjab will have exclusive jurisdiction, subject to any dispute-resolution process agreed in a signed client contract.
        </p>

        <h2>13. Changes and contact</h2>
        <p>
          We may update these terms as the website or services change. Continued use after an update is subject to the current version. Questions may be sent to <a className="font-semibold text-slate-950 underline" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </article>
    </section>
  )
}
