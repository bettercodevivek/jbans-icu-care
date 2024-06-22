import React from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="relative bg-gray-900 text-white py-10 px-6 md:px-12 lg:px-16">
            <div className="absolute inset-0">
                <img src="https://i.postimg.cc/SQ82jpBC/greg-rosenke-GOWz0z-Tf-v-Y-unsplash-1.jpg" alt="Background" className="w-full h-full object-cover opacity-30"/>
            </div>
            <div className="relative container mx-auto flex flex-col items-center space-y-8 backdrop-blur-sm bg-zinc-100 bg-opacity-60 rounded-lg p-8 shadow-lg">

                {/* Logo Section */}
                <div className="text-center">
                    <a href="#" className="flex justify-center mb-4">
                        <img src="https://i.postimg.cc/cJ2JxqMX/IMG-20240619-WA0009-1-removebg-preview.webp" alt="Logo" className="h-20 w-32"/>
                    </a>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-1">Your Company</h2>
                    <p className="text-md lg:text-lg text-gray-300">Excellence in Every Step</p>
                </div>

                {/* Email Button */}
                <div className="flex justify-center">
                    <a
                        href="mailto:someone@example.com"
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-md rounded-full shadow-lg transition transform hover:scale-105"
                    >
                        Email Us
                    </a>
                </div>

                {/* Footer Sections */}
                <div className="w-full flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 mt-8">
                    {/* Quick Links */}
                    <div className="flex flex-col items-center lg:items-start space-y-4 lg:w-1/3">
                        <h3 className="text-lg font-semibold">Quick Links</h3>
                        <nav className="flex flex-col space-y-3">
                            <a href="#about" className="transition hover:text-blue-400">About</a>
                            <a href="#services" className="transition hover:text-blue-400">Services</a>
                            <a href="#contact" className="transition hover:text-blue-400">Contact</a>
                        </nav>
                    </div>

                    {/* Developer Credits */}
                    <div className="flex flex-col items-center lg:items-end space-y-4 lg:w-1/3">
                        <h3 className="text-lg font-semibold">Developer</h3>
                        <a href="https://yourdeveloperlink.com" className="text-blue-400 transition hover:text-blue-600">Your Developer</a>
                    </div>

                    {/* Back to Top Button */}
                    <div className="flex flex-col items-center lg:items-center space-y-4 lg:w-1/3">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full shadow-lg transition transform hover:scale-105"
                        >
                            <FaArrowUp />
                            <span>Back to Top</span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
