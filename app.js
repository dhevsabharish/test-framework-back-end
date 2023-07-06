// import modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();


// app
const app = express();


// db
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(Error, err.message);
    });


// middleware
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));

// routes
const testRoutes = require('./routes/test');
app.use("/", testRoutes)


// ports
const port = process.env.PORT || 8080;


// listener
const server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

// hidden comment
