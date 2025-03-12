import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaCapsules } from "react-icons/fa";

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto py-2 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-600 mb-12">
        Our Prime Corporate Customers
      </h2>
      
      <div className="relative w-full max-w-3xl bg-gradient-to-r from-green-100 to-white shadow-2xl rounded-xl p-8 flex flex-col items-center text-center transform transition-all duration-500 hover:scale-105 border border-emerald-500">
        <FaCapsules className="text-6xl text-emerald-500 absolute top-4 left-4 opacity-50" />
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="w-32 h-32 object-cover rounded-full border-4 border-emerald-500 shadow-lg mb-4"
        />
        <h3 className="text-2xl font-semibold text-gray-800">{testimonials[currentIndex].name}</h3>
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8 w-full max-w-xs">
        <button
          onClick={goToPrev}
          className="bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={goToNext}
          className="bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

const Page3 = () => {
  const testimonials = [
    {
      id: 1,
      image: "https://i.postimg.cc/B6cr2PJr/aiims-delhi.jpg",
      name: "AIIMS Delhi",
    },
    {
      id: 2,
      image: "https://i.postimg.cc/J0P827Zh/Regency-logo-250x75-1-removebg-preview-1.png",
      name: "Regency Hospital, Lucknow",
    },
    {
      id: 3,
      image: "https://i.postimg.cc/8sQRxDSq/aims-india-logo-1.png",
      name: "Asian Institute of Medical Sciences",
    },
    {
      id: 4,
      image: "https://i.postimg.cc/HWQ97c9m/koppal-logo.jpg",
      name: "Koppal Institute of Medical Sciences",
    },
    {
      id: 5,
      image: "https://i.postimg.cc/L5hLJ59d/IMG-20240623-WA0017-1.webp",
      name: "Shobhit Mediworld",
    },
  ];

  return (
    <div className="container mx-auto py-2 px-4 sm:px-6 lg:px-8 relative top-2 mb-16 lg:top-8 md:top-8">
      <TestimonialSlider testimonials={testimonials} />
    </div>
  );
};

export default Page3;
