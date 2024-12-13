"use client"


import { Card, CardContent } from "@/components/ui/card"
import {  Shield, ThumbsUp, Wrench} from "lucide-react"


export default function AboutUs() {
  return (
    <div className="">
      <main className="container mx-auto px-4 py-12 space-y-24">
        
        {/* Company Overview Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Company Overview</h2>
            <p className="text-gray-600">
              Goldman Holding is a premier management consulting firm empowering a diverse portfolio of subsidiaries that excel across various industries. As leaders in their respective fields, our subsidiaries thrive with our supportive guidance. We foster a collaborative approach, working closely with each subsidiary to address their distinct needs and challenges. With strategic guidance and support, we help our subsidiaries achieve their goals.
            </p>
            <p className="text-gray-600">
              Built on a foundation of expertise, innovation and integrity, we deliver tailored solutions that expertly address the complex challenges and opportunities facing our clients, driving their sustainable success and growth.
            </p>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="space-y-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <ThumbsUp className="w-12 h-12 text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800">Strategy Development</h3>
                <p className="text-gray-600">We partner with our subsidiaries to craft and execute tailored strategies that propel growth, drive improvement and foster sustainability.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <Shield className="w-12 h-12 text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800">Operational Improvement</h3>
                <p className="text-gray-600">Our team collaborates with clients to pinpoint areas for enhancement and implement transformative changes that boost efficiency, reduce costs and elevate customer satisfaction.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <Wrench className="w-12 h-12 text-blue-500 mx-auto" />
                <h3 className="text-xl font-semibold text-gray-800">Market Research and Analysis</h3>
                <p className="text-gray-600">Our research experts conduct in-depth market research and analysis, providing clients with actionable intelligence, valuable insights and data-driven recommendations.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Strategic Partnerships Section */}
        <section className="text-center space-y-12">
          <h2 className="text-3xl font-semibold text-gray-800">Collaboration</h2>
          <p className="text-gray-600">
            Goldman Holding has established strategic partnerships with esteemed organizations, amplifying our expertise and resources. This collaborative framework empowers us to deliver bespoke, comprehensive solutions that precisely address the unique needs and objectives of our clients.
          </p>
        </section>
      </main>
    </div>
  )
}
