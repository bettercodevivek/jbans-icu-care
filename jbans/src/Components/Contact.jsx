import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://i.postimg.cc/hvsBJ4GB/nasa-Q1p7bh3-SHj8-unsplash-1.webp"
          alt="Pharma Background"
          className="w-full h-full object-cover opacity-100"
        />
      </div>
      
      {/* Overlay Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold text-[#97144d] mb-6">Contact Us</h1>
        <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
          Get in touch with us for any inquiries regarding our pharmaceutical products and services.
        </p>
      </div>
      
 {/* Contact Section */}
 <div className="relative bg-white bg-opacity-80 shadow-lg rounded-lg p-8 w-full max-w-2xl text-gray-800 flex flex-col space-y-6">
        <div className="flex items-center">
          <FaPhone className="text-[#97144d] text-xl mr-4" />
          <span className="text-lg">+91 8527187932</span>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-[#97144d] text-xl mr-4" />
          <span className="text-lg">jbansicucare@gmail.com</span>
        </div>
        <div className="flex items-start">
          <FaMapMarkerAlt className="text-[#97144d] text-xl mr-4" />
          <span className="text-lg">
            341, Vardhman Plaza, Vasundhara Enclave,
            <br />
            Delhi-110096
          </span>
        </div>
      </div>

         {/* Enquiry Form Button */}
         <div className="relative mt-6">
        <a href="/home/#Enquiry-Form" className="px-6 py-3 bg-[#97144d] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Fill Out Our Enquiry Form
        </a>
      </div>
      
      {/* Google Map Integration */}
      <div className="relative mt-8 w-full max-w-3xl h-80 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Google Map"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14010.774188300784!2d77.30705629098777!3d28.60896894883983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce54451876d6b%3A0x5f64743f390cac66!2sJ%20-BANS%20ICU%20CARE%20PRIVATE%20LIMITED-%20DELHI!5e0!3m2!1sen!2sin!4v1719031884366!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
