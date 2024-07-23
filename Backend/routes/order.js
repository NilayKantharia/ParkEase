const express = require('express');
const router = express.Router();
const {handleNewOrder, handleAllFoodDetails, handleOrderHistory} = require('../controllers/order');
const {restrictedToLoggedInUsersOnly} = require('../middlewares/auth');
const {validateTicket} = require('../middlewares/check')

//New Order Route
router.post('/new', restrictedToLoggedInUsersOnly, validateTicket, handleNewOrder);

//Get All Food Details
router.get('/', handleAllFoodDetails);

//Get Order History
router.get('/history', restrictedToLoggedInUsersOnly, handleOrderHistory);

module.exports = router;