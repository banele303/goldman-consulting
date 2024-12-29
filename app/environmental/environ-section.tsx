import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutEnvironmentalSolutions() {
    return (
        <div className="mx-auto px-[2rem] py-8">
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">Environmental Solutions</h1>
            <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>

            <p className="md:text-center text-[18px] mb-12">
                As a subsidiary of Goldman Holding, we&apos;re pioneers in sustainability, driving innovation in environmental solutions. Our dedication is clear sustainable practices Integrating eco-friendly methods into every aspect of our work. Minimizing our footprint for a healthier planet. Creating a better tomorrow by Inspiring positive change through our commitment to the environment.
            </p>
 <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-6 text-[18px]">
                To deliver sustainable and innovative environmental solutions that preserve natural resources, support eco-friendly initiatives, and ensure a healthier environment for generations to come.
            </p>
    <h2 className="text-[20px] md:text-2xl font-bold mb-4">Portfolio </h2>

 <p className="mb-6 text-[18px]">We recognize the importance of the environment. 
                Our environmental portfolio show our commitment to sustainable practices and 
                reducing our ecological footprint. </p>
           
<h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-4 border rounded-lg shadow">
                    <Image
                        src="/environ/env.jpeg"
                        alt="Environmental Consulting"
                        width={400}
                        height={300}
                        className="rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Environmental Consulting</h3>
                    <ul className="list-disc list-inside">
                        <li>Environmental Impact Assessments</li>
                        <li>Regulatory Compliance</li>
                        <li>Risk Assessments</li>
                        <li>Sustainability Planning</li>
                        <li>Environmental Audits</li>
                    </ul>
                </div>

                <div className="p-4 border rounded-lg shadow">
                    <Image
                        src="/consulting/const-hero.jpeg"
                        alt="Waste Management"
                        width={400}
                        height={300}
                        className="rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Waste Management</h3>
                    <ul className="list-disc list-inside">
                        <li>Recycling Solutions</li>
                        <li>Hazardous Waste Disposal</li>
                        <li>Composting</li>
                        <li>Waste Reduction Strategies</li>
                        <li>Material Recovery</li>
                    </ul>
                </div>

                <div className="p-4 border rounded-lg shadow">
                    <Image
                        src="/consulting/electrical.jpeg"
                        alt="Renewable Energy"
                        width={400}
                        height={300}
                        className="rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Renewable Energy</h3>
                    <ul className="list-disc list-inside">
                        <li>Solar Power Systems</li>
                        <li>Wind Energy Solutions</li>
                        <li>Energy Storage Solutions</li>
                        <li>Renewable Energy Consultation</li>
                        <li>Off-Grid Energy Systems</li>
                    </ul>
                </div>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">Why Choose Us?</h2>
            <p className="mb-6">
                At Environmental Solutions, we prioritize environmental stewardship and sustainable development. Our team of experts works tirelessly to ensure that our projects benefit the planet and the communities we serve. Here’s why you should choose us:
            </p>
            <ul className="list-disc list-inside mb-6">
                <li>Commitment to sustainability and eco-friendly practices</li>
                <li>Highly skilled and experienced environmental professionals</li>
                <li>Comprehensive range of environmental services</li>
                <li>Customizable solutions to meet unique client needs</li>
            </ul>

            <Button className="w-full md:w-auto">Contact Us for Your Next Project →</Button>
        </div>
    );
}
