const express = require('express');
const router = express.Router();
const {handleBookTicket, handleViewTicket} = require('../controllers/ticket');

router.post('/book', handleBookTicket);
router.get('/view/:id', handleViewTicket);

module.exports = router;