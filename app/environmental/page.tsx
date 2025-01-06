import Footer from "../components/ui/footer";
import { Navbar } from "../components/ui/Navbar";

import EnvirGallery from "./envirGallary";
import AboutEnvironmentalSolutions from "./environ-section";





export default function Home() {
    return (
        <div>
            <Navbar />
            <EnvirGallery/>
            {/* <GoldmanEnvironmental/> */}
            <AboutEnvironmentalSolutions />
          
            <Footer />

        </div>
    );
}