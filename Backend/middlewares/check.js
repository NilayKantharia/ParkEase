const connection = require('../config/connection');

const validateTicket = (req, res, next) => {
    const userId = req.userId;
    const query = 'SELECT * FROM ticket WHERE user_id = ? AND booked_for = CURDATE();';
    connection.query(query, [userId], (err, result) => {
        if(err) {
            return res.status(400).json(err);
        }
        if(result.length === 0){
            return res.status(403).json({error: 'Invalid or Expired Ticket'});
        }
        req.ticketId = result.ticket_id;
        next();
    });
}

module.exports = {
    validateTicket,
}