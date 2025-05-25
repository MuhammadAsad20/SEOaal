import React, { useState, useEffect } from 'react';
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom'; // 🟢 React Router
import Seoaal from '../assets/Images/Seoaal.png';
import Seoaalb from '../assets/Images/Seoaalb.png';
import Sidebar from './Sidebar';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
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
    { name: 'home', dropdown: ['Overview', 'Landing'] },
    { name: 'about', dropdown: ['Our Team', 'Mission'] },
    { name: 'services', dropdown: ['Web', 'App', 'Design'] },
    { name: 'blog', dropdown: ['Latest Posts', 'Categories'] },
    { name: 'portfolio', dropdown: ['Projects', 'Clients'] },
    { name: 'shop', dropdown: ['All Products', 'Cart'] },
    { name: 'contact' },
  ];

  // Close mobile menu or sidebar when window resizes beyond breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setShowMobileMenu(false);
      } else {
        setShowSidebar(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md text-black' : 'bg-transparent text-white'
          }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2">
            <img
              src={isScrolled ? Seoaalb : Seoaal}
              alt="Logo"
              className="w-40 h-20 object-contain transition-all duration-500"
            />
          </Link>

          {/* Nav + Buttons */}
          <div className="flex items-center gap-6">
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                   to={link.name === 'home' ? '/' : `/${link.name}`}
  onClick={() => setSelectedNav(link.name)}
                    className={`font-medium flex items-center gap-1 capitalize cursor-pointer transition-all ${selectedNav === link.name
                        ? isScrolled
                          ? 'text-black'
                          : 'text-white'
                        : isScrolled
                          ? 'text-black hover:text-pink-500'
                          : 'text-white hover:text-pink-400'
                      }`}
                  >
                    {selectedNav === link.name && (
                      <span className={`${isScrolled ? 'text-black' : 'text-white'} font-bold`}>
                        —
                      </span>
                    )}
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="absolute top-full left-0 pt-10 hidden group-hover:block z-50">
                      <div className="bg-white shadow-lg border-t-4 border-pink-500 rounded-lg w-44">
                        {link.dropdown.map((sublink) => (
                          <Link
                          key={sublink}
                          href="#"
                          className="group flex items-center gap-1 px-4 py-2 text-sm text-gray-700 rounded-md transition-all"
                        >
                          {/* Dash (Hidden by default, appears on hover) */}
                          <span className="block w-0 overflow-hidden group-hover:w-3 group-hover:mr-1 transition-all duration-300">
                            —
                          </span>
                          
                          {/* Text (Color changes on hover) */}
                          <span className="hover:text-pink-500 transition-colors duration-300">
                            {sublink}
                          </span>
                        </Link>
                        
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
                className={`hover:text-pink-500 hidden md:block transition-all ${isScrolled ? 'text-black' : 'text-white'
                  }`}
                aria-label="Search"
              >
                <MagnifyingGlassIcon className="w-6 h-6" />
              </button>
              <button
                className={`hover:text-pink-500 hidden md:block transition-all ${isScrolled ? 'text-black' : 'text-white'
                  }`}
                aria-label="Shopping Cart"
              >
                <ShoppingCartIcon className="w-6 h-6" />
              </button>

              {/* Hamburger Menu */}
              <button
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    setShowMobileMenu(!showMobileMenu);
                  } else {
                    setShowSidebar(!showSidebar);
                  }
                }}
                className={`focus:outline-none ${isScrolled ? 'text-black' : 'text-white'
                  }`}
                aria-label="Toggle Menu"
              >
                <Bars3Icon className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar & Mobile Menu Components */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <MobileMenu showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
    </>
  );
};

export default Header;
