
import React from "react";
import BlurIn from "../magicui/blur-in";
import TeamCarousel from "./TeamMembersCard";

export function OurTeam() {
  return (
    <div className="bg-gray-900 text-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-bold text-purple-300 ">
          <BlurIn word="Our Team" />
        </h2>
        <TeamCarousel />
      </div>
    </div>
  );
}
