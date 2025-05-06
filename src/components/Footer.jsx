import React from 'react';
import Seoaal from '../assets/Images/Seoaal.png';
import footer from '../assets/Images/footer.png';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <div className="relative">
      {/* Floating Subscribe Box */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        bg-white text-black w-full max-w-[95%] md:max-w-6xl mx-auto shadow-lg rounded-lg z-20 
        px-6 py-10 flex flex-col items-center text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Join our Newsletter</h2>
        <div className="flex flex-col sm:flex-row items-center w-full gap-3">
          <input
            type="text"
            placeholder="Enter your email..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <button className="bg-indigo-800 hover:bg-pink-600 text-white px-5 py-3 rounded-full transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="size-5 rotate-320">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Footer */}
      <footer
        className="h-auto pt-20 text-white body-font bg-cover bg-center bg-no-repeat flex flex-col justify-between"
        style={{ backgroundImage: `url(${footer})` }}
      >
        <motion.div
          className="container px-5 pt-32 pb-16 mx-auto flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-start text-base text-left">
            {/* 1️⃣ About Us */}
            <div className="text-center text-left">
              <h2 className="text-3xl font-semibold mb-6">About Us</h2>
              <p className="mb-10 text-base">
                There are many variations of lorem passages of Lorem Ipsum available internet tend.
              </p>
              <img src={Seoaal} alt="Footer Logo" className="w-32 h-auto sm:mx-0" />
            </div>

            {/* 2️⃣ Important Links */}
            <div className="text-center text-left">
              <h2 className="text-2xl font-semibold mb-6">Important Links</h2>
              <ul className="space-y-3">
                {[
                  'Strategy & research',
                  'Website Design',
                  'Research & Development',
                  'Marketing Analysis',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg">
                    <svg
                      className="w-3.5 h-3.5 text-indigo-700 bg-white rounded-full"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3️⃣ Contact Info */}
            <div className="text-center text-left">
              <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 text-lg">
                  {/* Location Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  123 Street, City, Country
                </li>
                <li className="flex items-center gap-4 text-lg">
                  {/* Phone Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                  </svg>
                  +1 234 567 890
                </li>
                <li className="flex items-center gap-4 text-lg">
                  {/* Email Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  info@example.com
                </li>
              </ul>
            </div>
          </div>

        </motion.div>

        {/* Bottom copyright */}
        <div className=" text-center text-sm text-gray-300 py-4 border-t border-pink-700 w-full max-w-6xl mx-auto mt-10">
         Copyright © {new Date().getFullYear()} Seoaal — All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
