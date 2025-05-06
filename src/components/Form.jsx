import React from 'react'
import launch from '../assets/Images/launch.png';
import { motion } from "framer-motion";

function Form() {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-start gap-10 px-4 py-12">
      {/* Left Side - Form */}
      <div className="flex">
      <div className="w-full md:max-w-[1000px] lg:max-w-[416px]  rounded-xl shadow-lg p-8 relative">
        {/* Form Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Free SEO Analysis</h2>

        {/* Form Inputs */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="email"
            placeholder="Email Address*"
            className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="text"
            placeholder="Website*"
            className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <input
            type="text"
            placeholder="Company Name*"
            className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-md bg-gradient-to-br from-[#292391] to-[#e53e8e] hover:from-pink-600 hover:to-indigo-600 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Small Image on Right Side - Hide on Mobile */}
      <div className="hidden md:block w-25 h-50">
        <motion.img
          src={launch}
          alt="SEO Icon"
          className="w-full h-full object-contain"
          animate={{ y: [0, -18, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      </div>
      {/* Right Side - Info & Progress */}
      <div className="w-full max-w-[540px] space-y-6 mt-10 lg:mt-0">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Boost Your Website Ranking!
        </h2>
        <p className="text-gray-600">
          Get a complete SEO analysis and discover how to improve your online presence.
        </p>

        {/* Progress Options */}
        <div className="space-y-4">
          {/* Option 1 */}
          <div>
            <div className="flex justify-between mb-3">
              <span className="text-sm font-medium text-gray-700">
                On-Page SEO
              </span>
              <span className="text-sm text-gray-500">80%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-indigo-500 to-pink-500 h-2.5 rounded-full w-[80%]"></div>
            </div>
          </div>

          {/* Option 2 */}
          <div>
            <div className="flex justify-between mb-3">
              <span className="text-sm font-medium text-gray-700">
                Off-Page SEO
              </span>
              <span className="text-sm text-gray-500">65%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-indigo-500 to-pink-500 h-2.5 rounded-full w-[65%]"></div>
            </div>
          </div>

          {/* Option 3 */}
          <div>
            <div className="flex justify-between mb-3">
              <span className="text-sm font-medium text-gray-700">
                Keyword Ranking
              </span>
              <span className="text-sm text-gray-500">92%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-indigo-500 to-pink-500 h-2.5 rounded-full w-[92%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form
