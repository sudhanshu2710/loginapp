const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const userRoutes = require('./routes/userRoute');
const loginRoutes = require('./routes/loginRoute');
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/login', loginRoutes);
app.use('/user', userRoutes);

module.exports = app;
