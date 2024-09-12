"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (menu: string) => {
    if (dropdown === menu) {
      setDropdown(null);
    } else {
      setDropdown(menu);
    }
  };

  return (
    <nav className="bg-[#0B2F9F] text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo and Main Links for Desktop */}
        <div className="flex items-center space-x-6 flex-grow">
          <Link href="/" className="text-2xl font-bold" onClick={() => setIsMenuOpen(false)}>
            {/* Replace with your logo */}
            Logo
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-300 transition-colors duration-300">
              Home
            </Link>
            <div className="relative">
              <button
                onClick={() => toggleDropdown('resources')}
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Resources ▼
              </button>
              {dropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-2 bg-white text-black py-2 rounded shadow-md w-48">
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                    Preparedness
                  </Link>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                    Government Schemes
                  </Link>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                    Educate Yourself
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown('community')}
                className="hover:text-gray-300 transition-colors duration-300"
              >
                Community ▼
              </button>
              {dropdown === 'community' && (
                <div className="absolute top-full left-0 mt-2 bg-white text-black py-2 rounded shadow-md w-48">
                  <Link href="/volunteers" className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                    Volunteers
                  </Link>
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                    Community Initiatives
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown('about')}
                className="hover:text-gray-300 transition-colors duration-300"
              >
                About ▼
              </button>
              {dropdown === 'about' && (
                <div className="absolute top-full left-0 mt-2 bg-white text-black py-2 rounded shadow-md w-48">
                  <Link href="/" className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>
                    About Our App
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0B2F9F] text-white p-4">
          <Link href="/" className="block py-2 hover:text-gray-300 transition-colors duration-300" onClick={toggleMenu}>
            Home
          </Link>
          <button
            onClick={() => toggleDropdown('resources')}
            className="block py-2 hover:text-gray-300 transition-colors duration-300"
          >
            Resources ▼
          </button>
          {dropdown === 'resources' && (
            <div className="pl-4">
              <Link href="/" className="block py-2 hover:text-gray-300 transition-colors duration-300" onClick={toggleMenu}>
                Preparedness
              </Link>
              <Link href="/" className="block py-2 hover:text-gray-300 transition-colors duration-300" onClick={toggleMenu}>
                Government Schemes
              </Link>
              <Link href="/" className="block py-2 hover:text-gray-300 transition-colors duration-300" onClick={toggleMenu}>
                Educate Yourself
              </Link>
            </div>
          )}
          <button
            onClick={() => toggleDropdown('community')}
            className="block py-2 hover:text-gray-300 transition-colors duration-300"
          >
            Community ▼
          </button>
          {dropdown === 'community' && (
            <div className="pl-4">
              <Link href="/" className="block py-2 hover:text-gray-300 transition-colors duration-300" onClick={toggleMenu}>
                Volunteers
              </Link>
              <Link href="/" className="block py-2 hover:text-gray-300 transition-colors duration-300" onClick={toggleMenu}>
                Community Initiatives
              </Link>
            </div>
          )}
          <button
            onClick={() => toggleDropdown('about')}
            className="block py-2 hover:text-gray-300 transition-colors duration-300"
          >
            About ▼
          </button>
          {dropdown === 'about' && (
            <div className="pl-4">
              <Link href="/" className="block py-2 hover:text-gray-300 transition-colors duration-300" onClick={toggleMenu}>
                About Our App
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

