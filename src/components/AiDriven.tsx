import Image from "next/image";

export default function AiDriven() {
  const metrics = [
    {
      metric: "AI adoption rate",
      benefit: "83% teams using AI tools",
    },
    {
      metric: "Task efficiency",
      benefit: "48% faster execution",
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
    <section className="bg-white relative overflow-hidden py-12 sm:py-16 lg:py-0 lg:pb-0 lg:mb-0 min-h-[600px] lg:h-[750px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        {/* Globe Image - Desktop Only */}
        <div className="hidden lg:block absolute top-0 w-full h-full pointer-events-none">
          <div className="absolute right-[42rem] top-[-26rem] w-[100rem] h-[100rem]">
            <Image
              src="/images/round.gif"
              alt="AI Globe"
              fill
              className="object-contain"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Metrics Content */}
        <div className="relative lg:absolute lg:right-[16rem] lg:top-[6rem] space-y-6 sm:space-y-8 w-full lg:w-auto px-4 sm:px-0">
          <div className="text-center lg:text-left mb-6 sm:mb-8 lg:mb-0">
            <h2 className="font-neue font-medium text-[28px] sm:text-[36px] lg:text-[48px] text-black mb-3 sm:mb-4 lg:mb-0 leading-tight">
              AI-Driven Impact
            </h2>
            <p className="text-gray-500 text-[14px] sm:text-[15px] lg:text-[16px] max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              The numbers speak for themselves. Here&apos;s how AI is
              transforming outcomes across the board:
            </p>
          </div>
          
          {/* Headers */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-0 pb-4">
            <div className="text-gray-400 text-[12px] sm:text-[13px] lg:text-[14px] uppercase tracking-wider font-medium">
              METRIC
            </div>
            <div className="text-gray-400 text-[12px] sm:text-[13px] lg:text-[14px] uppercase tracking-wider font-medium">
              HOW QUADB TECH BENEFITED
            </div>
          </div>
          
          {/* Metrics List */}
          <div className="space-y-6 sm:space-y-7 lg:space-y-8">
            {metrics.map((item, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-0 items-start">
                <div className="text-[#615FFF] text-[16px] sm:text-[20px] lg:text-[24px] leading-[1.3] lg:leading-[32px] tracking-[-0.01em] font-medium">
                  {item.metric}
                </div>
                <div className="text-black opacity-48 text-[16px] sm:text-[20px] lg:text-[24px] leading-[1.3] lg:leading-[32px] tracking-[-0.01em] font-medium">
                  {item.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
