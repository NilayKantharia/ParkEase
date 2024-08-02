import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MyOrders.css';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [errors, setErrors] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/orders');
        setOrders(response.data);
      } catch (error) {
        setErrors('Error fetching orders');
        console.error(error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders-table-container">
      <h2>My Orders</h2>
      {errors && <p className="error">{errors}</p>}
      <table className="orders-table">
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Price</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Quantity</th>
            <th>Stall Name</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.foodName}</td>
              <td>₹{order.price.toFixed(2)}</td>
              <td>{order.date}</td>
              <td>{order.time}</td>
              <td>{order.status}</td>
              <td>{order.quantity}</td>
              <td>{order.stallName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
