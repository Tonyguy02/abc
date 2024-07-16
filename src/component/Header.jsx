import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesMenu = () => {
    setServicesMenuOpen(!isServicesMenuOpen);
  };

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setServicesMenuOpen(false);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <nav className="bg-black p-4 fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/" className="flex items-center">
            <img src="https://img4.nbstatic.in/tr:w-500/5d9f191a590801000c382ffa.jpg" alt="Toni & Guy Logo" className="h-8 w-8 mr-2" />
            Toni & Guy Dwarka
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 text-white">
          <Link to="/" onClick={closeMenus}>Home</Link>
          <Link to="/about" onClick={closeMenus}>About</Link>
          <div className="relative">
            <button onClick={toggleServicesMenu} className="focus:outline-none">
              Services
            </button>
            {isServicesMenuOpen && (
              <div className="absolute mt-2 w-48 bg-white text-black rounded shadow-lg">
                <Link to="/services/men" onClick={closeMenus} className="block px-4 py-2 hover:bg-gray-200">Men</Link>
                <Link to="/services/women" onClick={closeMenus} className="block px-4 py-2 hover:bg-gray-200">Women</Link>
              </div>
            )}
          </div>
          <Link to="/gallery" onClick={closeMenus}>Gallery</Link>
          <Link to="/contact" onClick={closeMenus}>Contact</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-2 text-white mt-2 bg-gray-700 p-4 rounded-lg shadow-lg">
            <li>
              <Link to="/" onClick={closeMenus} className="block py-2 px-4 hover:bg-gray-600 rounded">Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeMenus} className="block py-2 px-4 hover:bg-gray-600 rounded">About</Link>
            </li>
            <li>
              <div className="relative">
                <button onClick={toggleServicesMenu} className="block w-full text-left py-2 px-4 hover:bg-gray-600 rounded">
                  Services
                </button>
                {isServicesMenuOpen && (
                  <ul className="bg-gray-600 rounded-lg mt-2">
                    <li>
                      <Link to="/services/men" onClick={closeMenus} className="block py-2 px-4 hover:bg-gray-500">Men</Link>
                    </li>
                    <li>
                      <Link to="/services/women" onClick={closeMenus} className="block py-2 px-4 hover:bg-gray-500">Women</Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <Link to="/gallery" onClick={closeMenus} className="block py-2 px-4 hover:bg-gray-600 rounded">Gallery</Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenus} className="block py-2 px-4 hover:bg-gray-600 rounded">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
