import AboutDaccotta from "@/components/custom/AboutInfo";
import { BeamDesignBg } from "@/components/custom/HeroPage";
import { Features } from "@/components/custom/Features";
import Footer from "@/components/custom/Footer";
import Navbar from "@/components/custom/Navbar";
import { OurTeam } from "@/components/custom/OurTeam";


export default function Home() {
  return (
    <>
    <header>
      <Navbar/>
    </header>
    
    <main className="">
      <BeamDesignBg />
      <AboutDaccotta/>
      <Features/>
      {/* <OurTeam/> */}
    </main>

    <footer>
      <Footer/>
    </footer>
    </>
  );
}
