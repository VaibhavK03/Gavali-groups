import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-black text-white px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu on click
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              {/* Hamburger Icon */}
              {!isMenuOpen ? (
                <svg
                  className="block size-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                /* Close Icon */
                <svg
                  className="block size-9"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 items-center">
                <img src="Logo.png" alt="logo" className="h-15 w-auto" />
                <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-md font-medium text-white">Home</a>
                <a href="#" className="rounded-md px-3 py-2 text-md font-medium text-gray-100 hover:bg-gray-700 hover:text-white">About Us</a>
                <a href="#" className="rounded-md px-3 py-2 text-md font-medium text-gray-100 hover:bg-gray-700 hover:text-white">Businesses</a>
                <a href="#" className="rounded-md px-3 py-2 text-md font-medium text-gray-100 hover:bg-gray-700 hover:text-white">Careers</a>
                <a href="#" className="rounded-md px-3 py-2 text-md font-medium text-gray-100 hover:bg-gray-700 hover:text-white">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3 bg-black">
          <img src="Logo.png" alt="logo" className="mb-3 h-15 w-auto" />
          <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Home</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About Us</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Businesses</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Careers</a>
          <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact Us</a>
        </div>
      </div>
    </>
  );
};

export default Header;
