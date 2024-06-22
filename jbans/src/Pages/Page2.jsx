import React from "react";

export default function Page2() {
  return (
    <div className="p-6  relative -top-32 lg:-top-4 md:-top-4 sm:-top-4 flex flex-col gap-8 justify-center items-center">
        <h1 className='text-3xl text-center font-bold'> Our Bestselling Products</h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-8 md:gap-12 lg:gap-16">
        {/* Card Container */}
        <div className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 bg-opacity-80 backdrop-blur-md shadow-2xl rounded-2xl p-8 max-w-lg md:max-w-md lg:max-w-lg flex flex-col transition-transform duration-500 ease-in-out transform hover:translate-y-1 hover:shadow-2xl hover:scale-105">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Product Name</h1>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque eum eius corporis eaque sint odit reprehenderit debitis ex, unde porro praesentium dolorum nostrum cum laborum possimus consequatur voluptatum saepe
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque eum eius corporis eaque sint odit reprehenderit debitis ex, unde porro praesentium dolorum nostrum cum laborum possimus consequatur voluptatum saepe .
          </p>
        </div>
        
        {/* Image Container */}
        <div className="relative">
          <img
            src="https://i.postimg.cc/RF1xj2P3/IMG-20240619-WA0008-removebg-preview.webp"
            className="max-w-full md:max-w-md lg:max-w-lg rounded-2xl"
            alt="Product"
            style={{
              filter: "drop-shadow(20px 20px 20px rgba(0, 0, 0, 0.25))",
            }}
          />
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-8 md:gap-12 lg:gap-16">

      <div className="relative">
          <img
            src="https://i.postimg.cc/RF1xj2P3/IMG-20240619-WA0008-removebg-preview.webp"
            className="max-w-full md:max-w-md lg:max-w-lg rounded-2xl"
            alt="Product"
            style={{
              filter: "drop-shadow(20px 20px 20px rgba(0, 0, 0, 0.25))",
            }}
          />
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent" />
        </div>

        {/* Card Container */}
        <div className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 bg-opacity-80 backdrop-blur-md shadow-2xl rounded-2xl p-8 max-w-lg md:max-w-md lg:max-w-lg flex flex-col transition-transform duration-500 ease-in-out transform hover:translate-y-1 hover:shadow-2xl hover:scale-105">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Product Name</h1>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque eum eius corporis eaque sint odit reprehenderit debitis ex, unde porro praesentium dolorum nostrum cum laborum possimus consequatur voluptatum saepe
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque eum eius corporis eaque sint odit reprehenderit debitis ex, unde porro praesentium dolorum nostrum cum laborum possimus consequatur voluptatum saepe .
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-8 md:gap-12 lg:gap-16">
        {/* Card Container */}
        <div className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 bg-opacity-80 backdrop-blur-md shadow-2xl rounded-2xl p-8 max-w-lg md:max-w-md lg:max-w-lg flex flex-col transition-transform duration-500 ease-in-out transform hover:translate-y-1 hover:shadow-2xl hover:scale-105">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Product Name</h1>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque eum eius corporis eaque sint odit reprehenderit debitis ex, unde porro praesentium dolorum nostrum cum laborum possimus consequatur voluptatum saepe
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam atque eum eius corporis eaque sint odit reprehenderit debitis ex, unde porro praesentium dolorum nostrum cum laborum possimus consequatur voluptatum saepe .
          </p>
        </div>
        
        {/* Image Container */}
        <div className="relative">
          <img
            src="https://i.postimg.cc/RF1xj2P3/IMG-20240619-WA0008-removebg-preview.webp"
            className="max-w-full md:max-w-md lg:max-w-lg rounded-2xl"
            alt="Product"
            style={{
              filter: "drop-shadow(20px 20px 20px rgba(0, 0, 0, 0.25))",
            }}
          />
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent" />
        </div>
      </div>
    </div>
  );
}
