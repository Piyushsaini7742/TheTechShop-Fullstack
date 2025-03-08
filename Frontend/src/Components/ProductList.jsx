import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Mechanical Keyboard',
    description: 'High-quality mechanical keyboard with RGB lighting.',
    price: 120,
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    name: 'Gaming Mouse',
    description: 'Ergonomic gaming mouse with customizable buttons.',
    price: 80,
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    name: '1TB SSD',
    description: 'High-speed SSD for gaming and productivity.',
    price: 150,
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 4,
    name: 'PC Cabinet',
    description: 'Stylish and durable PC cabinet with RGB lighting.',
    price: 100,
    image: 'https://via.placeholder.com/300',
  },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;