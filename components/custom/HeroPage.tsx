"use client";

import React, { useState, useEffect } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundGradientDemo } from "./HeroHomeImg";
import BlurIn from "../magicui/blur-in";

export function BeamDesignBg() {
  const [showBeams, setShowBeams] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    setShowBeams(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setShowBeams(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const Content = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-300 text-left mb-4">
            <BlurIn word="The Social Network for Movie Lovers" />
          </h1>
          <p className="text-gray-300 text-base md:text-lg mb-8 [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            Discover, share, and create lists of your favorite movies with
            friends. Join the community !
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="https://daccotta.com" target="_blank">
            <button className="p-[3px] relative flex-grow md:flex-grow-0">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-6 md:px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent w-full text-center">
                Login
              </div>
            </button>
            </a>

            <a href="https://daccotta.com" target="_blank">
            <button className="p-[3px] relative flex-grow md:flex-grow-0">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-6 md:px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent w-full text-center">
                Sign Up
              </div>
            </button>
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 aspect-video flex items-center justify-center [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <BackgroundGradientDemo />
        </div>
      </div>
    </div>
  );

  return showBeams ? (
    // <BackgroundBeamsWithCollision>
    //   <Content />
    // </BackgroundBeamsWithCollision>
    <div className="container bg-gradient-to-b flex  justify-center items-center">
      <Content />
    </div>
  ) : (
    <div className="container bg-gradient-to-b flex  justify-center items-center">
      <Content />
    </div>
  );
}
