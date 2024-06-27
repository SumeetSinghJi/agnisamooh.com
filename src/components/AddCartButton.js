// src/components/AddCartButton.js
import React from 'react';

const AddCartButton = ({ itemId, itemName, itemPrice, onAddToCart }) => {
  const addToCartHandler = () => {
    const item = {
      id: itemId,
      name: itemName,
      price: itemPrice,
      quantity: 1  // Assuming starting with quantity 1
    };
    onAddToCart(item);
  };

  return (
    <button onClick={addToCartHandler}>Add to Cart</button>
  );
};

export default AddCartButton;
