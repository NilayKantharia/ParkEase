const connection = require('../config/connection');

const handleNewOrder = (req, res) => {
    const query = "INSERT INTO `order` (user_id, ticket_id, stall_id) VALUES (?, ?, ?);"
    const userId = req.userId;
    const ticketId = req.ticketId;
    const {stallId, orderItems} = req.body;
    connection.query(query, [userId, ticketId, stallId], (err, result) => {
        if(err) {
            return res.status(400).json(err);
        }
        const orderId = result.insertId;

        orderItems.map(item => {
            const {itemId, quantity} = item;
            const query = "INSERT INTO order_item (order_id, item_id, quantity) VALUES (?, ?, ?);"
            connection.query(query, [orderId, itemId, quantity], (err, result) => {
                if(err) {
                    return res.status(400).json(err);
                }
            });
        });
        return res.json("success");
    });
};

const handleAllFoodDetails = (req, res) => {
    const stallQuery = "SELECT * FROM stall";
    const itemQuery = "SELECT i.item_id, i.item_name, i.price, i.image, i.description, i.item_type, s.stall_id, s.stall_name, s.location, s.description FROM item i , stall s WHERE (i.stall_id = s.stall_id);"
    connection.query(stallQuery, (err, result) => {
        if(err) {
            return res.json(err);
        }
        stallResult = result;
    });

    connection.query(itemQuery, (err, result) => {
        if(err) {
            return res.json(err);
        }
        itemResult = result;
        return res.json({stallResult, itemResult});
    });

};

const handleOrderHistory = (req, res) => {
    const userId = req.userId;
    const query = 'SELECT o.order_id, o.order_placed_at, o.order_status, i.item_name, i.price, oi.quantity, s.stall_name FROM `order` o JOIN order_item oi on o.order_id = oi.order_id JOIN item i on oi.item_id = i.item_id JOIN stall s on o.stall_id = s.stall_id WHERE o.user_id = ?;';
    connection.query(query, [userId], (err, result) => {
        if(err) {
            return res.status(400).json(err);
        }
        return res.status(200).json(result);
    })
}

const statusUpdate =async(req,res)=>{
    
        const { orderId, newStatus } = req.body;
    
        if (!orderId || !newStatus) {
            return res.status(400).json({ success: false, message: 'Order ID and new status are required.' });
        }
    
        // Define allowed statuses if needed
        const allowedStatuses = ['Order Placed', 'Processing', 'Completed', 'Cancelled'];
    
        if (!allowedStatuses.includes(newStatus)) {
            return res.status(400).json({ success: false, message: 'Invalid order status.' });
        }
    
        try {
            // Update the order status in the database
            const [result] = await db.query(
                'UPDATE `order` SET order_status = ?, updated_at = NOW() WHERE order_id = ?',
                [newStatus, orderId]
            );
    
            if (result.affectedRows === 0) {
                return res.status(404).json({ success: false, message: 'Order not found.' });
            }
    
            return res.status(200).json({ success: true, message: 'Order status updated successfully.' });
        } catch (error) {
            console.error('Error updating order status:', error);
            return res.status(500).json({ success: false, message: 'Server error', error: error.message });
        }

    
}

const getAllOrders = (req, res) => {
    const query = 'SELECT o.order_id, o.order_placed_at, o.order_status, i.item_name, i.price, oi.quantity, s.stall_name FROM `order` o JOIN order_item oi on o.order_id = oi.order_id JOIN item i on oi.item_id = i.item_id JOIN stall s on o.stall_id = s.stall_id;';
    connection.query(query, (err, result) => {
        if(err) {
            return res.status(400).json(err);
        }
        return res.status(200).json(result);
    })
}

module.exports = {
    handleNewOrder,
    handleAllFoodDetails,
    handleOrderHistory,
    statusUpdate,
    getAllOrders
}