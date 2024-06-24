import React from 'react';

const Products = () => {
  // Example data for products
  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://i.postimg.cc/BZrdSfhw/IMG-20240619-WA0005.webp',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://i.postimg.cc/907KdLfp/IMG-20240624-WA0004.webp',
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://i.postimg.cc/447DRx19/IMG-20240624-WA0005.webp',
    },
    {
      id: 4,
      name: 'Product 4',
      image: 'https://i.postimg.cc/VkRTWrz3/IMG-20240624-WA0006.webp',
    },
    {
        id: 5,
        name: 'Product 1',
        image: 'https://i.postimg.cc/K8FwTrhP/IMG-20240624-WA0007.webp',
      },
      {
        id: 6,
        name: 'Product 2',
        image: 'https://i.postimg.cc/W41yWN3t/IMG-20240624-WA0008.webp',
      },
      {
        id: 7,
        name: 'Product 3',
        image: 'https://i.postimg.cc/1z7jbknB/IMG-20240624-WA0009.webp',
      },
      {
        id: 8,
        name: 'Product 4',
        image: 'https://i.postimg.cc/3Rycht2T/IMG-20240624-WA0010.webp',
      },
      {
        id: 9,
        name: 'Product 1',
        image: 'https://i.postimg.cc/cHV5Lfc8/IMG-20240624-WA0011.webp',
      },
      {
        id: 10,
        name: 'Product 2',
        image: 'https://i.postimg.cc/MHV3MXs3/IMG-20240624-WA0012.webp',
      },
      {
        id: 11,
        name: 'Product 3',
        image: 'https://i.postimg.cc/05wBHH8G/IMG-20240624-WA0013.webp',
      },
      {
        id: 12,
        name: 'Product 4',
        image: 'https://i.postimg.cc/7ZmsTFV4/IMG-20240624-WA0014.webp',
      },
      {
        id: 13,
        name: 'Product 3',
        image: 'https://i.postimg.cc/PrbFdpvP/IMG-20240624-WA0015.webp',
      },
      {
        id:14,
        name: 'Product 4',
        image: 'https://i.postimg.cc/9FHn3tM6/IMG-20240624-WA0016.webp',
      },
      {
        id: 15,
        name: 'Product 3',
        image: 'https://i.postimg.cc/9QWg0my1/IMG-20240624-WA0017.webp',
      },
      {
        id: 16,
        name: 'Product 4',
        image: 'https://i.postimg.cc/9f0xPL87/IMG-20240624-WA0018.webp',
      },
      {
        id: 17,
        name: 'Product 3',
        image: 'https://i.postimg.cc/zfQxxT6P/IMG-20240624-WA0019.webp',
      },
      {
        id: 18,
        name: 'Product 4',
        image: 'https://i.postimg.cc/rsXQkM81/IMG-20240624-WA0020.webp',
      },
      {
        id: 19,
        name: 'Product 3',
        image: 'https://i.postimg.cc/C1fmXzVM/IMG-20240624-WA0021.webp',
      },
      {
        id: 20,
        name: 'Product 4',
        image: 'https://i.postimg.cc/7P0KNGVm/IMG-20240624-WA0022.webp',
      },
      {
        id: 21,
        name: 'Product 3',
        image: 'https://i.postimg.cc/yxmn6tdw/IMG-20240624-WA0023.webp',
      },
      {
        id:22,
        name: 'Product 4',
        image: 'https://i.postimg.cc/9Q8bfGmF/IMG-20240624-WA0024.webp',
      },
      {
        id: 23,
        name: 'Product 3',
        image: 'https://i.postimg.cc/65KYbWbw/IMG-20240624-WA0025.webp',
      },
      {
        id: 24,
        name: 'Product 4',
        image: 'https://i.postimg.cc/dt9nzbgC/IMG-20240624-WA0026.webp',
      },
      {
        id: 25,
        name: 'Product 4',
        image: 'https://i.postimg.cc/L86vRyMb/IMG-20240624-WA0027.webp ',
      },
      {
        id: 26,
        name: 'Product 4',
        image: 'https://i.postimg.cc/k52cRBGN/IMG-20240624-WA0028.webp ',
      },
      {
        id: 27,
        name: 'Product 4',
        image: ' https://i.postimg.cc/Xvtgf4BR/IMG-20240624-WA0029.webp',
      },
      {
        id: 28,
        name: 'Product 4',
        image: ' https://i.postimg.cc/PxZQK9mP/IMG-20240624-WA0030.webp',
      },
      {
        id: 29,
        name: 'Product 4',
        image: 'https://i.postimg.cc/kGmFHscw/IMG-20240624-WA0031.webp ',
      },
      {
        id: 30,
        name: 'Product 4',
        image: 'https://i.postimg.cc/c4dBMD6L/IMG-20240624-WA0032.webp ',
      },
      {
        id: 31,
        name: 'Product 4',
        image: ' https://i.postimg.cc/kMQySrJH/IMG-20240624-WA0033.webp',
      },
      {
        id: 32,
        name: 'Product 4',
        image: ' https://i.postimg.cc/qMQXm8CX/IMG-20240624-WA0034.webp',
      },
      {
        id: 33,
        name: 'Product 4',
        image: 'https://i.postimg.cc/zvFSYh2N/IMG-20240624-WA0035.webp ',
      },
      {
        id: 34,
        name: 'Product 4',
        image: ' https://i.postimg.cc/MpT0gv7k/IMG-20240624-WA0036.webp',
      },
      {
        id: 35,
        name: 'Product 4',
        image: 'https://i.postimg.cc/fRr7sDCV/IMG-20240624-WA0037.webp ',
      },
      {
        id: 36,
        name: 'Product 4',
        image: 'https://i.postimg.cc/bvSxNWV3/IMG-20240624-WA0038.webp ',
      },
      {
        id: 37,
        name: 'Product 4',
        image: 'https://i.postimg.cc/858hF4qD/IMG-20240624-WA0039.webp ',
      },
      {
        id: 38,
        name: 'Product 4',
        image: 'https://i.postimg.cc/Qtpcc537/IMG-20240624-WA0040.webp',
      },
      {
        id: 39,
        name: 'Product 4',
        image: 'https://i.postimg.cc/T10m46hY/IMG-20240624-WA0041.webp ',
      },
      {
        id: 40,
        name: 'Product 4',
        image: 'https://i.postimg.cc/d3wr61sx/IMG-20240624-WA0042.webp ',
      },
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-900 font-bold text-xl mb-2">{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
