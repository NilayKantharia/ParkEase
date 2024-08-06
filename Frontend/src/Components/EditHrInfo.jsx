// EditHrInfo.jsx
import React, { useState } from 'react';

const EditHrInfo = ({ hr, onUpdate }) => {
  const [formData, setFormData] = useState({
    user_name: hr.user_name,
    mail_id: hr.mail_id,
    phone_no: hr.phone_no,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...hr, ...formData });
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex align-items-center">
      <div className="form-group mx-2">
        <label className="sr-only">Name:</label>
        <input
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          className="form-control"
          placeholder="Name"
        />
      </div>
      <div className="form-group mx-2">
        <label className="sr-only">Email:</label>
        <input
          type="email"
          name="mail_id"
          value={formData.mail_id}
          onChange={handleChange}
          className="form-control"
          placeholder="Email"
        />
      </div>
      <div className="form-group mx-2">
        <label className="sr-only">Phone:</label>
        <input
          type="text"
          name="phone_no"
          value={formData.phone_no}
          onChange={handleChange}
          className="form-control"
          placeholder="Phone"
        />
      </div>
      <button type="submit" className="btn btn-success mx-2">
        Save Changes
      </button>
    </form>
  );
};

export default EditHrInfo;
