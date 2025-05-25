import React from 'react';

const ShopSideSection = () => {
    const popularPosts = [
        {
            title: 'Woo Album #4',
            price: '£9.00',
            img: 'https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/cd_5_angle-1-80x80.jpg',
            link: 'https://demo.zozothemes.com/seoaal/2018/10/04/do-right-now-to-feel-less/',
        },
        {
            title: 'Happy Ninja',
            price: '£18.00',
            img: '	https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/T_7_front-1-600x600.jpg',
            link: 'https://demo.zozothemes.com/seoaal/2018/10/04/seo-and-digital-marketing/',
        },
        {
            title: 'Ninja Silhouette',
            price: '£20.00',
            img: '	https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2013/06/T_5_front-1-300x300.jpg',
            link: 'https://demo.zozothemes.com/seoaal/2018/10/04/monitoring-business/',
        },
    ];

    const categories = [
        { name: 'Clothing (12)', link: 'https://demo.zozothemes.com/seoaal/category/marketing/' },
        { name: 'Hoodies (6)', link: 'https://demo.zozothemes.com/seoaal/category/marketing/' },
        { name: 'T Shirts (6)', link: 'https://demo.zozothemes.com/seoaal/category/marketing/' },
        { name: 'Music (6)', link: 'https://demo.zozothemes.com/seoaal/category/marketing/' },
        { name: 'Album (4)', link: 'https://demo.zozothemes.com/seoaal/category/marketing/' },
        { name: 'Singles (2)', link: 'https://demo.zozothemes.com/seoaal/category/marketing/' },
        { name: 'Posters (5)', link: 'https://demo.zozothemes.com/seoaal/category/marketing/' },
        { name: 'Uncategorized (0)', link: 'https://demo.zozothemes.com/seoaal/category/marketing/' },
    ];


    return (
        <aside className="w-[97%] lg:w-full xl:w-[90%] mt-10 ">
            {/* Search Widget */}
            <div className="lg:mb-8 p-3 w-[90%] lg:w-[90%] h-[120px]">
                <form method="get" action="https://demo.zozothemes.com/seoaal/" className="flex">
                    <input
                        type="text"
                        name="s"
                        placeholder="Search for..."
                        className="w-full px-4 py-3 rounded-l-md focus:outline-none"
                    />
                    <button type="submit" className="px-4 bg-pink-600 hover:bg-blue-800 text-white rounded-r-md">
                        Search
                    </button>
                </form>
            </div>

            <div className="relative mb-3 p-7 w-full lg:w-full h-[224px] overflow-hidden bg-white shadow rounded-md">

{/* 🔴 Pink Circle at Top-Right */}
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-24 h-24 bg-[#e53e8e] rounded-full z-0"></div>

{/* Content Wrapper with Higher Z-Index */}
<div className="relative z-10">
  <h3 className="text-2xl font-medium pb-3 border-dashed border-pink-500 border-b-2 mb-9">Filter by price</h3>
  
  <div className="max-w-md mx-auto">
    <div className="relative h-4 bg-gray-200 rounded-full w-full mb-10">
      {/* Range indicator */}
      <div className="absolute h-1 bg-gray-900 rounded-full" style={{ left: "0%", width: "90%" }}></div>

      {/* Left handle */}
      <span
        tabIndex="0"
        className="absolute w-5 h-5 bg-black border border-gray-400 rounded-full cursor-pointer top-[-6px] shadow-md"
        style={{ left: "0%" }}
      ></span>

      {/* Right handle */}
      <span
        tabIndex="0"
        className="absolute w-5 h-5 bg-black border border-gray-400 rounded-full cursor-pointer top-[-6px] shadow-md"
        style={{ left: "90%" }}
      ></span>
    </div>

    <div className="flex justify-between items-center text-sm text-gray-500">
      <button className="px-6 py-1 bg-gradient-to-br from-blue-800 to-pink-700 text-white text-lg font-semibold rounded-md">
        Filter
      </button>
      <div>
        Price: <span className="from font-medium">£10</span> — <span className="to font-medium">£20</span>
      </div>
    </div>
  </div>
</div>
</div>


            {/* Categories */}
<div className="relative mb-8 p-6 w-full lg:w-full h-[468px] overflow-hidden bg-white shadow rounded-md">

{/* 🔴 Pink Circle at Top-Right */}
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-24 h-24 bg-[#e53e8e] rounded-full z-0"></div>

{/* Content Wrapper with Higher Z-Index */}
<div className="relative z-10">
  <h3 className="text-2xl font-medium py-5 border-dashed border-pink-500 border-b-2 mb-10">
    Product categories
  </h3>
  <ul className="space-y-5 text-blue-900">
    {categories.map((cat, index) => (
      <li key={index} className="flex items-center justify-between space-x-5">
        <a href={cat.link} className="hover:text-pink-600 flex-1">
          {cat.name}
        </a>
      </li>
    ))}
  </ul>
</div>
</div>


            {/* Popular Posts */}
<div className="relative mb-8 p-7 w-full lg:w-full h-[472px] overflow-hidden bg-white shadow rounded-md">

{/* 🔴 Pink Circle Decoration */}
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-24 h-24 bg-[#e53e8e] rounded-full z-0"></div>

{/* Actual Content */}
<div className="relative z-10">
  <h3 className="text-2xl font-semibold py-5 border-dashed border-pink-500 border-b-2 mb-10">
  Top rated products
  </h3>
  <ul className="space-y-7">
    {popularPosts.map((post, index) => (
      <li key={index} className="flex space-x-3">
        <a href={post.link}>
          <img
            src={post.img}
            alt=""
            className="w-20 h-20 object-cover rounded"
          />
        </a>
        <div className="flex flex-col justify-around">
          <a
            href={post.link}
            className="text-blue-900 w-45 hover:underline text-lg font-medium"
          >
            {post.title}
          </a>
          <p className="text-lg font-semibold text-gray-500 mt-1">
            <span>{post.price}</span> ·
          </p>
        </div>
      </li>
    ))}
  </ul>
</div>
</div>



        </aside>
    );
};

export default ShopSideSection;
