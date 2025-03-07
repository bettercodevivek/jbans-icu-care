import React, { useState } from 'react';
import Modal from 'react-modal';

// Ensure accessibility for the modal
Modal.setAppElement('#root');

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const products = [
    {
      id: 1,
      name: 'MINOBAN',
      image: 'https://i.postimg.cc/BZrdSfhw/IMG-20240619-WA0005.webp',
    },
    {
      id: 7,
      name: 'MINOBAN',
      image: 'https://i.postimg.cc/1z7jbknB/IMG-20240624-WA0009.webp',
    },
    {
      id: 2,
      name: 'ORNIBAN',
      image: 'https://i.postimg.cc/907KdLfp/IMG-20240624-WA0004.webp',
    },
    {
      id: 3,
      name: 'MEGBAN',
      image: 'https://i.postimg.cc/447DRx19/IMG-20240624-WA0005.webp',
    },
    {
      id: 4,
      name: 'DOXYBIN',
      image: 'https://i.postimg.cc/VkRTWrz3/IMG-20240624-WA0006.webp',
    },
    {
      id: 5,
      name: 'ONDABAN',
      image: 'https://i.postimg.cc/K8FwTrhP/IMG-20240624-WA0007.webp',
    },
    {
      id: 6,
      name: 'MUCODRAIN',
      image: 'https://i.postimg.cc/W41yWN3t/IMG-20240624-WA0008.webp',
    },
    {
      id: 8,
      name: 'J-PRED-500',
      image: 'https://i.postimg.cc/3Rycht2T/IMG-20240624-WA0010.webp',
    },
    {
      id: 14,
      name: 'J-PRED-40',
      image: 'https://i.postimg.cc/9FHn3tM6/IMG-20240624-WA0016.webp',
    },
    {
      id: 15,
      name: 'J-PRED-125',
      image: 'https://i.postimg.cc/9QWg0my1/IMG-20240624-WA0017.webp',
    },
    {
      id: 17,
      name: 'J-PRED-1000',
      image: 'https://i.postimg.cc/zfQxxT6P/IMG-20240624-WA0019.webp',
    },
    {
      id: 9,
      name: 'PANTOBAN-40 ',
      image: 'https://i.postimg.cc/cHV5Lfc8/IMG-20240624-WA0011.webp',
    },
    {
      id: 10,
      name: 'TAZOBAN',
      image: 'https://i.postimg.cc/MHV3MXs3/IMG-20240624-WA0012.webp',
    },
    {
      id: 11,
      name: 'J-CETAM',
      image: 'https://i.postimg.cc/05wBHH8G/IMG-20240624-WA0013.webp',
    },
    {
      id: 12,
      name: 'AQABAN',
      image: 'https://i.postimg.cc/7ZmsTFV4/IMG-20240624-WA0014.webp',
    },
    {
      id: 13,
      name: 'CEFBAN',
      image: 'https://i.postimg.cc/PrbFdpvP/IMG-20240624-WA0015.webp',
    },
    {
      id: 16,
      name: 'AXAMIK-T',
      image: 'https://i.postimg.cc/9f0xPL87/IMG-20240624-WA0018.webp',
    },
    {
      id: 18,
      name: 'SODA-Q 25',
      image: 'https://i.postimg.cc/rsXQkM81/IMG-20240624-WA0020.webp',
    },
    {
      id: 19,
      name: 'K-BAN10',
      image: 'https://i.postimg.cc/C1fmXzVM/IMG-20240624-WA0021.webp',
    },
    {
      id: 20,
      name: 'ESOMERZ',
      image: 'https://i.postimg.cc/7P0KNGVm/IMG-20240624-WA0022.webp',
    },
    {
      id: 22,
      name: 'POTCIBAN',
      image: 'https://i.postimg.cc/9Q8bfGmF/IMG-20240624-WA0024.webp',
    },
    {
      id: 23,
      name: 'CITCOL-J',
      image: 'https://i.postimg.cc/65KYbWbw/IMG-20240624-WA0025.webp',
    },
    {
      id: 24,
      name: 'EDROBAN',
      image: 'https://i.postimg.cc/dt9nzbgC/IMG-20240624-WA0026.webp',
    },
    {
      id: 25,
      name: 'CORTIBAN',
      image: 'https://i.postimg.cc/L86vRyMb/IMG-20240624-WA0027.webp',
    },
    {
      id: 26,
      name: 'MEROBAN 1g',
      image: 'https://i.postimg.cc/k52cRBGN/IMG-20240624-WA0028.webp',
    },
    {
      id: 27,
      name: 'THIMBAN',
      image: 'https://i.postimg.cc/Xvtgf4BR/IMG-20240624-WA0029.webp',
    },
    {
      id: 28,
      name: 'MEROBAN-S',
      image: 'https://i.postimg.cc/PxZQK9mP/IMG-20240624-WA0030.webp',
    },
    {
      id: 29,
      name: 'SODA-Q-100',
      image: 'https://i.postimg.cc/kGmFHscw/IMG-20240624-WA0031.webp',
    },
    {
      id: 30,
      name: 'DOXYFILL',
      image: 'https://i.postimg.cc/c4dBMD6L/IMG-20240624-WA0032.webp',
    },
    {
      id: 31,
      name: 'AMIKABAN-J',
      image: 'https://i.postimg.cc/kMQySrJH/IMG-20240624-WA0033.webp',
    },
    {
      id: 32,
      name: 'RABETAN',
      image: 'https://i.postimg.cc/qMQXm8CX/IMG-20240624-WA0034.webp',
    },
    {
      id: 33,
      name: 'LABTEC',
      image: 'https://i.postimg.cc/zvFSYh2N/IMG-20240624-WA0035.webp',
    },
    {
      id: 34,
      name: 'LESSO',
      image: 'https://i.postimg.cc/MpT0gv7k/IMG-20240624-WA0036.webp',
    },
    {
      id: 36,
      name: 'JEPSOLIN',
      image: 'https://i.postimg.cc/bvSxNWV3/IMG-20240624-WA0038.webp',
    },
    {
      id: 37,
      name: 'JASIX',
      image: 'https://i.postimg.cc/858hF4qD/IMG-20240624-WA0039.webp',
    },
    {
      id: 38,
      name: 'CLINDABAN 600',
      image: 'https://i.postimg.cc/Qtpcc537/IMG-20240624-WA0040.webp',
    },
    {
      id: 35,
      name: 'CLINDABAN',
      image: 'https://i.postimg.cc/fRr7sDCV/IMG-20240624-WA0037.webp',
    },
    {
      id: 39,
      name: 'NOREDEO',
      image: 'https://i.postimg.cc/T10m46hY/IMG-20240624-WA0041.webp',
    },
    {
      id: 40,
      name: 'LEVETRABAN',
      image: 'https://i.postimg.cc/d3wr61sx/IMG-20240624-WA0042.webp',
    },
  ];

  const products1=[
    {
      id: 41,
      name: 'FAROBIN-ER 300',
      image: 'https://i.postimg.cc/yxPxz25Q/IMG-20240625-WA0011.webp',
    },
    {
      id: 42,
      name: 'ACECLOBIN-SP',
      image: 'https://i.postimg.cc/fTzkvTt6/IMG-20240625-WA0012.webp',
    },
    {
      id: 43,
      name: 'CALZIN-CT',
      image: 'https://i.postimg.cc/Dyx0pk1m/IMG-20240625-WA0013.webp',
    },
    {
      id: 44,
      name: 'UDOBIN',
      image: 'https://i.postimg.cc/59q6vF0B/IMG-20240625-WA0014.webp',
    },
    {
      id: 45,
      name: 'CEFROBIN-500',
      image: 'https://i.postimg.cc/NjLMWJxD/IMG-20240625-WA0015.webp',
    },
    {
      id: 46,
      name: 'COCIT-P',
      image: 'https://i.postimg.cc/P5cxhW3j/IMG-20240625-WA0016.webp',
    },
    {
      id: 47,
      name: 'RIFABIN-400',
      image: 'https://i.postimg.cc/s2h22MqZ/IMG-20240625-WA0017.webp',
    },
    {
      id: 48,
      name: 'MULTIBIN-9G',
      image: 'https://i.postimg.cc/bJfwSzfV/IMG-20240626-WA0000.webp',
    },
    {
      id: 49,
      name: 'SUCRALFIT-O',
      image: 'https://i.postimg.cc/wM6xF0vh/IMG-20240626-WA0002.webp',
    },
    {
      id: 50,
      name: 'LYCOBIN SYRUP',
      image: 'https://i.postimg.cc/tJ2qcWZ8/IMG-20240626-WA0003.webp',
    },
    {
      id: 51,
      name: 'CLINDABAN-300',
      image: 'https://i.postimg.cc/kMcgD31w/IMG-20240626-WA0004.webp',
    },
    {
      id: 52,
      name: 'LACTUBIN ',
      image: 'https://i.postimg.cc/RVZVHs2m/IMG-20240626-WA0006.webp',
    },
    {
      id: 53,
      name: 'TRYZYME',
      image: 'https://i.postimg.cc/qRcM89kJ/IMG-20240626-WA0001.webp',
    },
    {
      id: 54,
      name: 'BROFEK',
      image: 'https://i.postimg.cc/Kvpcr7yM/IMG-20240626-WA0005.webp',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-center pb-12 text-emerald-600">
        Our Range of Products
      </h1>
      <h2 className="text-md sm:text-2xl md:text-2xl lg:text-2xl  text-center pb-12 text-black">
        Click on the product image to view it 
      </h2>
      <h1 className='text-xl font-semibold sm:text-3xl md:text-3xl lg:text-3xl  text-center pb-4 text-black'>Critical Care Range</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => openModal(product)}
          >
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
      <h1 className='text-xl sm:text-3xl font-semibold md:text-3xl lg:text-3xl  text-center pb-4 pt-4 text-black'>Tablets and Syrups Range</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products1.map(product => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => openModal(product)}
          >
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

      {selectedProduct && (
        <Modal
          isOpen={!!selectedProduct}
          onRequestClose={closeModal}
          className="relative mx-auto w-full max-w-lg p-6 bg-white rounded-lg shadow-lg"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
        >
          <img
            src={selectedProduct.image}
            alt={selectedProduct.name}
            className="w-full h-auto mb-4"
          />
          <h2 className="text-2xl font-bold mb-2 text-center">{selectedProduct.name}</h2>
          <button
            onClick={closeModal}
            className="mt-4 py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 mx-auto block"
          >
            Close
          </button>
        </Modal>
      )}
    </div>
  );
};

export default Products;
