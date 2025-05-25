import React from 'react';
import shape from "../assets/Images/shape.png";
import ColoredLine from '../components/ColoredLine';

const BusinessSolutions = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center py-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Left Column - Content */}
      <div className="w-full lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Our Business Solutions
          </h2>
          
  <ColoredLine />

          <div className="text-gray-500 space-y-6 text-lg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form...
            </p>
          </div>
        </div>
        <a
          href="https://demo.zozothemes.com/seoaal/services/"
          className="inline-block px-8 py-4 rounded-lg bg-gradient-to-br from-[#292391] to-[#e53e8e] text-white font-medium hover:bg-indigo-700 transition-colors"
        >
          Discover More
        </a>
      </div>

      {/* Right Column - Feature Cards */}
      <div
        className="w-full lg:w-1/2 relative bg-cover bg-center rounded-lg p-4 md:p-6"
        style={{ backgroundImage: `url(${shape})` }}
      >
        <div className="flex flex-col gap-6 items-center">
          {/* Feature Card 1 */}
          <div className="flex bg-white bg-opacity-80 p-4 rounded-2xl shadow-md w-full max-w-[445px]">
            <div className="flex-shrink-0 mt-4 mr-4 w-[60px] h-[160px] rounded-t-full bg-gradient-to-b from-[#292391] to-[#e53e8e]">
              <img
                src="https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2019/07/analysis-lt-30x30-1.png"
                alt="Data Analysis"
                className="w-10 h-10 ml-3 mt-7"
              />
            </div>
            <div className="mt-4">
              <h4 className="text-2xl font-semibold mb-3">Data Analysis</h4>
              <p className="text-gray-400 text-lg font-medium">
                Lorem ipsum dolor sit amet, dolor consectetur
              </p>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="flex bg-white bg-opacity-80 p-4 rounded-2xl lg:ml-45 shadow-md w-full max-w-[445px]">
            <div className="flex-shrink-0 mt-4 mr-4 w-[60px] h-[160px] rounded-t-full bg-gradient-to-b from-[#292391] to-[#e53e8e]">
              <img
                src="https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2019/08/stadistics-lt-30x30-1.png"
                alt="Marketing Analysis"
                className="w-10 h-10 ml-3 mt-7"
              />
            </div>
            <div className="mt-4">
              <h4 className="text-2xl font-semibold mb-3">Marketing Analysis</h4>
              <p className="text-gray-400 text-lg font-medium">
                Lorem ipsum dolor sit amet, dolor consectetur
              </p>
            </div>
          </div>

          {/* Feature Card 3 */}
          <div className="flex bg-white bg-opacity-80 p-4 rounded-2xl lg:mr-10 shadow-md w-full max-w-[445px]">
            <div className="flex-shrink-0 mt-4 mr-4 w-[60px] h-[160px] rounded-t-full bg-gradient-to-b from-[#292391] to-[#e53e8e]">
              <img
                src="https://demo.zozothemes.com/seoaal/wp-content/uploads/sites/40/2019/08/seo-lt-30x30-1.png"
                alt="SEO Link Building"
                className="w-10 h-10 ml-3 mt-7"
              />
            </div>
            <div className="mt-4">
              <h4 className="text-2xl font-semibold mb-3">SEO Link Building</h4>
              <p className="text-gray-400 text-lg font-medium">
                Lorem ipsum dolor sit amet, dolor consectetur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSolutions;
