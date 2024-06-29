// src/components/AddCartButton.js

import React, { useState } from 'react';

const AddCartButton = ({ itemId, itemName, itemPrice, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);  // Default quantity is 1

  const addToCartHandler = () => {
    const item = {
      id: itemId,
      name: itemName,
      price: itemPrice,
      quantity: quantity
    };
    onAddToCart(item);
  };

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value));  // Parse the selected quantity
  };

  return (
    <div>
      <select value={quantity} onChange={handleQuantityChange}>
        {[1, 2, 3, 4, 5].map(num => (
          <option key={num} value={num}>{num}</option>
        ))}
        <option value="custom">Custom</option> {/* Option for custom quantity */}
      </select>
      <button onClick={addToCartHandler}>Add to Cart</button>
    </div>
  );
};

export default AddCartButton;
