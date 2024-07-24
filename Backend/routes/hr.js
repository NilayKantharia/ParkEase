const express = require('express');
const router = express.Router({mergeParams : true});
const { showAllHr,handleAddHr,handleDelHr,updateHr } = require('../controllers/hr');
const { authenticate, authorize } = require('../middlewares/auth');
const allowedRoles = ['admin'];




//add the HR
router.get('/',authenticate, authorize(allowedRoles),showAllHr);
router.post('/',authenticate, authorize(allowedRoles),handleAddHr);
router.delete('/:hrId',authenticate, authorize(allowedRoles),handleDelHr);
router.put('/:hrId',authenticate, authorize(allowedRoles),updateHr);

module.exports = router;