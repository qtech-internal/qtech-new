import Image from "next/image";

export default function ManualToMagic() {
  const beforeItems = [
    "Fragmented reports & manual analysis",
    "Manual peer checks",
    "Typed notes post-call",
    "Written from scratch",
    "Manually drafted, time-consuming",
  ];

  const afterItems = [
    "Dashboards & predictive insights",
    "AI-powered suggestions + bug detection",
    "Automated summaries + action items",
    "Drafted with AI, refined by experts",
    "AI-assisted, customized in seconds",
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-neue font-medium text-[32px] sm:text-[40px] lg:text-[48px] text-[#000000] mb-4 leading-tight">
            From Manual to Magical:
            <br />
            How AI Transforms Work
          </h2>
          <p className="text-[#000000] opacity-60 text-[14px] sm:text-[16px] max-w-3xl mx-auto leading-relaxed">
            AI is no longer a future concept—it&apos;s part of our daily
            execution. Here&apos;s how core tasks have evolved across our teams.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Before AI - Left Column */}
          <div className="space-y-8">
            <h3 className="text-[#615FFF] text-[14px] font-bold uppercase tracking-wider mb-8">
              BEFORE AI
            </h3>
            {beforeItems.map((item, index) => (
              <div
                key={index}
                className="text-[#000000] opacity-60 text-[16px] leading-[24px] font-normal"
              >
                {item}
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-[350px] h-[450px] aspect-square">
              <Image
                src="/images/alien.png"
                alt="AI Transformation"
                fill
                className="object-cover mix-blend-hard-light opacity-20"
              />
            </div>
          </div>

          {/* After AI - Right Column */}
          <div className="space-y-8">
            <h3 className="text-[#615FFF] text-[14px] font-bold uppercase tracking-wider mb-8">
              AI AT QUADB TECH
            </h3>
            {afterItems.map((item, index) => (
              <div
                key={index}
                className="text-[#000000] opacity-60 text-[16px] leading-[24px] font-normal"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
