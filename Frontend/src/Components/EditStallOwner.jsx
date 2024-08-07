import React, { useState } from 'react';
import axios from 'axios';

const EditStallOwner = ({ owner, onUpdate }) => {
  const [formData, setFormData] = useState({
    stall_name: owner.stall_name,
    user_name: owner.user_name,
    mail_id: owner.mail_id,
    stallExecutiveId: owner.stall_id,
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
      await axios.patch(`http://localhost:8000/stallexecutives/${owner.user_id}/edit`, formData);
      onUpdate(); // Call the update handler to refresh the list
    } catch (error) {
      console.error('Error updating stall owner:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-row">
      <div className="form-group mb-2">
        <label className="sr-only">Stall Name:</label>
        <input
          type="text"
          name="stall_name"
          value={formData.stall_name}
          onChange={handleChange}
          className="form-control"
          placeholder="Stall Name"
          required
        />
      </div>
      <div className="form-group mb-2">
        <label className="sr-only">Owner Name:</label>
        <input
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          className="form-control"
          placeholder="Owner Name"
          required
        />
      </div>
      <div className="form-group mb-2">
        <label className="sr-only">Email:</label>
        <input
          type="email"
          name="mail_id"
          value={formData.mail_id}
          onChange={handleChange}
          className="form-control"
          placeholder="Email"
          required
        />
      </div>
      <div className="d-flex">
        <button type="submit" className="btn btn-success me-2">
          Save Changes
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => onUpdate()} // Call onUpdate to exit edit mode
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditStallOwner;
