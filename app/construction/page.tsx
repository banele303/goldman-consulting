import { Navbar } from "../components/ui/Navbar";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Footer from "../components/ui/footer";
import SecondTestimonials from "../pressure-washing/second-testimonials";
import ContactButtons from "../components/ui/contact-bottons";

import FAQSection from "./FRQ-Construction";
import ModernGallery from "./modern-gallery";

export default function Home() {
  return (
    <div>
      <Navbar />

      
      <div className="mx-auto px-[2rem] py-8">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">
          Construction
        </h1>
        <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>

        <p className="text-[18px] md:text-center mb-12">
          We deliver expert construction solutions in Building, Civil
          engineering and Project management. Our proven track record of
          on-time, on-budget and exceptional-quality project delivery has
          established us as a trusted leader in the construction industry.
        </p>

        <div className="flex flex-col items-center justify-center mb-4">
          <Link href="/dilon-construction">
            <Button variant="outline" className="text-xl font-bold mb-6 h-auto py-2 px-8 border-2 hover:bg-gray-100">
              Our Subsidiary
            </Button>
          </Link>
          <Link href="/dilon-construction" className="group relative flex flex-col items-center w-fit">
            <div className="relative overflow-hidden rounded-md">
              <Image
                src="/dilon.jpeg"
                alt="Dilon Construction Logo"
                width={300}
                height={150}
                className="h-auto w-auto max-w-[200px] md:max-w-[300px] object-contain cursor-pointer rounded-md transition-all duration-300 md:group-hover:scale-105 md:group-hover:brightness-50"
              />
              <div className="hidden md:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="bg-orange-500 text-white text-base font-bold px-6 py-2 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </span>
              </div>
            </div>
            <div className="md:hidden mt-4">
              <span className="bg-orange-500 text-white text-sm font-bold px-6 py-2 rounded-full shadow-xl flex items-center gap-2">
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </div>
          </Link>
        </div>
      </div>

<ModernGallery />
      <SecondTestimonials />

      <section className="px-[2rem] md:px-[5rem]">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Ready to Transform Your Company?
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Schedule Your Free Consultation</CardTitle>
            <CardDescription>
              Take the first step towards your dream Business
            </CardDescription>
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

      <FAQSection />
      <ContactButtons />
      <Footer />
    </div>
  );
}
