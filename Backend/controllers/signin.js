
const connection=require('../connection');

// Handle GET request for sign in
const handleform = (req, res) => {
    res.render("signinpage")
};

// Handle POST request for sign in
const handlenewdata = (req, res) => {
    console.log("i am in signin function",req.body)
    const {username,password,email,phoneNO} = req.body;
    const insertQuery=`INSERT INTO user (user_name,password,mail_id, phone_no) VALUES (?,?,?,?)`;
    const values = [username,password,email,phoneNO];
    console.log(insertQuery,values)

    connection.query(insertQuery,values,(err, result) => {
        if (err) {
            console.error('Failed to insert data into user table:', err);
            return res.status(500).json({ error: 'Failed to insert data into user table' });
        }
    
        console.log('Inserted a new row into user table');
        res.end("Signin done");
        
    });
}

module.exports = {
    handleform,
    handlenewdata
};