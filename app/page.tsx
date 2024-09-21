import { BeamDemo } from "@/components/custom/BackgroundHero";
import { RippleDemo } from "@/components/custom/RippleHome";
import Ripple from "@/components/magicui/ripple";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-h-screen overflow-auto ">
      <BeamDemo />
    </main>
  );
}
