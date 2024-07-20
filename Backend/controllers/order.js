const connection = require('../config/connection');

const handleNewOrder = (req, res) => {
    const query = "INSERT INTO `order` (user_id, ticket_id, stall_id) VALUES (?, ?, ?);"
    const {user_id, ticket_id, stall_id, orderItems} = req.body;
    connection.query(query, [user_id, ticket_id, stall_id], (err, result) => {
        if(err) {
            return res.json(err);
        }
        const order_id = result.insertId;

        orderItems.map(item => {
            const {item_id, quantity} = item;
            const query = "INSERT INTO order_item (order_id, item_id, quantity) VALUES (?, ?, ?);"
            connection.query(query, [order_id, item_id, quantity], (err, result) => {
                if(err) {
                    return res.json(err);
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

module.exports = {
    handleNewOrder,
    handleAllFoodDetails
}