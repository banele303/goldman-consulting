import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Leaf, Droplets, ShieldAlert, Recycle, Wind, Zap } from "lucide-react";

import { GreenShieldNavbar } from "./greenshield-navbar";
import GreenShieldFooter from "./greenshield-footer";
import GreenShieldGallery from "./greenshield-gallery";
import ContactButtons from "../components/ui/contact-bottons";

export default function GreenShieldPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <GreenShieldNavbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/environ/env-hero.jpeg"
              alt="GreenShield Solutions Hero"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Protecting Our Planet
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-up delay-100">
              GreenShield Solutions leads the way in environmental protection and sustainable waste management for a cleaner future.
            </p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white animate-fade-in-up delay-200">
              Discover Our Solutions
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
                <div className="w-20 h-1 bg-emerald-600 mb-6"></div>
                <p className="text-lg text-gray-700 mb-6">
                  GreenShield Solutions is a dedicated subsidiary of Goldman Holding, specializing in comprehensive environmental protection and sustainable waste management solutions.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We are committed to delivering innovative strategies that reduce environmental impact, promote circular economy principles, and create a healthier planet for future generations. Our team of environmental experts combines cutting-edge technology with proven methodologies.
                </p>
                <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Learn More About Us
                </Button>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/environ/env.jpeg"
                  alt="About GreenShield"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Core Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Waste Management",
                  icon: Recycle,
                  description: "Comprehensive waste collection, segregation, recycling, and disposal solutions tailored to your needs."
                },
                {
                  title: "Environmental Protection",
                  icon: Leaf,
                  description: "Ecological impact assessments, habitat restoration, and conservation programs for sustainable ecosystems."
                },
                {
                  title: "Water Solutions",
                  icon: Droplets,
                  description: "Advanced water treatment, purification, and management systems for clean and safe water resources."
                },
                {
                  title: "Renewable Energy",
                  icon: Wind,
                  description: "Solar and renewable energy integration solutions to reduce carbon footprint and operational costs."
                },
                {
                  title: "Pollution Control",
                  icon: ShieldAlert,
                  description: "Emission reduction strategies, air quality monitoring, and pollution prevention initiatives."
                },
                {
                  title: "Sustainable Systems",
                  icon: Zap,
                  description: "Energy-efficient systems design and implementation for long-term environmental and economic benefits."
                }
              ].map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-emerald-600">
                  <CardHeader>
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-emerald-600" />
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
        <GreenShieldGallery />

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Why Choose GreenShield Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Industry-leading environmental expertise and certifications",
                "Innovative sustainable solutions tailored to your business",
                "Compliance with international environmental standards",
                "24/7 monitoring and responsive support systems",
                "Cost-effective waste and resource management",
                "Proven track record of environmental impact reduction"
              ].map((reason, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-emerald-50 transition-colors">
                  <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <p className="text-gray-700 text-lg">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-emerald-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Building a Sustainable Future</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's work together to protect our environment and create lasting positive change for generations to come.
            </p>
            <Button size="lg" className="bg-white text-emerald-900 hover:bg-gray-100">
              Start Your Green Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <ContactButtons />
      <GreenShieldFooter />
    </div>
  );
}
