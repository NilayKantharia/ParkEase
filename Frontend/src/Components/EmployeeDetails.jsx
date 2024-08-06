import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmployeeDetails = () => {
  const navigate = useNavigate();
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    // Fetching employee data from the backend API
    axios.get('http://localhost:8000/employees/') // Replace with your API endpoint
      .then((response) => {
        setEmployeeList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employee data:', error);
      });
  }, []);

  const handleDeleteEmployee = (empId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete?');
    if (confirmDelete) {
      // Optimistically update the state
      setEmployeeList(employeeList.filter((employee) => employee.emp_id !== empId));
      
      // Delete request to the backend
      axios.delete(`http://localhost:8000/employees/${empId}`) // Replace with your API endpoint
        .then(() => {
          console.log('Employee deleted successfully');
        })
        .catch((error) => {
          console.error('Error deleting employee:', error);
        });
    }
  };

  return (
    <div className="employee-details">
      <h1>Employee Details</h1>
      <Link to="/add-new-employee" className="btn btn-primary">
        Add New Employee
      </Link>
      <table className="table mt-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No</th>
            <th>Salary</th>
            <th>Work Allotted</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((employee) => (
            <tr key={employee.emp_id}>
              <td>{employee.emp_name}</td>
              <td>{employee.emp_mail}</td>
              <td>{employee.phone_no}</td>
              <td>{employee.salary}</td>
              <td>{employee.work_allotted}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => navigate(`/view-employee/${employee.emp_id}`)} // Correct property name
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteEmployee(employee.emp_id)} // Correct property name
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetails;
