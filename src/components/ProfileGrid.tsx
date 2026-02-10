'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Project {
  id: string
  title: string
  category: string
  description: string
  tags: string[]
  link?: string
  problems: string[]
  solution: string
  image: string
}

const projects: Project[] = [
   {
    id: 'heebee-coffee',
    title: 'Heebee Coffee | Complete Management System',
    category: 'Web2',
    description:
      'Heebee Coffee is a comprehensive management system designed to streamline all coffee shop operations. The platform includes admin dashboards for business oversight, POS system for sales management, inventory tracking, user-side web platform for customer engagement, and dedicated iOS & Android applications to manage all Heebee operations seamlessly.',
    tags: ['Web2', 'Full-stack', 'Mobile Apps', 'POS System', 'Inventory Management'],
    link: 'https://heebee.in/',
    image: '/heebe.png',
    problems: [
      'Coffee shop operations were fragmented across multiple disconnected systems',
      'Manual inventory tracking led to stock shortages and waste',
      'Lack of integrated POS and customer management system reduced operational efficiency',
      'No unified platform for managing multiple locations and staff'
    ],
    solution:
      'We developed a complete management ecosystem with role-based dashboards for admins, staff, and customers. The system includes a modern POS interface, real-time inventory tracking, customer loyalty programs, and mobile applications for both iOS and Android. All components are integrated to provide seamless data flow and comprehensive business insights.'
  },
  {
    id: 'siglab',
    title: 'SigLab | Interactive Landing Page',
    category: 'Web2',
    description:
      'SigLab is a modern, high-performance landing page designed to create a strong first impression for a tech-focused brand. The project focuses on delivering a visually engaging experience through smooth animations, interactive UI elements, and a responsive layout. The goal was to clearly communicate the brand’s vision, improve user engagement, and ensure consistent performance across all devices.',
    tags: ['Web2', 'UI/UX', 'Next.js', 'Framer Motion'],
    link: 'https://siglabs.xyz/',
    image: '/siglab.png',
    problems: [
      'Existing landing pages were static and visually outdated, leading to poor user engagement',
      'Lack of smooth animations and micro-interactions reduced the perceived quality of the brand',
      'Inconsistent responsiveness caused layout issues on mobile and tablet devices'
    ],
    solution:
      'We designed and developed a fast, responsive landing page using Next.js and Tailwind CSS, with Framer Motion handling smooth animations and transitions. The layout was optimized for all screen sizes, animations were carefully timed for performance, and the overall UI was aligned with modern design standards to enhance brand credibility and user engagement.'
  },

  {
    id: 'xpedition',
    title: 'Xpedition | Task & Rewards Platform',
    category: 'Web2',
    description:
      'Xpedition is a micro-task and rewards platform where users complete verified tasks, track social engagement, and earn real monetary rewards. The platform was built with a strong emphasis on accuracy, transparency, and scalability, ensuring both users and admins have a reliable and trustworthy system.',
    tags: ['Web2', 'Node.js', 'PostgreSQL', 'Docker', 'CI/CD'],
    link: 'https://xpedition.club/',
    image: '/xpedition.png',
    problems: [
      'There was no reliable automated system to verify task completion',
      'Manual task tracking led to fraud, delays, and inconsistencies',
      'Admins lacked real-time visibility into user activity, rewards, and performance metrics'
    ],
    solution:
      'We built the platform using an MVP-first approach to validate the concept before scaling. Automated task verification logic was implemented, along with detailed admin dashboards for monitoring users, tasks, and payouts. The system was containerized using Docker and integrated with CI/CD pipelines to ensure reliable deployments and long-term scalability.'
  },

  {
    id: 'blockseblock',
    title: 'Blockseblock | Hackathon Platform',
    category: 'Web2',
    description:
      'Blockseblock is a comprehensive hackathon management platform that enables participants, organizers, and judges to collaborate seamlessly. The platform covers the entire hackathon lifecycle, from event discovery and registration to project submission, judging, and payments.',
    tags: ['Web2', 'Full-stack', 'Security'],
    link: 'https://blockseblock.com/',
    image: '/blockseblock.png',
    problems: [
      'Hackathon workflows were fragmented across multiple tools',
      'There was no single system for managing submissions, judging, and payments',
      'Security risks existed around participant data and financial transactions'
    ],
    solution:
      'We developed an end-to-end hackathon ecosystem with clearly defined roles for participants, judges, and organizers. Secure dashboards were created for each role, sensitive data was encrypted, and workflows were streamlined to provide a smooth, secure, and transparent hackathon experience.'
  },

  {
    id: 'olympus',
    title: 'Olympus | VC & Mentor Discovery Platform',
    category: 'Web3',
    description:
      'Olympus is a decentralized networking platform that helps startups discover and connect with relevant venture capitalists and mentors. The platform introduces structured, preference-based matching to reduce the inefficiencies of traditional networking.',
    tags: ['Web3', 'ICP', 'React', 'Rust'],
    link: 'https://hptzq-yaaaa-aaaam-adb5a-cai.icp0.io/',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=400&fit=crop',
    problems: [
      'Founders struggled to identify and connect with the right investors and mentors',
      'Manual networking was time-consuming and unstructured',
      'There was little transparency in how connections were formed'
    ],
    solution:
      'We built a decentralized preference-based matching system using Rust smart contracts on the ICP blockchain. A React frontend provides a clean and intuitive interface, while the blockchain backend ensures secure, transparent, and tamper-proof data handling.'
  },

  {
    id: 'dfinance',
    title: 'Dfinance | DeFi Lending & Borrowing Platform',
    category: 'Web3',
    description:
      'Dfinance is a decentralized finance platform that allows users to lend, borrow, and swap digital assets while tracking penalties and credit scores. The platform focuses on transparency, security, and simplifying complex DeFi workflows.',
    tags: ['Web3', 'DeFi', 'ICP', 'Rust', 'React'],
    link: 'https://cszmy-vyaaa-aaaak-quhea-cai.icp0.io/',
    image: '/dfinance.png',
    problems: [
      'There was no unified DeFi solution offering lending and borrowing on ICP',
      'Existing platforms lacked transparency and real-time tracking',
      'Complex DeFi user interfaces discouraged adoption'
    ],
    solution:
      'We implemented secure Rust-based smart contracts on ICP to handle lending, borrowing, swaps, and scoring logic. A clean and user-friendly React interface was built to make complex DeFi interactions accessible and easy to understand.'
  },

  {
    id: 'mahaka',
    title: 'MAHAKA | NFT Ticketing Platform',
    category: 'Web3',
    description:
      'MAHAKA is a blockchain-powered tourism and ticketing platform where event and venue tickets are issued, sold, and managed as NFTs. The platform ensures fraud prevention, transparent ownership, and secure ticket management.',
    tags: ['Web3', 'NFT', 'ICP', 'EXTv2'],
    link: 'https://3rwjt-vqaaa-aaaak-akusq-cai.icp0.io/',
    image: '/mahaka.png',
    problems: [
      'Traditional ticketing systems were prone to duplication and fraud',
      'There was no clear ownership or resale transparency',
      'Manual ticket tracking created operational inefficiencies'
    ],
    solution:
      'We built an NFT-based ticketing system using EXTv2 smart contracts on ICP. Admin dashboards allow venues to mint, manage, and track tickets, while users benefit from verifiable and transparent ownership.'
  },

  {
    id: 'liftcash',
    title: 'LiftCash | Decentralized Voting System',
    category: 'Web3',
    description:
      'LiftCash is a decentralized governance platform designed to enable secure, transparent voting while incentivizing community participation through token-based rewards.',
    tags: ['Web3', 'Governance', 'ICP', 'Rust'],
    link: 'https://rer3b-zaaaa-aaaao-a3wmq-cai.icp0.io/',
    image: '/liftcash.png',
    problems: [
      'Centralized voting systems lacked transparency and trust',
      'Low voter participation due to lack of incentives',
      'Governance processes were opaque and difficult to audit'
    ],
    solution:
      'We developed a blockchain-backed voting system using smart contracts on ICP. The platform enables secure voting, transparent governance, and rewards users with tokens based on their participation.'
  }
];
const categories = ['All', 'Web2', 'Web3']


export default function ProfileGrid() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)
  const router = useRouter()

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  // Show only first 4 projects initially, or all if showAllProjects is true
  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 4)
  const hasMoreProjects = filteredProjects.length > 4

  // Handle scroll to update current slide indicator
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft
      const itemWidth = container.offsetWidth
      const index = Math.round(scrollLeft / itemWidth)
      setCurrentSlide(index)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  // Reset slide when category changes
  useEffect(() => {
    setCurrentSlide(0)
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    }
  }, [selectedCategory])

  const scrollToSlide = (index: number) => {
    const container = scrollContainerRef.current
    if (!container) return
    
    const itemWidth = container.offsetWidth
    container.scrollTo({
      left: itemWidth * index,
      behavior: 'smooth'
    })
  }

  const handleLearnMore = (projectId: string) => {
    router.push(`/profile/${projectId}`)
  }

  const handleVisitProject = (url: string) => {
    if (url && url !== '#' && url !== 'N/A') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setShowAllProjects(false) // Reset to show first 4 when category changes
  }

  const handleToggleShowAll = () => {
    setShowAllProjects(prev => !prev)
  }

  if (selectedProject) {
    return (
      <div className="animate-fade-in min-h-screen bg-white relative ml-6">
        <div
          className="absolute -top-[8px] lg:-top-[24px] -left-[50vw] ml-[46.12%] lg:ml-[49%] w-screen h-44 pointer-events-none z-0"
          style={{
            background: `
              linear-gradient(to bottom, rgba(173, 185, 247, 1) 0%, rgba(173, 185, 247, 0.8) 60%, rgba(255, 255, 255, 0.9) 90%, white 100%),
              linear-gradient(to right, rgba(173, 185, 247, 0.05) 0%, rgba(173, 185, 247, 0.2) 30%, #737eb9 100%)
            `
          }}
        />

        <div className="relative z-10">
          <div className="flex justify-end mb-12">
            <button 
              onClick={() => handleVisitProject(selectedProject.link || '#')}
              className="px-6 py-2 bg-transparent border border-white text-white rounded-full hover:bg-gray-800 transition-colors font-medium text-sm flex items-center gap-2"
            >
              Visit
              <ExternalLink size={16} />
            </button>
          </div>

          {/* Project Title */}
          <div className="mb-12 -mt-20 -ml-0.5">
            <h1 className="text-lg lg:text-7xl font-bold text-black mb-6 uppercase tracking-wide">
              {selectedProject.title.split('|')[0].trim()}
            </h1>
            
            {/* Back button positioned below the project name */}
            <button
              onClick={() => setSelectedProject(null)}
              className="flex items-center gap-2 text-gray-800 hover:text-blue-600 transition-colors"
            >
              <ArrowRight className="rotate-180" size={20} />
              Back to Profile
            </button>
          </div>

          {/* About Section */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-black mb-4">About {selectedProject.title.split('|')[0].trim()}</h2>
            <p className="text-gray-700 leading-relaxed text-base max-w-4xl">
              {selectedProject.description}
            </p>
          </div>

          {/* Project Image */}
          <div className="mb-12">
            <div className="relative w-full h-96 overflow-hidden select-none">
              <Image
                src={selectedProject.image}
                alt={`${selectedProject.title} project preview`}
                width={800}
                height={400}
                draggable={false}
                className="w-full h-full object-cover pointer-events-none"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 85vw"
              />
            </div>
          </div>

          {/* Problem Statement */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-black mb-6">Problem Statement</h2>
            <ul className="space-y-4 text-gray-700">
              {selectedProject.problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold text-black mb-6">Solution</h2>
            <p className="text-gray-700 leading-relaxed text-base max-w-4xl mb-8">
              {selectedProject.solution}
            </p>

            <div className="flex justify-center">
              <button 
                onClick={() => handleVisitProject(selectedProject.link || '#')}
                className="px-8 py-3 bg-transparent border border-gray-300 text-gray-600 rounded-full hover:bg-gray-50 transition-colors font-medium text-sm flex items-center gap-2"
              >
                Visit
                <ExternalLink size={16} />
              </button>
            </div>
          </div>

          {/* Technologies Used */}
        </div>
      </div>
    )
  }

  return (
    <div className="animate-fade-in space-y-12 relative ml-[10px]">
      {/* Large Globe overlay - positioned to show full gradient including bluish tones */}
      <div className="relative">
          {/* Service background overlay - positioned top right */}
          <div className="absolute -top-[58px] sm:-top-[65px] lg:-top-[72px] -right-4  w-[500px] sm:w-[900px] lg:w-[1780px] h-[300px] lg:h-[410px] opacity-30 pointer-events-none overflow-hidden">
            <div className="w-full h-full relative">
              <img
                src="/servicebg.png"
                alt="Service background"
                className="w-full h-full object-cover object-left"
                loading="lazy"
                decoding="async"
                style={{
                  filter: 'brightness(1.2) contrast(1.1)'
                }}
              />
            </div>
          </div>

          {/* Header */}
          
        </div>

      <div className="relative text-left space-y-4 z-10 ml-[10px]">
        <h1 className="text-4xl lg:text-6xl font-medium text-black">
          OUR PROFILE
        </h1>
        <p className="text-black text-base max-w-xl font-bold leading-relaxed ml-[4px]">
          From concept to launch — design,<br />
          development, AI, marketing and<br />
          support all under one roof.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 relative z-10 ml-[14px]">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Mobile Slider - visible only on mobile */}
      <div className="md:hidden relative z-10">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 px-1"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id}
              className="flex-shrink-0 w-full snap-center"
            >
              <div
                onClick={() => setSelectedProject(project)}
                className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/30 flex flex-col min-h-[450px]"
              >
                <div className="relative w-full h-72 overflow-hidden rounded-t-2xl select-none">
                  <Image
                    src={project.image}
                    alt={`${project.title} preview`}
                    width={600}
                    height={400}
                    draggable={false}
                    className="w-full h-full object-cover pointer-events-none"
                    sizes="100vw"
                    priority={index < 2}
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col bg-white rounded-b-2xl">
                  <div>
                    <h3 className="text-xl font-bold text-black group-hover:text-blue-600 transition-colors mb-2">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-4">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider dots indicator */}
        {displayedProjects.length > 1 && (
          <div className="flex justify-center gap-2 mt-4 mb-6">
            {displayedProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`transition-all rounded-full ${
                  currentSlide === index 
                    ? 'w-8 h-2 bg-blue-500' 
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Desktop Grid - hidden on mobile */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-10 relative z-10">
        {displayedProjects.map((project, index) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group bg-white rounded-2xl lg:rounded-3xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/30 flex flex-col min-h-[450px] hover:transform hover:scale-105 m-4"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative w-full h-72 overflow-hidden rounded-t-2xl lg:rounded-t-3xl select-none">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                width={600}
                height={400}
                draggable={false}
                className="w-full h-full object-cover pointer-events-none"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index < 2}
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6 lg:p-8 space-y-4 flex-1 flex flex-col bg-white rounded-b-2xl lg:rounded-b-3xl">
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-black group-hover:text-blue-600 transition-colors mb-2">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-600 text-sm lg:text-base leading-relaxed flex-1">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View More / View Less Button */}
      {hasMoreProjects && (
        <div className="flex justify-center pt-8 relative z-10">
          <button 
            onClick={handleToggleShowAll}
            className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium text-sm"
          >
            {showAllProjects ? 'View less' : 'View more'}
          </button>
        </div>
      )}
    </div>
  )
}