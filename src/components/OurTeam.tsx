"use client";

import Image from "next/image";
import { useState } from "react";

const teamMembers = [
  {
    name: "Vinayak Kalra",
    designation:
      "Co-Founder, QuadB Technologies\nTechnology Architecture, Engineering Excellence & Product Innovation",
    image: "/images/vinayak-kalara.jpg",
    description: `Vinayak Kalra is the Co-Founder and technical backbone of QuadB Technologies, responsible for driving the company's engineering excellence, system architecture, and product innovation since 2016. As a deeply experienced technology leader, Vinayak has architected and overseen the development of hundreds of scalable software platforms, ranging from enterprise SaaS systems to complex distributed and blockchain-based applications.

    He brings exceptional depth in full-stack engineering, cloud infrastructure, and scalable system design, ensuring that every platform built by QuadB is secure, high-performing, and designed for long-term scalability. Vinayak has built and mentored high-performance engineering teams, establishing strong technical foundations, development standards, and operational discipline across the organization.

    Vinayak plays a critical role in translating complex product visions into robust technical architectures. His ability to anticipate scaling challenges, optimize system performance, and implement future-ready infrastructure enables QuadB's clients to build with confidence and scale without technical limitations.

    His leadership ensures that QuadB Technologies consistently delivers world-class engineering outcomes, combining technical precision with execution reliability. Vinayak's commitment to engineering excellence and innovation continues to strengthen QuadB's position as a trusted global technology partner.`,
  },
  {
    name: "Nishant Chawla",
    designation:
      "Co-Founder, QuadB Technologies\nBusiness Strategy, Global Partnerships & Engineering Expansion",
    image: "/images/nishant-chwla.jpeg",
    description: `Nishant Chawla is the Co-Founder of QuadB Technologies and the strategic force behind the company's global growth, partnerships, and engineering expansion. Known for his exceptional problem-solving ability and execution-driven mindset, Nishant specializes in helping startups and enterprises navigate complex technology and scaling challenges by designing practical, high-impact solutions that align with long-term business goals.

    He has played a pivotal role in building QuadB Technologies into a trusted global engineering partner, working closely with founders, CTOs, and enterprise leaders across North America, Europe, and the Middle East. Nishant has successfully led initiatives enabling companies to scale their engineering capacity, accelerate product timelines, and establish Global Capability Centers (GCCs) in India, allowing them to operate with greater efficiency, flexibility, and cost optimization.

    His strength lies in identifying structural bottlenecks—whether in product development, engineering scalability, or operational efficiency—and designing frameworks that unlock sustainable growth. Nishant focuses on building long-term, outcome-driven partnerships, ensuring that QuadB operates not just as a service provider, but as a strategic technology partner deeply aligned with client success.

    With a clear vision to build a globally respected engineering organization, Nishant continues to lead QuadB's strategic direction, partnerships, and expansion, helping companies transform ambitious ideas into scalable, market-ready technology platforms.`,
  },
];

function TeamMember({
  member,
}: {
  member: (typeof teamMembers)[0];
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const truncateText = (text: string, maxLength: number = 400) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="flex flex-col items-start px-2 sm:px-4 md:px-0">
      {/* Profile Image and Info - Horizontal Layout */}
      <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6 w-full">
        {/* Profile Image with Purple Border */}
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
              <Image
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                className="w-full h-full object-cover scale-[1.5] relative top-3 sm:top-4 lg:top-6"
                style={{ objectPosition: "center 30%" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Member Info */}
        <div className="flex flex-col justify-center flex-1 min-w-0">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-900 mb-1 sm:mb-1.5">
            {member.name}
          </h3>
          <p className="text-gray-500 text-[10px] sm:text-xs md:text-sm lg:text-base whitespace-pre-line leading-tight sm:leading-normal">
            {member.designation}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="w-full">
        <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed text-justify whitespace-pre-line">
          {isExpanded ? member.description : truncateText(member.description)}
        </p>

        {member.description.length > 400 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium transition-colors duration-200 flex items-center gap-1"
          >
            {isExpanded ? (
              <>
                Show Less
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </>
            ) : (
              <>
                Read More
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default function OurTeam() {
  return (
    <section className="pb-24 sm:pb-24 lg:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[500] text-gray-900 mb-3">
            Our Team
          </h2>
          <p className="text-[#141414] text-[18px] sm:text-[18px] leading-relaxed max-w-3xl mx-auto">
            A group of individuals collaborating on interdependent tasks to
            achieve a common goal or mission
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
