import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
   <footer className="px-3 pt-4 lg:px-9  ">
  <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="sm:col-span-2">
      <Link href="/" className="inline-flex items-center">
        <img src="/images/logo2.png" alt="logo" className="h-20 w-26" />
        
      </Link>
      <div className="mt-6 lg:max-w-xl">
        <p className="text-sm ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis mi, faucibus dignissim lorem
          id, imperdiet interdum mauris. Vestibulum ultrices sed libero non porta. Vivamus malesuada urna eu
          nibh malesuada, non finibus massa laoreet. Nunc nisi velit, feugiat a semper quis, pulvinar id
          libero. Vivamus mi diam, consectetur non orci ut, tincidunt pretium justo. In vehicula porta
          molestie. Suspendisse potenti. 
        </p>
      </div>
    </div>
    <div className="flex flex-col gap-2 text-sm">
      <p className="text-base font-bold tracking-wide ">Quick Links</p>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/property">Property</Link>
      <p className="text-base font-bold tracking-wide ">Support </p>
      <Link href="/register">Sign in</Link>
      <Link href="/login">Login</Link>
    </div>
    <div>
      <p className="text-base font-bold tracking-wide ">COMPANY IS ALSO AVAILABLE ON</p>
      <div className="flex items-center gap-1 px-2">
        <a href="#" className="w-full min-w-xl">
          <img src="https://mcqmate.com/public/images/icons/playstore.svg" alt="Playstore Button" className="h-10" />
        </a>
        <a className="w-full min-w-xl" href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA">
          <img src="https://mcqmate.com/public/images/icons/youtube.svg" alt="Youtube Button" className="h-28" />
        </a>
      </div>
      <p className="text-base font-bold tracking-wide ">Contacts</p>
      <div className="flex">
        <p className="mr-1 ">Email:</p>
        <a href="#" title="send email">housefind@company.com</a>
      </div>
    </div>
  </div>
  <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
    <p className="text-sm ">© Copyright 2024 Company. All rights reserved.</p>
    <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
      <li>
        <a href="#" className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy
          &amp; Cookies Policy
        </a>
      </li>
      <li>
        <a href="#" className="text-sm  transition-colors duration-300 hover:text-deep-purple-accent-400">Disclaimer
        </a>
      </li>
    </ul>
  </div>
</footer>

  )
}

export default Footer