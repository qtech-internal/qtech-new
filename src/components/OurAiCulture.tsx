import Image from "next/image";

export default function OurAiCulture() {
  const pillars = [
    {
      image: "/images/o-1.png",
      title: "AI Mindset:",
      description:
        "Nurturing a forward-thinking, AI-aware mindset through continuous exposure to emerging technologies and problem-solving with AI.",
    },
    {
      image: "/images/o-2.png",
      title: "AI Officers",
      description:
        "Internal evangelists who lead by example, mentor peers, and help activate AI use cases across departments.",
    },
    {
      image: "/images/o-3.png",
      title: "AI Tools:",
      description:
        "Equipping every role with the right AI tools—whether for automation, data analysis, communication, or decision-making.",
    },
    {
      image: "/images/o-4.png",
      title: "AI Training",
      description:
        "Personalized upskilling with weekly hands-on labs, prompt engineering sessions, and guided certifications.",
    },
  ];

  return (
    <section className="bg-white py-12 sm:py-14 lg:pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-neue font-medium text-[28px] sm:text-[36px] lg:text-[48px] text-black opacity-60 mb-3 sm:mb-4 leading-tight px-4">
            Inside Our AI Culture
          </h2>
          <p className="text-gray-600 text-[13px] sm:text-[14px] lg:text-[16px] max-w-4xl mx-auto leading-relaxed px-4">
            At the heart of our AI-first transformation lies a strong internal
            foundation built on four essential pillars. These empower every
            employee to integrate AI seamlessly into their workflows while
            aligning with our long-term innovation goals.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-[#DBE0FA] rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-5 sm:p-6 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-5 lg:mb-6">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  width={100}
                  height={100}
                  className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] lg:w-[85px] lg:h-[85px]"
                />
              </div>

              {/* Title */}
              <h3 className="font-bold text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.2] lg:leading-[20px] text-[#000000] opacity-60 mb-3 sm:mb-3.5 lg:mb-4">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-[#000000] opacity-64 text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.5] lg:leading-[26px] font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
