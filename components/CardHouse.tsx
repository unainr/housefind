import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const houses = [
    { id: 1, name: 'Emily Clark', Parking:2,  Bathrooms:2,  Bedrooms:3, bio: 'Specializing in sustainable home decor', image: '/images/p1.jpg' },
    { id: 2, name: 'Sophia Taylor', Parking:4,  Bathrooms:1, Bedrooms:2,  bio: 'Expert in modern minimalist interiors', image: '/images/p2.jpg' },
    { id: 3, name: 'Olivia Brown',  Parking:1, Bathrooms:5,  Bedrooms:1, bio: 'Focusing on vibrant and eclectic designs', image: '/images/p3.jpg' },
    { id: 4, name: 'Liam Johnson',  Parking:5, Bathrooms:3,  Bedrooms:4, bio: 'Expert in luxury residential design', image: '/images/p4.jpg' },
    { id: 5, name: 'Steve Parker ',  Parking:5, Bathrooms:3,  Bedrooms:4, bio: ' South Sun House', image: '/images/p5.jpg' },
    { id: 6, name: 'Steve Parker ',  Parking:5, Bathrooms:3,  Bedrooms:4, bio: ' Pine Forest Bungalow', image: '/images/p6.jpg' },
    
  ];
const CardHouse = () => {
  return (
    <div className="grid grid-cols-1 gap-8 p-4 sm:grid-cols-2 lg:grid-cols-3">
    {houses.map((house) => (
      <Link
        key={house.id} // Use house.id as the unique key
        href="/property"
        className="block rounded-lg overflow-hidden  shadow-md transition transform hover:-translate-y-1 hover:shadow-2xl duration-300"
      >
        <Image
          alt={`${house.name} Image`} // Alt text using the house name
          src={house.image}
          width={300}
          height={300}
          className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold ">{house.name}</h3>
          <p className="mt-2 ">{house.bio}</p>
  
          <div className="mt-4 flex gap-6 text-sm ">
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>
              <p>Parking: <span className="font-medium ">{house.Parking} spaces</span></p>
            </div>
  
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              <p>Bathrooms: <span className="font-medium ">{house.Bathrooms} rooms</span></p>
            </div>
  
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
              <p>Bedrooms: <span className="font-medium text-gray-700">{house.Bedrooms} rooms</span></p>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
  
  
  )
}

export default CardHouse