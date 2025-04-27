import React from 'react';
import blog1 from '../assets/Images/blog1.jpg'
import blog2 from '../assets/Images/blog2.jpg'
import blog3 from '../assets/Images/blog3.jpg'

const News = () => {
  const newsData = [
    {
      title: 'Do right now to feel less',
      text: 'Explore the best culinary delights freshly crafted by our chefs.',
      img: blog1,
    },
    {
      title: 'SEO and digital marketing',
      text: 'We are expanding! Visit our newly opened branch in downtown.',
      img: blog2,
    },
    {
      title: 'Monitoring the Business',
      text: 'Check out our limited-time menu featuring seasonal ingredients.',
      img: blog3,
    },
  ];

  return (
    <section className="py-16 px-4 mb-30 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">Our News</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-10 text-left">
              <h3 className="text-3xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              

            </div>
            <div className="py-5 px-10 flex items-center justify-between text-sm text-gray-500">
  <p>October 4, 2018 / 1 Comment</p>
  <button className="w-8 h-8 bg-gradient-to-r from-[#292391] to-[#e53e8e] rounded-full flex items-center justify-center">
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
        ))}
      </div>
    </section>
  );
};

export default News;
