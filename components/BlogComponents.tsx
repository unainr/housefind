import React from 'react'
import BlogContent from './BlogContent'

const BlogComponents = () => {
  return (
<div className="max-w-7xl mx-auto my-8 px-2">
  <div className="flex justify-center text-2xl md:text-3xl font-bold mb-4">
  Read our real
  estate recent news
  </div>
  <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-2 xl:p-5">
    <BlogContent/>

  </ul>
</div>


  )
}

export default BlogComponents