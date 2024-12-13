
"use client"
import { Phone, Mail, MapPin, } from 'lucide-react'
import Form from './form'

export default function ContactForm() {
    return (
        <section className="py-20 bg-gray-100">
            <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

                <div className='px-[2rem]'>
                    <h2 className="text-4xl font-bold text-start mb-12 text-blue-600"> Always online ready to Answer</h2>
                    <p className="font-semibold text-start text-[18px] text-gray-800">
                       Use the following to get in touch
                    </p>

                    <div className="space-y-6 pt-5">
                        <div className="flex items-center">
                            <Phone className="w-6 h-6 text-blue-600 mr-2" />
                            <span>+27 63 199 5124</span>
                        </div>
                        <div className="flex items-center">
                            <Mail className="w-6 h-6 text-blue-600 mr-2" />
                            <span>info@modernbuilder.co.za</span>
                        </div>
                        <div className="flex items-center">
                            <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                            <span>35 Welkom Street
                                Kloper Park
                                Germiston
                                Gauteng
                                1401</span>
                        </div>
                    </div>


                </div>





                <div className="container mx-auto px-4">
                    <Form />

                </div>


            </div>

        </section>
    )
}