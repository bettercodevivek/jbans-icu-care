import React from 'react';

const Page4 = () => {
  // Sample data for the cards
  const divisions = [
    {
      name: 'Critical Care Division',
      imageUrl: 'https://i.postimg.cc/BQcKCyvw/marcelo-leal-ta-F3klww-AWA-unsplash.webp',
    },
    {
      name: 'Nayra Tablets Division',
      imageUrl: 'https://i.postimg.cc/rw1qBX45/volodymyr-hryshchenko-a-Xbf-OFQ-ju-U-unsplash.webp',
    },
    {
      name: 'Veterinary Division',
      imageUrl: 'https://i.postimg.cc/N0QQYJ8S/werzk-luuuuuuu-t-Dlo2-ZPl-Ql-U-unsplash.webp',
    },
  ];

  return (
    <section className="mt-16 mb-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-emerald-600 mb-12">Our Divisions</h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {divisions.map((division, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <img
                src={division.imageUrl}
                alt={division.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">{division.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page4;
