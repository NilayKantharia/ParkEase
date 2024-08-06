import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ViewEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/employees/${id}`);
        // Handle array response
        const emp = response.data[0];
        setEmployee(emp);
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      await axios.patch(`http://localhost:8000/employees/${id}/edit`, {
        empName: employee.emp_name,
        empMail: employee.emp_mail,
        phoneNo: employee.phone_no,
        salary: employee.salary,
        workAllotted: employee.work_allotted
      });
      console.log('Employee updated successfully');
      alert('Employee updated successfully');
      navigate('/');
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  if (!employee) return <div>Loading...</div>;

  return (
    <div className="view-employee">
      <h1>Edit Employee</h1>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="emp_name"
            value={employee.emp_name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="emp_mail"
            value={employee.emp_mail}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Phone No:</label>
          <input
            type="tel"
            name="phone_no"
            value={employee.phone_no}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            value={employee.salary}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Work Allotted:</label>
          <input
            type="text"
            name="work_allotted"
            value={employee.work_allotted}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default ViewEmployee;
