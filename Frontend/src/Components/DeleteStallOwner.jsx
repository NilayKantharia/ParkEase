// DeleteStallOwner.jsx
import React from 'react';
import axios from 'axios';

const DeleteStallOwner = ({ stallOwnerId, onDelete }) => {
  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this stall owner?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8000/stallexecutives/${stallOwnerId}/delete`);
        onDelete(); // Callback to update the list
      } catch (error) {
        console.error('Error deleting stall owner:', error);
      }
    }
  };

  return (
    <button onClick={handleDelete} className="btn btn-danger mx-2">
      Delete
    </button>
  );
};

export default DeleteStallOwner;
