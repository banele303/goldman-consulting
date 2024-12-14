"use client"


import ContactButtons from "../components/ui/contact-bottons"
import Footer from "../components/ui/footer"
import FRQ from "../components/ui/FRQ"
import { Navbar } from "../components/ui/Navbar"
import AboutHero from "./about-hero"
import AboutUs from "./about-us-main"

export default function Home (){
    return(
        <div>
<Navbar/>
<AboutHero/>
<AboutUs/>
{/* <Featured/> */}
<FRQ/>
<ContactButtons/>
<Footer/>

        </div>

    )
}