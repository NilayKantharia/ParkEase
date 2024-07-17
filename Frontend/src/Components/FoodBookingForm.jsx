import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FoodBookingForm = () => {
  const [stalls, setStalls] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedStall, setSelectedStall] = useState('');
  const [selectedItems, setSelectedItems] = useState({});
  const [userId, setUserId] = useState('');

  useEffect(() => {
    // Fetch stalls
    axios.get('/api/stalls')
      .then(response => setStalls(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleStallChange = (stallId) => {
    setSelectedStall(stallId);
    // Fetch items based on selected stall
    axios.get(`/api/items?stall_id=${stallId}`)
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  };

  const handleItemChange = (itemId, quantity) => {
    setSelectedItems({
      ...selectedItems,
      [itemId]: quantity
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = {
      user_id: userId,
      stall_id: selectedStall,
      items: selectedItems
    };
    axios.post('/api/orders', orderData)
      .then(response => alert('Order placed successfully!'))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={e => setUserId(e.target.value)}
        required
      />
      <select onChange={e => handleStallChange(e.target.value)} required>
        <option value="">Select Stall</option>
        {stalls.map(stall => (
          <option key={stall.stall_id} value={stall.stall_id}>{stall.stall_name}</option>
        ))}
      </select>
      {items.map(item => (
        <div key={item.item_id}>
          <label>{item.item_name}</label>
          <input
            type="number"
            min="1"
            placeholder="Quantity"
            onChange={e => handleItemChange(item.item_id, e.target.value)}
          />
        </div>
      ))}
      <button type="submit">Place Order</button>
    </form>
  );
};

export default FoodBookingForm;
