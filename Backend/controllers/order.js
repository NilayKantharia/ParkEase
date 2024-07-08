const connection = require('../connection');

const handleNewOrder = (req, res) => {

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