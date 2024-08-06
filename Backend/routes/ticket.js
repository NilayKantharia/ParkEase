const express = require('express');
const router = express.Router({mergeParams : true});
const {handleBookTicket, handleViewTicket, handleShowAllTicket, handleUpdateTicketType, handleDeleteTicketType, handleAddNewTicketType, getTicketHistory} = require('../controllers/ticket');
const {restrictedToLoggedInUsersOnly} = require('../middlewares/auth')

router.post('/book', restrictedToLoggedInUsersOnly, handleBookTicket);
router.get('/history', restrictedToLoggedInUsersOnly, getTicketHistory);
router.get('/view', handleShowAllTicket);
router.get('/view/:id', handleViewTicket);
router.post('/new', handleAddNewTicketType);
router.route('/:ticketTypeId')
    .put(handleUpdateTicketType)
    .delete(handleDeleteTicketType)

module.exports = router;