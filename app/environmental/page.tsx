import Footer from "../components/ui/footer";
import { Navbar } from "../components/ui/Navbar";
import EnvHero from "./env-hero";
import EnvirGallery from "./envirGallary";
import AboutEnvironmentalSolutions from "./environ-section";





export default function Home() {
    return (
        <div>
            <Navbar />
            <EnvHero />
            {/* <GoldmanEnvironmental/> */}
            <AboutEnvironmentalSolutions />
           <EnvirGallery/>
            <Footer />

        </div>
    );
}