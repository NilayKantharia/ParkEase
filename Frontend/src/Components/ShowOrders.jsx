// ShowOrders.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ShowOrders = () => {
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8000/orders/all');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleBack = () => {
    navigate('/AdminDashboard');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Order List</h2>
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Order ID</th>
              <th>Order Placed At</th>
              <th>Order Status</th>
              <th>Stall Name</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.order_id}>
                <td>{order.order_id}</td>
                <td>{new Date(order.order_placed_at).toLocaleString()}</td>
                <td>{order.order_status}</td>
                <td>{order.stall_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-primary" onClick={handleBack}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default ShowOrders;
