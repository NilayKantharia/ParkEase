// AddNewHr.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddNewHr = ({ fetchHrList }) => {
  const [formData, setFormData] = useState({
    user_name: '',
    password: '',
    mail_id: '',
    phone_no: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/hrs/new', formData);
      fetchHrList(); // Refresh the list after adding a new HR
      setFormData({ user_name: '', password: '', mail_id: '', phone_no: '' }); // Clear form fields
    } catch (error) {
      console.error('Error adding new HR:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="mail_id"
          value={formData.mail_id}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone_no"
          value={formData.phone_no}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Add HR</button>
    </form>
  );
};

export default AddNewHr;
