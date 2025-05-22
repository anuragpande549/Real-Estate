import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navMenu = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About Us", url: "/about" },
    { id: 3, name: "Our Agents", url: "/agents" },
    { id: 4, name: "Properties", url: "/properties" },
    { id: 5, name: "Gallery", url: "/gallery" },
    { id: 6, name: "Blog", url: "/blog" },
    { id: 7, name: "Contact Us", url: "/contact" },
    { id: 8, name: "Search", url: "/search" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-screen-[1920px] lg:mx-[80px]  mx-[10px] flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 items-center">
            {navMenu.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`uppercase text-[12px] lg:text-sm transition-colors ${
                  location.pathname === item.url
                    ? "text-black font-semibold"
                    : "text-gray-700 hover:text-gray-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>
              <svg
                className="w-7 h-7 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            {navMenu.map((item) => (
              <Link
                key={item.id}
                to={item.url}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-sm border-b ${
                  location.pathname === item.url
                    ? "text-black font-semibold"
                    : "text-gray-700 hover:text-gray-500"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
