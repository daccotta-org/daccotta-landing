import AboutDaccotta from "@/components/custom/AboutInfo";
import { BeamDesignBg } from "@/components/custom/HeroPage";
import { Features } from "@/components/custom/Features";
import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import { OurTeam } from "@/components/custom/OurTeam";
import { cn } from "@/lib/utils";
import { Inter, Lato } from "next/font/google";

const inter = Inter({
  weight: "700",
  subsets: ["latin"],
});
const interBody = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <header className={interBody.className}>
        <Navbar />
      </header>

      <main className={interBody.className}>
        <BeamDesignBg />
        <AboutDaccotta />
        <Features />

        {/* <OurTeam/> */}
      </main>

      <footer className={interBody.className}>
        <Footer />
      </footer>
    </main>
  );
}
