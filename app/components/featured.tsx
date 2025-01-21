
"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'
import ContactButtons from './ui/contact-bottons'
import SmartList from "./smart-list"
import Link from "next/link"


const items = [
  "Collaborations Built on Trust",
  "Delivering Outstanding Outcomes",
  "Consistent Track Record of Success ",
  "Commitment to excellence and quality ",
  "Anticipating Trends, Embracing Innovation ",
 
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
            
              <p className="mb-1">
              At Goldman Holding, we&apos;re fueled by a passion for innovation 
              and a commitment to excellence. Our unique blend of expertise, 
              experience and core values enables us to deliver outstanding results
               and build enduring relationships with our clients. 
               <br/>
               <br/>
               We stay ahead of the curve, leveraging the latest advancements through 
               continuous investment in research and development. This ensures our clients
                benefit from cutting-edge solutions, tailored to their specific needs.
              </p>
              
            </div>
            <div>
              <h3 className="text-xl text-center mt-[-2rem] font-semibold mb-4">Why Choose Us </h3>
              <SmartList items={items} />
            </div>
          </div>
        </div>
      </section>


      {/* Featured Projects Section */}
      <section className="pb-16 mt-[-2rem]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Industries</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>CONSTRUCTION</CardTitle>

              </CardHeader>
              <CardContent>
                <Image src="/consulting/const4.jpeg" alt="HVAC System" width={400} height={200} className="w-full h-auto max-w-[400px] max-h-[200px] rounded-md object-cover" />
                

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
                <Image src="/manu/environment.jpeg" alt="HVAC System" width={400} height={200} className="w-full h-auto max-w-[400px] max-h-[200px] rounded-md object-cover" />
               

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
                <Image src="/manu/manufacturing.jpeg" alt="HVAC System" width={400} height={200} className="w-full h-auto max-w-[400px] max-h-[200px] rounded-md object-cover" />
               

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
      <section className="py-16 my-[-2rem] bg-yellow-600 text-white">
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