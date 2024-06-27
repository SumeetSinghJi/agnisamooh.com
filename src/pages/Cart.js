// src/pages/Cart.js

import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from localStorage on component mount
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const removeFromCart = (itemId) => {
    // Filter out the item with the given itemId from cartItems
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    // Update localStorage with the new cartItems
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <div className='main'>
        <div className="column1"></div>
        <div className="column2">
          <br />
          <br />
          <div style={{ textAlign: 'center' }}>
            <h1>Cart</h1>
          </div>
          <br />
          {/* Display each item in the cart */}
          {cartItems.map(item => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
              <hr />
            </div>
          ))}
          {/* Show a message if cart is empty */}
          {cartItems.length === 0 && <p>Your cart is empty</p>}
          <br />
          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
        </div>
        <div className="column3"></div>
      </div>
    </div>
  );
};

export default Cart;
