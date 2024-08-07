const express = require('express');
const router = express.Router({mergeParams: true});
const {handleAddNewStallExecutive, handleEditStallExecutive, handleDeleteStallExecutive, getStallExecutive, getAllExecutives} = require("../controllers/stallExecutive");
 

router.get('/', getAllExecutives);

router.post('/new', handleAddNewStallExecutive);

router.patch('/:sEID/edit', handleEditStallExecutive);

router.delete('/:sEID/delete', handleDeleteStallExecutive);

router.get('/:sEID', getStallExecutive);

module.exports = router;