import React from "react";
import strategy from "../assets/Images/strategy.png"; // Replace with your actual image path
import { FaArrowCircleRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Image Column */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className=" p-3 rounded shadow-md">
            <img src={strategy} alt="Launch" className="max-w-full h-auto" />
          </div>
        </div>

        {/* Text Column */}
        <div className="w-full lg:w-1/2">
          <div className="mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 ">
              The #1 SEO Services Company
            </h2>
            <div className="flex h-1 w-24 md:w-40 overflow-hidden rounded bg-gray-200 mb-6 mt-4">
            <div className="h-full w-[8%] bg-indigo-500"></div>
            <div className="h-full w-[5%] bg-white"></div>
            <div className="h-full w-[35%] bg-pink-500"></div>
          </div>
            <p className="text-gray-700 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* List Items */}
          <ul className="space-y-4 mb-6">
            {[
              "An array of business formulation strategies",
              "Revenue generation and user engagement plans",
              "Charting company growth via new metrics",
              "Establishing a strong foothold in the industry"
            ].map((item, index) => (
              <li key={index} className="flex items-start text-blue-900">
  <FaArrowCircleRight className="text-blue-900 mt-1 mr-3 text-lg" />
  <span>{item}</span>
</li>

            ))}
          </ul>

          {/* Button */}
          <src
            to="/our-story"
            className="inline-block bg-gradient-to-r from-[#292391] to-[#e53e8e] rounded-md text-white font-semibold py-3 px-6  transition duration-300"
          >
            Discover More
          </src>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
