import React from 'react';
import rounds from '../assets/Images/rounds.png';
import socialmedia from '../assets/Images/socialmedia.png';
import analysis from '../assets/Images/analysis.png';
import web from '../assets/Images/web.png';
import stadistics from '../assets/Images/stadistics.png';

const Info = () => {
  return (
    <section className="text-gray-600 body-font">
      {/* Image */}
      <div className="container px-5 pt-12">
        <img
          src={rounds}
          alt="Section"
          className="sm:w-46 sm:h-36  object-cover"
        />
      </div>

      {/* Heading */}
      <div className="container sm:w-140 px-5 py-8 sm:mx-100 text-start">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          We are one of the most effective SEO agencies in the universe.
        </h1>
        {/* Colored Line */}
        <div className="flex h-1 w-full overflow-hidden rounded bg-gray-200 mt-2 mb-4">
          <div className="h-full sm:w-[2%] w-[5%] bg-indigo-500"></div>
          <div className="h-full sm:w-[1%] w-[3%] bg-white"></div>
          <div className="h-full sm:w-[10%] w-[12%] bg-pink-500"></div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="container px-5 pb-24 mx-auto">
  <div className="flex flex-wrap justify-center -m-4">
    <Card
      title="Web Development"
      desc="There are many variations of lorem passages of Lorem Ipsum available, but the majority suffered the Lorem Ipsum generators."
      icon={web}
    />
    <Card
      title="Social Media Marketing"
      desc="There are many variations of lorem passages of Lorem Ipsum available, but the majority suffered the Lorem Ipsum generators."
      icon={socialmedia}
    />
    <Card
      title="SEO Link Building"
      desc="There are many variations of lorem passages of Lorem Ipsum available, but the majority suffered the Lorem Ipsum generators."
      icon={stadistics}
    />
    <Card
      title="Marketing Analysis"
      desc="There are many variations of lorem passages of Lorem Ipsum available, but the majority suffered the Lorem Ipsum generators."
      icon={analysis}
    />
  </div>
</div>

    </section>
  );
};

// Reusable Card Component
const Card = ({ title, desc, icon }) => (
    <div className="p-4 flex justify-center">
      <div className="w-full h-auto sm:w-[540px] sm:h-[304px] bg-blue-800 border-2 border-gray-200 border-opacity-50 rounded-xl p-8 flex sm:flex-row flex-col">
      <div className="relative w-20 h-20 sm:mr-8 sm:mb-0 mb-4 mt-10 flex-shrink-0">
  {/* Gradient Circle */}
  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#292391] to-[#e53e8e] z-0"></div>

  {/* Image Positioned to Top-Right of Circle */}
  <div className="absolute -top-4 -right-4 z-10">
    <img src={icon} alt={title} className="w-20 h-18 object-contain" />
  </div>
</div>

        <div className="flex-grow  mt-5">
          <h2 className="text-white text-3xl font-semibold mb-3">{title}</h2>
          <p className="leading-relaxed mt-5 text-white">{desc}</p>
          <a className="mt-5 text-pink-600 inline-flex items-center" href="#">
            Read More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
    
  

export default Info;
