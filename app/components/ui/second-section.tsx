"use client"
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import Image from "next/image"



export default function SecondSection() {
    return (

        <div>


            <h3
                className="
           text-2xl md:text-4xl my-6 md:my-10 md:text-center px-[2rem] font-extrabold text-blue-500">

                Welcome to Goldman Holding
            </h3>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto my-[3rem]">

                <div className="max-auto mx-[2rem] md:ml-[4rem]">

                    <h3
                        className="
           text-[16px]  my-6 md:my-10  text-bold text-gray-500"
                    >

                        At Goldman Holding, we deliver expert consulting solutions tailored to the unique needs of diverse industries. Our seasoned team of professionals is dedicated to driving exceptional outcomes and building enduring, trust-based relationships with our clients.
                        <br />

                    </h3>

                    <h3
                        className="
           text-xl py-4 font-extrabold text-blue-500">
                        Our Expertise

                    </h3>
                    <h3
                        className="
           text-[16px]  my-6 md:my-10  text-bold text-gray-500"
                    >
                        We provide a comprehensive suite of consulting services to 
                        empower our subsidiaries and partners to achieve their goals, overcome 
                        challenges and drive sustainable success.

                    </h3>



                </div>
                <div className="relative  pt-5 px-[2rem] w-full h-[50vh] md:h-full overflow-hidden">
                    <Image
                        src={"/consulting/const4.jpeg"}
                        width={1920}
                        height={1080}
                        priority
                        alt="plumbing Image"
                        className="object-cover object-center rounded-md"
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                            top: 0,
                            left: 0,

                        }}
                    />
                </div>
            </section>

            <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] pt-[14rem]",
                )}
            />
        </div>
    )
}