const connection = require('../config/connection');


//Add New Employee Controller
const handleAddNewEmployee = (req, res) => {
    const {empName, empMail, phoneNo, salary, workAllotted} = req.body;
    const query = 'INSERT INTO employee (emp_name, emp_mail, phone_no, salary, work_allotted) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [empName, empMail, phoneNo, salary, workAllotted], (err, result) => {
        if(err) {
            return res.status(400).json(err);
        }
        return res.status(201).json({success: true});
    })
}

//Edit Employee Information Controller
const handleEditEmployeeDetails = (req, res) => {
    const empId = req.params.empId;
    const {empName, empMail, phoneNo, salary, workAllotted} = req.body;
    const query = 'UPDATE employee SET emp_name = ?, emp_mail = ?, phone_no = ?, salary = ?, work_allotted = ? WHERE emp_id = ?;';
    connection.query(query, [empName, empMail, phoneNo, salary, workAllotted, empId], (err, result) => {
        if(err) {
            return res.status(400).json(err);
        }
        return res.status(204).json({success: true});
    });
}

//View Employee Information Cotroller
const handleGetEmployeeDetails = (req, res) => {
    const empId = req.params.empId;
    const query = 'SELECT * FROM employee WHERE emp_id = ?;';
    connection.query(query, [empId], (err, result) => {
        if(err) {
            return res.status(400).json(err);
        }
        return res.status(200).json(result);
    });
}

//Delete Employee Controller
const handleDeleteEmployee = (req, res) => {
    const empId = req.params.empId;
    const query = 'DELETE FROM employee WHERE emp_id = ?;';
    connection.query(query, [empId], (err, result) => {
        if(err) {
            return res.status(400).json(err);
        }
        return res.status(204).json({success: true});
    });
}

//View All Employees Controller
const handleViewAllEmployees = (req, res) => {
    const query = 'SELECT * FROM employee;';
    connection.query(query, (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(200).json(result);
    })
}

module.exports = {
    handleAddNewEmployee,
    handleEditEmployeeDetails,
    handleGetEmployeeDetails,
    handleDeleteEmployee,
    handleViewAllEmployees
}