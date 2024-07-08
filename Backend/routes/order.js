const express = require('express');
const router = express.Router();
const {handleNewOrder, handleAllFoodDetails} = require('../controllers/order')

//New Order Route
router.post('/', handleNewOrder);

//Get All Food Details
router.get('/', handleAllFoodDetails);

module.exports = router;