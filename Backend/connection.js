const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password', 
    database: 'park', 
  });

  connection.connect((err) => {
    if (err) {
        console.error('Error: Unsuccessful connection to MySQL DB:', err);
    } else {
        console.log('Connection to MySQL DB is done!');
    }
});


module.exports=connection;