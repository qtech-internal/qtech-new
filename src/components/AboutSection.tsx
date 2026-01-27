export default function AboutSection() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-blue-400 text-sm font-semibold tracking-wider uppercase">ABOUT</span>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto leading-tight">
          QuadB Tech is a boutique innovation studio crafting next-generation digital solutions powered by Blockchain, AI, Web3, and the Metaverse. We partner with visionary startups and forward-thinking enterprises to build secure, scalable, and future-ready products that push the boundaries of what's possible.
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-gray-300 leading-relaxed">
                We don't just write code; we engineer digital ecosystems. From smart contracts and decentralized applications to intelligent systems and immersive experiences, our team blends deep technical mastery with creative problem-solving to deliver products that are built to last.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-gray-300 leading-relaxed">
                At our core, we believe technology should empower. That's why every solution we build is designed to enhance, accelerate digital transformation and unlock new opportunities in an increasingly decentralized world. With transparency, precision, and a partnership-first approach, we help businesses turn bold ideas into powerful realities.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl border border-white/10">
          <p className="text-white text-lg font-medium">
            Welcome to QuadB Tech, where innovation meets execution, and the future gets built today.
          </p>
        </div>
      </div>
    </section>
  )
}