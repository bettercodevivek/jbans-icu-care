import React from 'react';
import { FaArrowUp, FaInstagram, FaFacebook, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCapsules, FaFlask } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6 md:px-12 border-t border-gray-800">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
                {/* Logo and Vision */}
                <div className="flex flex-col items-center md:items-start">
                    <img 
                        src="https://i.postimg.cc/cJ2JxqMX/IMG-20240619-WA0009-1-removebg-preview.webp" 
                        alt="Logo" 
                        className="h-20 mb-4"
                    />
                    <h2 className="text-xl font-bold">J-BANS ICU CARE PVT. LTD.</h2>
                    <p className="text-sm text-gray-300 italic">"Advancing Healthcare, Ensuring Quality."</p>
                </div>
                
                {/* Quick Links with Icons */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <nav className="flex flex-col space-y-2 text-gray-300">
                        <Link to='/home' className="hover:text-[#97144d] flex items-center gap-2"><FaCapsules /> Home</Link>
                        <Link to="/about" className="hover:text-[#97144d] flex items-center gap-2"><FaFlask /> About Us</Link>
                        <Link to="/products" className="hover:text-[#97144d] flex items-center gap-2"><FaCapsules /> Our Products</Link>
                        <Link to="/quality" className="hover:text-[#97144d] flex items-center gap-2"><FaFlask /> Quality & R&D</Link>
                        <Link to="/contact" className="hover:text-[#97144d] flex items-center gap-2"><FaEnvelope /> Contact Us</Link>
                    </nav>
                </div>
                
                {/* Contact Information */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold mb-4">Reach Out to Us</h3>
                    {/* <p className="flex items-center gap-2 text-gray-300">
                        <FaMapMarkerAlt className="shrink-0" /> <span className="text-left">U 178 A, Near SBI Shakarpur, Delhi-110092</span>
                    </p> */}
                    <p className="flex items-center font-bold mt-2 text-gray-300">
                       <span>341, Vardhman Plaza, Vasundhara Enclave, Delhi-110096</span>
                    </p>
                    <p className="flex items-center gap-2 mt-2 text-gray-300">
                        <FaEnvelope /> <a href="mailto:info@jbansicucare.com" className="hover:text-emerald-400">info@jbansicucare.com</a>
                    </p>
                    <p className="flex items-center gap-2 mt-2 text-gray-300">
                        <FaPhoneAlt /> +91 8527187932
                    </p>
                </div>
                
                {/* Social Media & Back to Top */}
                <div className="flex flex-col items-center md:items-end">
                    <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                    <div className="flex space-x-4 text-xl">
                        <a href="#" className="hover:text-emerald-400"><FaInstagram /></a>
                        <a href="#" className="hover:text-emerald-400"><FaFacebook /></a>
                        <a href="#" className="hover:text-emerald-400"><FaYoutube /></a>
                    </div>
                    <button
                    
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="mt-6 bg-[#97144d] text-white hover:bg-emerald-700 py-2 px-4 rounded-lg shadow-md flex items-center space-x-2 transition-transform transform hover:scale-110"
                    >
                        <FaArrowUp /> <span>Back to Top</span>
                    </button>
                </div>
            </div>
            
            {/* Copyright */}
            <div className=" font-bold text-center text-gray-400 text-sm mt-12 pt-6 border-t border-gray-700">
                &copy; {new Date().getFullYear()} J-BANS ICU CARE PVT. LTD. All Rights Reserved.
                <p> Designed and Developed by <a className='text-[#97144d]' href='https://github.com/bettercodevivek' target='_blank'>BetterCodeVivek(Vivek Singh)</a></p>
            </div>
        </footer>
    );
}

export default Footer;
