const express = require('express');
const router = express.Router({mergeParams : true});
const {handleBookTicket, handleViewTicket, handleShowAllTicket} = require('../controllers/ticket');

router.post('/book', handleBookTicket);
router.get('/view', handleShowAllTicket);
router.get('/view/:id', handleViewTicket);

module.exports = router;