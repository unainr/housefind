import React from 'react'
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const Banner = () => {
  return (
   <>
   {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section
  className="relative bg-[url(/images/un1.jpg)] bg-cover bg-center bg-no-repeat h-[85vh]"
>
  <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>

  <div className="relative flex items-center justify-center h-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center text-white ltr:sm:text-left rtl:sm:text-right max-w-2xl">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
        Your Dream Home <br />
        <span className="block text-violet-500"> Awaits You. </span>
      </h1>
      <p className="mt-6 mb-1 text-base sm:text-lg leading-relaxed text-gray-200">
        Discover a place where you truly belong. With us, finding your perfect home has never been easier. Experience comfort, luxury, and style.
        
      </p>
      <div className="mb-4 py-2 hidden sm:block">
        <Button className="inline-block  bg-violet-600 rounded-full hover:bg-violet-500 transition duration-300">
        <Link href="/property" >
          Get Started
        </Link>
        </Button>
      </div>
    </div>
  </div>
</section>



   </>
  
  
  )
}

export default Banner