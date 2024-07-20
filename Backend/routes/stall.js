const express = require('express');
const router = express.Router({mergeParams: true});
const multer = require('multer');
const {storage} = require('../cloudConfig');
const upload = multer({storage});
const {index, handleAddNewStall, handleDeleteStall, handleUpdateStall} = require('../controllers/stall')

router.route('/')
    .get(index)
    .post(handleAddNewStall)

router.route('/:stallId')
    .delete(handleDeleteStall)
    .put(handleUpdateStall)

module.exports = router;