const express = require('express');
const router = express.Router({mergeParams: true});
const {index, handleAddNewStall, handleDeleteStall, handleUpdateStall, getStallDetails} = require('../controllers/stall')
const { authenticate, authorize} = require('../middlewares/auth');
const allowedRoles=['stallexecutive','admin']

router.route('/')
    .get(index)
    .post(authenticate,authorize(allowedRoles),handleAddNewStall)

router.route('/:stallId')
    .get(getStallDetails)
    .delete(authenticate,authorize(allowedRoles),handleDeleteStall)
    .put(handleUpdateStall)

module.exports = router;