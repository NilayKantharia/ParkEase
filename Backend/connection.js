const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Nilay@2903', 
    database: 'parkeasetest', 
  });

  connection.connect((err) => {
    if (err) {
        console.error('Error: Unsuccessful connection to MySQL DB:', err);
    } else {
        console.log('Connection to MySQL DB is done!');
    }
});


module.exports=connection;