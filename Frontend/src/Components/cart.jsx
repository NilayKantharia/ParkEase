import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = location.state || { cart: [] };

  const handleProceedToPay = () => {
    // Implement proceed to pay logic here
    
    alert('Proceeding to payment');
  };

  return (
    <div className="cart-container">
      <h2>My Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="items-container">
          {cart.map((item, index) => (
            <div className="item-card" key={index}>
              <div className="item-image" style={{ backgroundImage: `url(${item.image})` }}></div>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
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
