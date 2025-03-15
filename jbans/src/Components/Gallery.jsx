import React, { useState } from 'react';

const Gallery = () => {
  // Array of image URLs
  const [images, setImages] = useState([
    '/IMG-20240619-WA0004.webp',
    '/IMG-20240619-WA0003.webp',
    '/IMG-20240619-WA0006.webp',
    '/IMG-20240619-WA0009 (2).webp',
    'https://i.postimg.cc/Sx50XQ3J/IMG-20250106-WA0010-1.jpg',
    'https://i.postimg.cc/768pVsx4/IMG-20250106-WA0011.jpg',
    'https://i.postimg.cc/R0nkw5xG/IMG-20250106-WA0012.jpg',
    'https://i.postimg.cc/VLKP8WF9/IMG-20250106-WA0013.jpg',
    'https://i.postimg.cc/JztV4HTf/IMG-20250106-WA0014.jpg',
    'https://i.postimg.cc/4NfRqSpN/IMG-20250106-WA0015.jpg'
    // Add more images here
  ]);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <header className="relative h-72 sm:h-96 bg-cover bg-center" style={{ backgroundImage: 'url("/path-to-your-wallpaper.jpg")' }}>
        <div className="absolute inset-0 bg-[#97144d] opacity-90 flex items-center justify-center">
          <h1 className="text-5xl sm:text-6xl text-white font-extrabold drop-shadow-md animate-fadeIn">
            Gallery
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-16 flex-1">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">Our Collection</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mx-auto max-w-3xl">
            Explore our gallery showcasing moments, achievements, and our journey in the pharmaceutical field. Click on any image to view it in full size.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="group relative">
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <span className="text-white text-lg font-bold">View</span>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Gallery;
