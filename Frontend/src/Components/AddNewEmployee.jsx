import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const AddNewEmployee = () => {
  const navigate = useNavigate();
  const [newEmployee, setNewEmployee] = useState({
    emp_name: '',
    emp_mail: '',
    phone_no: '',
    salary: '',
    work_allotted: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddEmployee = async () => {
    try {
      await axios.post('http://localhost:8000/employees/new', newEmployee);
      console.log('Employee added successfully');
      alert('Employee added successfully');
      // Remain on the current page after adding the employee
    } catch (error) {
      console.error('Error adding employee:', error);
      alert('Error adding employee. Please try again.');
    }
  };

  const handleBack = () => {
    navigate('/HrDashboard');
  };

  return (
    <div className="mt-5 row m-5">
      <h1 className="mb-4">Add New Employee</h1>
      <form className='col-4 ms-5'>
        <div className="mb-3">
          <label htmlFor="emp_name" className="form-label">Name:</label>
          <input
            type="text"
            id="emp_name"
            name="emp_name"
            className="form-control"
            value={newEmployee.emp_name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="emp_mail" className="form-label">Email:</label>
          <input
            type="email"
            id="emp_mail"
            name="emp_mail"
            className="form-control"
            value={newEmployee.emp_mail}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone_no" className="form-label">Phone No:</label>
          <input
            type="tel"
            id="phone_no"
            name="phone_no"
            className="form-control"
            value={newEmployee.phone_no}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="salary" className="form-label">Salary:</label>
          <input
            type="number"
            id="salary"
            name="salary"
            className="form-control"
            value={newEmployee.salary}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="work_allotted" className="form-label">Work Allotted:</label>
          <input
            type="text"
            id="work_allotted"
            name="work_allotted"
            className="form-control"
            value={newEmployee.work_allotted}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" className="btn btn-primary me-2" onClick={handleAddEmployee}>
          Add Employee
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleBack}>
          Back
        </button>
      </form>
    </div>
  );
};

export default AddNewEmployee;
