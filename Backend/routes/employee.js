const express = require('express');
const router = express.Router({mergeParams: true});
const {handleAddNewEmployee, handleEditEmployeeDetails, handleGetEmployeeDetails, handleDeleteEmployee} = require('../controllers/employee');

//Add New Employee
router.post('/new', handleAddNewEmployee);

//Edit Employee Information
router.patch('/:empId/edit', handleEditEmployeeDetails);

//View Employee Information
router.get('/:empId', handleGetEmployeeDetails);

//Delete an Employee
router.delete('/:empId', handleDeleteEmployee);

module.exports = router;