import React from "react";

export default function Contact() {
    return (
        <div className="relative min-h-screen flex items-center justify-center text-white bg-black">
            {/* Full-Screen Background Image */}
            <img
                src="https://i.postimg.cc/fb6Z1Tyz/world-1185076-1920.webp"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
                alt="Background"
            />
            
            {/* Overlay Content */}
            <div className="relative z-10 p-6 lg:p-12 flex flex-col items-center text-center space-y-10">
                <h1 className="text-4xl lg:text-6xl font-bold drop-shadow-lg">Contact Us</h1>
                <p className="text-lg lg:text-2xl drop-shadow-lg">We'd love to hear from you</p>
    
                
                <div className="mt-10 max-w-md w-full bg-gray-800 bg-opacity-80 p-4 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
                    <div className="w-full overflow-hidden rounded-lg shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.774188300784!2d77.30705629098777!3d28.60896894883983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce54451876d6b%3A0x5f64743f390cac66!2sJ%20-BANS%20ICU%20CARE%20PRIVATE%20LIMITED-%20DELHI!5e0!3m2!1sen!2sin!4v1719031884366!5m2!1sen!2sin"
                            width="100%"
                            height="300"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>

                <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
                    <a
                        href="mailto:info@jbansicucare.com"
                        className="px-12 py-4 bg-gradient-to-r from-red-600 to-red-800 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl"
                    >
                        Mail Us
                    </a>
                    <a
                        href="tel:+918527187932"
                        className="px-12 py-4 bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl"
                    >
                        Call Us
                    </a>
                </div>
            </div>
        </div>
    );
}
