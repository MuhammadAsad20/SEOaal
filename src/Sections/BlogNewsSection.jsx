import React from 'react';

const blogPosts = [
  {
    title: 'Do right now to feel less',
    date: 'October 4, 2018',
    comments: 2,
    img: 'https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/10/blog_1_th-370x324.jpg',
  },
  {
    title: 'SEO and digital marketing',
    date: 'October 4, 2018',
    comments: 1,
    img: 'https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/10/blog_2_th-370x324.jpg',
  },
  {
    title: 'Monitoring the Business',
    date: 'October 4, 2018',
    comments: 0,
    img: 'https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/10/blog_3_th-370x324.jpg',
  },
  {
    title: 'I must explain you how all',
    date: 'October 1, 2018',
    comments: 0,
    img: 'https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/10/blog_4_th-370x324.jpg',
  },
  {
    title: 'Effective Online Marketing',
    date: 'October 1, 2018',
    comments: 0,
    img: 'https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/10/blog_5_th-370x324.jpg',
  },
  {
    title: 'Effective Online Marketing',
    date: 'October 1, 2018',
    comments: 0,
    img: 'https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2018/10/blog_6_th-370x324.jpg',
  },
];

function BlogNewsSection() {
  return (
    <section className="py-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 md:h-320 w-[97%]">
        {blogPosts.map((post, index) => (
         <article key={index} className="bg-white shadow-lg rounded-t-[0%]  overflow-hidden">
         <img
  src={post.img}
  alt={post.title}
  className="w-full h-80 object-contain bg-white"
/>
         <div className="p-5">
           <h3 className="text-xl font-semibold mb-2">
             <a href="#" className="hover:text-pink-600">
               {post.title}
             </a>
           </h3>
           <div className="flex items-center justify-between text-sm text-gray-500">
             <p>{post.date} / {post.comments} Comment{post.comments !== 1 ? 's' : ''}</p>
             <button className="w-6 h-6 bg-gradient-to-r from-[#292391] to-[#e53e8e] rounded-full flex items-center justify-center">
               <svg
                 fill="none"
                 stroke="white"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth="3"
                 className="w-6 h-6 ml-1"
                 viewBox="0 0 24 24"
               >
                 <path d="M5 12h14M12 5l7 7-7 7" />
               </svg>
             </button>
           </div>
         </div>
       </article>
       
        ))}
      </div>
    </section>
  );
}

export default BlogNewsSection;
