// DeleteHr.jsx
import React from 'react';
import axios from 'axios';

const DeleteHr = ({ hrId, onDelete }) => {
  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this HR?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:8000/hr/${hrId}`);
        onDelete();
      } catch (error) {
        console.error('Error deleting HR:', error);
      }
    }
  };

  return (
    <button onClick={handleDelete} className="btn btn-danger">
      Delete HR
    </button>
  );
};

export default DeleteHr;
