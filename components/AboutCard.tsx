import React from 'react'

const AboutCard = () => {
  return (
    <section className="w-full mx-auto py-12   ">
    <div className="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex flex-col lg:flex-row gap-6 justify-center items-center">
      {/* Card 1 */}
      <div className="w-full lg:w-[50%]  shadow-lg rounded-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl duration-300">
        <img className="w-full h-64 object-cover lg:rounded-t-lg" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxob21lfGVufDB8MHx8fDE3MTA0OTAwNjl8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="property image" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Discover Premium Properties</h2>
          <p className="text-md mt-4 text-gray-700 dark:text-gray-400">Browse our premium listings and find the perfect space that suits your needs. We offer top-quality homes designed for comfort and elegance.</p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="w-full lg:w-[50%]  shadow-lg rounded-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl duration-300">
        <img className="w-full h-64 object-cover lg:rounded-t-lg" src="/images/b1.jpg" alt="property image" />
        <div className="p-6">
          <h2 className="text-2xl font-semibold ">Explore Modern Homes</h2>
          <p className="text-md mt-4 ">Find modern and stylish homes that reflect your personality. Our listings include the latest trends in architecture and interior design for an elevated living experience.</p>
        </div>
      </div>
    </div>
  </section>
  


  )
}

export default AboutCard