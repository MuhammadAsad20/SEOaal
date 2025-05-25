import React from 'react'
import PageHeaderSection from '../Sections/PageHeaderSection'
import BlogSideSection from '../Sections/BlogSideSection'
import BlogNewsSection from '../Sections/BlogNewsSection'

function Blog() {
  return (
    <div>
      <PageHeaderSection />
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-4 max-w-7xl mx-auto mt-30">
  <div className="w-full lg:w-[70%]">
    <BlogNewsSection />
  </div>
  <div className="w-full lg:w-[30%]">
    <BlogSideSection />
  </div>
</div>


    </div>
  )
}

export default Blog