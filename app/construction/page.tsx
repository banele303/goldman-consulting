import {Navbar} from "../components/ui/Navbar";
import BathSecond from "./bath-second";
import BathroomHero from "./home-hero";
import PortFolio from "./portfollio";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Footer from "../components/ui/footer";
import SecondTestimonials from "../pressure-washing/second-testimonials";
import ContactButtons from "../components/ui/contact-bottons";

import GoldmanConstruction from "./bath-second";
import AboutGoldmanConstruction from "./about-construction";
import FAQSection from "./FRQ-Construction";

export default function Home() {
    return (
        <div>
            <Navbar />


           
            <BathroomHero />
            <AboutGoldmanConstruction/>
            <GoldmanConstruction />
            {/* <PortFolio /> */}



            <SecondTestimonials />

            <section className="px-[2rem] md:px-[5rem]">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Ready to Transform Your Company?</h2>
                <Card>
                    <CardHeader>
                        <CardTitle>Schedule Your Free Consultation</CardTitle>
                        <CardDescription>Take the first step towards your dream Business</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-2 border rounded-md"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-2 border rounded-md"
                            />
                            <textarea
                                placeholder="Tell us about your project"
                                className="w-full p-2 border rounded-md"
                                rows={4}
                            ></textarea>
                        </form>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Get Started</Button>
                    </CardFooter>
                </Card>
            </section>


           <FAQSection/>
<ContactButtons/>
            <Footer />

        </div>
    );
}