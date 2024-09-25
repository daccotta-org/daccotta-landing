"use client"

import React, { useState } from "react"
import Image from "next/image"
import logo from "../../assets/logo.jpg"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="relative z-50">
      <div className="flex items-center justify-between px-4 py-3 lg:px-12">
        <div className="flex items-center">
          <Image
            src={logo}
            width={34}
            height={34}
            alt="Logo"
            className="w-8 h-8 rounded-md md:w-[34px] md:h-[34px]"
          />
          <a href="/" className="text-white text-xl md:text-3xl font-bold mx-2">
            Daccotta
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex md:space-x-4 text-base lg:text-lg">
          <a href="#about" className="text-white hover:text-gray-300 transition duration-200">
            About
          </a>
          <a href="#features" className="text-white hover:text-gray-300 transition duration-200">
            Features
          </a>
          <a href="#footer-contact" className="text-white hover:text-gray-300 transition duration-200">
            Contact
          </a>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-[60px] bottom-0  backdrop-blur-md bg-opacity-40 z-40 flex items-center justify-center md:hidden">
          <div className="flex flex-col items-center space-y-8">
            <a href="#about" onClick={handleLinkClick} className="text-white text-2xl hover:text-gray-300 transition duration-200">
              About
            </a>
            <a href="#features" onClick={handleLinkClick} className="text-white text-2xl hover:text-gray-300 transition duration-200">
              Features
            </a>
            <a href="#footer-contact" onClick={handleLinkClick} className="text-white text-2xl hover:text-gray-300 transition duration-200">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar