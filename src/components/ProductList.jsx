import React from 'react';
import ProductCard from './ProductCard';

export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$0.99', category: 'Fruits', inStock: true },
  { id: 2, name: 'Cookies', price: '$9.99', category: 'Bakery', inStock: false },
  { id: 3, name: 'Oranges', price: '$5.99', category: 'Fruits', inStock: true },
  { id: 4, name: 'Frozen Pizza', price: '$12.99', category: 'Frozen', inStock: true },
  { id: 5, name: 'Milk', price: '$2.99', category: 'Dairy', inStock: true }
];

const ProductList = ({ selectedCategory, addToCart }) => {
  const filteredProducts = selectedCategory === 'all'
    ? sampleProducts
    : sampleProducts.filter(product => product.category === selectedCategory);

  return (
    <div>
      <h2>Available Products</h2>
      {filteredProducts.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;