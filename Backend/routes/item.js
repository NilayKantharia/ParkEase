const express = require('express');
const router = express.Router();
const {handleAddNewItem, renderNew} = require('../controllers/item');
const multer = require('multer');
const {storage} = require('../config/cloudConfig');
const upload = multer({storage});

//Create New Listing Item 
router.post('/new', upload.single("image"), handleAddNewItem);
router.get('/new', renderNew);

module.exports = router;