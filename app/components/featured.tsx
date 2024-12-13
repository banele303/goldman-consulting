
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import ContactButtons from './ui/contact-bottons'
import SmartList from "./smart-list"
import Link from "next/link"


const items = [
  "Proven track record of success",
  " Collaborative approach to consulting",
  "Flexible and adaptable to meet client needs",
  "Commitment to excellence and quality"
]


export default function Featured() {


  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}

      <ContactButtons />

      {/* Our Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Sets Us Apart
          </h2>
          <div className="grid md:grid-cols-2 gap-[4rem]">
            <div>
              <h3 className="text-xl font-semibold mb-4">Innovative Solutions</h3>
              <p className="mb-4">
                At Goldman Holding, we're driven by an unwavering passion for
                innovation and an unrelenting commitment to quality. By combining
                these core values with our extensive expertise and experience, we deliver exceptional
                results and build enduring relationships with our clients. <br />

                At Goldman Holdings, we believe in pushing the boundaries of what&apos;s possible.
                Our team of expert  combines cutting-edge technology with creative problem-solving
                to deliver innovative solutions that meet and exceed our clients expectations.
              </p>
              <p>
                We stay at the forefront of industry trends and continuously
                invest in research and development to bring the latest advancements to our projects.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Why Choose Us </h3>
              <SmartList items={items} />
            </div>
          </div>
        </div>
      </section>


      {/* Featured Projects Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Industries</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Construction</CardTitle>

              </CardHeader>
              <CardContent>
                <Image src="/consulting/house.jpeg" alt="HVAC System" width={400} height={200} className="w-full h-auto max-w-[400px] max-h-[200px] rounded-md object-cover" />
                

                <div className="mt-3 items-start flex justify-start ">
                <Link href="/construction">
                
                <button
             
                    className="bg-slate-300 text-green-600 px-4 py-1 rounded-md hover:bg-blue-700 transition duration-300 text-[15px]"
                  >
                    Learn More
                  </button>
                </Link>
                </div>
              </CardContent>





            </Card>
            <Card>
              <CardHeader>
                <CardTitle>ENVIRONMENTAL</CardTitle>

              </CardHeader>
              <CardContent>
                <Image src="/consulting/interior.jpeg" alt="HVAC System" width={400} height={200} className="w-full h-auto max-w-[400px] max-h-[200px] rounded-md object-cover" />
               

                <div className="mt-3 items-start flex justify-start ">
                
                <Link href="/environmental">
                
                <button
             
                    className="bg-slate-300 text-green-600 px-4 py-1 rounded-md hover:bg-blue-700 transition duration-300 text-[15px]"
                  >
                    Learn More
                  </button>
                </Link>
                  
                </div>

              </CardContent>


            </Card>
            <Card>
              <CardHeader>
                <CardTitle>MANUFACTURING</CardTitle>

              </CardHeader>
              <CardContent>
                <Image src="/consulting/const.jpeg" alt="HVAC System" width={400} height={200} className="w-full h-auto max-w-[400px] max-h-[200px] rounded-md object-cover" />
               

                <div className="mt-3 items-start flex justify-start ">
                <Link href="/manufacturing">
                
                <button
             
                    className="bg-slate-300 text-green-600 px-4 py-1 rounded-md hover:bg-blue-700 transition duration-300 text-[15px]"
                  >
                    Learn More
                  </button>
                </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Engineer Your Success?</h2>
          <p className="text-xl mb-8">Contact Us today for innovative consulting</p>
          <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-100">
            Get in Touch
          </Button>
        </div>
      </section>









    </div>
  )
}