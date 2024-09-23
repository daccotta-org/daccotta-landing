import BlurIn from "../magicui/blur-in";
import TeamCards from "./TeamMembersCard";

export function OurTeam() {
  return (
    <div className="text-gray-100 py-8 px-4 mx-8">
      <h2 className="text-center text-5xl font-bold text-purple-300 mb-8">
        <BlurIn word="Our Team" />
      </h2>

      <TeamCards />
    </div>
  );
}
