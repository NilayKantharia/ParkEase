const connection = require('../config/connection');

const showAllHr=(req,res)=>{
    const query="SELECT * FROM user where (role=='hr')";
    connection.query(query,(err,results)=>{
        if(err){
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    })
    
}

const handleAddHr = (req, res) => {
    const { user_name, password, mail_id, phone_no } = req.body;
    const query = "INSERT INTO user (user_name, password, mail_id, phone_no, role) VALUES (?, ?, ?, ?, 'hr')";
    connection.query(query, [user_name, password, mail_id, phone_no], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'HR added successfully', userId: results.insertId });
    });
};

const handleDelHr = (req, res) => {
    const { hrId } = req.params;
    const query = "DELETE FROM user WHERE user_id = ? AND role = 'hr'";
    connection.query(query, [hrId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'HR not found' });
        }
        res.json({ message: 'HR deleted successfully' });
    });
};

const updateHr = (req, res) => {
    const { hrId } = req.params;
    const { user_name, password, mail_id, phone_no } = req.body;
    const query = "UPDATE user SET user_name = ?, password = ?, mail_id = ?, phone_no = ? WHERE user_id = ? AND role = 'hr'";
    
    connection.query(query, [user_name, password, mail_id, phone_no, hrId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'HR not found or no changes made' });
        }
        res.json({ message: 'HR updated successfully' });
    });
};

module.exports={showAllHr,handleAddHr,handleDelHr,updateHr}