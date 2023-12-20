// ProductList.js
import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './Action00';  // Adjust this path

const Product = ({ addToCart }) => {
  const products = ['Product 1', 'Product 2', 'Product 3'];
  const products1 = ['com.jpg','mul.jpg','ai.jpg'];
  
  

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product}{' '}
            {products1}{' '}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(null, { addToCart })(Product);
