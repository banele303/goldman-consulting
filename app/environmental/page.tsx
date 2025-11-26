import Footer from "../components/ui/footer";
import { Navbar } from "../components/ui/Navbar";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import EnvirGallery from "./envirGallary";
import AboutEnvironmentalSolutions from "./environ-section";





export default function Home() {
    return (
        <div>
            <Navbar />
            
            <div className="mx-auto px-[2rem] py-8">
                <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">
                    Environmental Services
                </h1>
                <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>

                <div className="flex flex-col items-center justify-center mb-12">
                    <Link href="https://ecomax.co.za" target="_blank">
                        <Button variant="outline" className="text-xl font-bold mb-6 h-auto py-2 px-8 border-2 hover:bg-gray-100">
                            Our Subsidiary
                        </Button>
                    </Link>
                    <Link href="https://ecomax.co.za" target="_blank" className="group relative flex flex-col items-center w-fit">
                        <div className="relative overflow-hidden rounded-md">
                            <Image
                                src="/enrthgo-logo.jpeg"
                                alt="Ecomax Logo"
                                width={300}
                                height={150}
                                className="h-auto w-auto max-w-[200px] md:max-w-[300px] object-contain cursor-pointer rounded-md transition-all duration-300 md:group-hover:scale-105 md:group-hover:brightness-50"
                            />
                            <div className="hidden md:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <span className="bg-green-500 text-white text-base font-bold px-6 py-2 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                                    Visit Website
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                                </span>
                            </div>
                        </div>
                        <div className="md:hidden mt-4">
                            <span className="bg-green-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-xl flex items-center gap-2">
                                Visit Website
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>

            <EnvirGallery/>
            {/* <GoldmanEnvironmental/> */}
            <AboutEnvironmentalSolutions />
          
            <Footer />

        </div>
    );
}