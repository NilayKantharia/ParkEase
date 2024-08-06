import React, { useState } from 'react';
import axios from 'axios';

const EditHrInfo = ({ hr, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: hr.name,
    email: hr.email,
    phone: hr.phone,
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
      await axios.put(`http://localhost:8000/hr/${hr.id}`, formData);
      onUpdate();
    } catch (error) {
      console.error('Error updating HR info:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditHrInfo;
