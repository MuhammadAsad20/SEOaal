  import React from 'react';

  const BlogSideSection = () => {
    const popularPosts = [
      {
        title: 'Do right now to feel less',
        date: 'October 4, 2018',
        comments: 2,
        img: 'https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/10/blog_1_th-80x80.jpg',
        link: 'https://demo.zozothemes.com/seoaal/2018/10/04/do-right-now-to-feel-less/',
      },
      {
        title: 'SEO and digital marketing',
        date: 'October 4, 2018',
        comments: 1,
        img: 'https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/10/blog_2_th-80x80.jpg',
        link: 'https://demo.zozothemes.com/seoaal/2018/10/04/seo-and-digital-marketing/',
      },
      {
        title: 'Monitoring the Business',
        date: 'October 4, 2018',
        comments: 0,
        img: 'https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/10/blog_3_th-80x80.jpg',
        link: 'https://demo.zozothemes.com/seoaal/2018/10/04/monitoring-business/',
      },
    ];

    const categories = [
      { name: 'Marketing', link: 'https://demo.zozothemes.com/seoaal/category/marketing/' },
      { name: 'Monitoring', link: 'https://demo.zozothemes.com/seoaal/category/monitoring/' },
      { name: 'Online Marketing', link: 'https://demo.zozothemes.com/seoaal/category/online-marketing/' },
      { name: 'SEO', link: 'https://demo.zozothemes.com/seoaal/category/seo/' },
    ];

    const tags = [
      { name: 'Marketing',  link: 'https://demo.zozothemes.com/seoaal/tag/marketing/' },
      { name: 'Monitoring',  link: 'https://demo.zozothemes.com/seoaal/tag/monitoring/' },
      { name: 'Online Marketing',  link: 'https://demo.zozothemes.com/seoaal/tag/online-marketing/' },
      { name: 'SEO',  link: 'https://demo.zozothemes.com/seoaal/tag/seo/' },
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
            <button type="submit" className="px-4 bg-pink-600 text-white rounded-r-md">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>

        {/* Popular Posts */}
<div className="relative mb-8 p-6 w-full lg:w-full h-[472px] overflow-hidden bg-white shadow rounded-md">

{/* 🔴 Pink Circle Decoration */}
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-24 h-24 bg-[#e53e8e] rounded-full z-0"></div>

{/* Actual Content */}
<div className="relative z-10">
  <h3 className="text-3xl font-semibold py-5 border-dashed border-pink-500 border-b-2 mb-10">Popular Posts</h3>
  <ul className="space-y-7">
    {popularPosts.map((post, index) => (
      <li key={index} className="flex space-x-3">
        <a href={post.link}>
          <img src={post.img} alt="" className="w-20 h-20 object-cover rounded" />
        </a>
        <div className='flex flex-col justify-around'>
          <a href={post.link} className="text-blue-900 w-45 hover:underline text-lg font-medium">
            {post.title}
          </a>
          <p className="text-sm text-gray-500 mt-1">
            <span>{post.date}</span> · <span>{post.comments} comments</span>
          </p>
        </div>
      </li>
    ))}
  </ul>
</div>
</div>

        {/* Categories */}
<div className="relative mb-8 p-6 w-full lg:w-full h-[329px] overflow-hidden bg-white shadow rounded-md">

{/* 🔴 Pink Circle Decoration */}
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-24 h-24 bg-[#e53e8e] rounded-full z-0"></div>

{/* Actual Content */}
<div className="relative z-10">
  <h3 className="text-3xl font-medium py-5 border-dashed border-pink-500 border-b-2 mb-10">Categories</h3>
  <ul className="space-y-5 text-blue-900">
    {categories.map((cat, index) => (
      <li key={index} className="flex items-center justify-between space-x-5">
        <i className="fa-solid fa-chart-pie"></i>
        <a href={cat.link} className="hover:text-pink-600 flex-1">
          {cat.name}
        </a>
      </li>
    ))}
  </ul>
</div>
</div>

       {/* Tags */}
<div className="relative mb-8 p-6 w-full lg:w-full h-[224px] overflow-hidden bg-white shadow rounded-md">

{/* 🔴 Pink Circle Decoration */}
<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-24 h-24 bg-[#e53e8e] rounded-full z-0"></div>

{/* Actual Content */}
<div className="relative z-10">
  <h3 className="text-2xl font-medium pb-3 border-dashed border-pink-500 border-b-2 mb-9">Tags</h3>
  <div className="flex flex-wrap gap-3">
    {tags.map((tag, index) => (
      <a
        key={index}
        href={tag.link}
        className="inline-block bg-pink-600 text-white text-sm font-medium px-5 py-1 rounded"
      >
        {tag.name}
      </a>
    ))}
  </div>
</div>
</div>

      </aside>
    );
  };

  export default BlogSideSection;
