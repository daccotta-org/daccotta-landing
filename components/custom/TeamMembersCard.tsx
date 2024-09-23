
// "use client";

// import React from "react";
// import Image from "next/image";
// import dynamic from "next/dynamic";
// import ashu from "../../assets/Team-Images/ashu.png";

// // Dynamically import PinContainer with SSR disabled
// const PinContainer = dynamic(
//   () => import("../ui/3d-pin").then((mod) => mod.PinContainer),
//   { ssr: false }
// );

// interface TeamMember {
//   name: string;
//   role: string;
//   image: any;
// }

// const teamMembers: TeamMember[] = [
//   { name: "Ashu", role: "Co-Founder", image: ashu },
//   { name: "Ashu", role: "Co-Founder", image: ashu },
//   { name: "Ashu", role: "Co-Founder", image: ashu },
//   // { name: "Ashu", role: "Co-Founder", image: ashu },
// ];

// export default function TeamSection() {
//   return (
//     <section className="py-12">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//         {teamMembers.map((member, index) => (
//           <div key={`${member.name}-${index}`} className="mr-2">
//             <PinContainer title={member.name} href="https://linkedin.com">
//               <div className="flex flex-col w-[20rem] h-[20rem] p-4 tracking-tight text-slate-100/50">
//                 <div className="relative w-full h-3/4 rounded-lg overflow-hidden mb-4">
//                   <Image
//                     src={member.image}
//                     alt={member.name}
//                     layout="fill"
//                     objectFit="cover"
//                     className="transition-all duration-300 filter hover:brightness-75"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/50 to-violet-600/50 opacity-50"></div>
//                 </div>
//                 <h3 className="text-lg font-bold text-slate-100 mb-1">
//                   {member.name}
//                 </h3>
//                 <p className="text-sm text-purple-200 opacity-75">
//                   {member.role}
//                 </p>
//               </div>
//             </PinContainer>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

import React from "react";
import Image from "next/image";
import { Carousel, Card, BlurImage } from "../ui/apple-cards-carousel";
import ashu from "../../assets/Team-Images/ashu.png";

const teamMembers = [
  { name: "Ashu", role: "Co-Founder", image: ashu },
  { name: "John", role: "CTO", image: ashu  },
  { name: "Jane", role: "Designer", image: ashu },
  { name: "Doe", role: "Developer", image: ashu }, 
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
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 text-center max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
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