import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HrInfo = () => {
  const [hrList, setHrList] = useState([]);

  useEffect(() => {
    const fetchHrList = async () => {
      try {
        const response = await axios.get('http://localhost:8000/hr');
        setHrList(response.data);
      } catch (error) {
        console.error('Error fetching HR list:', error);
      }
    };

    fetchHrList();
  }, []);

  return (
    <div className="hr-list">
      <h2>HR List</h2>
      <ul>
        {hrList.map((hr) => (
          <li key={hr.id}>
            {hr.name} - {hr.email} - {hr.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HrInfo;