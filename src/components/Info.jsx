import React from 'react';
import rounds from '../assets/Images/rounds.png';
import socialmedia from '../assets/Images/socialmedia.png';
import analysis from '../assets/Images/analysis.png';
import web from '../assets/Images/web.png';
import stadistics from '../assets/Images/stadistics.png';
import themelight from '../assets/Images/themelight.jpg';

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
      <div className="container lg:w-140 px-5 py-8 lg:mx-5 xl:mx-10 2xl:mx-80 text-start">
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
  <div className="w-full lg:w-[45%] xl:w-[610px] h-auto group relative lg:mx-3 lg:my-3 bg-blue-950 border-2 border-gray-200 border-opacity-50 rounded-xl p-8 flex lg:flex-row flex-col transition-all duration-500 ease-in-out overflow-hidden">

    {/* Background image on hover */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-all duration-500"
      style={{ backgroundImage: `url(${themelight})` }}
    ></div>

    {/* Content */}
    <div className="relative z-10 flex flex-col sm:flex-row">

      {/* Icon with gradient background that turns white on hover */}
      <div className="relative w-20 h-20 sm:mr-8 sm:mb-0 mb-4 mt-10 flex-shrink-0">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#292391] to-[#e53e8e] group-hover:from-white group-hover:to-white transition-all duration-500"></div>
        <div className="absolute -top-4 -right-4">
          <img src={icon} alt={title} className="w-20 h-20 object-contain transition duration-500 group-hover:brightness-100 group-hover:invert" />
        </div>
      </div>

      {/* Text that turns black on hover */}
      <div className="flex-grow mt-5">
        <h2 className="text-white group-hover:text-black text-3xl font-semibold mb-3 transition-all duration-500">
          {title}
        </h2>
        <p className="leading-relaxed mt-5 text-white group-hover:text-black transition-all duration-500">
          {desc}
        </p>
        <a className="mt-5 text-pink-600 inline-flex items-center group-hover:text-black transition-all duration-500" href="#">
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
