import React from 'react';

const Quality = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero section */}
      <header className="relative h-80 sm:h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://i.postimg.cc/6QmqdW5r/louis-reed-pwcKF7L4-no-unsplash_(1).webp")' }}>
        <div className="absolute inset-0 bg-black opacity-70 flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl text-white font-extrabold drop-shadow-md animate-fadeIn">
            Quality & Research
          </h1>
        </div>
      </header>

      {/* Main content section */}
      <main className="container mx-auto px-4 md:px-12 py-8 md:py-16">
        {/* Quality Assurance */}
        <section className="py-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8 text-center">
            Quality Assurance
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <img
              className="w-full rounded-lg shadow-lg"
              src="/glsun-mall-WNX6uk-1LV4-unsplash.webp"
              alt="Quality Assurance"
            />
            <div className="space-y-4">
              {/* Individual Cards for Quality Assurance */}
              {[
                "Our Technical Competency has been a cornerstone of our rapid growth, supported by our in-house R&D center.",
                "J-BANS research center is a government-approved lab, recognized by the Department of Scientific and Industrial Research (DSIR), under the Ministry of Science and Technology, Govt. of India.",
                "At our research center, we develop formulations, process them until they are stable and ready for commercialization.",
                "Once formulations are ready, technology is transferred to our manufacturing facility or contract manufacturers.",
                "Production continues under the supervision of our scientists and skilled technicians to ensure top quality for every product.",
                "J-BANS commitment to meeting the unmet needs of patients is demonstrated by our expert team in the R&D unit.",
                "Our R&D team consists of qualified scientists and technicians with pharmaceutical sciences backgrounds and extensive product development experience in solid dosage and sterile preparations.",
                "The team collaborates with a global network of scientific communities, including companies, universities, and scientists with similar interests."
              ].map((text, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex items-start">
                  <span className="text-red-600 mr-3">•</span>
                  <p className="text-gray-700 text-sm md:text-lg leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research & Development */}
        <section className="py-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8 text-center">
            Research & Development
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <img
              className="w-full rounded-lg shadow-lg"
              src="/pharmaceutical-technicians-work-sterile-working-conditions-pharmaceutical-factory-scientists-wearing-protective-clothing.webp"
              alt="Research & Development"
            />
            <div className="space-y-4">
              {/* Individual Cards for Research & Development */}
              {[
                "The Corporate strategy of our R&D unit is to convert ideas into reality through smart, scientific, and timely execution.",
                "The aim of the R&D team is innovative product development, where they first understand the underlying mechanism or cause of a disease.",
                "Based on this understanding, the team develops a research program aimed at better formulation of effective chemical or biologic-based medicines."
              ].map((text, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex items-start">
                  <span className="text-red-600 mr-3">•</span>
                  <p className="text-gray-700 text-sm md:text-lg leading-relaxed">{text}</p>
                </div>
              ))}

              {/* Manufacturing Section */}
              <h2 className="text-2xl font-semibold mt-4 text-center">Manufacturing</h2>
              {[
                "J-BANS is committed to meeting the unmet medical needs of the healthcare industry with innovative and quality products.",
                "We ensure the highest quality standards, supported by strong R&D, for every product that reaches the end consumer.",
                "In the initial stage at our research center, we develop formulations and process them until they are stable and ready for commercialization.",
                "We have partnerships with contract manufacturers to assist in production.",
                "Production is conducted under the supervision of our scientists and skilled technicians to ensure top-quality products."
              ].map((text, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex items-start">
                  <span className="text-red-600 mr-3">•</span>
                  <p className="text-gray-700 text-lg leading-relaxed">{text}</p>
                </div>
              ))}

              {/* Contract Manufacturing Associates */}
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-2">Contract Manufacturing Associates:</h3>
                <ul className="list-disc list-inside">
                  {["Akums Drugs & Pharmaceuticals", "Shree Krishna Keshav", "Gufic Biosciences Ltd.", "BDR"].map((item, index) => (
                    <li key={index} className="text-gray-700 text-lg leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Quality;
