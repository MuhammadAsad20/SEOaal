import React from 'react'
import PageHeaderSection from '../Sections/PageHeaderSection'
import ShopSideSection from '../Sections/ShopSideSection'
import ShopCardSection from '../Sections/ShopCardSection'

function Shop() {
  return (
    <div>
        <PageHeaderSection/>
        <div className="flex flex-col-reverse lg:flex-row justify-center items-start gap-10 px-4 max-w-7xl mx-auto mt-30">
  <div className="w-full lg:w-[30%]">
    <ShopSideSection/>
  </div>
  <div className="w-full lg:w-[70%]">
    <ShopCardSection/>
  </div>
  </div>
    </div>
  )
}

export default Shop