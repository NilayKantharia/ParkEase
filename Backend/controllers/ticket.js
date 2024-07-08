const connection = require('../connection');

//Book ticket Controller
const handleBookTicket = (req, res) => {
    const query = `INSERT INTO ticket (user_id, ticket_type_id, ticket_price, no_of_members, booked_for) VALUES (?, ?, ?, ?, ?)`;
    const {userId, ticketTypeId, ticketPrice, noOfMembers, bookedFor} = req.body;
    connection.query(query, [userId, ticketTypeId, ticketPrice, noOfMembers, bookedFor], (err, result) => {
        if(err) {
            return res.json(err);
        }
        return res.json("success");
    });
};

//View Ticket Controller
const handleViewTicket = (req, res) => {
    const query = "SELECT * FROM ticket_type WHERE ticket_type_id = ?";
    connection.query(query, [req.params.id], (err, result) => {
        if(err) {
            return res.json(err);
        }
        return res.json(result);
    });
};

//Show all Ticket Controller
const handleShowAllTicket = (req, res) => {
    const query = "SELECT * FROM ticket_type";
    connection.query(query, (err, result) => {
        if(err) {
            return res.json(err);
        }
        return res.json(result);
    })
};

module.exports = {
    handleBookTicket,
    handleViewTicket,
    handleShowAllTicket
}