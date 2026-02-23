import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="px-4 sm:px-6 py-12 relative">
      {/* Background overlay image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl h-[800px] sm:h-[1000px] lg:h-[1400px] mt-20 sm:mt-40 lg:mt-60">
          <Image
            src="/homepage.png"
            alt="Homepage background"
            width={412}
            height={313}
            loading="lazy"
            draggable={false}
            className="w-full h-full object-contain"
            quality={75}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 768px, 896px"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-6 sm:mb-8">
          <span className="text-[#615FFF] text-xs sm:text-sm font-semibold tracking-wider uppercase">ABOUT</span>
        </div>

        <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px] font-normal text-[#141414] mb-6 sm:mb-8 max-w-6xl mx-auto leading-tight px-2">
          QuadB Tech is a boutique innovation studio crafting next-generation digital solutions powered by Blockchain, AI, Web3, and the Metaverse. We partner with visionary startups and forward-thinking enterprises to build secure, scalable, and future-ready products that push the boundaries of what&apos;s possible.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mt-6 sm:mt-8 max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
            <div
              className="w-[56px] h-[56px] sm:w-[68px] sm:h-[68px] rounded-lg flex items-center justify-center flex-shrink-0 mt-1 mx-auto sm:mx-0"
              style={{
                background: 'linear-gradient(180deg, #E9ECFF 0%, #F8F9FF 100%)'
              }}
            >
              <Image src="/icon.png" alt="Code Icon" width={50} height={50} loading="lazy" draggable={false} className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-black opacity-64 leading-relaxed text-[14px] sm:text-[16px] lg:text-[18px]">
                We don&apos;t just write code; we engineer digital ecosystems. From decentralized applications and custom blockchain infrastructures to intelligent systems and immersive experiences, our team blends deep technical mastery with creative problem-solving to deliver products that are built to last.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-4">
            <div
              className="w-[56px] h-[56px] sm:w-[68px] sm:h-[68px] rounded-lg flex items-center justify-center flex-shrink-0 mt-1 mx-auto sm:mx-0"
              style={{
                background: 'linear-gradient(180deg, #E9ECFF 0%, #F8F9FF 100%)'
              }}
            >
              <Image src="/icon2.png" alt="Technology Icon" width={50} height={50} loading="lazy" draggable={false} className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]" />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-black opacity-64 leading-relaxed text-[14px] sm:text-[16px] lg:text-[18px]">
                At our core, we believe technology should empower. That&apos;s why every solution we build is designed to enhance efficiency, accelerate digital transformation, and unlock new opportunities in an increasingly decentralized world. With transparency, precision, and a partnership-first approach, we help businesses turn bold ideas into powerful realities.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 max-w-6xl mx-auto px-2">
          <p className="text-[#000000A3] opacity-64 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
            Welcome to QuadB Tech where innovation meets execution, and the future gets built.
          </p>
        </div>
      </div>
    </section>
  )
}