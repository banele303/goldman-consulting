import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Leaf, Droplets, ShieldCheck } from "lucide-react";

import { ErthagoNavbar } from "./erthago-navbar";
import ErthagoFooter from "./erthago-footer";
import ErthagoGallery from "./erthago-gallery";
import ContactButtons from "../components/ui/contact-bottons";

export default function ErthagoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <ErthagoNavbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/environ/env-hero.jpeg"
              alt="Erthago Projects Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Building a Sustainable Future
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up delay-100">
              Erthago Projects delivers innovative environmental and construction solutions tailored for tomorrow.
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white animate-fade-in-up delay-200">
              Explore Our Services
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
                <div className="w-20 h-1 bg-green-600 mb-6"></div>
                <p className="text-lg text-gray-700 mb-6">
                  Erthago Projects is a premier subsidiary of Goldman Holdings, dedicated to excellence in environmental management and sustainable construction. We combine cutting-edge technology with eco-friendly practices to deliver projects that stand the test of time while respecting our planet.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Our team of experts brings decades of experience in civil engineering, environmental rehabilitation, and project management, ensuring that every venture we undertake meets the highest standards of quality and sustainability.
                </p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  Learn More About Us
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/environ/env.jpeg"
                  alt="About Erthago"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Environmental Solutions",
                  icon: Leaf,
                  description: "Comprehensive environmental impact assessments, rehabilitation, and waste management strategies."
                },
                {
                  title: "Sustainable Construction",
                  icon: ShieldCheck,
                  description: "Green building practices, energy-efficient designs, and sustainable material sourcing."
                },
                {
                  title: "Water Management",
                  icon: Droplets,
                  description: "Advanced water treatment, conservation systems, and hydraulic engineering solutions."
                }
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-green-600">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <ErthagoGallery />

        {/* CTA Section */}
        <section className="py-20 bg-green-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Partner with Erthago Projects for sustainable, efficient, and world-class solutions.
            </p>
            <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100">
              Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <ContactButtons />
      <ErthagoFooter />
    </div>
  );
}
