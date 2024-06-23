import React from 'react';

const About = () => {
  return (
    <div className="relative min-h-screen bg-fixed bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url('https://i.postimg.cc/wj09QyrZ/national-cancer-institute-KMvo-Hc-B-w5g-unsplash-1.webp')` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* About Us Heading */}
        <h1 className="text-4xl font-bold text-white text-center">
          About Us
        </h1>

        {/* Flex Container for Cards */}
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl w-full">
          {/* Founder Card */}
          <div className="max-w-md bg-white bg-opacity-20 backdrop-blur-lg rounded-lg border border-gray-200 shadow-lg overflow-hidden">
            <div className="relative">
              <img src="https://i.postimg.cc/k431yXP0/IMG-20240623-WA0009-1-1.webp" alt="Founder" className="w-full h-64 object-cover object-center" />
            </div>
            <div className="p-6">
              <h2 className="mb-2 text-2xl font-bold text-white text-center">Founder Name</h2>
              <p className="text-sm text-gray-300">
                Dear Visitors,

                Welcome to J-BANS ICU CARE PVT. LTD.

                I am delighted to have you here. At J-BANS ICU CARE PVT. LTD., we are dedicated to pioneering new frontiers in healthcare through innovation and excellence. Whether you are exploring our latest products or learning more about our journey, we are committed to providing you with trusted resources and support.

                Thank you for joining us on our mission to enhance global health and well-being. Your interest and support mean a lot to us.
              </p>
            </div>
          </div>

          {/* Large Content Card */}
          <div className="w-full max-w-xl bg-white bg-opacity-20 backdrop-blur-lg rounded-lg border border-gray-200 shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">Our Mission and Values</h2>
            <div className="text-gray-300">
              <ul>
                <li>
                  <strong>Exploring the Horizons of Innovative Technology</strong><br />
                  Constantly striving for successful results in pharmaceutical science.
                </li>
                <li>
                  <strong>Vision of J BANS</strong><br />
                  To invest in formulation, production, technology, and process development.<br />
                  Delivering results that are par excellence in efficiency and safety of drugs to improve patients' health worldwide.
                </li>
                <li>
                  <strong>About Us: J BANS</strong><br />
                  A privately-owned healthcare company founded in 2017.<br />
                  Part of J BANS Group of Companies, engaged in Healthcare.
                </li>
                <li>
                  <strong>J BANS ICU CARE PVT LTD</strong><br />
                  Specializes in development and manufacturing of parenteral products.<br />
                  Focuses on therapeutics including Analgesics, Critical Care, Antiemetics, Anti-infectives, and Cardiac treatments.
                </li>
                <li>
                  <strong>Product Development</strong><br />
                  Develops quality injectables and infusions for regulated and semi-regulated markets.<br />
                  Utilizes technological expertise in Sterile and Aseptic techniques.<br />
                  Implements science of Targeted Delivery System for enhanced efficacy.
                </li>
                <li>
                  <strong>Comprehensive Involvement</strong><br />
                  Engages in complete development of injectables: research & development, scale-up, manufacturing, registration, and commercialization.<br />
                  Aims to establish drugs as credible market players.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Animation (using Tailwind CSS animations) */}
      </div>
    </div>
  );
};

export default About;
