import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { BackgroundGradientDemo } from "./HeroHomeImg";

export function BeamDesignBg() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left Column */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-300 text-left mb-4">
              Share Movies, Review Together
            </h1>
            <p className="text-gray-600 text-base md:text-lg mb-8 [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              Discover, share, and review your favorite movies with friends. Join
              the community and dive into film discussions!
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="p-[3px] relative flex-grow md:flex-grow-0">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-6 md:px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent w-full text-center">
                  Login
                </div>
              </button>

              <button className="p-[3px] relative flex-grow md:flex-grow-0">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-6 md:px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent w-full text-center">
                  SignUp
                </div>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 aspect-video flex items-center justify-center [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <BackgroundGradientDemo/>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}