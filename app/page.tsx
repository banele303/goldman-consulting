

import { Navbar } from "./components/ui/Navbar";
import SecondSection from "./components/ui/second-section";
import ContactCTA from "./components/ui/contact-cta";
import Footer from "./components/ui/footer";
import Featured from "./components/featured";
import FRQ from "./components/ui/FRQ";
import HeroSlider from "./components/home-slider";
import SecondTestimonials from "./pressure-washing/second-testimonials";


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">

      <Navbar />
      {/* <HomeHero /> */}
      <HeroSlider />
      <SecondSection />
      <ContactCTA />
      <Featured />
      {/* <AllServices /> */}
      {/* <Testimonials /> */}
      <SecondTestimonials/>
      <FRQ />
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
}
