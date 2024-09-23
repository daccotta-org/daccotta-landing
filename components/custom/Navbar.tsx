import React from "react";
import logo from "../../assets/logo.jpg";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="relative flex items-center justify-between px-4 py-3 lg:px-12 bg-[#0d0c0d]">
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
      <div className="hidden md:flex space-x-4 text-base lg:text-lg">
        <a href="/about" className="text-white hover:text-gray-300">
          About
        </a>
        <a href="/features" className="text-white hover:text-gray-300">
          Features
        </a>
        <a href="/features" className="text-white hover:text-gray-300">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
