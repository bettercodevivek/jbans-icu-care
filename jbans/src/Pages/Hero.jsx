import React from 'react';
import Slider from 'react-slick';

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
    <div className="bg-gray-100">
      {/* Navbar */}
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-2xl font-bold">MyWebsite</a>
          <nav className="space-x-4">
            <a href="#about" className="hover:text-gray-300">About</a>
            <a href="#services" className="hover:text-gray-300">Services</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Slider */}
      <section className="relative">
        <div className="max-w-screen-xl mx-auto py-12">
          <Slider {...sliderSettings}>
            <div>
              <img
                src="https://via.placeholder.com/1200x600"
                alt="Slide 1"
                className="w-full h-64 object-cover"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/1200x600"
                alt="Slide 2"
                className="w-full h-64 object-cover"
              />
            </div>
            <div>
              <img
                src="https://via.placeholder.com/1200x600"
                alt="Slide 3"
                className="w-full h-64 object-cover"
              />
            </div>
          </Slider>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
          <p className="text-lg mb-8">Your journey to the best experience starts here.</p>
          <a href="#services" className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700">Explore Services</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            We are dedicated to providing the best service with a passion for excellence.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Service One</h3>
              <p className="text-gray-600">High quality service for all your needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Service Two</h3>
              <p className="text-gray-600">Excellence in every aspect.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">Service Three</h3>
              <p className="text-gray-600">Dedicated to your success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">We would love to hear from you. Reach out to us anytime.</p>
          <a href="mailto:info@mywebsite.com" className="bg-blue-600 px-4 py-2 rounded-md text-white hover:bg-blue-700">Email Us</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 MyWebsite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
