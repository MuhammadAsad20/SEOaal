import React from "react";
import { motion } from "framer-motion";

const Cards = ({ number, title, description, imgSrc, link }) => {
  return (
    <motion.div
      className="w-full p-4 flex justify-center"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="rounded-lg shadow-md p-6 text-center space-y-4 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
        {/* Image */}
        <div className="flex justify-center mb-4">
          <img
            src={imgSrc}
            alt={title}
            width={80}
            height={80}
            className="mx-auto"
          />
        </div>

        {/* Number */}
        <h3 className="text-5xl font-bold text-gray-100 -mt-4">{number}</h3>

        {/* Title */}
        <h4 className="text-xl font-semibold text-blue-900">
          <a href={link} className="hover:underline">
            {title}
          </a>
        </h4>

        {/* Description */}
        <p className="text-gray-600">{description}</p>

        {/* Button */}
        <div className="flex justify-center mt-4">
          <button className="w-10 h-10 bg-gradient-to-r from-[#292391] to-[#e53e8e] rounded-lg flex items-center justify-center">
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
    </motion.div>
  );
};

export default Cards;
