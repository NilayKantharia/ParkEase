const connection  = require('./connection');
const express = require('express');
const path = require('path');
const signuproute = require('./routes/signup');
const loginroute = require('./routes/login');

const app = express();
const port = 8000;

// Set view engine and views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route
app.use('/signup', signuproute);
app.use('/login',loginroute)

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
