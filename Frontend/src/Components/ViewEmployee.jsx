import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import employees from './employeesData'; // Static data

const ViewEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    const fetchEmployee = async () => {
      // Uncomment when integrating Axios
      // try {
      //   const response = await axios.get(`YOUR_API_ENDPOINT/employees/${id}`);
      //   setEmployee(response.data);
      // } catch (error) {
      //   console.error('Error fetching employee:', error);
      // }
      const emp = employees.find((e) => e.id === parseInt(id));
      setEmployee(emp);
    };
    fetchEmployee();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    // Uncomment when integrating Axios
    // try {
    //   await axios.put(`YOUR_API_ENDPOINT/employees/${id}`, employee);
    //   console.log('Employee updated successfully');
    // } catch (error) {
    //   console.error('Error updating employee:', error);
    // }
    alert('Employee updated successfully');
    navigate('/');
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
