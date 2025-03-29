import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaWhatsapp, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

const Hero = () => {
  const ImageSlide = [
    "https://i.postimg.cc/VkQcTRFb/noah-buscher-x8-ZStuk-S2-PM-unsplash.webp",
    "https://i.postimg.cc/K8PMCZ67/img27.webp",
    "https://i.postimg.cc/Hk3Vk0qP/greg-rosenke-GOWz0zTf_vY-unsplash_(1).webp",
  ];

  const slidesContent = [
    {
      title: "WELCOME TO JBANS ICU CARE PVT. LTD.",
      description: "BEST CRITICAL CARE MEDICINE COMPANY",
      buttonText1: "Check our Products",
      buttonText2: "Visit Our IndiaMart Page",
      link1: "/products",
      link2:"https://www.indiamart.com/jbans-icu-care/",
    },
    {
      title: "TOP CRITICAL CARE MEDICINE COMPANY",
      description: "WE DELIVER THE BEST CRITICAL CARE PHARMACEUTICAL SERVICES",
      buttonText1: "Check our Products",
      buttonText2: "Visit Our IndiaMart Page",
      link1: "/products",
      link2:"https://www.indiamart.com/jbans-icu-care/",
    },
    {
      title: "BEST CRITICAL CARE INJECTION MANUFACTURER IN INDIA",
      description: "WE AIM TO CATER OUR CRITICAL CARE SERVICES AT A GLOBAL LEVEL",
      buttonText1: "Check our Products",
      buttonText2: "Visit Our IndiaMart Page",
      link1: "/products",
      link2:"https://www.indiamart.com/jbans-icu-care/",
    },
  ];

  const [currentIndex, setIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % ImageSlide.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Popup Image */}
      {showPopup && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative bg-white p-6 rounded-xl shadow-2xl max-w-lg w-full">
            <button 
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 transition-all" 
              onClick={() => setShowPopup(false)}
            >
              <FaTimes size={24} />
            </button>
            <img 
              src="https://i.postimg.cc/kXkgpZYk/Landing-Page-Notice.webp" 
              alt="Popup" 
              className="w-full h-auto rounded-lg" 
            />
          </div>
        </motion.div>
      )}

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
              <Link
  to={slidesContent[index].link1}
  className="bg-[#97144d] text-white font-normal py-2 mb-4 px-4 rounded transition-colors duration-300 flex items-center gap-2"
>
  {slidesContent[index].buttonText1} <FaExternalLinkAlt size={14} />
</Link>

<Link
  to={slidesContent[index].link2}
  className="bg-[#97144d] text-white font-normal py-2 mb-6 px-4 rounded transition-colors duration-300 flex items-center gap-2"
>
  {slidesContent[index].buttonText2} <FaExternalLinkAlt size={14} />
</Link>
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Contact Icons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
        <a
          href="tel:+918527187932"
          className="bg-[#97144d] text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300"
        >
          <FaPhoneAlt size={24} />
        </a>
        <a
          href="https://wa.me/+918527187932"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
