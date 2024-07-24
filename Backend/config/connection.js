const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password', 
    database: 'park', 
});

connection.connect((err) => {
    if (err) {
        console.error('Error: Unsuccessful connection to MySQL:', err);
    } else {
        console.log('MySQL Connected!');
    }
});


module.exports = connection;