import { generateSEO } from '@/lib/seo'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = generateSEO({
  title: 'Terms and Conditions - Quadb Tech',
  description: 'Terms and Conditions for Quadb Tech - Learn about our service terms, user responsibilities, and legal agreements.',
})

export default function TermsPage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <div>
                <p className="text-sm text-gray-500 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
                <p className="text-lg leading-relaxed">
                  These Terms and Conditions govern the use of services provided by Quadb Tech, including Web2 and Web3 development services, 
                  cloud solutions, blockchain integration, smart contract development, decentralized applications (dApps), and related digital services. 
                  By engaging with Quadb Tech's services, clients agree to comply with these terms.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <p>
                  By engaging with Quadb Tech's services or visiting our website, you agree to comply with these terms. 
                  If you don't agree with any part of these terms, please don't use our services. We're here to help, 
                  so feel free to contact us if you have any questions about these terms or our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Provided</h2>
                <p>Quadb Tech provides comprehensive technology solutions including:</p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Web2 Development:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Custom web applications and websites</li>
                      <li>Mobile applications (iOS & Android)</li>
                      <li>E-commerce platforms and solutions</li>
                      <li>Content management systems</li>
                      <li>API development and integration</li>
                      <li>Database design and optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Web3 & Blockchain:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Smart contract development</li>
                      <li>Decentralized applications (dApps)</li>
                      <li>Blockchain integration services</li>
                      <li>NFT platforms and marketplaces</li>
                      <li>DeFi protocol development</li>
                      <li>Token creation and deployment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Cloud Solutions:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Cloud infrastructure setup</li>
                      <li>DevOps and CI/CD implementation</li>
                      <li>Cloud migration services</li>
                      <li>Scalable architecture design</li>
                      <li>Performance optimization</li>
                      <li>Security implementation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Consulting & Support:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Technology consulting</li>
                      <li>System maintenance and support</li>
                      <li>Code audits and reviews</li>
                      <li>Training and documentation</li>
                      <li>Project management</li>
                      <li>Technical advisory services</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  The scope of services will be defined in a separate agreement or work order between Quadb Tech and the client.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Client Responsibilities</h2>
                <p>To ensure successful project delivery, clients are responsible for:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Providing accurate information and project requirements</li>
                  <li>Supplying required access credentials and system information</li>
                  <li>Providing timely feedback and approvals</li>
                  <li>Meeting agreed-upon deadlines for deliverables</li>
                  <li>Ensuring availability of key stakeholders for project discussions</li>
                  <li>Providing necessary business context and domain knowledge</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  Quadb Tech is not responsible for delays caused due to incomplete or incorrect information from the client.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
                <div className="space-y-4">
                  <p>All payments must be made as per the agreed milestones or invoices:</p>
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Payment schedules will be defined in individual project agreements</li>
                    <li>Invoices are typically due within 30 days of receipt</li>
                    <li>Delayed payments may result in suspension of services</li>
                    <li>Late payment fees may apply as specified in the agreement</li>
                    <li>All prices are exclusive of applicable taxes unless stated otherwise</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600 font-medium">
                    Quadb Tech reserves the right to modify pricing with prior notice.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">5.1 Quadb Tech's Intellectual Property</h3>
                    <p>Unless otherwise agreed in writing, all proprietary tools, frameworks, libraries, and methodologies developed by Quadb Tech remain the intellectual property of the Company.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-gray-800 mb-2">5.2 Client's Intellectual Property</h3>
                    <p>Custom deliverables created specifically for the client will be owned by the client upon full payment, subject to:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Completion of all payment obligations</li>
                      <li>Third-party licenses and dependencies used in development</li>
                      <li>Quadb Tech's retained rights to proprietary tools and methodologies</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <p>
                  Quadb Tech shall not be held liable for any indirect, incidental, or consequential damages arising from the use of its services, including but not limited to:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Data loss or corruption beyond reasonable control</li>
                  <li>Security breaches caused by third-party systems</li>
                  <li>Blockchain network failures or congestion</li>
                  <li>Smart contract vulnerabilities in third-party protocols</li>
                  <li>Market volatility affecting cryptocurrency or token values</li>
                  <li>Downtime of external services or APIs</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  Our liability is limited to the total amount paid for the specific service giving rise to the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Termination of Services</h2>
                <p>
                  Either party may terminate the agreement with written notice, subject to:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Completion of ongoing commitments and deliverables</li>
                  <li>Settlement of all outstanding payments</li>
                  <li>Proper handover of project materials and access credentials</li>
                  <li>30-day notice period (unless otherwise specified in the agreement)</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  Termination does not relieve either party of obligations incurred prior to termination.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Changes to Terms</h2>
                <p>
                  Quadb Tech reserves the right to update these Terms and Conditions at any time. Clients will be notified of significant changes 
                  via email or through our website. Continued engagement with our services after changes indicates acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disclaimer</h2>
                <p>
                  The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
                  this Company excludes all representations, warranties, conditions and terms whether express or implied, 
                  statutory or otherwise.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
                <p>
                  We may terminate or suspend your access immediately, without prior notice or liability, for any reason 
                  whatsoever, including without limitation if you breach the Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
                <p>
                  These Terms shall be interpreted and governed by the laws of the jurisdiction in which Qudb IT Services 
                  operates, without regard to its conflict of law provisions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
                <p>If you have any questions about these Terms and Conditions, please contact us:</p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p><strong>Quadb Tech</strong></p>
                  <p>Email: support@quadbtech.com</p>
                  <p>Website: <Link href="/" className="text-blue-600 hover:text-blue-800">quadbtech.com</Link></p>
                  <p className="mt-2 text-sm text-gray-600">
                    We're here to help and will respond to your questions as quickly as possible.
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