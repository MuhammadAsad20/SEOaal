import React from "react";
import bg from '../assets/Images/bg-page.png'; // Replace with your actual image path

const PageHeaderSection = ({ title }) => {
  return (
    <header
      className="relative bg-cover bg-center bg-no-repeat h-[60vh] md:h-[75vh] lg:h-[60vh]"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      
      <div className="relative z-10 container mx-auto px-4 text-center flex flex-col justify-center items-center h-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{title}</h1>
        <div className="mt-2 sm:mt-4 text-sm sm:text-base text-white">
          <a href="/" className="hover:underline text-gray-100">Home</a>
          <span className="mx-2">/</span>
          <span className="text-amber-300 font-medium">{title}</span>
        </div>
      </div>
    </header>
  );
};

export default PageHeaderSection;
