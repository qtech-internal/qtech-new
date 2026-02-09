import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="px-6 py-12  relative">
      {/* Background overlay image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative w-full max-w-4xl h-[1400px] mt-60 ">
          <Image
            src="/homepage.png"
            alt="Homepage background"
            width={412}
            height={313}
            loading="lazy"
            draggable={false}
            className="w-full h-full object-contain"
            quality={75}
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <span className="text-[#615FFF] text-sm font-semibold tracking-wider uppercase">ABOUT</span>
        </div>

        <h2 className="text-lg lg:text-[30px] font-medium text-[#141414] mb-8 max-w-6xl mx-auto leading-tight">
          QuadB Tech is a boutique innovation studio crafting next-generation digital solutions powered by Blockchain, AI, Web3, and the Metaverse. We partner with visionary startups and forward-thinking enterprises to build secure, scalable, and future-ready products that push the boundaries of what&apos;s possible.
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 mt-8 max-w-6xl mx-auto">
          <div className="flex items-start space-x-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
              style={{
                background: 'linear-gradient(180deg, #E9ECFF 0%, #F8F9FF 100%)'
              }}
            >
              <Image src="/icon.png" alt="Code Icon" width={24} height={24} loading="lazy" draggable={false} className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-black opacity-64 leading-relaxed">
                We don&apos;t just write code; we engineer digital ecosystems. From decentralized applications and custom blockchain infrastructures to intelligent systems and immersive experiences, our team blends deep technical mastery with creative problem-solving to deliver products that are built to last.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
              style={{
                background: 'linear-gradient(180deg, #E9ECFF 0%, #F8F9FF 100%)'
              }}
            >
              <Image src="/icon2.png" alt="Technology Icon" width={24} height={24} loading="lazy" draggable={false} className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-black opacity-64 leading-relaxed">
                At our core, we believe technology should empower. That&apos;s why every solution we build is designed to enhance efficiency, accelerate digital transformation, and unlock new opportunities in an increasingly decentralized world. With transparency, precision, and a partnership-first approach, we help businesses turn bold ideas into powerful realities.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-6xl mx-auto">
          <p className="text-[#000000A3] opacity-64 text-2xl font-medium">
            Welcome to QuadB Tech where innovation meets execution, and the future gets built.
          </p>
        </div>
      </div>
    </section>
  )
}