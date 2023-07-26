// import modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
require('dotenv').config();
const { errorHandler } = require('./middlewares/errorMiddleware');
const connectDB = require('./config/db');


// app
const app = express();

// db
connectDB()


// middleware & routes
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use('/api/modules', require('./routes/moduleRoutes'))
app.use(errorHandler);


// ports
const port = process.env.PORT || 8090;


// listener
const server = app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});