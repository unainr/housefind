import React from 'react'
import CardHoverChild from './CardHoverChild';
const HoverCard = () => {
  return (
    <section className="text-violet-500 body-font">
    <div className="container px-5 py-5 mx-auto">
      <div className="flex flex-wrap -mx-4 -mb-5 text-left">
    
        <CardHoverChild cardimg = "/images/hover1.jpg" newarrivals = "Explore a world of housing options." description = "Rent or buy your perfect space."/>
        <CardHoverChild cardimg = "/images/hover2.jpg" newarrivals = "Find your dream home here." description = "Discover your next adventure in real estate"/>
      </div>
    </div>
  </section>
  

  )
}

export default HoverCard