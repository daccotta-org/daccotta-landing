import Image from "next/image";
import ashu from "../../assets/Team-Images/ashu.png";

interface TeamMember {
  name: string;
  role: string;
  image: any;
}

const teamMembers: TeamMember[] = [
  { name: "Ashu", role: "Co-Founder", image: ashu },
  { name: "Ashu", role: "Co-Founder", image: ashu },
  { name: "Ashu", role: "Co-Founder", image: ashu },
  { name: "Ashu", role: "Co-Founder", image: ashu },
];

export default function TeamSection() {
  return (
    <section className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105"
          >
            <div className="aspect-square relative w-full">
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 filter hover:brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/50 to-violet-600/50 opacity-50"></div>
            </div>
            <div className="p-4 bg-gradient-to-r from-purple-600 to-violet-600">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {member.name}
              </h3>
              <p className="text-sm sm:text-base text-purple-200 opacity-75">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}