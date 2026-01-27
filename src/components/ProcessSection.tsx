export default function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Discovery & Planning",
      description: "We start by understanding your vision, business needs, and target audience. Through research and consultation, we define project scope, goals, and a roadmap for success."
    },
    {
      number: "2", 
      title: "Design & Prototyping",
      description: "Our creative team crafts intuitive UI/UX designs and interactive prototypes to visualize the product and gather feedback before development begins."
    },
    {
      number: "3",
      title: "Development & Implementation", 
      description: "Our developers build scalable, secure, and high-performance solutions using the latest technologies. We follow agile methodologies for continuous progress and adaptability."
    }
  ]

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            How we work
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            At QuadB Tech, we follow a transparent, collaborative, and results-driven approach to deliver high-quality digital solutions. Our process ensures every project is executed efficiently while meeting your unique business goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent transform translate-x-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}