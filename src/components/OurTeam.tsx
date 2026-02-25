import Image from 'next/image'

const teamMembers = [
  {
    name: 'Vinayak Kalra',
    designation: 'Designation',
    image: '/images/vinayak-kalara.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur. Sed viverra in eget ipsum lacus cum eget bibendum aliquet. Maecenas posuere mollis ut orci vitae maecenas eget egestas. Ac vulputate nisl aenean feugiat egestas in nunc. Tortor massa adipiscing dictum interdum tincidunt.'
  },
  {
    name: 'Nishant Chawla',
    designation: 'Designation',
    image: '/images/nishant-chwla.jpeg',
    description: 'Lorem ipsum dolor sit amet consectetur. Sed viverra in eget ipsum lacus cum eget bibendum aliquet. Maecenas posuere mollis ut orci vitae maecenas eget egestas. Ac vulputate nisl aenean feugiat egestas in nunc. Tortor massa adipiscing dictum interdum tincidunt.'
  }
]

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
            A group of individuals collaborating on interdependent tasks to achieve a common goal or mission
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Profile Image and Info - Horizontal Layout */}
              <div className="flex items-center gap-5 mb-6 w-full max-w-md">
                {/* Profile Image with Purple Border */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="w-full h-full object-cover scale-[1.5]"
                        style={{ objectPosition: 'center 30%', position: 'relative', top: '1.5rem' }}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {member.designation}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify max-w-md">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
