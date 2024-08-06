import React, { useState } from 'react';
import axios from 'axios';

const EditStallOwner = ({ owner, onUpdate }) => {
  const [stallName, setStallName] = useState(owner.stall_name);
  const [ownerName, setOwnerName] = useState(owner.owner_name);
  const [email, setEmail] = useState(owner.email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8000/stall-owners/${owner.stall_id}`, {
        stall_name: stallName,
        owner_name: ownerName,
        email,
      });
      onUpdate(); // Call the update handler
    } catch (error) {
      console.error('Error updating stall owner:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column">
      <input
        type="text"
        className="form-control mb-2"
        value={stallName}
        onChange={(e) => setStallName(e.target.value)}
        required
      />
      <input
        type="text"
        className="form-control mb-2"
        value={ownerName}
        onChange={(e) => setOwnerName(e.target.value)}
        required
      />
      <input
        type="email"
        className="form-control mb-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-success mb-2">
        Save
      </button>
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => onUpdate()}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditStallOwner;
