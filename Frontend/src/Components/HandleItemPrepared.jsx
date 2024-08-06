import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StallExecutiveDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [preparedItems, setPreparedItems] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8000/orders'); 
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  const handleItemPrepared = async (itemId) => {
    try {
      await axios.put(`http://localhost:8000/items/${itemId}`, { status: 'prepared' }); // Adjust endpoint and payload as necessary
      // Update local state to reflect item preparation
      setPreparedItems((prevItems) => [...prevItems, itemId]);
      // Optionally, refetch orders or update state
      // const updatedOrders = await axios.get('http://localhost:8000/orders');
      // setOrders(updatedOrders.data);
    } catch (error) {
      console.error('Error updating item status:', error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, borderRight: '1px solid black', padding: '10px' }}>
        <h3>Order Requests</h3>
        {orders.length === 0 ? (
          <p>No orders to display</p>
        ) : (
          orders.map((order) => (
            <div key={order.id} style={{ marginBottom: '10px' }}>
              <h4>{order.itemName}</h4>
              <p>Quantity: {order.quantity}</p>
              <p>Price: {order.price}</p>
              <button onClick={() => handleItemPrepared(order.itemId)}>Mark as Prepared</button>
            </div>
          ))
        )}
      </div>
      <div style={{ flex: 2, padding: '10px' }}>
        <h3>Prepared Items</h3>
        {preparedItems.length === 0 ? (
          <p>No items prepared</p>
        ) : (
          preparedItems.map((itemId) => (
            <div key={itemId}>
              {/* Render details of prepared items here */}
              <p>Item ID: {itemId}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default StallExecutiveDashboard;
