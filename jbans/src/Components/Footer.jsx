import React from 'react';
import { FaArrowUp, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
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
                    <h2 className="text-lg lg:text-xl font-bold mb-1">J-BANS ICU CARE PVT. LTD.</h2>
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
                  {/* Address Section */}
                  <div className="flex text-black flex-col gap-4 lg:w-1/4">
                    <h3 className="text-md font-semibold text-center mb-2">Address</h3>
                    <div className="text-center shadow-lg backdrop-blur-lg text-sm rounded-lg p-2">
                        Reg. Office: U 178 A, Near SBI Shakarpur Vikas Marg East Delhi-110092 
                    </div>
                    <div className="text-center text-sm shadow-lg backdrop-blur-lg rounded-lg p-2">
                        Corp. Office: 341, Vardhman Sunrize Plaza, LSC Plot No.1 Vasundra Enclave,Kondli, New delhi-110096
                    </div>
                </div>
                {/* Developer credits */}
                <div className="flex flex-col sm-ml-8 md:ml-8 lg:ml-8 lg:w-1/4">
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
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-full shadow-lg transition transform hover:scale-105"
                    >
                        <FaArrowUp />
                        <span className="text-sm">Back to Top</span>
                    </button>
                </div>
            </div>
           
            {/* Copyright */}
            <div className="text-center mt-4 text-sm">
                <p>&copy; {new Date().getFullYear()} J-BANS ICU CARE PVT.LTD. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
