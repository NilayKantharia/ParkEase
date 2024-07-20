const connection = require('../config/connection');

//Book ticket Controller
const handleBookTicket = (req, res) => {
    const query = `INSERT INTO ticket (user_id, ticket_type_id, ticket_price, no_of_members, booked_for) VALUES (?, ?, ?, ?, ?)`;
    const {userId, ticketTypeId, ticketPrice, noOfMembers, bookedFor} = req.body;
    connection.query(query, [userId, ticketTypeId, ticketPrice, noOfMembers, bookedFor], (err, result) => {
        if(err) {
            return res.status(400).json(err);
        }
        return res.status(201).json("success");
    });
};

//View Ticket Controller
const handleViewTicket = (req, res) => {
    const query = "SELECT * FROM ticket_type WHERE ticket_type_id = ?";
    connection.query(query, [req.params.id], (err, result) => {
        if(err) {
            return res.status(400).json(err);
        }
        return res.status(200).json(result);
    });
};

//Show all Ticket Controller
const handleShowAllTicket = (req, res) => {
    const query = "SELECT * FROM ticket_type";
    connection.query(query, (err, result) => {
        if(err) {
            return res.status(400).json(err);
        }
        return res.status(200).json(result);
    })
};

//Add a New Ticket Type Controller
const handleAddNewTicketType = (req, res) => {
    const {ticketTypeName, ticketTypePrice, ticketTypeShortDescription, ticketTypeDescription} = req.body;
    const query = 'INSERT INTO ticket_type (ticket_type_name, ticket_type_price, ticket_type_short_description, ticket_type_description) VALUES (?, ?, ?, ?);';
    connection.query(query, [ticketTypeName, ticketTypePrice, ticketTypeShortDescription, ticketTypeDescription], (err, result) => {
        if(err){
            return res.status(400).json({success: true});
        }
        return res.status(201).json({success: true});
    })
} 

//Update a Ticket Type Controller
const handleUpdateTicketType = (req, res) => {
    const query = "UPDATE ticket_type SET ticket_type_name = ?, ticket_type_price = ?, ticket_type_short_description = ?, ticket_type_description = ? WHERE ticket_type_id = ?;";
    const ticketTypeId = req.params.ticketTypeId;
    const {ticketTypeName, ticketTypePrice, ticketTypeShortDescription, ticketTypeDescription} = req.body;
    connection.query(query, [ticketTypeName, ticketTypePrice, ticketTypeShortDescription, ticketTypeDescription, ticketTypeId], (err, result) => {
        if(err) {
            return res.status(400).json(err);
        }
        return res.status(200).json({success: true});
    })
}

//Delete a Ticket Type Controller
const handleDeleteTicketType = (req, res) => {
    const query = 'DELETE FROM ticket_type WHERE ticket_type_id = ?;';
    const ticketTypeId = req.params.ticketTypeId;
    connection.query(query, [ticketTypeId], (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(204).json({success: true})
    })
}

module.exports = {
    handleBookTicket,
    handleViewTicket,
    handleShowAllTicket,
    handleAddNewTicketType,
    handleUpdateTicketType,
    handleDeleteTicketType
}