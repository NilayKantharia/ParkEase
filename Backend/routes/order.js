const express = require('express');
const router = express.Router();
const {handleNewOrder, handleAllFoodDetails, handleOrderHistory,statusUpdate} = require('../controllers/order');
const {restrictedToLoggedInUsersOnly} = require('../middlewares/auth');
const {validateTicket} = require('../middlewares/check')

//New Order Route
router.post('/new', restrictedToLoggedInUsersOnly, validateTicket, handleNewOrder);

//Get All Food Details
router.get('/', handleAllFoodDetails);

//Get Order History
router.get('/history', restrictedToLoggedInUsersOnly, handleOrderHistory);

//update the Order
router.patch('status/:orderId', statusUpdate);

module.exports = router;