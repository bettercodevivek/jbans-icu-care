import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { FiHome, FiEye, FiBox, FiMail, FiCheck } from 'react-icons/fi'; 
import { FaImage } from "react-icons/fa";

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className="sticky top-0 z-50 bg-white">
            <nav className="bg-white shadow-md px-4 lg:px-8 py-2.5">
                <div className="flex items-center justify-between mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://i.postimg.cc/cJ2JxqMX/IMG-20240619-WA0009-1-removebg-preview.webp"
                            className="h-20"
                            alt="Logo"
                        />
                    </Link>

                    <button
                        onClick={toggleSidebar}
                        type="button"
                        className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                        aria-label="toggle menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>

                    <div className="hidden text-white bg-gradient-to-r from-red-500 via-red-500 to-red-700 p-4 rounded-full lg:flex lg:items-center lg:space-x-8">
                        <ul className="flex space-x-6 items-center font-medium">
                            <li>
                                <NavLink to='/'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded-full duration-200 ${isActive ? "text-red-600 bg-white" : ""} hover:bg-gray-50 hover:text-red-600`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded-full duration-200 ${isActive ? "text-red-600 bg-white" : ""} hover:bg-gray-50 hover:text-red-600`
                                    }
                                >
                                    About Us
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/quality'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded-full duration-200 ${isActive ? "text-red-600 bg-white" : ""} hover:bg-gray-50 hover:text-red-600`
                                    }
                                >
                                    Quality and R&D
                                </NavLink>
                            </li>
                            
                            <li>
                                <NavLink to='/products'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded-full duration-200 ${isActive ? "text-red-600 bg-white" : ""} hover:bg-gray-50 hover:text-red-600`
                                    }
                                >
                                    Our Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/gallery'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded-full duration-200 ${isActive ? "text-red-600 bg-white" : ""} hover:bg-gray-50 hover:text-red-600`
                                    }
                                >
                                Gallery
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 rounded-full duration-200 ${isActive ? "text-red-600 bg-white" : ""} hover:bg-gray-50 hover:text-red-600`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className={`fixed inset-0 z-40 transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm" onClick={toggleSidebar}></div>
                <div className={`fixed inset-y-0 left-0 w-64 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} rounded-r-xl`}>
                <div className="flex justify-between items-center p-4">
                <img
                            src="https://i.postimg.cc/cJ2JxqMX/IMG-20240619-WA0009-1-removebg-preview.webp"
                            className="h-16"
                            alt="Sidebar Logo"
                        />
                    <button
                        onClick={toggleSidebar}
                        type="button"
                        className="p-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                        aria-label="close menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    </div>
                    <ul className="flex flex-col p-6 space-y-6">
                        <li>
                            <NavLink to='/home'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `flex items-center space-x-4 py-2 px-6 rounded-lg shadow-md bg-white text-lg font-semibold ${isActive ? "text-blue-500" : "text-gray-900"} hover:bg-gray-200 hover:text-blue-700 transition-transform transform hover:scale-105`
                                }
                            >
                                <FiHome className="w-5 h-5" /> <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `flex items-center space-x-4 py-2 px-6 rounded-lg shadow-md bg-white text-lg font-semibold ${isActive ? "text-blue-500" : "text-gray-900"} hover:bg-gray-200 hover:text-blue-700 transition-transform transform hover:scale-105`
                                }
                            >
                                <FiEye className="w-5 h-5" /> <span>About Us</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/products'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `flex items-center space-x-4 py-2 px-6 rounded-lg shadow-md bg-white text-lg font-semibold ${isActive ? "text-blue-500" : "text-gray-900"} hover:bg-gray-200 hover:text-blue-700 transition-transform transform hover:scale-105`
                                }
                            >
                                <FiBox className="w-5 h-5" /> <span>Our Products</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/quality'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `flex items-center space-x-4 py-2 px-6 rounded-lg shadow-md bg-white text-lg font-semibold ${isActive ? "text-blue-500" : "text-gray-900"} hover:bg-gray-200 hover:text-blue-700 transition-transform transform hover:scale-105`
                                }
                            >
                                <FiCheck className="w-5 h-5" /> <span>Quality and R&D</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/gallery'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `flex items-center space-x-4 py-2 px-6 rounded-lg shadow-md bg-white text-lg font-semibold ${isActive ? "text-blue-500" : "text-gray-900"} hover:bg-gray-200 hover:text-blue-700 transition-transform transform hover:scale-105`
                                }
                            >
                                <FaImage className="w-5 h-5" /> <span>Gallery</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `flex items-center space-x-4 py-2 px-6 rounded-lg shadow-md bg-white text-lg font-semibold ${isActive ? "text-blue-500" : "text-gray-900"} hover:bg-gray-200 hover:text-blue-700 transition-transform transform hover:scale-105`
                                }
                            >
                                <FiMail className="w-5 h-5" /> <span>Contact Us</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}