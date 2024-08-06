const connection = require('../config/connection');

const getTopStalls = (req, res) => {
    const query = "SELECT s.stall_name, SUM(oi.quantity * i.price) AS sales FROM stall s JOIN item i ON s.stall_id = i.item_id JOIN order_item oi ON oi.item_id = i.item_id JOIN `order` o ON oi.order_id = o.order_id GROUP BY s.stall_id, s.stall_name ORDER BY sales DESC LIMIT 5;"
    connection.query(query, (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(200).json(result);
    });
}

const getLastMonthCustomers = (req, res) => {
    const query = "SELECT DATE_FORMAT(booked_for, '%M') AS month, COUNT(ticket_id) AS no_of_customers FROM ticket WHERE booked_for >= DATE_SUB(CURDATE(), INTERVAL 5 MONTH) GROUP BY month, DATE_FORMAT(booked_for, '%Y-%m') ORDER BY DATE_FORMAT(booked_for, '%Y-%m') DESC;"
    connection.query(query, (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(200).json(result);
    })
}

const getTopTickets = (req, res) => {
    const query = "SELECT tt.ticket_type_name AS ticketType, COUNT(t.ticket_id) AS ticketCount FROM ticket t JOIN ticket_type tt ON t.ticket_type_id = tt.ticket_type_id GROUP BY tt.ticket_type_name ORDER BY ticketCount DESC;";
    connection.query(query, (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(200).json(result)
    })
}

const getEmployeeCount = (req, res) => {
    const query = "SELECT COUNT(*) AS employee_count FROM employee;";
    connection.query(query, (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(200).json(result);
    })
}

const getCurrentCustomers = (req, res) => {
    const query = "SELECT SUM(no_of_members) AS current_customers FROM ticket WHERE booked_for = CURDATE();"
    connection.query(query, (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(200).json(result);
    })
}

const getTopSellingItems = (req, res) => {
    const query = "SELECT i.item_name, SUM(oi.quantity) AS total_sales FROM order_item oi JOIN item i ON oi.item_id = i.item_id GROUP BY i.item_name ORDER BY total_sales DESC LIMIT 5;"
    connection.query(query, (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(200).json(result);
    })
}

module.exports = {
    getTopStalls,
    getLastMonthCustomers,
    getTopTickets,
    getEmployeeCount,
    getCurrentCustomers,
    getTopSellingItems
}