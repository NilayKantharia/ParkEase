import React, { useState } from 'react';
import axios from 'axios';

const AddNewStallOwner = ({ fetchStallOwnerList }) => {
  const [stallName, setStallName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [credentials, setCredentials] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Generate random password if not provided
      const generatedPassword = password || Math.random().toString(36).slice(-8);

      const response = await axios.post('http://localhost:8000/stall-owners', {
        stall_name: stallName,
        owner_name: ownerName,
        email,
        password: generatedPassword,
      });

      fetchStallOwnerList(); // Refresh the list after adding a new owner

      // Save credentials to display to the admin
      setCredentials({
        ownerName,
        email,
        password: generatedPassword,
      });

      setMessage('Stall owner added successfully!');
      setStallName('');
      setOwnerName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error adding stall owner:', error);
      setMessage('Error adding stall owner.');
    }
  };

  return (
    <div className="mt-4">
      <h3>Add New Stall Owner</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Stall Name"
            value={stallName}
            onChange={(e) => setStallName(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Owner Name"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            className="form-control"
            placeholder="Password (leave empty to auto-generate)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Stall Owner
        </button>
      </form>
      {message && <p className="mt-3">{message}</p>}
      {credentials && (
        <div className="mt-3">
          <h4>Stall Owner Credentials</h4>
          <p><strong>Name:</strong> {credentials.ownerName}</p>
          <p><strong>Email:</strong> {credentials.email}</p>
          <p><strong>Password:</strong> {credentials.password}</p>
          <p>Please provide these credentials to the stall owner for access.</p>
        </div>
      )}
    </div>
  );
};

export default AddNewStallOwner;
