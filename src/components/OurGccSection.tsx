import React from 'react';

const OurGccSection = () => {
  const frameworkData = [
    {
      aspect: 'Ideal For Organizations',
      byt: 'That are in the growth phase (SaaS, Startups, SMEs, Scale-ups) looking for cost-effective scalability. This allows them to augment their IT teams with Quadb Tech, enabling them to focus on key business priorities without disruption, while keeping their core teams aligned on strategic goals.',
      bot: 'That are expanding into new regions or global markets, enabling them to enhance their capabilities while minimizing internal disruption. This strategic approach prioritizes your organization\'s talent, culture, and brand identity.',
      gcc: 'That are large enterprises or multinational corporations aiming to optimize operational efficiency, boost innovation, and enhance cost efficiency. By setting up a GCC, organizations gain access to highly skilled talent, enabling them to scale rapidly and lower operational expenses while maintaining local flexibility.'
    },
    {
      aspect: 'Team Size',
      byt: 'You can start with as few as one team member.',
      bot: 'Requires a minimum team size of 50 or more members to ensure optimal performance and operational efficiency.',
      gcc: 'Requires a minimum team size of 100 members to ensure optimal performance and operational efficiency.'
    },
    {
      aspect: 'Ownership',
      byt: 'Quadb Tech manages the extended team while allowing them to work directly under your daily guidance for seamless integration.',
      bot: 'Quadb Tech establishes a dedicated extension to your existing legal entity for the BOT team, creating a well-defined and organized operational structure. This ensures efficient execution and offers flexibility with contract durations ranging from 18 to 48 months. At the end of the agreement, Quadb Tech oversees a smooth transfer of ownership to the client entity. This can be achieved through its build-operate-transfer model. This transfer provides a flatland-friendly solution, while all personnel and assets are automatically handed over to the client, reducing risk and guaranteeing a smooth and efficient handover process.',
      gcc: 'GCCs are entirely owned and managed by the parent company, granting it full control over operations and ensuring a direct alignment with corporate strategies and stringent quality standards. As a direct extension of the parent company, the GCC preserves and reflects its culture and core values. With in-house expertise and tailored capabilities, the GCC model empowers organizations to drive transformation across the organization, while reducing the need for external resources. This ownership structure strengthens the parent company\'s ability to shape and influence outcomes.'
    },
    {
      aspect: 'Recruitment',
      byt: 'Recruitment and management are handled entirely by Quadb Tech.',
      bot: 'Quadb Tech manages hiring/recruitment throughout the contract, with client approval required for all hiring decisions, including compensation and benefits.',
      gcc: 'Quadb Tech handles initial hiring with client approval under the client entity and offers additional hiring and operational support services as needed.'
    },
    {
      aspect: 'Playbook',
      byt: 'Taps into Quadb Tech\'s proven playbook, backed by 25 years of experience, to drive efficient and effective execution.',
      bot: 'Quadb Tech assists in developing a comprehensive playbook during setup and refines it throughout the contract.',
      gcc: 'Quadb Tech develops the GCC Playbook, which will serve as the definitive guide for making key decisions, a detailed action plan and a structured project roadmap.'
    },
    {
      aspect: 'Infrastructure',
      byt: 'Offers shared or customized infrastructure tailored to client needs.',
      bot: 'Provides customized infrastructure as per client requirements.',
      gcc: 'Provides tailored, branded, and fully equipped workspaces with integrated IT infrastructure.'
    },
    {
      aspect: 'Operational Governance',
      byt: 'Quadb Tech handles end-to-end management, covering hiring, payroll, IT, infrastructure, hardware, and all other administrative tasks.',
      bot: 'Manages operations with full policy control. Quadb Tech takes care of HR, IT support, recruitment, housekeeping, accounting, and administrative services for the contracted period and transfer.',
      gcc: 'The client retains full control over hiring and processes, while Quadb Tech provides comprehensive support. Quadb Tech operates in line with the agreement requirements.'
    },
    {
      aspect: 'Setup Expense',
      byt: 'There are no upfront setup costs.',
      bot: 'Low initial investment is required for infrastructure and setup.',
      gcc: 'Involves upfront investment for infrastructure and setup.'
    },
    {
      aspect: 'Implementation Duration',
      byt: 'Rapid setup, typically completed within a few weeks.',
      bot: 'Generally, it is set up within 4 to 12 weeks, depending on approvals.',
      gcc: 'Usually, it takes 12 weeks or more for full setup and implementation.'
    },
    {
      aspect: 'Scalability',
      byt: 'Quadb Tech enables agile, quick adjustments in team size, with Quadb Tech maintaining a robust bench of resources across 40+ technology stacks.',
      bot: 'Offers significant scalability with turnaround time varying based on resource availability and the capabilities outlined in the contract.',
      gcc: 'Offers flexible scalability options based on available resource pools, hiring capacity, infrastructure, and support operations.'
    },
    {
      aspect: 'Control Level',
      byt: 'Provides substantial control over team management, with Quadb Tech overseeing all aspects from start to finish.',
      bot: 'Offers high control over team management, with comprehensive support from Quadb Tech\'s Managed Services.',
      gcc: 'Offers high control over team management, with comprehensive support from Quadb Tech\'s Managed Services.'
    },
    {
      aspect: 'Exit Options',
      byt: 'Flexible exit options with transfer of knowledge.',
      bot: 'Quadb Tech ensures a seamless entity transfer to the client upon contract completion. All assets and employees are automatically transitioned to the client, ensuring minimal risk.',
      gcc: 'Offers straightforward exit without complications.'
    }
  ];

  return (
    <section 
      className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-hidden"
      style={{
        backgroundImage: 'url(/hero.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0a0e27]/95" />
      
      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Header */}
        <h2 className="text-[28px] sm:text-[36px] lg:text-[48px] leading-tight font-medium text-white text-center mb-3 sm:mb-4 px-2">
          Our GCC Framework
        </h2>
        
        <p className="text-white/80 text-center max-w-3xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base leading-5 sm:leading-6 font-normal px-2">
          To fully grasp the potential of Global Capability Centers, delve into our diverse models, key aspects, implementation approaches, and comprehensive capabilities.
        </p>

        {/* Table Container with Horizontal Scroll */}
        <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:mx-0">
          <div className="inline-block min-w-full align-middle px-4 sm:px-6 lg:px-0">
            <table className="w-full border-collapse min-w-[900px] lg:min-w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left px-2 sm:px-3 lg:px-4 py-3 sm:py-4 text-[#ffffffc4] font-medium text-[10px] sm:text-xs lg:text-sm uppercase tracking-wide align-top w-[15%]">
                    ASPECT
                  </th>
                  <th className="text-left px-2 sm:px-3 lg:px-4 py-3 sm:py-4 text-[#ffffffc4] font-medium text-[10px] sm:text-xs lg:text-sm uppercase tracking-wide align-top w-[28%]">
                    BUILD YOUR TEAM (BYT)
                  </th>
                  <th className="text-left px-2 sm:px-3 lg:px-4 py-3 sm:py-4 text-[#ffffffc4] font-medium text-[10px] sm:text-xs lg:text-sm uppercase tracking-wide align-top w-[28%]">
                    BUILD OPERATE TRANSFER (BOT)
                  </th>
                  <th className="text-left px-2 sm:px-3 lg:px-4 py-3 sm:py-4 text-[#ffffffc4] font-medium text-[10px] sm:text-xs lg:text-sm uppercase tracking-wide align-top w-[28%]">
                    GCC ACCELERATOR
                  </th>
                </tr>
              </thead>
              <tbody>
                {frameworkData.map((row, index) => (
                  <tr 
                    key={index}
                    className="border-b border-white/5 last:border-b-0"
                  >
                    <td className="px-2 sm:px-3 lg:px-4 py-4 sm:py-5 lg:py-6 text-white font-medium text-xs sm:text-sm lg:text-base align-top leading-5 sm:leading-6 lg:leading-8">
                      {row.aspect}
                    </td>
                    <td className="px-2 sm:px-3 lg:px-4 py-4 sm:py-5 lg:py-6 text-white/90 text-[11px] sm:text-xs lg:text-sm xl:text-base align-top leading-[1.5] sm:leading-[1.6] lg:leading-7">
                      {row.byt}
                    </td>
                    <td className="px-2 sm:px-3 lg:px-4 py-4 sm:py-5 lg:py-6 text-white/90 text-[11px] sm:text-xs lg:text-sm xl:text-base align-top leading-[1.5] sm:leading-[1.6] lg:leading-7">
                      {row.bot}
                    </td>
                    <td className="px-2 sm:px-3 lg:px-4 py-4 sm:py-5 lg:py-6 text-white/90 text-[11px] sm:text-xs lg:text-sm xl:text-base align-top leading-[1.5] sm:leading-[1.6] lg:leading-7">
                      {row.gcc}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Scroll Hint */}
        <div className="lg:hidden text-center mt-4">
          <p className="text-white/60 text-xs">
            ← Scroll horizontally to view all columns →
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurGccSection;
