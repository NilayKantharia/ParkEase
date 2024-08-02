import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const location = useLocation();
  const { cart } = location.state || { cart: [] };
  const [cartItems, setCartItems] = useState(cart);

  const handleRemoveFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const handleProceedToPay = () => {
    // Implement proceed to pay logic here
    alert('Proceeding to payment');
  };

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="items-container">
          {cartItems.map((item, index) => (
            <div className="item-card" key={index}>
              <div className="item-image" style={{ backgroundImage: `url(${item.image})` }}></div>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
                <button className="remove-button" onClick={() => handleRemoveFromCart(index)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <button onClick={handleProceedToPay} className="proceed-to-pay">Proceed to Pay</button>
    </div>
  );
};

export default Cart;
