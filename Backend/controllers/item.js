const connection = require('../config/connection');

//Add New Listing Item
const handleAddNewItem = (req, res) => {
    const {itemName, stallId, price, description, itemType} = req.body;
    const image = req.file.path;
    const query = 'INSERT INTO item (item_name, stall_id, price, image, description, item_type) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [itemName, stallId, price, image, description, itemType], (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(200).json({success: true});
    })
}

const renderNew = (req, res) => {
    res.render("./newItem");
}


module.exports = {
    handleAddNewItem,
    renderNew
}