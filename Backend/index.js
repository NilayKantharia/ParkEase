const express = require('express');
const path = require('path');
const cors = require('cors');
const userRouter = require('./routes/user');
const ticketRouter = require('./routes/ticket');
const orderRouter = require('./routes/order');
const stallRouter = require('./routes/stall');

const app = express();
const port = 8000;

//View engine and Views directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Routes
app.use('/tickets', ticketRouter);
app.use('/order', orderRouter);
app.use('/stalls', stallRouter);
app.use('/', userRouter); 

//Starting the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
