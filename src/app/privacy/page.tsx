import { generateSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = generateSEO({
  title: 'Privacy Policy',
  description: 'Privacy Policy for QuadB Tech. Learn how we collect, use, and protect your personal information and data. We are committed to protecting your privacy and ensuring transparency in all our operations.',
  keywords: ['Privacy Policy', 'Data Protection', 'GDPR', 'Data Security'],
  noIndex: false,
})

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-1 px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Back to Home Button */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <div>
                <p className="text-sm text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                <p className="text-lg leading-relaxed">
                  At Quadb Tech, we value your privacy and are committed to protecting your personal and business information. 
                  This Privacy Policy explains how we collect, use, and protect your information when you visit our website, 
                  contact us for services, or engage with our Web2 and Web3 development solutions, cloud services, and blockchain technologies.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Collection</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Information You Provide to Us</h3>
                    <p>When you contact us for services or through our website, we collect necessary business, technical, and personal information required to deliver services, including:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Contact details (name, email, phone number, company information)</li>
                      <li>Project-related data and requirements</li>
                      <li>System access credentials (when required for service delivery)</li>
                      <li>Business information relevant to your project needs</li>
                      <li>Communication preferences and feedback</li>
                      <li>Technical specifications and infrastructure details</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">Automatically Collected Information</h3>
                    <p>When you visit our website, we automatically collect:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>IP address and general location information</li>
                      <li>Browser type, version, and device information</li>
                      <li>Pages visited and navigation patterns</li>
                      <li>Time spent on our website and interaction data</li>
                      <li>Referring website and search terms used</li>
                      <li>Technical performance and error logs</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use of Information</h2>
                <p>The collected data is used solely for:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Service delivery and project execution</li>
                  <li>Communication regarding your projects and services</li>
                  <li>Billing and payment processing</li>
                  <li>Improving user experience and service quality</li>
                  <li>Providing technical support and maintenance</li>
                  <li>Analyzing website performance and usage patterns</li>
                  <li>Complying with legal and regulatory requirements</li>
                  <li>Protecting against fraud and ensuring security</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600 font-medium">
                  Quadb Tech does not sell client data to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
                <p>We respect your privacy and do not sell, rent, or trade your personal information. We may share your information only in these limited situations:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>When you give us permission to do so</li>
                  <li>With service providers who help us operate our website (like hosting providers)</li>
                  <li>To comply with legal requirements or court orders</li>
                  <li>To protect our rights or the safety of others</li>
                  <li>In connection with a business sale or merger (you would be notified)</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  Any third parties we work with are required to keep your information confidential and secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
                <p>
                  Quadb Tech implements industry-standard security measures to protect client data:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Encryption for data transmission and storage</li>
                  <li>Secure cloud storage with restricted access protocols</li>
                  <li>Regular security audits and monitoring</li>
                  <li>Multi-factor authentication for sensitive systems</li>
                  <li>Secure backup and recovery procedures</li>
                  <li>Employee training on data protection practices</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  However, no digital system is 100% secure. We continuously work to improve our security measures 
                  and will notify you of any security incidents that may affect your data.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
                <p>Client data is retained only as long as necessary for business and legal purposes:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Active project data: Duration of project plus 3 years for support</li>
                  <li>Contact inquiries: 2 years from last communication</li>
                  <li>Financial records: 7 years as required by law</li>
                  <li>Website analytics: 12 months</li>
                  <li>Marketing communications: Until you unsubscribe</li>
                </ul>
                <p className="mt-4">
                  Upon termination of services, data may be deleted upon written request, subject to legal retention requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Website Tracking</h2>
                <p>
                  Our website uses cookies to improve your experience:
                </p>
                <div className="space-y-3 mt-4">
                  <div>
                    <h4 className="font-medium text-gray-800">Essential Cookies</h4>
                    <p className="text-sm text-gray-600">Required for the website to function properly (cannot be disabled)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Analytics Cookies</h4>
                    <p className="text-sm text-gray-600">Help us understand how visitors use our website</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Preference Cookies</h4>
                    <p className="text-sm text-gray-600">Remember your settings and preferences</p>
                  </div>
                </div>
                <p className="mt-4">
                  You can control cookies through your browser settings. Disabling some cookies may affect how our website works for you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Web3 & Blockchain Data</h2>
                <p>
                  For blockchain-related services, it&apos;s important to understand:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Certain transaction data may be publicly visible on decentralized networks</li>
                  <li>Blockchain transactions are immutable and cannot be deleted</li>
                  <li>Smart contract interactions are recorded on public ledgers</li>
                  <li>Quadb Tech is not responsible for data transparency inherent to blockchain technology</li>
                  <li>We will inform you about public data implications before blockchain deployment</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
                <p>Quadb Tech may use third-party services to enhance our offerings:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Cloud providers (AWS, Google Cloud, Azure) for hosting and storage</li>
                  <li>APIs and blockchain networks for Web3 services</li>
                  <li>Analytics tools for website performance monitoring</li>
                  <li>Communication platforms for project collaboration</li>
                  <li>Payment processors for billing services</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  Clients agree that their data may be processed through these platforms under their respective privacy policies. 
                  We carefully select reputable providers who maintain high security and privacy standards.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights and Choices</h2>
                <p>You have several rights regarding your personal information:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Access: Request a copy of the information we have about you</li>
                  <li>Correction: Ask us to correct any inaccurate information</li>
                  <li>Deletion: Request that we delete your information</li>
                  <li>Opt-out: Unsubscribe from our communications at any time</li>
                  <li>Portability: Request your data in a portable format</li>
                  <li>Restriction: Ask us to limit how we use your information</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, simply contact us using the information below. We&apos;ll respond within 30 days.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children&apos;s Privacy</h2>
                <p>
                  Our website and services are intended for businesses and adults. We do not knowingly collect 
                  information from children under 13. If you believe we have collected information from a child, 
                  please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children&apos;s Privacy</h2>
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect 
                  personal information from children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Policy</h2>
                <p>
                  Quadb Tech reserves the right to update this Privacy Policy at any time. Clients will be notified of significant changes 
                  via email or through our website. Continued use of our services after changes indicates acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
                <p>If you have any questions about this Privacy Policy or how we handle your data, please contact us:</p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p><strong>Quadb Tech</strong></p>
                  <p>Email: support@quadbtech.com</p>
                  <p>Website: <Link href="/" className="text-blue-600 hover:text-blue-800">quadbtech.com</Link></p>
                  <p className="mt-2 text-sm text-gray-600">
                    We&apos;re committed to protecting your privacy and will respond to your inquiries promptly.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}