

import { Navbar } from "../components/ui/Navbar";
import Image from "next/image";

const investorLogos = [
  {
    src: '/loggos.jpeg',
    alt: 'Investor Logo 1',
  },
  {
    src: '/loggos2.jpeg',
    alt: 'Investor Logo 2',
  },
  {
    src: '/loggos4.jpeg',
    alt: 'Investor Logo 3',
  },
  {
    src: '/loggos7.jpeg',
    alt: 'Investor Logo 4',
  },
  {
    src: '/logos3.jpeg',
    alt: 'Investor Logo 5',
  },
  {
    src: '/logos9.jpeg',
    alt: 'Investor Logo 6',
  },
  {
    src: '/dilon.jpeg',
    alt: 'Dilon Construction',
  },
  {
    src: '/enrthgo-logo.jpeg',
    alt: 'Enrthgo',
  }
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Partners</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {investorLogos.map((logo, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>
              
              
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Trusted by Industry Leaders</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are proud to work with these esteemed partners and investors who share our vision 
            for excellence. Their trust 
            and support enable us to deliver outstanding results across all our projects.
          </p>
        </div>
      </main>
    </div>
  )
}

