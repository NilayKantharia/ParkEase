import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import employees from './employeesData'; // Static data

const EmployeeDetails = () => {
  const navigate = useNavigate();
  const [employeeList, setEmployeeList] = useState(employees); // Static data initially

  const handleDeleteEmployee = (empId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete?');
    if (confirmDelete) {
      setEmployeeList(employeeList.filter((employee) => employee.id !== empId));
      // Uncomment when integrating Axios
      // axios.delete(`YOUR_API_ENDPOINT/employees/${empId}`)
      //   .then(() => {
      //     console.log('Employee deleted successfully');
      //   })
      //   .catch((error) => {
      //     console.error('Error deleting employee:', error);
      //   });
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
            <tr key={employee.id}>
              <td>{employee.emp_name}</td>
              <td>{employee.emp_mail}</td>
              <td>{employee.phone_no}</td>
              <td>{employee.salary}</td>
              <td>{employee.work_allotted}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => navigate(`/view-employee/${employee.id}`)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteEmployee(employee.id)}
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
