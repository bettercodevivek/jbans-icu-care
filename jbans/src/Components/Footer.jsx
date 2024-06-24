import React from 'react';
import { FaArrowUp ,FaInstagram,FaFacebook,FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative bg-gray-900 text-white py-6 px-4 md:px-6 lg:px-8">
            {/* Background overlay */}
            <div className="absolute inset-0">
                <img 
                    src="https://i.postimg.cc/Hk3Vk0qP/greg-rosenke-GOWz0zTf_vY-unsplash_(1).webp" 
                    alt="Background" 
                    className="w-full h-full object-cover opacity-30" 
                />
            </div>
            {/* Content container */}
            <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 backdrop-blur-sm bg-zinc-100 bg-opacity-50 rounded-lg p-4 shadow-lg">
                {/* Logo and company info */}
                <div className="text-center lg:w-1/4">
                    <a href="#" className="flex justify-center mb-2">
                        <img 
                            src="https://i.postimg.cc/cJ2JxqMX/IMG-20240619-WA0009-1-removebg-preview.webp" 
                            alt="Logo" 
                            className="h-20 w-36" 
                        />
                    </a>
                    <h2 className="text-lg lg:text-xl font-bold mb-1">J-BANS ICU CARE</h2>
                    <p className="text-sm lg:text-md text-black">QUALITY WITH INNOVATION</p>
                </div>
                {/* Quick links */}
                <div className="flex flex-col lg:w-1/4">
                    <h3 className="text-md text-center font-semibold">Quick Links</h3>
                    <nav className="flex flex-col space-y-1 text-center">
                        <Link to='/home' className="transition hover:text-red-600">Home</Link>
                        <Link to="/about" className="transition hover:text-red-600">About Us</Link>
                        <Link to="/products" className="transition hover:text-red-600">Our Products</Link>
                        <Link to="/quality" className="transition hover:text-red-600">Quality and R&D</Link>
                        <Link to="/contact" className="transition hover:text-red-600">Contact Us</Link>
                    </nav>
                </div>
                {/* Developer credits */}
                <div className="flex flex-col lg:w-1/4">
                    <h3 className="text-md font-semibold text-center mb-2">Designed and Developed by</h3>
                    <a 
                        href="https://www.linkedin.com/in/vivek-singh-77849329a/" target='_blank'
                        className="text-black bg-inherit backdrop-blur-xl rounded-full drop-shadow-lg p-4 transition hover:text-red-600 text-center text-sm"
                    >
                        BetterCodeVivek
                    </a>
                </div>
                {/* Back to top button */}
                <div className="flex flex-col lg:w-1/4 items-center">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-full shadow-lg transition transform hover:scale-105"
                    >
                        <FaArrowUp />
                        <span className="text-sm">Back to Top</span>
                    </button>
                </div>
            </div>
            {/* Social links */}
            <div className="flex justify-center mt-4 space-x-4">
                <a href="#" className="text-white hover:text-blue-400 transition"><FaInstagram /></a>
                <a href="#" className="text-white hover:text-blue-400 transition"><FaFacebook /></a>
                <a href="#" className="text-white hover:text-blue-400 transition"><FaYoutube /></a>
            </div>
            {/* Copyright */}
            <div className="text-center mt-4 text-sm">
                <p>&copy; {new Date().getFullYear()} J-BANS ICU CARE. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
