import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditStallOwner from './EditStallOwner';
import DeleteStallOwner from './DeleteStallOwner';

const StallOwnerInfo = () => {
  const [stallOwnerList, setStallOwnerList] = useState([]);
  const [editingStallOwner, setEditingStallOwner] = useState(null);

  useEffect(() => {
    fetchStallOwnerList();
  }, []);

  const fetchStallOwnerList = async () => {
    try {
      const response = await axios.get('http://localhost:8000/stallexecutives');
      setStallOwnerList(response.data);
    } catch (error) {
      console.error('Error fetching stall owner list:', error);
    }
  };

  const handleDelete = async (stallOwnerId) => {
    try {
      await axios.delete(`http://localhost:8000/stallexecutives/${stallOwnerId}/delete`);
      fetchStallOwnerList(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting stall owner:', error);
    }
  };

  const handleUpdate = async () => {
    fetchStallOwnerList(); // Refresh the list after updating
    setEditingStallOwner(null); // Exit editing mode
  };

  return (
    <div className="stall-owner-list container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>Stall Owner List</h2>
      </div>
      <table className="table table-striped mt-3">
        <thead className="thead-dark">
          <tr>
            <th>Stall Name</th>
            <th>Owner Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stallOwnerList.map((owner) => (
            <tr key={owner.user_id}>
              {editingStallOwner === owner.user_id ? (
                <td colSpan="4">
                  <EditStallOwner owner={owner} onUpdate={handleUpdate} />
                </td>
              ) : (
                <>
                  <td>{owner.stall_name}</td>
                  <td>{owner.user_name}</td>
                  <td>{owner.mail_id}</td>
                  <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button
                        className="btn btn-primary"
                        onClick={() => setEditingStallOwner(owner.user_id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(owner.stall_id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StallOwnerInfo;
