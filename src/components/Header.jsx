import React, { useState, useEffect } from 'react';
import {
  Bars3Icon,
  XMarkIcon,
  MinusIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
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

import Seoaal from '../assets/Images/Seoaal.png'; // white version of logo
import Seoaalb from '../assets/Images/Seoaalb.png';      // black version of logo

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [hoverClose, setHoverClose] = useState(false);
  const [selectedNav, setSelectedNav] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', dropdown: ['Overview', 'Landing'] },
    { name: 'About Us', dropdown: ['Our Team', 'Mission'] },
    { name: 'Services', dropdown: ['Web', 'App', 'Design'] },
    { name: 'Blog', dropdown: ['Latest Posts', 'Categories'] },
    { name: 'Portfolio', dropdown: ['Projects', 'Clients'] },
    { name: 'Shop', dropdown: ['All Products', 'Cart'] },
    { name: 'Contact Us' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white shadow-md text-black' : 'bg-transparent text-white'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img
              src={isScrolled ? Seoaalb : Seoaal}
              alt="Logo"
              className="w-40 h-20 object-contain transition-all duration-500"
            />
          </a>

          {/* Nav + Buttons */}
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <a
                    onClick={() => setSelectedNav(link.name)}
                    className={`font-medium flex items-center gap-1 cursor-pointer transition-all ${
                      selectedNav === link.name
                        ? 'text-pink-500'
                        : isScrolled
                        ? 'text-black hover:text-pink-500'
                        : 'text-white hover:text-pink-400'
                    }`}
                  >
                    {selectedNav === link.name && (
                      <span className="text-pink-500 font-bold">–</span>
                    )}
                    {link.name}
                  </a>
                  {link.dropdown && (
                    <div className="absolute top-full left-0 pt-10 hidden group-hover:block z-50">
                      <div className="bg-white shadow-lg border-t-4 border-pink-500 rounded-lg w-44">
                        {link.dropdown.map((sublink) => (
                          <a
                            key={sublink}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                          >
                            {sublink}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <button
                className={`hover:text-pink-500 hidden md:block transition-all ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                <MagnifyingGlassIcon className="w-6 h-6" />
              </button>
              <button
                className={`hover:text-pink-500 hidden md:block transition-all ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                <ShoppingCartIcon className="w-6 h-6" />
              </button>
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                className={`focus:outline-none ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                <Bars3Icon className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-5 pb-4 mt-2 shadow-md">
            {navLinks.map((link) => (
              <div key={link.name}>
                <a className="block py-2 text-gray-800 font-semibold border-b border-gray-200 hover:text-pink-500">
                  {link.name}
                </a>
                {link.dropdown && (
                  <div className="ml-4 mt-1 flex flex-col gap-1 border-t-4 border-pink-500 pt-2">
                    {link.dropdown.map((sublink) => (
                      <a
                        key={sublink}
                        className="text-sm text-gray-600 hover:text-pink-500"
                      >
                        {sublink}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Sidebar */}
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
    </>
  );
};

export default Header;
