import Footer from "../components/ui/footer";
import { Navbar } from "../components/ui/Navbar";

import GoldmanEnvironmental from "./about-environmental";
import GoldmanEnvironmentalProjects from "./bath-second";
import EnvHero from "./env-hero";
import AboutEnvironmentalSolutions from "./environ-section";
import GoldmanEnvironmentalPage from "./environ-section";




export default function Home() {
    return (
        <div>
            <Navbar />
            <EnvHero />
{/* <GoldmanEnvironmental/> */}
<AboutEnvironmentalSolutions/>
<GoldmanEnvironmentalProjects/>
<Footer/>

        </div>
    );
}