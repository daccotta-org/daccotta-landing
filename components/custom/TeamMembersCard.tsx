
import React from "react";
import Image from "next/image";
import { Carousel, Card, BlurImage } from "../ui/apple-cards-carousel";
import ashu from "../../assets/Team-Images/ashu.jpg";
import siddharth from "../../assets/Team-Images/siddharth.jpg";
import trijal from "../../assets/Team-Images/trijal.jpg";
import mukul from "../../assets/Team-Images/mukul.png";

const teamMembers = [
  { name: "Ashu", role: "Co-Founder", image: ashu },
  { name: "Siddharth", role: "Co-Founder", image: siddharth  },
  { name: "Trijal", role: "Developer", image: trijal },
  { name: "Mukul", role: "Developer", image: mukul }, 
];

interface TeamMember {
  name: string;
  role: string;
  image: any;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  const card = {
    src: member.image,
    title: member.name,
    category: member.role,
    content: (
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48 rounded-full overflow-hidden mb-4">
          <BlurImage
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
          {member.role}
        </p>
        {/* <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p> */}
      </div>
    ),
  };

  return <Card card={card} index={index} layout />;
};

export default function TeamCarousel() {
  const carouselItems = teamMembers.map((member, index) => (
    <TeamMemberCard key={member.name} member={member} index={index} />
  ));

  return (
    <section className=" bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">      
        <Carousel items={carouselItems} />
      </div>
    </section>
  );
}