import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);
  const [activePage, setActivePage] = useState(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsShrunk(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (buttonName) => {
    setClickedButton(buttonName);
    setTimeout(() => {
      setClickedButton(null);
    }, 500);
  };

  return (
    <>
      {/* Navbar Container */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-2 sm:px-6 lg:px-8 ${
          isShrunk ? "bg-gray-900 bg-opacity-95 py-2 shadow-lg backdrop-blur-md" : "bg-black py-4"
        }`}
      >
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>

              {/* Hamburger Icon */}
              {!isMenuOpen ? (
                <svg className="block size-9 animate-pulse" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg className="block size-9 animate-bounce" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-6 items-center">
                {/* Logo */}
                <a
                  href="/"
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <img src="Logo.png" alt="logo" className="h-15 w-auto" />
                </a>

                {/* Navigation Links */}
                {[
                  { name: "About Us", path: "/about" },
                  { name: "Business", path: "/business" },
                  { name: "Contact Us", path: "/contact" },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.path}
                    onClick={() => handleClick(item.name)}
                    className={`relative px-4 py-2 text-md font-medium transition-all duration-300 ${
                      activePage === item.path
                        ? "text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-500 after:transition-all after:duration-500"
                        : "text-gray-400 hover:text-white hover:after:w-full"
                    } ${
                      clickedButton === item.name
                        ? "scale-110 text-blue-400 transition-all duration-300"
                        : ""
                    }`}
                  >
                    {item.name}
                    {/* Animated Underline */}
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 w-full bg-blue-500 transition-all duration-500 ${
                        activePage === item.path ? "scale-100" : "scale-0"
                      }`}
                    ></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block animate-slideDown" : "hidden"} sm:hidden`} id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3 bg-black">
          <a href="/about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white active:scale-105">
            About Us
          </a>
          <a href="/business" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white active:scale-105">
            Businesses
          </a>
          <a href="/contact" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white active:scale-105">
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
