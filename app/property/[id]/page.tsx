'use client';
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import OwnerForm from '@/components/OwnerForm';

// Sample data for the houses
const houses = [
  {
    id: 1,
    name: 'Emily Clark',
    location: 'Downtown, Springfield',
    price: '$500,000',
    Parking: 2,
    Bathrooms: 2,
    Bedrooms: 3,
    bio: 'Specializing in sustainable home decor. Perfect for families looking for eco-friendly and stylish living spaces.',
    size: '180',
    furnishing: 'Semi-Furnished',
    ceilingHeight: '2.5m',
    constructionYear: 2015,
    renovationYear: 2020,
    heating: 'Electric Heating',
    intercom: 'Yes',
    images: ['/images/p1.jpg', '/images/p-1.jpg', '/images/p-2.jpg','/images/p-3.jpg'],
  },
  {
    id: 2,
    name: 'Sophia Taylor',
    location: 'Uptown, Springfield',
    price: '$350,000',
    Parking: 4,
    Bathrooms: 1,
    Bedrooms: 2,
    bio: 'Expert in modern minimalist interiors. Ideal for individuals who value simplicity and elegance in design.',
    size: '150',
    furnishing: 'Fully Furnished',
    ceilingHeight: '2.8m',
    constructionYear: 2018,
    renovationYear: 2021,
    heating: 'Gas Heating',
    intercom: 'No',
    images: ['/images/p2.jpg', '/images/p2-1.jpg', '/images/p2-2.jpg'],
  },
  {
    id: 3,
    name: 'Olivia Brown',
    location: 'Suburbs, Springfield',
    price: '$420,000',
    Parking: 1,
    Bathrooms: 5,
    Bedrooms: 1,
    bio: 'Focusing on vibrant and eclectic designs. Ideal for those looking for colorful and lively living environments.',
    size: '220',
    furnishing: 'Not Furnished',
    ceilingHeight: '3m',
    constructionYear: 2010,
    renovationYear: 2019,
    heating: 'Central Heating',
    intercom: 'Yes',
    images: ['/images/p3.jpg', '/images/p3-1.jpg', '/images/p3-2.jpg'],
  },
  {
    id: 4,
    name: 'Liam Johnson',
    location: 'City Center, Springfield',
    price: '$750,000',
    Parking: 5,
    Bathrooms: 3,
    Bedrooms: 4,
    bio: 'Expert in luxury residential design. Perfect for those looking for grandeur and comfort in one place.',
    size: '300',
    furnishing: 'Fully Furnished',
    ceilingHeight: '3.2m',
    constructionYear: 2012,
    renovationYear: 2022,
    heating: 'Underfloor Heating',
    intercom: 'Yes',
    images: ['/images/p4.jpg', '/images/p4-1.jpg', '/images/p4-2.jpg','/images/p4-3.jpg'],
  },

  {
    id: 5,
    name: 'Olivia Brown',
    location: 'City Center, Springfield',
    price: '$750,000',
    Parking: 5,
    Bathrooms: 3,
    Bedrooms: 4,
    bio: 'Expert in luxury residential design. Perfect for those looking for grandeur and comfort in one place.',
    size: '300',
    furnishing: 'Fully Furnished',
    ceilingHeight: '3.2m',
    constructionYear: 2012,
    renovationYear: 2022,
    heating: 'Underfloor Heating',
    intercom: 'Yes',
    images: ['/images/p5.jpg', '/images/p5-1.jpg', '/images/p5-2.jpg','/images/p5-3.jpg'],
  },

  {
    id: 6,
    name: 'Emily Clark',
    location: 'City Center, Springfield',
    price: '$750,000',
    Parking: 5,
    Bathrooms: 3,
    Bedrooms: 4,
    bio: 'Expert in luxury residential design. Perfect for those looking for grandeur and comfort in one place.',
    size: '300',
    furnishing: 'Fully Furnished',
    ceilingHeight: '3.2m',
    constructionYear: 2012,
    renovationYear: 2022,
    heating: 'Underfloor Heating',
    intercom: 'Yes',
    images: ['/images/p6.jpg', '/images/p6-1.jpg', '/images/p6-2.jpg','/images/p6-3.jpg'],
  },

  
  
];

interface Params {
  params: { id: string };
}

const SubProperty: React.FC<Params> = ({ params }) => {
  const { id } = params;
  const house = houses.find((house) => house.id.toString() === id);
  const [selectedImage, setSelectedImage] = useState(house ? house.images[0] : '');

  if (!house) return <div className="container mx-auto p-4">House not found</div>;

  return (
    <div className="container mx-auto p-6 sm:p-8 lg:p-12 space-y-16">
    {/* Header Section */}
    <div className="relative">
      <img
        src={selectedImage}
        alt={`${house.name} Image`}
        className="w-full h-64 sm:h-96 lg:h-[32rem] object-cover rounded-lg shadow-lg"
      />
      <div className="absolute top-6 left-6 sm:top-10 sm:left-10 text-white bg-black bg-opacity-60 p-4 sm:p-6 rounded-lg backdrop-blur-md">
        <h1 className="text-3xl sm:text-5xl font-extrabold">{house.name}</h1>
        <p className="text-lg sm:text-xl">{house.location}</p>
        <span className="text-xl sm:text-3xl font-bold">{house.price}</span>
      </div>
    </div>
  
    {/* Updated Image Gallery Section */}
    <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mt-4">
      {house.images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${house.name} Image ${index + 1}`}
          className="h-20 w-20 sm:h-28 sm:w-28 lg:h-36 lg:w-36 xl:h-48 xl:w-48 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-blue-500 hover:scale-105 transition duration-300 ease-in-out shadow-md"
          onClick={() => setSelectedImage(image)}
        />
      ))}
    </div>
  
    {/* Property Overview */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
      {/* Property Details Card */}
      <Card className='p-3'>
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl font-bold ">Property Details</CardTitle>
          <CardDescription className="">Explore the key features of this beautiful home.</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <p><strong>Size:</strong> {house.size} m²</p>
          <p><strong>Bedrooms:</strong> {house.Bedrooms}</p>
          <p><strong>Bathrooms:</strong> {house.Bathrooms}</p>
          <p><strong>Furnishing:</strong> {house.furnishing}</p>
          <p><strong>Construction Year:</strong> {house.constructionYear}</p>
          <p><strong>Renovation Year:</strong> {house.renovationYear}</p>
          <p><strong>Heating:</strong> {house.heating}</p>
          <p><strong>Intercom:</strong> {house.intercom}</p>
        </CardContent>
        <CardFooter>
          <p className="text-sm text-gray-500">For more information, please contact us.</p>
        </CardFooter>
  
        {/* Updated Additional Gallery Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8">
          <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg hover:scale-105 transition duration-300 ease-in-out shadow-lg"
              src="/images/p-1.jpg"
              alt="Gallery image"
            />
          </div>
          <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg hover:scale-105 transition duration-300 ease-in-out shadow-lg"
              src="/images/p3-2.jpg"
              alt="Gallery image"
            />
          </div>
          <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg hover:scale-105 transition duration-300 ease-in-out shadow-lg"
              src="/images/p-2.jpg"
              alt="Gallery image"
            />
          </div>
          <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg hover:scale-105 transition duration-300 ease-in-out shadow-lg"
              src="/images/p2-1.jpg"
              alt="Gallery image"
            />
          </div>
          <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg hover:scale-105 transition duration-300 ease-in-out shadow-lg"
              src="/images/p4-1.jpg"
              alt="Gallery image"
            />
          </div>
          <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg hover:scale-105 transition duration-300 ease-in-out shadow-lg"
              src="/images/p2-1.jpg"
              alt="Gallery image"
            />
          </div>
          <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg hover:scale-105 transition duration-300 ease-in-out shadow-lg"
              src="/images/p4-2.jpg"
              alt="Gallery image"
            />
          </div>
          <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg hover:scale-105 transition duration-300 ease-in-out shadow-lg"
              src="/images/p6-3.jpg"
              alt="Gallery image"
            />
          </div>
          <div className="relative">
            <img
              className="h-auto max-w-full rounded-lg hover:scale-105 transition duration-300 ease-in-out shadow-lg"
              src="/images/p5-3.jpg"
              alt="Gallery image"
            />
          </div>
        </div>
      </Card>
  
      {/* Agent Information and Schedule a Tour */}
      <div className="space-y-8">
        {/* Agent Details */}
        <div className=" rounded-lg shadow-xl p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold ">Agent Information</h2>
          <p className="">{house.bio}</p>
          <div className=" space-y-2">
            <p><strong>Location:</strong> {house.location}</p>
            <p><strong>Price:</strong> {house.price}</p>
          </div>
        </div>
  
        {/* Schedule a Tour Form */}
        <Card className="rounded-lg  p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold ">Schedule a Tour</h2>
         <OwnerForm/>
        </Card>
      </div>
    </div>
  </div>
  
  
  

  
  );
};

export default SubProperty;
