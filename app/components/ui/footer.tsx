import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Goldman Holding</h3>
                        <p className="mb-4">Empowering industries with innovative  solutions.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-400 hover:text-white">Home</Link></li>
                            <li><Link href="/about-us" className="text-gray-400 hover:text-white">About</Link></li>

                            <li><Link href="tel:+27634582860">

                                Call Us
                            </Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">INDUSTRIES</h3>
                        <ul className="space-y-2">
                            <li><Link href="/construction" className="text-gray-400 hover:text-white">Construction</Link></li>
                            <li><Link href="/environmental" className="text-gray-400 hover:text-white">Environmental</Link></li>
                            <li><Link href="/manufacturing" className="text-gray-400 hover:text-white">Manufacturing</Link></li>
                        </ul>


                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center space-x-2">
                                <Phone size={16} />
                                <span>+27 63 458 2860</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail size={16} />
                                <a href="mailto:info@goldmanholdings.co.za" className="text-gray-400 hover:text-white">info@goldmanholdings.co.za</a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <MapPin size={16} />
                                <span>Johannesburg, South Africa</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Goldman Holding. All rights reserved. Created by <Link href="/southflow.co.za/web-development"></Link></p>
                </div>
            </div>
        </footer>
    );
}
