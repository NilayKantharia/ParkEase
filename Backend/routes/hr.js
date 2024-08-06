const express = require('express');
const router = express.Router({mergeParams : true});
const { showAllHr,handleAddNewHr,handleDeleteHr,handleUpdateHr } = require('../controllers/hr');
const { authenticate, authorize, restrictedToLoggedInUsersOnly } = require('../middlewares/auth');
const allowedRoles = ['admin'];




//add the HR
router.get('/',showAllHr);
router.post('/new',handleAddNewHr);
router.put('/:hrId',handleUpdateHr);
router.delete('/:hrId',handleDeleteHr);

module.exports = router;