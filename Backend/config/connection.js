const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'bgu7bzzy8hp2se2drqzb-mysql.services.clever-cloud.com',
    user: 'ujl5gq0xo0mqndcd',
    password: '9gCpqMBrmWH1rhx29lRJ', 
    database: 'bgu7bzzy8hp2se2drqzb', 

});

connection.connect((err) => {
    if (err) {
        console.error('Error: Unsuccessful connection to MySQL:', err);
    } else {
        console.log('MySQL Connected!');
    }
});


module.exports = connection;