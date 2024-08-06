import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <div className="container mt-4">
      <h2 className="mb-4">My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row">
          {cartItems.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <div
                  className="card-img-top"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '200px',
                    width: '100%',
                  }}
                ></div>
                <div className="card-body">
                  <h6 className="card-title">{item.item_name}</h6>
                  {/* <p className="card-text">{item.description}</p> */}
                  <p className="card-text">Price: ₹{item.price}</p>
                  <p className="card-text">Quantity: {item.quantity}</p>
                  <p className="card-text">Total: ₹{(item.price * item.quantity).toFixed(2)}</p>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <button onClick={handleProceedToPay} className="btn btn-primary mt-4">
        Proceed to Pay
      </button>
    </div>
  );
};

export default Cart;
