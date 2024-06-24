const connection=require('../connection');

const handleloginform = (req, res) => {
    res.render("loginpage"); 
};


const handlevalidation = (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM user WHERE user_name = ? AND password = ?';

    connection.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        if (results.length > 0) {
            res.json({ message: 'Login successful' });

        } else {
    
           const message= "Invalid username or password, please try again";
            res.render("loginpage", { message });
        }
    });
};


module.exports = {
    handleloginform,
    handlevalidation
};