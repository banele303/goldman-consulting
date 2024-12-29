import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutGoldmanConstruction() {
    return (
        <div className="mx-auto px-[2rem] py-8">
            <h1 className="text-2xl md:text-4xl font-bold md:text-center mb-2">Goldman Construction</h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>


            <p className="text-[18px] md:text-center mb-12">
                As a subsidiary of Goldman Holding, we specialize in building,
                civil engineering, and project management services. With a proven
                track record of delivering high-quality projects on time, within budget
                and to exceptional standards, we&apos;ve established ourselves as a trusted
                partner in the construction industry.
            </p>

            <h2 className="text-2xl md:text-4xl font-bold md:text-center mb-2">Goldman Construction</h2>

            <p className="text-[16px] md:text-2xl  mb-4">To deliver unparalleled construction solutions that surpass client expectations, while upholding unwavering commitments to: </p>
            <p className="mb-6"><span className="font-bold pr-2">Quality: </span>
                Uncompromising excellence in every project </p>
            <p className="mb-6"><span className="font-bold pr-2">Safety:  </span> Ensuring the well-being of people and communities</p>
            <p className="mb-6"><span className="font-bold pr-2">Sustainability: </span>Minimizing environmental impact for a better future </p>

            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-4 border rounded-lg shadow">
                    <Image
                        src="/manu/civil.jpeg"
                        alt="Civil Engineering"
                        width={400}
                        height={300}
                        className="rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Civil Engineering</h3>
                    <ul className="list-disc list-inside">
                        <li>Structure Design</li>
                        <li>Quantity Surveying</li>
                        <li>Project Management</li>
                        <li>Waste Management</li>
                        <li>Road Construction</li>
                        <li>Water Reticulation</li>
                        <li>Reservoir Construction</li>
                        <li>Bulk Earth Work</li>
                    </ul>
                </div>

                <div className="p-4 border rounded-lg shadow">
                    <Image
                        src="/consulting/const-hero.jpeg"
                        alt="General Building"
                        width={400}
                        height={300}
                        className="rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">General Building</h3>
                    <ul className="list-disc list-inside">
                        <li>Brickwork</li>
                        <li>Plastering</li>
                        <li>Painting and Deco</li>
                        <li>Plumbing</li>
                        <li>Roofing</li>
                        <li>Paving</li>
                        <li>Ceiling</li>
                        <li>Partition</li>
                    </ul>
                </div>

                <div className="p-4 border rounded-lg shadow">
                    <Image
                        src="/consulting/electrical.jpeg"
                        alt="Electrical Engineering"
                        width={400}
                        height={300}
                        className="rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Electrical Engineering</h3>
                    <ul className="list-disc list-inside">
                        <li>Power System Designing</li>
                        <li>Building Wiring</li>
                        <li>Backup Generator</li>
                        <li>Solar System</li>
                        <li>HVAC Electrical System</li>
                        <li>Protection System</li>
                        <li>Air Condition</li>
                        <li>Repair and Maintenance</li>
                    </ul>
                </div>

                <div className="p-4 border rounded-lg shadow">
                    <Image
                        src="/consulting/hero-interior.jpeg"
                        alt="Flooring"
                        width={400}
                        height={300}
                        className="rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Flooring</h3>
                    <ul className="list-disc list-inside">
                        <li>Vinyl Flooring</li>
                        <li>Epoxy Flooring</li>
                        <li>Carpet Flooring</li>
                        <li>Laminate Flooring</li>
                        <li>Rubber Flooring</li>
                        <li>Concrete Flooring</li>
                        <li>Seamless Flooring</li>
                        <li>Artificial Grass Flooring</li>
                    </ul>
                </div>

                <div className="p-4 border rounded-lg shadow">
                    <Image
                        src="/consulting/constroof.jpeg"
                        alt="Waterproofing"
                        width={400}
                        height={300}
                        className="rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Waterproofing</h3>
                    <ul className="list-disc list-inside">
                        <li>Damp Proofing</li>
                        <li>Roof Coating</li>
                        <li>Leak Waterproofing</li>
                        <li>Roof Slab Waterproofing</li>
                        <li>Parapet Wall Waterproofing</li>
                        <li>Basement Waterproofing</li>
                        <li>Water Reservoir</li>
                        <li>Fish Pond Waterproofing</li>
                    </ul>
                </div>

                <div className="p-4 border rounded-lg shadow">
                    <Image
                        src="/consulting/house.jpeg"
                        alt="Aluminium Services"
                        width={400}
                        height={300}
                        className="rounded-lg mb-4"
                    />
                    <h3 className="text-xl font-bold mb-2">Aluminium</h3>
                    <ul className="list-disc list-inside">
                        <li>Shopfront</li>
                        <li>Folding Door</li>
                        <li>Pivot Doors</li>
                        <li>Sliding Doors</li>
                        <li>Trellidor</li>
                        <li>Glass Partition</li>
                        <li>Garage Doors</li>
                        <li>Aluminium Windows</li>
                    </ul>
                </div>
            </div>

            <h2 className="text-2xl font-bold mt-10 mb-4">Why Choose Us?</h2>
            <p className="mb-6">
                At Goldman Construction, we pride ourselves on our commitment to excellence. Our team of experts ensures that every project is executed with precision and dedication. Choose us for:
            </p>
            <ul className="list-disc list-inside mb-6">
                <li>Innovative and sustainable construction solutions</li>
                <li>Highly skilled and experienced professionals</li>
                <li>Commitment to safety and quality</li>
                <li>On-time and on-budget project delivery</li>
            </ul>

            <Button className="w-full md:w-auto">Contact Us for Your Next Project →</Button>
        </div>
    );
}
