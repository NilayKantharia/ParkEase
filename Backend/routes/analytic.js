const express = require('express');
const router = express.Router({mergeParams: true});
const {getTopStalls, getLastMonthCustomers, getTopTickets, getEmployeeCount, getCurrentCustomers} = require('../controllers/analytic');

router.get('/top-5-stalls', getTopStalls);
router.get('/last-5-months', getLastMonthCustomers);
router.get('/top-tickets', getTopTickets);
router.get('/current-customers', getCurrentCustomers);
router.get('/employee-count', getEmployeeCount);

module.exports = router;