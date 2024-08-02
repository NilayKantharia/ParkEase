const express = require('express');
const router = express.Router({mergeParams: true});
const {handleAddNewStallExecutive, handleEditStallExecutive, handleDeleteStallExecutive, getStallExecutive} = require("../controllers/stallExecutive");
 
//Add New Stall Executive
router.post('/new', handleAddNewStallExecutive);

router.patch('/:sEID/edit', handleEditStallExecutive);

router.delete('/:sEID/delete', handleDeleteStallExecutive);

router.get('/:sEID', getStallExecutive);

module.exports = router;