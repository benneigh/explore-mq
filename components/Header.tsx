// app/components/Header.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks, NavLink } from "@/data/navLinks";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="bg-white shadow-md z-50 fixed top-0 left-0 w-full">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/" className="text-xl flex items-center">
            <img
              src="/images/logo.png"
              alt="MerryQuery Logo"
              className="h-8 mr-2"
            />
            MerryQuery
          </Link>
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="relative text-gray-700 hover:text-black group text-sm"
              >
                {link.name}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-600"></span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="lg:hidden fixed top-16 right-0 bg-white w-full h-screen flex flex-col items-center justify-center space-y-6 z-40">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="text-gray-700 text-lg"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
