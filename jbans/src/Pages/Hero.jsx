import React, { useEffect, useRef, useState } from 'react';

export default function Hero() {
  const slides = [
    {
      image: "https://i.postimg.cc/pLbN3P6G/madison-agardi-QNrjcp90t-Vc-unsplash-1.jpg",
      title: "WHO WE ARE",
      description: "J-BANS ICU CARE PVT. LTD. is a privately owned company established to manufacture and market parenteral and injecctible drugs with the help of right technology and then market them."
    },
    {
      image: "https://i.postimg.cc/SQ82jpBC/greg-rosenke-GOWz0z-Tf-v-Y-unsplash-1.jpg",
      title: "WHAT WE MAKE",
      description:"We manufacture and market a wide range of therapeutic drugs like Analgesics, Anesthetics , Antiemetics and Anti-infectives. We use sterile and aseptic techniques, backed up with the science of Targeted Delivery System to produce supreme quality drugs."
    },
    {
      image: "https://i.postimg.cc/T1rpsrVC/lucas-vasques-9vn-ACv-X2748-unsplash-1.jpg",
      title: "OUR GEOGRAPHY",
      description: " As a company, we plan to cater to various developed markets like USA,UK,Germany,Spain,Australia. This will be accomplished by a continous investment in Research and Development along with an experienced team of researchers, and other professionals working together."
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(slideInterval.current);
    };
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <div className="relative w-11/12 h-3/4 md:w-5/6 lg:w-4/5 lg:h-4/5">
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
            <div className="absolute inset-0 rounded-3xl bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-white text-center px-4 py-2 md:px-8 md:py-4 lg:px-12 lg:py-6">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-md md:text-lg lg:text-xl">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
