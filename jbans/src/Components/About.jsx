import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Top section with wallpaper */}
      <header className="relative h-72 sm:h-96 bg-cover bg-center" style={{ backgroundImage: 'url("/path-to-your-wallpaper.jpg")' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-75 flex items-center justify-center">
          <h1 className="text-5xl sm:text-6xl text-white font-extrabold drop-shadow-md animate-fadeIn">About Us</h1>
        </div>
      </header>

      {/* Main content section */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-16">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">Who We Are</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mx-auto max-w-3xl">
            At PharmaHealth, we are committed to providing high-quality, affordable medications to improve the health and well-being of our community. Our team of experts is dedicated to advancing pharmaceutical science and ensuring the safety and efficacy of our products.
          </p>
        </section>

        {/* Founder card */}
        <section className="flex justify-center mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md md:max-w-lg transform transition hover:-translate-y-1 hover:shadow-2xl duration-300">
            <img
              className="w-32 h-32 mx-auto rounded-full object-cover mb-6 border-4 border-blue-600"
              src="/path-to-founder-photo.jpg"
              alt="Founder"
            />
            <h3 className="text-2xl font-medium text-gray-900">Dr. Jane Doe</h3>
            <p className="text-sm text-gray-500">Founder & CEO</p>
            <p className="text-base md:text-lg text-gray-800 mt-4">
              "Our mission is to enhance health and well-being by delivering safe, effective, and affordable pharmaceuticals. We are dedicated to innovation and excellence in the pharmaceutical industry."
            </p>
          </div>
        </section>

        {/* Additional content */}
        <section className="mt-16 text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">Our Vision</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mx-auto max-w-3xl">
            We envision a world where everyone has access to the medications they need. We strive to be a leader in the pharmaceutical industry, setting standards for quality, affordability, and patient safety.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 PharmaHealth. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
