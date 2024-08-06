import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditStallOwner from './EditStallOwner';
import DeleteStallOwner from './DeleteStallOwner';
// import AddNewStallOwner from './AddNewStallOwner';

const StallOwnerInfo = () => {
  const [stallOwnerList, setStallOwnerList] = useState([]);
  const [editingStallOwner, setEditingStallOwner] = useState(null);

  useEffect(() => {
    fetchStallOwnerList();
  }, []);

  const fetchStallOwnerList = async () => {
    try {
      const response = await axios.get('http://localhost:8000/stall-owners');
      setStallOwnerList(response.data);
    } catch (error) {
      console.error('Error fetching stall owner list:', error);
    }
  };

  const handleDelete = async (stallOwnerId) => {
    try {
      await axios.delete(`http://localhost:8000/stall-owners/${stallOwnerId}`);
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
    <div className="stall-owner-list container mt-3">
      <h2>Stall Owner List</h2>
      {/* <AddNewStallOwner fetchStallOwnerList={fetchStallOwnerList} /> */}
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Stall Name</th>
            <th>Owner Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stallOwnerList.map((owner) => (
            <tr key={owner.stall_id}>
              {editingStallOwner === owner.stall_id ? (
                <td colSpan="4">
                  <EditStallOwner owner={owner} onUpdate={handleUpdate} />
                </td>
              ) : (
                <>
                  <td>{owner.stall_name}</td>
                  <td>{owner.owner_name}</td>
                  <td>{owner.email}</td>
                  <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button
                        className="btn btn-primary"
                        onClick={() => setEditingStallOwner(owner.stall_id)}
                      >
                        Edit
                      </button>
                      <DeleteStallOwner
                        stallOwnerId={owner.stall_id}
                        onDelete={() => handleDelete(owner.stall_id)}
                      />
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
