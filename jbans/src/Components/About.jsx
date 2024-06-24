import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Top section with wallpaper */}
      <header className="relative h-72 sm:h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://i.postimg.cc/wj09QyrZ/national-cancer-institute-KMvo-Hc-B-w5g-unsplash-1.webp")' }}>
        <div className="absolute inset-0 bg-black  opacity-45 flex items-center justify-center">
          <h1 className="text-5xl sm:text-6xl text-white font-extrabold drop-shadow-md animate-fadeIn">
            About Us
          </h1>
        </div>
      </header>

      {/* Main content section */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-16">
        <section className="relative text-center mb-16">
          <h2 className="relative z-10 text-4xl font-semibold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="relative z-10 text-lg md:text-xl text-gray-700 leading-relaxed mx-auto max-w-3xl">
            At PharmaHealth, we are committed to providing high-quality, affordable medications to improve the health and well-being of our community. Our team of experts is dedicated to advancing pharmaceutical science and ensuring the safety and efficacy of our products.
          </p>
        </section>

        {/* Founder card */}
        <section className="flex justify-center mb-16">
          <div className="bg-gradient-to-r from-red-500 via-red-400 to-red-700 rounded-3xl shadow-2xl p-8 max-w-md md:max-w-lg transform transition hover:-translate-y-1 hover:shadow-2xl duration-300">
            <img
              className="w-32 h-32 mx-auto rounded-full object-cover mb-6 border-4 border-white"
              src="https://i.postimg.cc/k431yXP0/IMG-20240623-WA0009-1-1.webp"
              alt="Founder"
            />
            <h3 className="text-2xl font-medium text-white">Mrs. Himanshi Tyagi </h3>
            <p className="text-sm text-white">Founder & CEO</p>
            <p className="text-base md:text-lg text-white mt-4">
              "At J-BANS ICU CARE PVT. LTD. , we are dedicated to pioneering new frontiers in healthcare through innovation and excellence. Whether you are exploring our latest products or learning more about our journey, we are committed to providing you with trusted resources and support."
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


    </div>
  );
};

export default About;
