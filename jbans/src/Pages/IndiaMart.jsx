import React from "react";
import { FaStar, FaDownload, FaCheckCircle } from "react-icons/fa";

const IndiaMart = () => {
  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 relative top-16 mb-16 lg:top-8 md:top-8">
      <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-8">
        We take pride in offering <span className="text-emerald-600 font-bold">high-quality</span> products and exceptional customer service. Whether you are looking for reliable suppliers or have inquiries about our offerings, we are always here to assist you. <span className="text-emerald-600 font-bold">IndiaMART</span> is one of the best platforms to connect with us, explore our catalog, and read genuine customer reviews. Feel free to reach out and experience the best in business!
      </p>
      
      {/* IndiaMART Logo */}
      <div className="flex justify-center mb-6">
        <img 
          src="https://i.postimg.cc/tRr92ndb/indiamart-logo-png-seeklogo-349456-removebg-preview.webp" 
          alt="IndiaMART Logo" 
          className="w-40 h-auto"
        />
      </div>
      
      {/* IndiaMART Contact Button */}
      <div className="flex justify-center mb-12">
        <a
          href="https://www.indiamart.com/jbans-icu-care/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-emerald-700 transition"
        >
          Visit Our IndiaMART Page
        </a>
      </div>
      
      {/* Key Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center mb-12">
        <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
          <FaCheckCircle className="text-emerald-600 text-4xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-gray-800">Trusted by Thousands</h3>
          <p className="text-gray-600 mt-2">We have a strong reputation in the market with thousands of satisfied customers.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
          <FaStar className="text-yellow-500 text-4xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-gray-800">Top-Rated Quality</h3>
          <p className="text-gray-600 mt-2">Our products go through rigorous quality checks to ensure premium standards.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
          <FaDownload className="text-blue-500 text-4xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-gray-800">Easy Access</h3>
          <p className="text-gray-600 mt-2">Browse and download our product catalog directly from IndiaMART.</p>
        </div>
      </div>
      
      {/* Download Buttons
      <div className="flex flex-col items-center gap-4">
        <a
          href="/JBANS-Product-List.xlsx"
          download
          className="bg-emerald-600 text-white flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg hover:bg-emerald-700 transition-colors duration-300"
        >
          <FaDownload size={20} /> Download Product List
        </a>
        <a
          href="/JBANS-Product-Catalog.pdf"
          download
          className="bg-red-600 text-white flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-300"
        >
          <FaDownload size={20} /> Download Product Catalog
        </a>
      </div> */}
    </div>
  );
};

export default IndiaMart;
