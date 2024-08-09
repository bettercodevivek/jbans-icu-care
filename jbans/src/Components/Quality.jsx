import React from 'react';

const Quality = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero section */}
      <header className="relative h-80 sm:h-96 bg-cover bg-center" style={{ backgroundImage: 'url(" https://i.postimg.cc/6QmqdW5r/louis-reed-pwcKF7L4-no-unsplash_(1).webp")' }}>
        <div className="absolute inset-0 bg-black opacity-70 flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl text-white font-extrabold drop-shadow-md animate-fadeIn">
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
                src="/glsun-mall-WNX6uk-1LV4-unsplash.webp"
                alt="Quality Assurance"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
                Quality Assurance
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
              <ul className="list-disc list-inside">
    <li>Our Technical Competency has been a cornerstone of our rapid growth, supported by our in-house R&D center.</li>
    <li>J-BANS research center is a government-approved lab, recognized by the Department of Scientific and Industrial Research (DSIR), under the Ministry of Science and Technology, Govt. of India.</li>
    <li>At our research center, we develop formulations, process them until they are stable and ready for commercialization.</li>
    <li>Once formulations are ready, technology is transferred to our manufacturing facility or contract manufacturers.</li>
    <li>Production continues under the supervision of our scientists and skilled technicians to ensure top quality for every product.</li>
    <li>J-BANS commitment to meeting the unmet needs of patients is demonstrated by our expert team in the R&D unit.</li>
    <li>Our R&D team consists of qualified scientists and technicians with pharmaceutical sciences backgrounds and extensive product development experience in solid dosage and sterile preparations.</li>
    <li>The team collaborates with a global network of scientific communities, including companies, universities, and scientists with similar interests.</li>
  </ul>
              </p>
            </div>
          </div>
        </section>

        {/* Research & Development */}
        <section className="py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="md:w-1/2">
              <img
                className="w-full rounded-lg shadow-lg"
                src="/pharmaceutical-technicians-work-sterile-working-conditions-pharmaceutical-factory-scientists-wearing-protective-clothing.webp"
                alt="Research & Development"
              />
            </div>
            <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
                Research & Development
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
              <ul className="list-disc list-inside">
    <li>The Corporate strategy of our R&D unit is to convert ideas into reality through smart, scientific, and timely execution.</li>
    <li>The aim of the R&D team is innovative product development, where they first understand the underlying mechanism or cause of a disease.</li>
    <li>Based on this understanding, the team develops a research program aimed at better formulation of effective chemical or biologic-based medicines.</li>
  </ul>
  
  <h2 className="text-xl font-semibold mt-4">Manufacturing</h2>
  <ul className="list-disc list-inside">
    <li>J-BANS is committed to meeting the unmet medical needs of the healthcare industry with innovative and quality products.</li>
    <li>We ensure the highest quality standards, supported by strong R&D, for every product that reaches the end consumer.</li>
    <li>In the initial stage at our research center, we develop formulations and process them until they are stable and ready for commercialization.</li>
    <li>We have partnerships with contract manufacturers to assist in production.</li>
    <li>Production is conducted under the supervision of our scientists and skilled technicians to ensure top-quality products.</li>
    <li>Some of our Contract Manufacturing Associates include:
      <ul className="list-disc list-inside">
        <li>Akums Drugs & Pharmaceuticals</li>
        <li>Shree Krishna Keshav</li>
        <li>Gufic Biosciences Ltd.</li>
        <li>BDR</li>
      </ul>
    </li>
  </ul>
              </p>
            </div>
          </div>
        </section>

      </main>

    
    </div>
  );
};

export default Quality;
