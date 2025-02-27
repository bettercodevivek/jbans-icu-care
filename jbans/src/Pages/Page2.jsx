import React, { useState, useEffect, useRef } from "react";

const ProductSlider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const resetAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000); // Slide changes every 4 seconds
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
    const touchStartX = e.touches[0].clientX;
    const touchStartY = e.touches[0].clientY;
    const handleTouchMove = (e) => {
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
    e.target.addEventListener("touchmove", handleTouchMove);
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-full flex justify-center">
            <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-400 bg-opacity-80 backdrop-blur-lg shadow-2xl rounded-3xl overflow-hidden p-6 w-96 mx-4 transform transition-transform duration-500 hover:scale-105 hover:shadow-lg">
              <div className="flex flex-col items-center">
                {/* Product Image */}
                <div className="w-full h-48 flex justify-center items-center">
                  <img
                    className="w-40 h-40 object-contain rounded-lg transition-transform duration-300 hover:scale-110"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                {/* Product Name & MRP */}
                <div className="text-center mt-4">
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  <p className="text-lg font-semibold text-white mt-1">MRP: {product.mrp}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons (Unchanged) */}
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
      mrp: "₹150",
      image: "https://i.postimg.cc/bwpJD15b/IMG-20240623-WA0010-removebg-preview.webp",
    },
    {
      id: 2,
      name: "J-BANS LBU",
      mrp: "₹3800",
      image: "https://i.postimg.cc/SxdKWJ0P/IMG-20240623-WA0012-removebg-preview.webp",
    },
    {
      id: 3,
      name: "AGGRABAN",
      mrp: "₹1800",
      image: "https://i.postimg.cc/Pqq5KTT5/IMG-20240623-WA0013-removebg-preview.webp",
    },
    {
      id: 4,
      name: "GLUCONIT",
      mrp: "₹158",
      image: "https://i.postimg.cc/FsjzHTTN/IMG-20240619-WA0007-removebg-preview.webp",
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 relative top-16 mb-16 lg:top-8 md:top-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-8 md:mb-12 text-emerald-600">
        Our Premium Products
      </h2>
      <ProductSlider products={products} />
    </div>
  );
};

export default Page2;
