import Link from "next/link";
import Image from "next/image";

export default function PartnersHeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero bg-cover bg-center bg-no-repeat pt-20 sm:pt-24">
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="font-neue font-medium text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] xl:text-[80px] leading-[1.1] tracking-tight uppercase text-white mb-6 sm:mb-8">
            <span className="block">BUILD, SCALE, AND TRANSFORM</span>
            <span className="block">GLOBAL CAPABILITY CENTERS</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white text-[14px] sm:text-[18px] lg:text-[20px] mb-2 sm:mb-2 lg:mb-2 font-normal mx-auto -top-[1rem] relative">
            Collaborate with us to build strategic hubs that deliver tangible growth, enhanced efficiency, and a competitive edge.
          </p>

          {/* CTA Button */}
          <Link
            href="#contact"
            className="group bg-transparent border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-white hover:text-[#4a5fc1] transition-all duration-300 font-medium text-sm sm:text-base cursor-pointer inline-flex items-center"
            aria-label="Talk to our experts"
          >
            Talk to Our Experts
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        {/* Trusted By Partners Section */}
        <div className="mt-14 sm:mt-14 lg:mt-14">
          <div className="text-center mb-8 sm:mb-8 lg:mb-8">
            <p className="text-white text-[14px] font-bold tracking-[0.08em] uppercase">
              TRUSTED BY
            </p>
          </div>
          <div className="flex items-center justify-center gap-12 sm:gap-16 lg:gap-20 xl:gap-24">
            <div className="relative h-full">
              <Image
                src="/images/partners-1.png"
                alt="Partner 1"
                width={48}
                height={48}
                className="h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="relative h-full">
              <Image
                src="/images/partners-2.png"
                alt="Partner 2"
                width={102}
                height={37}
                className="h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="relative h-full">
              <Image
                src="/images/partners-3.png"
                alt="Partner 3"
                width={306}
                height={36}
                className="h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="relative h-12 sm:h-12 lg:h-14">
              <Image
                src="/images/partners-4.png"
                alt="Partner 4"
                width={240}
                height={34}
                className="h-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="relative h-12 sm:h-12 lg:h-14">
              <Image
                src="/images/partners-5.png"
                alt="Partner 5"
                width={116}
                height={57}
                className="h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
