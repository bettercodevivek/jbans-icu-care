import React from 'react';

const Products = () => {
  // Example data for products
  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'https://via.placeholder.com/300',
    },
    {
      id: 4,
      name: 'Product 4',
      image: 'https://via.placeholder.com/300',
    },
    {
        id: 1,
        name: 'Product 1',
        image: 'https://via.placeholder.com/300',
      },
      {
        id: 2,
        name: 'Product 2',
        image: 'https://via.placeholder.com/300',
      },
      {
        id: 3,
        name: 'Product 3',
        image: 'https://via.placeholder.com/300',
      },
      {
        id: 4,
        name: 'Product 4',
        image: 'https://via.placeholder.com/300',
      },
      {
        id: 1,
        name: 'Product 1',
        image: 'https://via.placeholder.com/300',
      },
      {
        id: 2,
        name: 'Product 2',
        image: 'https://via.placeholder.com/300',
      },
      {
        id: 3,
        name: 'Product 3',
        image: 'https://via.placeholder.com/300',
      },
      {
        id: 4,
        name: 'Product 4',
        image: 'https://via.placeholder.com/300',
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
