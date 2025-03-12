import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const catalogImages = [
  "https://i.postimg.cc/k4HzG6hB/fjmnap3vsjtrdidlx8dm.webp",
  "https://i.postimg.cc/VkJkcsBN/IMG-20250309-WA0006.webp",
  "https://i.postimg.cc/mZSDY5gT/IMG-20250309-WA0005.webp",
  "https://i.postimg.cc/8cwzTj07/IMG-20250309-WA0007.webp",
  "https://i.postimg.cc/fT2RFSdF/IMG-20250309-WA0004.webp",
];

const ProductCatalog = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % catalogImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + catalogImages.length) % catalogImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="product-catalog" className="relative py-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl md:font-bold font-semibold text-emerald-600 mb-8 drop-shadow-sm">
        Our Product Catalog
      </h2>
      <div className="relative w-full max-w-lg mx-auto overflow-hidden rounded-xl shadow-lg flex items-center">
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 bg-emerald-600 text-white p-3 rounded-full shadow-md hover:bg-emerald-700 transition"
        >
          <FaArrowLeft size={20} />
        </button>
        <div className="w-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {catalogImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="Product Catalog"
              className="w-full h-auto object-cover rounded-xl flex-shrink-0"
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute right-4 bg-emerald-600 text-white p-3 rounded-full shadow-md hover:bg-emerald-700 transition"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {catalogImages.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-emerald-600 scale-110' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductCatalog;
