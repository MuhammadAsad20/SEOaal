import React, { useState, useEffect } from 'react';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';

import Seoaal from '../assets/Images/Seoaal.png';
import Seoaalb from '../assets/Images/Seoaalb.png';
import Sidebar from './Sidebar';
import MobileMenu from './MobileMenu'; // ✅ Import MobileMenu

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false); // ✅ New state
  const [selectedNav, setSelectedNav] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);

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
            <nav className="hidden lg:flex items-center gap-6">
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
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    setShowMobileMenu(!showMobileMenu); // ✅ Show MobileMenu
                  } else {
                    setShowSidebar(!showSidebar); // ✅ Show Sidebar
                  }
                }}
                className={`focus:outline-none ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                <Bars3Icon className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (fallback old dropdown) */}
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

      {/* Sidebar and MobileMenu Components */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <MobileMenu showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
    </>
  );
};

export default Header;
