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

const handleFetchAllItem = (req, res) => {
    const query = 'SELECT * FROM item WHERE DELETED = 0;'
    connection.query(query, (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(200).json(result);
    })
}

const getItemDetails = (req, res) => {
    const itemId = req.params.itemId;
    const query = 'SELECT * FROM item WHERE item_id = ? AND DELETED = 0;';
    connection.query(query, [itemId], (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(200).json(result);
    });
}

const handleEditItem = (req, res) => {
    const itemId = req.params.itemId;
    const image = req.file.path;
    const {itemName, price, description, itemType} = req.body;
    const query = 'UPDATE item SET item_name = ?, price = ?, image = ?, description = ?, item_type = ? WHERE item_id = ?;';
    connection.query(query, [itemName, price, image, description, itemType, itemId], (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(200).json({success: true});
    })
}

const handleDeleteItem = (req, res) => {
    const itemId = req.params.itemId;
    const query = 'UPDATE item SET deleted = 1 WHERE item_id = ?;';
    connection.query(query, [itemId], (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(204).send();
    })
}

const handleViewDeleted = (req, res) => {
    const query = 'SELECT * FROM item WHERE deleted = 1';
    connection.query(query, (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(200).json(result);
    })
}

const getStallItems = (req, res) => {
    const query = 'SELECT * FROM item WHERE stall_id = ? AND deleted = 0;';
    const stallId = req.params.stallId;
    connection.query(query, [stallId], (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(200).json(result);
    })
}

module.exports = {
    handleAddNewItem,
    renderNew,
    handleFetchAllItem,
    getItemDetails,
    handleEditItem,
    handleDeleteItem,
    handleViewDeleted,
    getStallItems
}