import Footer from "../components/ui/footer";
import { Navbar } from "../components/ui/Navbar";
import AboutManufacturing from "./about-manu";
import ManuFAQSection from "./manu-frq";
import ManufacturingHero from "./manu-hero";






export default function Home() {
    return (
        <div>
            <Navbar />
            <ManufacturingHero />
<AboutManufacturing/>
<ManuFAQSection/>
<Footer/>

        </div>
    );
}