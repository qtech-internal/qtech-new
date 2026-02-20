import Image from "next/image";

export default function ManualToMagic() {
  const beforeItems = [
    "Fragmented reports & manual analysis",
    "Manual peer checks",
    "Typed notes post-call",
    "Written from scratch",
    "Manually drafted, time-consuming"
  ];

  const afterItems = [
    "Dashboards & predictive insights",
    "AI-powered suggestions + bug detection",
    "Automated summaries + action items",
    "Drafted with AI, refined by experts",
    "AI-assisted, customized in seconds"
  ];

  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="font-neue font-medium text-[28px] sm:text-[36px] lg:text-[48px] text-[#000000] mb-3 sm:mb-4 leading-tight px-4">
            From Manual to Magical:
            <br className="hidden sm:block" />
            <span className="sm:inline"> </span>How AI Transforms Work
          </h2>
          <p className="text-[#000000] opacity-64 text-[14px] sm:text-[15px] lg:text-[16px] max-w-3xl mx-auto leading-[22px] sm:leading-[23px] lg:leading-[24px] tracking-[-0.01em] font-normal px-4">
            AI is no longer a future concept—it&apos;s part of our daily execution. Here&apos;s how core tasks have evolved across our teams.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-8 items-start lg:items-center">
          {/* Before AI - Left Column */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8">
            <h3 className="text-[#615FFF] text-[13px] sm:text-[13.5px] lg:text-[14px] font-bold uppercase tracking-wider mb-4 sm:mb-6 lg:mb-8">
              BEFORE AI
            </h3>
            {beforeItems.map((item, index) => (
              <div key={index} className="text-[#141414] opacity-80 text-[18px] sm:text-[20px] lg:text-[24px] leading-[26px] sm:leading-[28px] lg:leading-[32px] tracking-[-0.01em] font-medium">
                {item}
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-first lg:order-none my-6 lg:my-0">
            <div className="relative w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[350px] h-[320px] sm:h-[380px] lg:h-[450px]">
              <Image
                src="/images/alien.png"
                alt="AI Transformation"
                fill
                className="object-cover mix-blend-hard-light opacity-10"
              />
            </div>
          </div>

          {/* After AI - Right Column */}
          <div className="space-y-5 sm:space-y-6 lg:space-y-8">
            <h3 className="text-[#615FFF] text-[13px] sm:text-[13.5px] lg:text-[14px] font-bold uppercase tracking-wider mb-4 sm:mb-6 lg:mb-8">
              AI AT QUADB TECH
            </h3>
            {afterItems.map((item, index) => (
              <div key={index} className="text-[#141414] opacity-80 text-[18px] sm:text-[20px] lg:text-[24px] leading-[26px] sm:leading-[28px] lg:leading-[32px] tracking-[-0.01em] font-medium">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
