const express = require('express');
const router = express.Router({mergeParams: true});
const {getTopStalls, getLastMonthCustomers, getTopTickets} = require('../controllers/analytic');

router.get('/top-5-stalls', getTopStalls);
router.get('/last-5-months', getLastMonthCustomers);
router.get('/top-tickets', getTopTickets);

module.exports = router;