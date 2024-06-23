import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import CountUp from 'react-countup';

const Hero = () => {
  const ImageSlide = [
    'https://i.postimg.cc/cHbgf63W/pexels-gabby-k-6289065.webp',
    'https://i.postimg.cc/K8PMCZ67/img27.webp',
    'https://i.postimg.cc/Hk3Vk0qP/greg-rosenke-GOWz0zTf_vY-unsplash_(1).webp',
  ];

  const slidesContent = [
    {
      title: "Who we are?",
      description: "J-BANS ICU CARE PVT. LTD. is a privately owned company established to manufacture and market parenteral and injectible drugs with help of right technology and then market them.These drugs are niche,knowledge intensive and of critical therapeutic segments.",
      buttonText: "Check our Products",
      link: "/products", // Example link for Button 1
    },
    {
      title: "What we make?",
      description: "We manufacture and market a wide range of therapeutic drugs like Analgesics, Anesthetics, Antiemetics, Anti-infectives. We use sterile and aseptic techniques,backed up with science of targeted delivery system to produce supreme quality drugs.",
      buttonText: "Check our Products",
      link: "/products", // Example link for Button 2
    },
    {
      title: "Our Geography",
      description: "As a company we plan to cater to various developed markets like USA,UK,Germany,Spain,Australia. This will be accomplished by continous investment in Research & Development along with an experienced team of researchers, clinicians and professionals working together.",
      buttonText: "Check our Products",
      link: "/products", // Example link for Button 3
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
    <div className="relative h-full -top-4">
      <div className="relative mx-auto top-16 z-0 opacity-90 rounded-3xl aspect-video w-full md:w-9/12 sm:w-11/12 lg:w-9/12 xl:w-9/12 2xl:w-7/12">
        {ImageSlide.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover rounded-3xl" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50 rounded-3xl">
              <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl xl:text-6xl">{slidesContent[index].title}</h1>
              <p className="text-lg py-8 md:text-xl lg:text-2xl">{slidesContent[index].description}</p>
              {/* Use Link component instead of button */}
              <Link to={slidesContent[index].link} className="bg-red-600 text-white font-bold py-2 px-4 mt-4 rounded">
                {slidesContent[index].buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="relative bg-inherit backdrop-blur-lg shadow-lg flex flex-wrap items-center justify-around w-11/12 sm:w-4/5 md:h-44 lg:h-44 mx-auto left-0 right-0 top-16 md:top-0 lg:top-0 -mt-8 rounded-3xl border-2">
        <div className="text-center p-2">
          <span className="font-bold text-xl md:text-3xl lg:text-3xl sm:text-3xl"><CountUp end={7} delay={3} />+</span>
          <br />
          <span className="text-sm md:text-lg lg:text-lg sm:text-lg">Years of Experience</span>
        </div>
        <div className="text-center p-2">
          <span className="font-bold text-xl md:text-3xl lg:text-3xl sm:text-3xl"><CountUp end={165000} delay={3} />+</span>
          <br />
          <span className="text-sm md:text-lg lg:text-lg sm:text-lg">Active Clients</span>
        </div>
        <div className="text-center p-2">
          <span className="font-bold text-xl md:text-3xl lg:text-3xl sm:text-3xl"><CountUp end={450} delay={3} />+</span>
          <br />
          <span className="text-sm md:text-lg lg:text-lg sm:text-lg">Employees</span>
        </div>
        <div className="text-center p-2">
          <span className="font-bold text-xl md:text-3xl lg:text-3xl sm:text-3xl"><CountUp end={10} delay={3} />+</span>
          <br />
          <span className="text-sm md:text-lg lg:text-lg sm:text-lg">Corporate Clients</span>
        </div>
        <div className="text-center p-2">
          <span className="font-bold text-xl md:text-3xl lg:text-3xl sm:text-3xl"><CountUp end={150} delay={3} />+</span>
          <br />
          <span className="text-sm md:text-lg lg:text-lg sm:text-lg">Products</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
