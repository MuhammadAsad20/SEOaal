import React, { useState } from 'react';
import {
  MinusIcon,
  XMarkIcon,
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6';

import Seoaalb from '../assets/Images/Seoaalb.png';

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const [hoverClose, setHoverClose] = useState(false);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        showSidebar ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center px-4 py-4 border-b">
        <img src={Seoaalb} alt="Logo" className="w-32 h-16 object-contain" />
        <button
          onClick={() => setShowSidebar(false)}
          onMouseEnter={() => setHoverClose(true)}
          onMouseLeave={() => setHoverClose(false)}
        >
          {hoverClose ? (
            <MinusIcon className="w-7 h-7 text-pink-500 transition-all duration-300" />
          ) : (
            <XMarkIcon className="w-7 h-7 text-gray-700 transition-all duration-300" />
          )}
        </button>
      </div>

      <div className="p-5 text-gray-700 space-y-4">
        <p>
          Welcome to our digital world! We offer solutions to help you grow online.
        </p>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="flex items-center gap-3">
            <PhoneIcon className="w-5 h-5 text-pink-500" />
            <span>+92 300 1234567</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPinIcon className="w-5 h-5 text-pink-500" />
            <span>Lahore, Pakistan</span>
          </div>
          <div className="flex items-center gap-3">
            <EnvelopeIcon className="w-5 h-5 text-pink-500" />
            <span>info@example.com</span>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4 text-pink-500">
            <a href="#"><FaFacebookF className="w-5 h-5" /></a>
            <a href="#"><FaXTwitter className="w-5 h-5" /></a>
            <a href="#"><FaInstagram className="w-5 h-5" /></a>
            <a href="#"><FaLinkedinIn className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
