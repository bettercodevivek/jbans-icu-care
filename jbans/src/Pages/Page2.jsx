import React, { useState, useEffect, useRef } from "react";
import { FaDownload } from "react-icons/fa";
const ProductSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const resetAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);
  };

  useEffect(() => {
    resetAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [products.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    resetAutoSlide();
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    resetAutoSlide();
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    const touchStartX = e.touches[0].clientX;
    const touchStartY = e.touches[0].clientY;
  
    const handleTouchMove = (e) => {
      e.preventDefault();
      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      if (Math.abs(touchStartX - touchEndX) > Math.abs(touchStartY - touchEndY)) {
        if (touchStartX > touchEndX) {
          goToNext();
        } else {
          goToPrev();
        }
      }
      e.target.removeEventListener("touchmove", handleTouchMove);
    };
  
    e.target.addEventListener("touchmove", handleTouchMove, { passive: false });
  };
  
  return (
    <div className="p-6 relative top-12 flex flex-col mb-12 gap-8 justify-center items-center overflow-hidden w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-full flex justify-center">
            <div className="bg-white border-emerald-600 border-solid border-4 bg-opacity-80 backdrop-blur-lg drop-shadow-xl rounded-3xl overflow-hidden p-6 w-80 mx-4 transform transition-transform duration-500 hover:scale-105">
              <div className="flex flex-col items-center">
                <div className="w-full h-48 flex justify-center items-center">
                  <img
                    className="w-40 h-40 object-contain transition-transform duration-300 hover:scale-110"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white p-2 rounded-full shadow-lg hover:bg-gray-900 focus:outline-none transition duration-300 ease-in-out"
        onClick={goToPrev}
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-emerald-600 text-white p-2 rounded-full shadow-lg hover:bg-gray-900 focus:outline-none transition duration-300 ease-in-out"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

const Page2 = () => {
  const products = [
    {
      id: 1,
      name: "SODA-Q 25/ SODA-Q 100",
      image: "https://i.postimg.cc/bwpJD15b/IMG-20240623-WA0010-removebg-preview.webp",
    },
    {
      id: 2,
      name: "J-BANS LBU",
      image: "https://i.postimg.cc/SxdKWJ0P/IMG-20240623-WA0012-removebg-preview.webp",
    },
    {
      id: 3,
      name: "AGGRABAN",
      image: "https://i.postimg.cc/Pqq5KTT5/IMG-20240623-WA0013-removebg-preview.webp",
    },
    {
      id: 4,
      name: "GLUCONIT",
      image: "https://i.postimg.cc/FsjzHTTN/IMG-20240619-WA0007-removebg-preview.webp",
    },
    {
      id: 5,
      name: 'MINOBAN',
      image: 'https://i.postimg.cc/BZrdSfhw/IMG-20240619-WA0005.webp',
    },
    {
      id: 6,
      name: 'MINOBAN',
      image: 'https://i.postimg.cc/1z7jbknB/IMG-20240624-WA0009.webp',
    },
    {
      id: 7,
      name: 'ORNIBAN',
      image: 'https://i.postimg.cc/907KdLfp/IMG-20240624-WA0004.webp',
    },
    {
      id: 8,
      name: 'MEGBAN',
      image: 'https://i.postimg.cc/447DRx19/IMG-20240624-WA0005.webp',
    },
    {
      id: 9,
      name: 'DOXYBIN',
      image: 'https://i.postimg.cc/VkRTWrz3/IMG-20240624-WA0006.webp',
    },
    {
      id: 10,
      name: 'ONDABAN',
      image: 'https://i.postimg.cc/K8FwTrhP/IMG-20240624-WA0007.webp',
    },
    {
      id: 11,
      name: 'MUCODRAIN',
      image: 'https://i.postimg.cc/W41yWN3t/IMG-20240624-WA0008.webp',
    },
    {
      id: 12,
      name: 'J-PRED-500',
      image: 'https://i.postimg.cc/3Rycht2T/IMG-20240624-WA0010.webp',
    },
    {
      id: 13,
      name: 'J-PRED-40',
      image: 'https://i.postimg.cc/9FHn3tM6/IMG-20240624-WA0016.webp',
    },
    {
      id: 14,
      name: 'J-PRED-125',
      image: 'https://i.postimg.cc/9QWg0my1/IMG-20240624-WA0017.webp',
    },
    {
      id: 15,
      name: 'J-PRED-1000',
      image: 'https://i.postimg.cc/zfQxxT6P/IMG-20240624-WA0019.webp',
    },
    {
      id: 16,
      name: 'PANTOBAN-40 ',
      image: 'https://i.postimg.cc/cHV5Lfc8/IMG-20240624-WA0011.webp',
    },
    {
      id: 17,
      name: 'TAZOBAN',
      image: 'https://i.postimg.cc/MHV3MXs3/IMG-20240624-WA0012.webp',
    },
    {
      id: 18,
      name: 'J-CETAM',
      image: 'https://i.postimg.cc/05wBHH8G/IMG-20240624-WA0013.webp',
    },
    {
      id: 19,
      name: 'AQABAN',
      image: 'https://i.postimg.cc/7ZmsTFV4/IMG-20240624-WA0014.webp',
    },
    {
      id: 20,
      name: 'CEFBAN',
      image: 'https://i.postimg.cc/PrbFdpvP/IMG-20240624-WA0015.webp',
    },
    {
      id: 21,
      name: 'AXAMIK-T',
      image: 'https://i.postimg.cc/9f0xPL87/IMG-20240624-WA0018.webp',
    },
    {
      id: 22,
      name: 'SODA-Q 25',
      image: 'https://i.postimg.cc/rsXQkM81/IMG-20240624-WA0020.webp',
    },
    {
      id: 23,
      name: 'K-BAN10',
      image: 'https://i.postimg.cc/C1fmXzVM/IMG-20240624-WA0021.webp',
    },
    {
      id: 24,
      name: 'ESOMERZ',
      image: 'https://i.postimg.cc/7P0KNGVm/IMG-20240624-WA0022.webp',
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 relative top-16 mb-16 lg:top-8 md:top-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-emerald-600">
        Our Premium Products
      </h2>
      <ProductSlider products={products} />
      {/* Download Buttons */}
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
      </div>
    </div>
  );
};

export default Page2;
