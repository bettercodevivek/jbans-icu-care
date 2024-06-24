import React from 'react';

const Quality = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero section */}
      <header className="relative h-80 sm:h-96 bg-cover bg-center" style={{ backgroundImage: 'url(" https://i.postimg.cc/6QmqdW5r/louis-reed-pwcKF7L4-no-unsplash_(1).webp")' }}>
        <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
          <h1 className="text-5xl sm:text-6xl text-white font-extrabold drop-shadow-md animate-fadeIn">
            Quality & Research
          </h1>
        </div>
      </header>

      {/* Main content section */}
      <main className="container mx-auto px-4 py-8 md:py-16">
        {/* Quality Assurance */}
        <section className="py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                className="w-full rounded-lg shadow-lg"
                src="https://i.postimg.cc/NF0cQ9K3/pexels-cottonbro-6929650.jpg"
                alt="Quality Assurance"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
                Quality Assurance
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to quality is ingrained in every aspect of our operations. We adhere to stringent quality standards and employ state-of-the-art technology to ensure that our products meet and exceed regulatory requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Research & Development */}
        <section className="py-12 bg-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
                Research & Development
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our Research & Development team is dedicated to innovation and breakthroughs in pharmaceutical science. We focus on developing new formulations and improving existing products to address unmet medical needs and enhance patient outcomes.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                className="w-full rounded-lg shadow-lg"
                src="https://i.postimg.cc/9Qk0tQ28/pexels-polina-tankilevitch-6327723.jpg"
                alt="Research & Development"
              />
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Learn More About Our Commitment
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Discover how we are shaping the future of pharmaceuticals through our dedication to quality assurance and cutting-edge research.
          </p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out">
            Explore Now
          </button>
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

export default Quality;
