// import modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
const { errorHandler } = require('./middlewares/errorMiddleware');


// app
const app = express();

// db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB Connected!'))
  .catch(err => {
    console.log(Error, err.message);
  });


// middleware & routes
app.use(morgan('dev'));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/modules', require('./routes/moduleRoutes'))
app.use(errorHandler);


// ports
const port = process.env.PORT || 8080;


// listener
const server = app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});