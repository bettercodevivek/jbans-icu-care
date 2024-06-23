import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed

export default function Hero() {
  const slides = [
    {
      image: "https://i.postimg.cc/cHbgf63W/pexels-gabby-k-6289065.webp",
      title: "WHO WE ARE",
      description: "J-BANS ICU CARE PVT. LTD. is a privately owned company established to manufacture and market parenteral and injectable drugs with the help of right technology and then market them.",
      link: "/who-we-are"
    },
    {
      image: "https://i.postimg.cc/K8PMCZ67/img27.webp",
      title: "WHAT WE MAKE",
      description: "We manufacture and market a wide range of therapeutic drugs like Analgesics, Anesthetics, Antiemetics and Anti-infectives. We use sterile and aseptic techniques, backed up with the science of Targeted Delivery System to produce supreme quality drugs.",
      link: "/what-we-make"
    },
    {
      image: "https://i.postimg.cc/SQ82jpBC/greg-rosenke-GOWz0z-Tf-v-Y-unsplash-1.jpg",
      title: "OUR GEOGRAPHY",
      description: "As a company, we plan to cater to various developed markets like USA, UK, Germany, Spain, Australia. This will be accomplished by a continuous investment in Research and Development along with an experienced team of researchers, and other professionals working together.",
      link: "/our-geography"
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 6000); // Change slide every 4 seconds

    return () => {
      clearInterval(slideInterval.current);
    };
  }, [slides.length]);

  const handleSwipeStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleSwipeMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleSwipeEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swiped left
      setCurrentIndex((currentIndex + 1) % slides.length);
    } else if (touchEnd - touchStart > 50) {
      // Swiped right
      setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
    }
  };

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <div 
        className="relative -top-16 lg:-top-4 md:-top-4 sm:-top-4 w-11/12 h-3/4 md:w-5/6 lg:w-4/5 lg:h-4/5"
        onTouchStart={handleSwipeStart}
        onTouchMove={handleSwipeMove}
        onTouchEnd={handleSwipeEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 rounded-3xl bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
              <div className="text-white text-center px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6 mb-2"> {/* Reduced margin bottom */}
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2">{slide.title}</h1> {/* Reduced margin bottom */}
                <p className="text-md md:text-lg lg:text-xl mb-4">{slide.description}</p> {/* Reduced margin bottom */}
              </div>
              <Link 
                to='/products'
                className="px-4 py-2 bg-white text-black rounded-3xl shadow-lg transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black lg:cursor-pointer"
              >
                Check Our Products
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
