const connection = require('../config/connection');
const { setUser } = require('../services/auth');

//Signup Controllers
const handleUserSignupForm = (req, res) => {
    res.render("signuppage")
};

const handleUserSignup = (req, res) => {
    const {username,password,email,phoneNO} = req.body;
    const insertQuery=`INSERT INTO user (user_name,password,mail_id, phone_no, role) VALUES (?, ?, ?, ?, "customer")`;
    const values = [username,password,email,phoneNO];

    connection.query(insertQuery,values,(err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to insert data into user table' , err});
        }
        user = {
            user_id : result.insertId,
            mail_id : email,
            role : "customer"
        }
        token = setUser(user);
        res.cookie('uid', token);
        res.status(200).json({success: true, message: 'Login successful', user});
        
    });
}

//Login Controllers
const handleUserLoginForm = (req, res) => {
    res.render("loginpage"); 
};

const handleUserLogin = (req, res) => {
    const { mailId, password } = req.body;

    const query = 'SELECT * FROM user WHERE mail_id = ? AND password = ?';

    connection.query(query, [mailId, password], (err, results) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ error: 'Database query error' });
        }
        if (results.length > 0) {
            user = results[0]
            token = setUser(user);
            res.cookie('uid', token);
            res.status(200).json({success: true, message: 'Login successful', role: user.role, name:user.user_name});

        } else {
    
           const message= "Invalid username or password, please try again";
            res.render("loginpage", { message });
        }
    });
};

const getAllUsers = (req, res) => {
    const query = 'SELECT * FROM user;';
    connection.query(query, (err, result) => {
        if(err){
            return res.status(400).json(err);
        }
        return res.status(200).json(result);
    })
}

module.exports = {
    handleUserSignupForm,
    handleUserSignup,
    handleUserLoginForm,
    handleUserLogin,
    getAllUsers
};