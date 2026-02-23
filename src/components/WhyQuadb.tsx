import Image from "next/image";

export default function WhyQuadb() {
  const stats = [
    { value: "5+", label: "GCC Centers" },
    { value: "70+", label: "Customers" },
    { value: "50+", label: "Years of experience" },
    { value: "2,000,000+", label: "SQFT Across" },
  ];

  const services = [
    {
      title: "Legal and regulatory compliance",
      description:
        "Before anything else, your GCC needs to be legally sound. This means making sure you're aligned with local rules—whether it's labor laws, tax requirements, or environmental regulations. It's about getting it right from day one so you can focus on growing confidently.",
    },
    {
      title: "Real estate",
      description:
        "Your team needs a home base—a well-located, thoughtfully designed space where they can collaborate, innovate, and thrive. A good office isn't just about desks; it's about creating an environment where people want to be.",
    },
    {
      title: "Technology",
      description:
        "Smooth collaboration starts with strong tech. That means fast internet, secure systems, video conferencing tools, and the software your team needs to do their best work—wherever they are.",
    },
    {
      title: "Human resources",
      description:
        "People are the heart of your GCC. From hiring and onboarding to supporting employee growth and well-being, a great HR team helps build a positive, high-performing workplace culture.",
    },
    {
      title: "Financial support",
      description:
        "Every new centre needs an investment—whether it's for rent, salaries, tools, or operations. Solid financial planning keeps your GCC running smoothly while you focus on impact.",
    },
    {
      title: "Support services",
      description:
        "Behind every productive team is a well-run space. Services like cleaning, security, maintenance, and catering may seem small—but they make a big difference in creating a safe, comfortable, and functional work environment.",
    },
    {
      title: "Transportation and logistics",
      description:
        "Depending on your operations, you might need support with moving people and materials—whether it's daily commutes, inter-office travel, or delivery of equipment and supplies.",
    },
  ];

  return (
    <section className="relative bg-[#F5F5F7] py-10 sm:py-10 lg:py-14 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/bg-building.png"
          alt="Background"
          fill
          className="object-cover opacity-15"
          quality={100}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="font-neue font-medium text-[36px] sm:text-[44px] lg:text-[48px] text-[#1D1D1F] mb-6 sm:mb-8 leading-[1.15]">
            Why Quadb Tech is the Ideal
            <br />
            Partner for Your GCC
          </h2>
          <p className="text-[#6E6E73] text-[14px] sm:text-[15px] lg:text-[16px] max-w-4xl mx-auto leading-[1.5] tracking-[-0.01em] mb-10 sm:mb-12">
            Managing over 2 million SQFT globally and serving 70+ clients, we offer integrated PropTech, optimized workflows, and access to top-tier talent-transforming your GCC into a future-ready innovation engine through smart tech integration and risk mitigation.
          </p>

          {/* Certification Logos */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
            <div className="relative">
              <Image
                src="/images/multi-why.png"
                alt="ISO 9001:2015"
                width={450}
                height={100}
                className="object-contain"
              />
            </div>
          </div>

          <p className="text-[#6E6E73] text-[14px] sm:text-[15px] lg:text-[16px] max-w-4xl mx-auto leading-[1.5]">
            With 25+ years of expertise and for strategic GCCs, Quadb Tech helps enterprises build high-performing, sustainable global hubs. Our centers are PLATINUM LEED and WELL certified, backed by $100M+ in infrastructure investment, and designed for secure, efficient operations—supported by ISO 9001, ISO 27001, and CMMI Level 3 standards.
          </p>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-3xl shadow-sm py-10 sm:py-12 lg:py-14 px-8 sm:px-16 mb-16 sm:mb-20 lg:mb-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-left">
                <div className="text-[32px] sm:text-[36px] lg:text-[40px] font-normal text-[#141414] mb-2 leading-none">
                  {stat.value}
                </div>
                <div className="text-[#141414] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[1.2]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-10 sm:mb-12 lg:mb-14">
          <h3 className="font-neue font-medium text-[32px] sm:text-[40px] lg:text-[48px] text-[#141414] mb-4 sm:mb-5 leading-[1.3]">
            What services will help you build the global capability center that your business needs?
          </h3>
          <p className="text-[#6E6E73] text-[14px] sm:text-[15px] lg:text-[16px] max-w-4xl leading-[1.5] tracking-[-0.01em] mb-1">
            Setting up a Global Capability Centre (GCC) is an exciting step—but the kind of support you need can vary based on your goals. Whether you&apos;re building a center for tech, finance, R&D, or customer support, the right mix of services can make all the difference.
          </p>
        </div>

        <p className="text-[#86868B] text-[14px] sm:text-[14px] uppercase tracking-[0.08em] font-[500] mb-2 sm:mb-2">
          COMMON SERVICES TO CONSIDER:
        </p>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-4 lg:gap-12 py-6 sm:py-7 lg:py-8"
            >
              <div>
                <h4 className="text-[#615FFF] text-[18px] sm:text-[20px] lg:text-[24px] font-medium leading-[1.33] tracking-[-0.01em]">
                  {service.title}
                </h4>
              </div>
              <div>
                <p className="text-[#646467] text-[16px] sm:text-[16px] lg:text-[16px] leading-[1.5] font-[400]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
