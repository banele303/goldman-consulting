

import { Navbar } from "./components/ui/Navbar";
import SecondSection from "./components/ui/second-section";

import Footer from "./components/ui/footer";
import Featured from "./components/featured";

import HeroSlider from "./components/home-slider";



export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">

      <Navbar />
      {/* <HomeHero /> */}
      <HeroSlider />
      <SecondSection />
      {/* <ContactCTA /> */}
      <Featured />
     
      
      <Footer />
    </div>
  );
}
