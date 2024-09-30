"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.jpg";
import github from "../../assets/Footer-icons/github.png";
import instagram from "../../assets/Footer-icons/instagram.png";
import linkedin from "../../assets/Footer-icons/linkedin.png";
import mail from "../../assets/Footer-icons/mail.png";
import discord from "../../assets/Footer-icons/discord.png";

const Footer = () => {
  const socialLinks = [
    {
      name: "Github",
      href: "https://github.com/daccotta-org/daccotta",
      icon: github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/daccotta",
      icon: linkedin,
    },
    { name: "Discord", href: "https://discord.com/", icon: discord },
    // { name: "Instagram", href: "https://www.instagram.com/", icon: instagram },
    // { name: "E-Mail", href: "https://temp-mail.org/en/", icon: mail },
  ];
  // useEffect(() => {
  //   // Load GitHub buttons script
  //   const script = document.createElement("script");
  //   script.src = "https://buttons.github.io/buttons.js";
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  return (
    <footer
      className="bg-[#0d0c0d] pt-6 md:py-6 px-4 md:px-8"
      id="footer-contact"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="text-sm text-gray-400 mb-4 md:mb-0 order-3 md:order-1 w-full md:w-auto text-center md:text-left">
          © Daccotta. All Rights Reserved.
        </div>

        <div className="flex items-center mb-4 md:mb-0 order-1 md:order-2">
          <Image
            src={logo}
            width={34}
            height={34}
            alt="Logo"
            className="w-8 h-8 md:w-[34px] md:h-[34px] rounded-sm"
          />
          <span className="text-xl font-semibold text-white mx-2">
            Daccotta
          </span>
        </div>

        <div className="flex flex-col items-start md:items-start order-2 md:order-3 mt-4 mb-6 text-sm md:text-md">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target="_blank"
              className="flex items-center text-gray-400 hover:text-gray-200 mb-2 last:mb-0"
            >
              <Image
                src={link.icon}
                width={16}
                height={16}
                alt={link.name}
                className="mr-2"
              />
              {link.name}
            </Link>
          ))}
        </div>
        {/* <a
          className="github-button"
          href="https://github.com/daccotta-org/daccotta"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star daccotta-org/daccotta on GitHub"
        >
          Star
        </a> */}
        <iframe
          src="https://ghbtns.com/github-btn.html?user=daccotta-org&repo=daccotta&type=star&count=true&size=large"
          frameBorder="0"
          scrolling="0"
          width="170"
          height="30"
          title="GitHub"
        ></iframe>
      </div>
      <div className="text-xs text-gray-400 text-center mt-4">
        <p>
          This product uses the TMDB API but is not endorsed or certified by
          TMDB.
        </p>
        <Link
          href="https://www.themoviedb.org"
          target="_blank"
          className="hover:text-gray-200"
        >
          <Image
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="TMDB Logo"
            width={50}
            height={20}
            className="inline-block mr-2"
          />
          The Movie Database
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
