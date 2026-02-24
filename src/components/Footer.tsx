import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 pb-2 sm:pb-4">
      <div className="mx-auto max-w-[84rem]">
        <div className="bg-[#141414] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
          {/* Top Section - Company Info and Navigation */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8 mb-6">
            {/* Left - Company Info */}
            <div className="w-full lg:max-w-sm">
              <h2 className="text-2xl font-semibold text-white mb-2 sm:mb-3">
                QuadB Tech
              </h2>
              <p
                className="text-white/70 leading-relaxed text-[16px]"
                style={{ lineHeight: "inherit" }}
              >
                QuadB Tech is a boutique innovation studio crafting
                next-generation digital solutions powered by Blockchain, AI,
                Web3, and the Metaverse. We partner with visionary startups and
                forward-thinking enterprises to build secure, scalable, and
                future-ready products that push the boundaries of what&apos;s
                possible.
              </p>
            </div>

            {/* Right - Navigation */}
            <div className="flex flex-col">
              <div className="flex flex-row items-center gap-3 sm:gap-4 lg:gap-6 flex-wrap justify-end">
                <Link
                  href="/services"
                  className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Services
                </Link>
                <Link
                  href="/how-we-work"
                  className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  How we work
                </Link>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Contact
                </Link>

                <Link
                  href="/contact"
                  className="bg-transparent border border-white/30 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-white/10 transition-all text-xs sm:text-sm flex items-center space-x-1.5"
                >
                  <span>Learn more</span>
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <div className=" pt-6 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
                  {/* Second Address */}
                  <div className="relative left-[4rem]">
                    <a
                      href="tel:+911234567890"
                      className="text-[#f59e0b] hover:text-[#fbbf24] transition-colors text-xs sm:text-sm font-medium block mb-1"
                    >
                      +1-6469213047
                    </a>

                    <a
                      href="mailto:andrew@quadbtech.com"
                      className="text-[#f59e0b] hover:text-[#fbbf24] transition-colors text-[10px] sm:text-xs block mb-2"
                    >
                      andrew@quadbtech.com
                    </a>

                    <address className="text-white/70 not-italic text-[10px] sm:text-xs leading-relaxed">
                      1850 Whitley Ave,<br />
                      Los Angeles, CA 90028,<br />
                      USA
                    </address>
                  </div>

                  {/* First Address */}
                  <div className="relative left-4">
                    <a
                      href="tel:+918360543857"
                      className="text-[#f59e0b] hover:text-[#fbbf24] transition-colors text-xs sm:text-sm font-medium block mb-1"
                    >
                      +91-7206246045
                    </a>

                    <a
                      href="mailto:nishant.chawla@quadbtech.com"
                      className="text-[#f59e0b] hover:text-[#fbbf24] transition-colors text-[10px] sm:text-xs block mb-2"
                    >
                      nishant.chawla@quadbtech.com
                    </a>

                    <address className="text-white/70 not-italic text-[10px] sm:text-xs leading-relaxed">
                      SCF 14, Market,
                      <br />
                      Urban Estate Phase II,
                      <br />
                      Jamalpur, Ludhiana, Punjab
                      <br />
                      141010
                    </address>
                  </div>

                  {/* Map */}
                  <div className="sm:col-span-2 lg:col-span-1">
                    <div className="w-full h-[150px] sm:h-[150px] rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54780.947844165144!2d75.916125!3d30.891997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a9d004dcd5121%3A0x149835e1bfd4449c!2sQB%20Tower!5e0!3m2!1sen!2sin!4v1771927848022!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="QuadB Tech Location"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Section - Addresses and Map */}

          {/* Bottom Section - Legal Links */}
          <div className="border-t border-white/10 pt-4 sm:pt-5 flex flex-row justify-center items-center gap-4 sm:gap-6">
            <Link
              href="/privacy"
              className="text-white/60 hover:text-white transition-colors text-[10px] sm:text-xs"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/60 hover:text-white transition-colors text-[10px] sm:text-xs"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
