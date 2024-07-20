const express = require('express');
const router = express.Router({mergeParams : true});
const {handleBookTicket, handleViewTicket, handleShowAllTicket, handleUpdateTicketType, handleDeleteTicketType, handleAddNewTicketType} = require('../controllers/ticket');

router.post('/book', handleBookTicket);
router.get('/view', handleShowAllTicket);
router.get('/view/:id', handleViewTicket);
router.post('/new', handleAddNewTicketType);
router.route('/:ticketTypeId')
    .put(handleUpdateTicketType)
    .delete(handleDeleteTicketType)

module.exports = router;