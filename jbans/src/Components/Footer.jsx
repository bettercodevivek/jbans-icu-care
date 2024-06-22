import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="relative bg-gray-900 text-white py-6 px-4 md:px-6 lg:px-8">
            <div className="absolute inset-0">
                <img 
                    src="https://i.postimg.cc/SQ82jpBC/greg-rosenke-GOWz0z-Tf-v-Y-unsplash-1.jpg" 
                    alt="Background" 
                    className="w-full h-full object-cover opacity-30" 
                />
            </div>
            <div className="relative container mx-auto flex flex-col items-center space-y-4 backdrop-blur-sm bg-zinc-100 bg-opacity-60 rounded-lg p-4 shadow-lg">

                {/* Logo Section */}
                <div className="text-center">
                    <a href="#" className="flex justify-center mb-2">
                        <img 
                            src="https://i.postimg.cc/cJ2JxqMX/IMG-20240619-WA0009-1-removebg-preview.webp" 
                            alt="Logo" 
                            className="h-16 w-32" 
                        />
                    </a>
                    <h2 className="text-lg lg:text-xl font-bold mb-1">J-BANS ICU CARE</h2>
                    <p className="text-sm lg:text-md text-black">QUALITY WITH INNOVATION</p>
                </div>

                {/* Email Button */}
                <div className="flex justify-center">
                    <a
                        href="mailto:someone@example.com"
                        className="px-4 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-full shadow-lg transition transform hover:scale-105"
                    >
                        Email Us
                    </a>
                </div>

                {/* Footer Sections */}
                <div className="w-full flex flex-col lg:flex-row justify-evenly space-y-4 lg:space-y-0 mt-4">

                    {/* Quick Links */}
                    <div className="flex flex-col items-center space-y-2 lg:w-1/3">
                        <h3 className="text-md font-semibold">Quick Links</h3>
                        <nav className="flex flex-col space-y-1 text-center">
                            <a href="#home" className="transition hover:text-blue-400">Home</a>
                            <a href="#about" className="transition hover:text-blue-400">About Us</a>
                            <a href="#products" className="transition hover:text-blue-400">Our Products</a>
                            <a href="#quality" className="transition hover:text-blue-400">Quality and R&D</a>
                            <a href="#contact" className="transition hover:text-blue-400">Contact Us</a>
                        </nav>
                    </div>

                    {/* Developer Credits */}
                    <div className="flex flex-col items-center space-y-2 lg:w-1/3">
                        <h3 className="text-md font-semibold text-center">Designed and Developed by</h3>
                        <a 
                            href="https://yourdeveloperlink.com" 
                            className="text-black bg-inherit backdrop-blur-xl rounded-full drop-shadow-lg p-2 transition hover:text-blue-600 text-center text-sm"
                        >
                            BetterCodeVivek
                        </a>
                    </div>

                    {/* Back to Top Button */}
                    <div className="flex flex-col items-center space-y-2 lg:w-1/3">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-full shadow-lg transition transform hover:scale-105"
                        >
                            <FaArrowUp />
                            <span className="text-sm">Back to Top</span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
