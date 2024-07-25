const express = require('express');
const router = express.Router({mergeParams : true});
const { showAllHr,handleAddNewHr,handleDeleteHr,handleUpdateHr } = require('../controllers/hr');
const { authenticate, authorize } = require('../middlewares/auth');
const allowedRoles = ['admin'];




//add the HR
router.get('/',authenticate, authorize(allowedRoles),showAllHr);
router.post('/new',authenticate, authorize(allowedRoles),handleAddNewHr);
router.put('/:hrId',authenticate, authorize(allowedRoles),handleUpdateHr);
router.delete('/:hrId',authenticate, authorize(allowedRoles),handleDeleteHr);

module.exports = router;