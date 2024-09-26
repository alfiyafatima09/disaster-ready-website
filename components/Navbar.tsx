"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
// import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (menu: string) => {
    if (dropdown === menu) {
      setDropdown(null);
    } else {
      setDropdown(menu);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setDropdown(null);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="text-white shadow-lg z-50 sticky top-0 bg-black bg-opacity-90"
    >
      <div className="container mx-0 flex items-center justify-between p-4 ">
        {/* Logo and Name */}
        <div className="flex items-center space-x-6">
          <img src="/logo/logo.png" alt="logo" width={40} />
          <Link
            href="/"
            className="text-2xl font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            RescueRing
          </Link>
        </div>

        {/* Main Links for Desktop */}
        <div className="hidden md:flex space-x-6 ml-auto">
          <div className="relative">
            <button
              onClick={() => toggleDropdown("resources")}
              className="hover:text-gray-300 transition-colors duration-300"
            >
              <div className="flex items-center gap-1">
                Resources{" "}
                <svg
                  fill="#ffffff"
                  width="20px"
                  height="20px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <path d="M11.125 16.313l7.688-7.688 3.594 3.719-11.094 11.063-11.313-11.313 3.5-3.531z"></path>
                </svg>
              </div>
            </button>
            {dropdown === "resources" && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black py-2 rounded shadow-md w-48 z-50">
                <Link
                  href="/preparedness"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Preparedness
                </Link>
                <Link
                  href="/governmentschemes"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Government Schemes
                </Link>
                <Link
                  href="/educate"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Educate Yourself
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("community")}
              className="hover:text-gray-300 transition-colors duration-300"
            >
              <div className="flex items-center gap-1">
                Community{" "}
                <svg
                  fill="#ffffff"
                  width="20px"
                  height="20px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <path d="M11.125 16.313l7.688-7.688 3.594 3.719-11.094 11.063-11.313-11.313 3.5-3.531z"></path>
                </svg>
              </div>
            </button>
            {dropdown === "community" && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black py-2 rounded shadow-md w-48 z-50">
                <Link
                  href="/volunteers"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Volunteers
                </Link>
                <Link
                  href="/"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Community Initiatives
                </Link>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => toggleDropdown("about")}
              className="hover:text-gray-300 transition-colors duration-300"
            >
              <div className="flex items-center gap-1">
                About{" "}
                <svg
                  fill="#ffffff"
                  width="20px"
                  height="20px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ffffff"
                >
                  <path d="M11.125 16.313l7.688-7.688 3.594 3.719-11.094 11.063-11.313-11.313 3.5-3.531z"></path>
                </svg>
              </div>
            </button>
            {dropdown === "about" && (
              <div className="absolute top-full left-0 mt-2 bg-white text-black py-2 rounded shadow-md w-48 z-50">
                <Link
                  href="/"
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Our App
                </Link>
              </div>
            )}
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
        <div className="md:hidden bg-[#0B2F9F] text-white p-4 z-50">
          <Link
            href="/"
            className="block py-2 hover:text-gray-300 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <button
            onClick={() => toggleDropdown("resources")}
            className="block py-2 hover:text-gray-300 transition-colors duration-300"
          >
            Resources ▼
          </button>
          {dropdown === "resources" && (
            <div className="pl-4">
              <Link
                href="/preparedness"
                className="block py-2 hover:text-gray-300 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Preparedness
              </Link>
              <Link
                href="/"
                className="block py-2 hover:text-gray-300 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Government Schemes
              </Link>
              <Link
                href="/educate"
                className="block py-2 hover:text-gray-300 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Educate Yourself
              </Link>
            </div>
          )}
          <button
            onClick={() => toggleDropdown("community")}
            className="block py-2 hover:text-gray-300 transition-colors duration-300"
          >
            Community ▼
          </button>
          {dropdown === "community" && (
            <div className="pl-4">
              <Link
                href="/"
                className="block py-2 hover:text-gray-300 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Volunteers
              </Link>
              <Link
                href="/"
                className="block py-2 hover:text-gray-300 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Community Initiatives
              </Link>
            </div>
          )}
          <button
            onClick={() => toggleDropdown("about")}
            className="block py-2 hover:text-gray-300 transition-colors duration-300"
          >
            About ▼
          </button>
          {dropdown === "about" && (
            <div className="pl-4">
              <Link
                href="/"
                className="block py-2 hover:text-gray-300 transition-colors duration-300"
                onClick={toggleMenu}
              >
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
