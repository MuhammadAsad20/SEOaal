import React from 'react';
import blog1 from '../assets/Images/blog1.jpg';
import blog2 from '../assets/Images/blog2.jpg';
import blog3 from '../assets/Images/blog3.jpg';
import blog4 from '../assets/Images/blog4.jpg';
import blog5 from '../assets/Images/blog5.jpg';
import blog6 from '../assets/Images/blog6.jpg';

const News = () => {
  const newsData = [
    { title: 'Do right now to feel less', text: 'Explore the best culinary delights freshly crafted by our chefs.', img: blog1 },
    { title: 'SEO and digital marketing', text: 'We are expanding! Visit our newly opened branch in downtown.', img: blog2 },
    { title: 'Monitoring the Business', text: 'Check out our limited-time menu featuring seasonal ingredients.', img: blog3 },
    { title: 'Do right now to feel less', text: 'Explore the best culinary delights freshly crafted by our chefs.', img: blog4 },
    { title: 'SEO and digital marketing', text: 'We are expanding! Visit our newly opened branch in downtown.', img: blog5 },
    { title: 'Monitoring the Business', text: 'Check out our limited-time menu featuring seasonal ingredients.', img: blog6 },
  ];

  return (
    <section className="py-5 mb-50 px-4 bg-white flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">Our News</h2>

      <div className="w-full md:w-180 lg:w-250 xl:w-285 2xl:w-300 overflow-x-auto scroll-smooth snap-x snap-mandatory">
        <div className="flex gap-6 px-1">
          {newsData.map((item, index) => (
            <div
              key={index}
              className="snap-start shrink-0 bg-white shadow-lg rounded-lg overflow-hidden 
              w-full md:w-[45vw] lg:w-[31vw] xl:w-[25vw] 2xl:w-[20vw] transition-transform duration-500"
            >
              {/* Image with Hover Overlay */}
              <div className="relative group">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
              </div>

              {/* Card Content */}
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.text}</p>
              </div>
              <div className="py-4 px-6 flex items-center justify-between text-sm text-gray-500">
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
      </div>
    </section>
  );
};

export default News;
