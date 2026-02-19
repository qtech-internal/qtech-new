import Image from 'next/image'

export default function AiDriven() {
  const metrics = [
    {
      metric: "AI adoption rate",
      benefit: "83% teams using AI tools"
    },
    {
      metric: "Task efficiency",
      benefit: "48% faster execution"
    },
    {
      metric: "AI-trained employees",
      benefit: "94% trained in prompt engineering",
    },
    {
      metric: "Marketing speed",
      benefit: "65% faster content creation",
    },
    {
      metric: "HR automation",
      benefit: "70% less time screening resumes",
    },
    {
      metric: "Finance Automation",
      benefit: "40% less effort on reports",
    },
  ];

  return (
    <section className="bg-white relative overflow-hidden">
      <div className=" mx-auto px-4 sm:px-6">
        {/* Header - Centered */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative flex justify-left lg:justify-start">
            <div className="relative aspect-square right-[46rem] h-[100rem]">
              <Image
                src="/images/round.gif"
                alt="AI Globe"
                fill
                className="object-contain !top-[-26rem]"
                priority
              />
            </div>
          </div>

          {/* Right Side - Metrics */}
          <div className="space-y-8 absolute right-[16rem] !top-[6rem]">
            <div className="text-center mb-0 lg:mb-0">
              <h2 className="font-neue font-medium text-[32px] sm:text-[40px] lg:text-[48px] text-black mb-0 leading-tight">
                AI-Driven Impact
              </h2>
              <p className="text-gray-600 text-[16px] sm:text-[17px] lg:text-[18px] max-w-3xl mx-auto leading-relaxed">
                The numbers speak for themselves. Here&apos;s how AI is
                transforming outcomes across the board:
              </p>
            </div>
            {metrics.map((item, index) => (
              <div key={index}>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-gray-400 text-[11px] sm:text-[12px] uppercase tracking-wider mb-2 font-medium">
                      METRIC
                    </div>
                    <div className="text-[#615FFF] text-[16px] sm:text-[18px] lg:text-[20px] font-medium">
                      {item.metric}
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-[11px] sm:text-[12px] uppercase tracking-wider mb-2 font-medium">
                      HOW QUADB TECH BENEFITED
                    </div>
                    <div className="text-black text-[16px] sm:text-[18px] lg:text-[20px] font-medium">
                      {item.benefit}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
