const connection = require('../config/connection');

//Show All Stalls Controller
const index = (req, res) => {
    const query = "SELECT * FROM stall";
    connection.query(query, (err, result) => {
        if(err){
            return res.json(err);
        }
        return res.json(result);
    });
};

//Add New Stall Controller
const handleAddNewStall = (req, res) => {
    const query = "INSERT INTO stall (stall_name, location, description, stall_type) VALUES (?, ?, ?, ?);";
    const {stallName, location, description, stallType} = req.body;
    connection.query(query, [stallName, location, description, stallType], (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(201).json({success: true});
    })
} 

//Delete Existing Stall
const handleDeleteStall = (req, res) => {
    const query = "DELETE FROM stall where stall_id = ? AND stall_name = ?;"
    const stallId = req.params.stallId;
    const {stallName} = req.body;
    connection.query(query, [stallId, stallName] ,(err, result) => {
        if(err) {
            return res.status(400).json(err);
        }
        return res.status(204).json({success: true});
    })
}

//Updates Stall Information
const handleUpdateStall = (req, res) => {
    const query = "UPDATE stall SET stall_name = ?, location = ?, description = ?, stall_type = ? WHERE stall_id = ?;";
    const stallId = req.params.stallId;
    const {stallName, location, description, stallType} = req.body;
    connection.query(query, [stallName, location, description, stallType, stallId], (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(200).json({success:true});
    })
}

module.exports = {
    index,
    handleAddNewStall,
    handleDeleteStall,
    handleUpdateStall
};