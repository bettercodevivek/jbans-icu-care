import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Top section with wallpaper */}
      <header className="relative h-72 sm:h-96 bg-cover bg-center" style={{ backgroundImage: 'url("https://i.postimg.cc/wj09QyrZ/national-cancer-institute-KMvo-Hc-B-w5g-unsplash-1.webp")' }}>
        <div className="absolute inset-0 bg-black opacity-45 flex items-center justify-center">
          <h1 className="text-5xl sm:text-6xl text-white font-extrabold drop-shadow-md animate-fadeIn">
            About Us
          </h1>
        </div>
      </header>

      {/* Main content section */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-16">
        <section className="relative text-center mb-16">
          <h2 className="relative z-10 text-4xl font-semibold text-gray-900 mb-6">
          </h2>
          <p className="relative z-10 text-lg md:text-xl text-gray-700 leading-relaxed mx-auto max-w-3xl">
            At J-BANS ICU CARE PVT. LTD. , we are committed to providing high-quality, affordable medications to improve the health and well-being of our community. Our team of experts is dedicated to advancing pharmaceutical science and ensuring the safety and efficacy of our products.
          </p>
        </section>

        {/* Founder card */}
        <section className="flex justify-center mb-16">
          <div className="bg-gradient-to-r from-red-500 via-red-400 to-red-700 rounded-3xl shadow-2xl p-8 max-w-md md:max-w-lg transform transition hover:-translate-y-1 hover:shadow-2xl duration-300">
            <img
              className="w-32 h-32 mx-auto rounded-full object-cover mb-6 border-4 border-white"
              src="https://i.postimg.cc/CxvQBRCJ/IMG-20240624-WA0065-1.webp"
              alt="Founder"
            />
            <h3 className="text-2xl font-medium text-white">Mrs. Himanshi Tyagi </h3>
            <p className="text-sm text-white">Founder & CEO</p>
            <p className="text-base md:text-lg text-white mt-4">
              "At J-BANS ICU CARE PVT. LTD., we are dedicated to pioneering new frontiers in healthcare through innovation and excellence. Whether you are exploring our latest products or learning more about our journey, we are committed to providing you with trusted resources and support."
            </p>
          </div>
        </section>

        {/* Vision card */}
        <section className="mt-16">
  <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2">

    {/* Card 2 - J BANS' Vision */}
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-4xl font-semibold text-center text-gray-900 mb-6">J BANS' Vision</h2>
      <ul className="list-disc list-inside text-lg md:text-xl text-gray-700 leading-relaxed">
        <li>J BANS' vision is to invest in formulation, production, technology, and process development in a way that it delivers results which are par excellence.</li>
        <li>We believe in providing efficient and safe drugs to improve patients' health worldwide.</li>
        <li>J BANS develops quality injectable and infusions for regulated and semi-regulated markets.</li>
        <li>We aim to bring out the best quality drugs by using technological expertise based on Sterile and Aseptic techniques, which are backed up with the science of Targeted Delivery Systems.</li>
      </ul>
    </div>

    {/* Card 3 - About Us */}
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-4xl font-semibold text-center text-gray-900 mb-6">Who We Are</h2>
      <ul className="list-disc list-inside text-lg md:text-xl text-gray-700 leading-relaxed">
        <li>J BANS is a privately-owned healthcare company founded in 2017 and it is a part of J BANS Group of Companies.</li>
        <li>J BANS Group of Companies is engaged in Healthcare.</li>
        <li>J BANS ICU CARE PVT LTD has an experienced team with unmatched know-how in development and manufacturing of parenteral products focusing on therapeutics like Analgesics, Critical care, Antiemetics, Anti-infectives, and Cardiac.</li>
        <li>The company is involved in the complete development of injectables, starting from research & development, scale-up, manufacturing, registration to commercialization until the drug is poised to become a credible market player.</li>
      </ul>
    </div>

  </div>
</section>

      </main>

     
    </div>
  );
};

export default About;
