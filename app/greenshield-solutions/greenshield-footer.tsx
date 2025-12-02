import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function GreenShieldFooter() {
    return (
        <footer className="bg-gray-900 text-white py-12 mt-0">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-4">GreenShield Solutions</h3>
                        <p className="mb-4">Leading Environmental Protection and Sustainable Solutions.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-emerald-500"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-emerald-500"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-emerald-500"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-emerald-500"><Linkedin size={20} /></a>
                        </div>
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
                    <p>&copy; {new Date().getFullYear()} GreenShield Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
