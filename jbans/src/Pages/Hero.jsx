import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import { FaPhoneAlt, FaWhatsapp, FaFileDownload, FaDownload } from "react-icons/fa";
import { FiTablet } from "react-icons/fi";

const Hero = () => {
  const ImageSlide = [
    'https://i.postimg.cc/VkQcTRFb/noah-buscher-x8-ZStuk-S2-PM-unsplash.webp',
    'https://i.postimg.cc/K8PMCZ67/img27.webp',
    'https://i.postimg.cc/Hk3Vk0qP/greg-rosenke-GOWz0zTf_vY-unsplash_(1).webp',
    // 'https://i.postimg.cc/BQcKCyvw/marcelo-leal-taF3klwwAWA-unsplash.webp'
  ];

  const slidesContent = [
    {
      title: "WELCOME TO JBANS ICU CARE PVT. LTD. ",
      description: "BEST CRITICAL CARE MEDICINE COMPANY",
      buttonText: "Check our Products",
      link: "/products",
    },
    {
      title: "TOP CRITICAL CARE MEDICINE COMPANY",
      description: "WE DELIVER THE BEST CRITICAL CARE PHARMACEUTICAL SERVICES",
      buttonText: "Check our Products",
      link: "/products",
    },
    {
      title: "BEST CRITICAL CARE INJECTION MANUFACTURER IN INDIA",
      description: "WE AIM TO CATER OUR CRITICAL CARE SERVICES AT A GLOBAL LEVEL",
      buttonText: "Check our Products",
      link: "/products",
    },
    // {
    //   title: "Our Segments",
    //   description: "  The major segments that we cater to are Nephrology, Neurological Disorders, Critical Care, Gynaecology, Ortho, Gastroenterology, Urology, Respiratory and Cardio Metabolic.",
    //   buttonText: "Check our Products",
    //   link: "/products",
    // },
  ];

  const [currentIndex, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % ImageSlide.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/JBANS-LIST.xlsx'; // Update with actual file path
    link.download = 'data.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Slideshow */}
      <div className="relative w-11/12 max-w-screen-2xl h-80 md:min-h-screen lg:min-h-screen xl:min-h-screen mx-4 md:mx-auto mt-8 rounded-3xl overflow-hidden">
        {ImageSlide.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-3xl" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 rounded-3xl text-white px-4 md:px-8">
              <h1 className="text-xl md:text-xl lg:text-2xl xl:text-3xl text-center font-semibold mb-4">{slidesContent[index].title}</h1>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-center mb-4 px-2">{slidesContent[index].description}</p>
              <Link to={slidesContent[index].link} className="bg-emerald-600 text-white font-bold py-2 mb-6 px-4 rounded hover:bg-red-700 transition-colors duration-300">
                {slidesContent[index].buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Contact & Download Icons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
        <a href="tel:+919876543210" className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300">
          <FaPhoneAlt size={24} />
        </a>
        <a href="https://wa.me/919876543210" className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300">
          <FaWhatsapp size={24} />
        </a>
      </div>
      
      <div className="fixed top-1/2 -left-12 z-50 transform -translate-y-1/2">
        <button onClick={handleDownload} className="bg-emerald-600 text-white flex items-center gap-2 px-4 py-2 rotate-90 rounded-t-lg shadow-lg hover:bg-emerald-700 transition-colors duration-300">
          <FaDownload size={20} /> Injectibles
        </button>
      </div>
      {/* <div className="fixed top-3/4 -left-12 z-50 transform -translate-y-1/2">
        <button onClick={handleDownload} className="bg-emerald-600 text-white flex items-center gap-2 px-4 py-2 rotate-90 rounded-t-lg shadow-lg hover:bg-emerald-700 transition-colors duration-300">
          <FaDownload size={20} /> Catalog
        </button>
      </div> */}
          </div>
  );
};

export default Hero;
