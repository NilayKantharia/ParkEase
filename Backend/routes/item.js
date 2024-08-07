const express = require('express');
const router = express.Router({mergeParams: true});
const {handleAddNewItem, renderNew, handleFetchAllItem, getItemDetails, handleEditItem, handleDeleteItem, handleViewDeleted, getStallItems} = require('../controllers/item');
const multer = require('multer');
const {storage} = require('../config/cloudConfig');
const upload = multer({storage});

//Create New Listing Item 
router.post('/new', upload.single("image"), handleAddNewItem);
router.get('/new', renderNew);
router.get('/viewDeleted', handleViewDeleted);
router.get('/stall/:stallId', getStallItems);
router.put('/:itemId/edit', upload.single("image"), handleEditItem);
router.get('/:itemId', getItemDetails);
router.delete('/:itemId', handleDeleteItem);
router.get('/', handleFetchAllItem);

module.exports = router;