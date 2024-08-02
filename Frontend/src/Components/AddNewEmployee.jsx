import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Uncomment when integrating Axios

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
    // Uncomment when integrating Axios
    // try {
    //   await axios.post('YOUR_API_ENDPOINT/employees', newEmployee);
    //   console.log('Employee added successfully');
    // } catch (error) {
    //   console.error('Error adding employee:', error);
    // }
    alert('Employee added successfully');
    // Remain on the current page after adding the employee
  };

  const handleBack = () => {
    // Navigate back to the HrDashboard
    navigate('/');
  };

  return (
    <div className="add-new-employee">
      <h1>Add New Employee</h1>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="emp_name"
            value={newEmployee.emp_name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="emp_mail"
            value={newEmployee.emp_mail}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Phone No:</label>
          <input
            type="tel"
            name="phone_no"
            value={newEmployee.phone_no}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            name="salary"
            value={newEmployee.salary}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Work Allotted:</label>
          <input
            type="text"
            name="work_allotted"
            value={newEmployee.work_allotted}
            onChange={handleInputChange}
          />
        </div>
        <button type="button" onClick={handleAddEmployee}>
          Add Employee
        </button>
        <button type="button" onClick={handleBack}>
          Back
        </button>
      </form>
    </div>
  );
};

export default AddNewEmployee;
