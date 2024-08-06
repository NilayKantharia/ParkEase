// HrInfo.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditHrInfo from './EditHrInfo';
import DeleteHr from './DeleteHr';
import AddNewHr from './AddNewHr';

const HrInfo = () => {
  const [hrList, setHrList] = useState([]);
  const [editingHr, setEditingHr] = useState(null);

  useEffect(() => {
    fetchHrList();
  }, []);

  const fetchHrList = async () => {
    try {
      const response = await axios.get('http://localhost:8000/hrs');
      setHrList(response.data);
    } catch (error) {
      console.error('Error fetching HR list:', error);
    }
  };

  const handleDelete = async (hrId) => {
    try {
      await axios.delete(`http://localhost:8000/hrs/${hrId}`);
      fetchHrList(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting HR:', error);
    }
  };

  const handleUpdate = async () => {
    fetchHrList(); // Refresh the list after updating
    setEditingHr(null); // Exit editing mode
  };

  return (
    <div className="hr-list container mt-3">
      <h2>HR List</h2>
      <AddNewHr fetchHrList={fetchHrList} /> {/* Pass fetchHrList as a prop */}
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {hrList.map((hr) => (
            <tr key={hr.user_id}>
              {editingHr === hr.user_id ? (
                <td colSpan="4">
                  <EditHrInfo hr={hr} onUpdate={handleUpdate} />
                </td>
              ) : (
                <>
                  <td>{hr.user_name}</td>
                  <td>{hr.mail_id}</td>
                  <td>{hr.phone_no}</td>
                  <td>
                    <div className="btn-group" role="group" aria-label="Basic example">
                      <button
                        className="btn btn-primary"
                        onClick={() => setEditingHr(hr.user_id)}
                      >
                        Edit
                      </button>
                      <DeleteHr hrId={hr.user_id} onDelete={() => handleDelete(hr.user_id)} />
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

export default HrInfo;
