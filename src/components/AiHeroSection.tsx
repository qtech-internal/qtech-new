import Link from "next/link";
import Image from "next/image";

export default function AiHeroSection() {
  const leftBenefits = [
    "Gain future-ready skills through hands-on AI learning.",
    "Boost creativity and productivity in everyday tasks.",
    "Join an organization where AI is democratized.",
    "Thrive in a culture of innovation and continuous learning."
  ]

  const rightBenefits = [
    "Work with a partner that delivers smarter, AI-enhanced results.",
    "Reduce costs & timelines with AI-powered development",
    "Access a team already trained & ready for AI-led execution.",
    "Skip experimentation-leverage our in-house AI expertise"
  ]

  return (
    <section className="relative overflow-hidden bg-hero bg-cover bg-center bg-no-repeat pb-6 sm:pb-10 lg:pb-1">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 lg:pt-32 pb-4 sm:pb-6 lg:pb-0">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="font-neue font-medium text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[1.1] tracking-tight uppercase text-white mb-4 sm:mb-6">
            <span className="block">AI-FIRST CULTURE AT</span>
            <span className="block">QUADB TECH</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white text-[16px] sm:text-[18px] lg:text-[22px] mb-6 sm:mb-8 font-normal">
            Where Teams Thrive, Innovation Follows.
          </p>

          {/* CTA Button */}
          <Link
            href="#benefits"
            className="group bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-white hover:text-[#4a5fc1] transition-all duration-300 font-medium text-sm sm:text-base cursor-pointer inline-flex items-center"
            aria-label="Learn more about AI-first approach"
          >
            Learn more
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Benefits Section */}
        <div id="benefits" className="mt-8 sm:mt-12 lg:mt-6">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-6">
            <h2 className="font-neue font-medium text-[24px] sm:text-[28px] lg:text-[36px] text-white mb-4 sm:mb-6 leading-[1.2] px-4">
              Why an AI-First Approach Benefits Everyone
            </h2>
            <p className="text-white/90 text-[14px] sm:text-[16px] lg:text-[18px] max-w-4xl mx-auto leading-[1.5] font-normal px-4">
              AI isn&apos;t just a trend-it&apos;s a transformative force embedded into our culture and client delivery. Here&apos;s how it empowers both our teams and our partners.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-4 items-center">
            {/* Left Benefits */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-white text-center lg:text-right order-2 lg:order-1">
              {leftBenefits.map((benefit, index) => (
                <div key={index} className="text-[13px] sm:text-[14px] lg:text-[16px] leading-relaxed px-4 lg:px-0">
                  {benefit}
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative w-full max-w-[250px] sm:max-w-[350px] lg:max-w-[800px] aspect-square">
                <Image
                  src="/images/tvbot.png"
                  alt="AI Robot"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Benefits */}
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-white text-center lg:text-left order-3">
              {rightBenefits.map((benefit, index) => (
                <div key={index} className="text-[13px] sm:text-[14px] lg:text-[16px] leading-relaxed px-4 lg:px-0">
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
