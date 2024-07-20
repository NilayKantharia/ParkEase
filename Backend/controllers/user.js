const connection = require('../config/connection');
const { setUser } = require('../services/auth');

//Signup Controllers
const handleUserSignupForm = (req, res) => {
    res.render("signuppage")
};

const handleUserSignup = (req, res) => {
    const {username,password,email,phoneNO} = req.body;
    const insertQuery=`INSERT INTO user (user_name,password,mail_id, phone_no) VALUES (?,?,?,?)`;
    const values = [username,password,email,phoneNO];

    connection.query(insertQuery,values,(err, result) => {
        if (err) {
            console.error('Failed to insert data into user table:', err);
            return res.status(500).json({ error: 'Failed to insert data into user table' });
        }
        res.json({success: true, message: 'Login successful'});
        
    });
}

//Login Controllers
const handleUserLoginForm = (req, res) => {
    res.render("loginpage"); 
};

const handleUserLogin = (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM user WHERE user_name = ? AND password = ?';

    connection.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        if (results.length > 0) {
            user = results[0]
            token = setUser(user);
            res.cookie('uid', token);
            res.status(200).json({success: true, message: 'Login successful'});

        } else {
    
           const message= "Invalid username or password, please try again";
            res.render("loginpage", { message });
        }
    });
};

module.exports = {
    handleUserSignupForm,
    handleUserSignup,
    handleUserLoginForm,
    handleUserLogin
};