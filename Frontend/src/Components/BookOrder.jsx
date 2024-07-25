import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './BookOrder.css';

const BookOrder = () => {
  const [selectedStall, setSelectedStall] = useState('');
  const [stalls, setStalls] = useState([]);
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch stalls from backend
    const fetchStalls = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/stalls');
        setStalls(response.data);
      } catch (error) {
        console.error('Error fetching stalls:', error);
      }
    };

    fetchStalls();
  }, []);

  useEffect(() => {
    // Fetch items from backend
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/items');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleStallChange = (e) => {
    setSelectedStall(e.target.value);
  };

  const handleMyOrdersClick = () => {
    navigate('/my-orders');
  };

  const handleAddToCart = (item, quantity) => {
    setCart((prevCart) => [...prevCart, { ...item, quantity }]);
  };

  const handleGoToCart = () => {
    navigate('/cart', { state: { cart } });
  };

  const filteredItems = selectedStall
    ? items.filter(item => item.stallId === parseInt(selectedStall))
    : items;

  return (
    <div className="book-order-container">
      <div className="button-conatainer">
      <button onClick={handleMyOrdersClick}>Order History</button>
      <select onChange={handleStallChange} value={selectedStall}>
        <option value="">Select Stall</option>
        {stalls.map(stall => (
          <option key={stall.id} value={stall.id}>{stall.name}</option>
        ))}
      </select>
      
      <div className="cart" onClick={handleGoToCart}>
        <FontAwesomeIcon icon={faShoppingCart} /> Cart ({cart.length})
      </div>
      </div>
      <div className="items-container">
        {filteredItems.map(item => (
          <div className="item-card" key={item.id}>
            <div className="item-image" style={{ backgroundImage: `url(${item.image})` }}></div>
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
              <input type="number" min="1" defaultValue="1" id={`quantity-${item.id}`} />
              <button onClick={() => handleAddToCart(item, document.getElementById(`quantity-${item.id}`).value)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookOrder;
