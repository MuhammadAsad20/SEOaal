import React from 'react';
import ColoredLine from './ColoredLine';

const Stats = ({ title, description, stats, image, imageAlt = "stats" }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-4 py-16 mx-auto flex flex-wrap items-center">
        {/* Text Column */}
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto w-full lg:w-1/2 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-bold text-3xl sm:text-4xl mb-4 text-gray-900">
              {title}
            </h1>

            {/* Colored Line */}
            <ColoredLine/>

            <p className="leading-relaxed text-base sm:text-lg font-semibold">
              {description}
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap w-full">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 w-1/2 sm:w-1/2 md:w-1/3"
              >
                <h2 className="title-font font-medium text-4xl sm:text-5xl text-gray-900 mb-2">
                  {stat.value}
                  {stat.suffix && (
                    <sup className="text-pink-500 text-xl sm:text-2xl font-semibold align-super">
                      {stat.suffix}
                    </sup>
                  )}
                </h2>
                <p className="leading-relaxed text-sm sm:text-base md:text-lg font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Column */}
        <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <img
            className="object-contain w-[90%] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg"
            src={image}
            alt={imageAlt}
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
