const express = require('express');
const router = express.Router({mergeParams: true});
const multer = require('multer');
const {storage} = require('../config/cloudConfig');
const upload = multer({storage});
const {index, handleAddNewStall, handleDeleteStall, handleUpdateStall} = require('../controllers/stall')
const { authenticate, authorize} = require('../middlewares/auth');
const allowedRoles=['stallexecutive','admin']

router.route('/')
    .get(index)
    .post(authenticate,authorize(allowedRoles),handleAddNewStall)

router.route('/:stallId')
    .delete(authenticate,authorize(allowedRoles),handleDeleteStall)
    .put(handleUpdateStall)

module.exports = router;