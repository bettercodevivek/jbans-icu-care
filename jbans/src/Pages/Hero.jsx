import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';

const Hero = () => {
  const ImageSlide = [
    'https://i.postimg.cc/VkQcTRFb/noah-buscher-x8-ZStuk-S2-PM-unsplash.webp',
    'https://i.postimg.cc/K8PMCZ67/img27.webp',
    'https://i.postimg.cc/Hk3Vk0qP/greg-rosenke-GOWz0zTf_vY-unsplash_(1).webp',
  ];

  const slidesContent = [
    {
      title: "Who we are?",
      description: "J-BANS ICU CARE PVT. LTD. is a privately owned company established to manufacture and market parenteral and injectible drugs with help of right technology and then market them.These drugs are niche,knowledge intensive and of critical therapeutic segments.",
      buttonText: "Check our Products",
      link: "/products",
    },
    {
      title: "What we make?",
      description: "We manufacture and market a wide range of therapeutic drugs like Analgesics, Anesthetics, Antiemetics, Anti-infectives. We use sterile and aseptic techniques,backed up with science of targeted delivery system to produce supreme quality drugs.",
      buttonText: "Check our Products",
      link: "/products",
    },
    {
      title: "Our Geography",
      description: "As a company we plan to cater to various developed markets like USA,UK,Germany,Spain,Australia. This will be accomplished by continous investment in Research & Development along with an experienced team of researchers, clinicians and professionals working together.",
      buttonText: "Check our Products",
      link: "/products",
    },
  ];

  const [currentIndex, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % ImageSlide.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Slideshow */}
      <div className="relative w-full max-w-screen-lg h-80 md:min-h-screen lg:min-h-screen xl:min-h-screen mx-4 md:mx-auto mt-8 rounded-3xl overflow-hidden">
        {ImageSlide.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-3xl" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 rounded-3xl text-white px-4 md:px-8">
              <h1 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-center font-semibold mb-4">{slidesContent[index].title}</h1>
              <p className="text-sm md:text-base lg:text-lg xl:text-xl text-center mb-4 px-2">{slidesContent[index].description}</p>
              <Link to={slidesContent[index].link} className="bg-red-600 text-white font-bold py-2 mb-6 px-4 rounded hover:bg-red-700 transition-colors duration-300">
                {slidesContent[index].buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Statistics */}
      <div className="relative bottom-12 text-zinc-300 bg-inherit bg-opacity-80 backdrop-blur-lg shadow-lg rounded-3xl border-2 w-full max-w-4xl mx-4 md:mx-auto p-4 md:p-8 grid grid-cols-3 md:grid-cols-5 gap-4 text-center">
        <div className="flex flex-col items-center">
          <span className="font-bold text-lg   md:text-2xl lg:text-3xl"><CountUp end={7} delay={3} />+</span>
          <span className="text-xs md:text-sm lg:text-base">Years of Experience</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold text-lg  md:text-2xl lg:text-3xl"><CountUp end={165000} delay={3} />+</span>
          <span className="text-xs md:text-sm lg:text-base">Active Clients</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold text-lg  md:text-2xl lg:text-3xl"><CountUp end={450} delay={3} />+</span>
          <span className="text-xs md:text-sm lg:text-base">Employees</span>
        </div>
        <div className="flex flex-col  items-center">
          <span className="font-bold text-lg md:text-2xl lg:text-3xl"><CountUp end={10} delay={3} />+</span>
          <span className="text-xs md:text-sm lg:text-base">Corporate Clients</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="font-bold text-lg md:text-2xl lg:text-3xl"><CountUp end={150} delay={3} />+</span>
          <span className="text-xs md:text-sm lg:text-base">Products</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
