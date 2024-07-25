const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
<<<<<<< HEAD
    password: 'Ak@80925', 
    database: 'parkeasetest', 
=======
    password: 'password', 
    database: 'park', 
>>>>>>> d073389578faf5ca7b347120e3dfb8154fb891ea
});

connection.connect((err) => {
    if (err) {
        console.error('Error: Unsuccessful connection to MySQL:', err);
    } else {
        console.log('MySQL Connected!');
    }
});


module.exports = connection;