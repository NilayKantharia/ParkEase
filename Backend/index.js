const connection  = require('./connection');
const express = require('express');
const path = require('path');
const userRouter = require('./routes/user');

const app = express();
const port = 8000;

//View engine and Views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/user',userRouter); 
app.use('/ticket',ticketRouter);

//Starting the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
