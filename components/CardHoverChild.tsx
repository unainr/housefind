import React from 'react'
const CardHoverChild = ({cardimg,newarrivals,description}:{cardimg:string,newarrivals:string,description:string}) => {
  return (
    <div className="sm:w-full md:w-1/2 lg:w-4/3 mb-6 px-4">
    <div className="relative rounded-lg overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
      <img
        alt="content"
        className="object-cover object-center h-72 w-full transition-transform duration-500 ease-in-out transform group-hover:scale-110"
        src={cardimg}
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-6">
        <h2 className="text-lg font-semibold text-gray-300 mb-1">{newarrivals}</h2>
        <h1 className="text-3xl font-bold text-white leading-tight">{description}</h1>
      </div>
    </div>
  </div>
  

  )
}

export default CardHoverChild