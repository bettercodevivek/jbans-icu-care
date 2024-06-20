// src/LandingPage.jsx

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl mx-auto overflow-hidden">
        <Slider {...sliderSettings}>
          <div>
            <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1600x900')" }}>
              <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold text-center">Slide 1</h2>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1600x900/ff7f7f')" }}>
              <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold text-center">Slide 2</h2>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1600x900/7f7fff')" }}>
              <div className="h-full bg-black bg-opacity-50 flex items-center justify-center">
                <h2 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold text-center">Slide 3</h2>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
