const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv').config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/chatroom');
const connection = require('./database/connection');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.engine('.html', require('ejs').__express);
app.set('view engine','html');

app.use('/', indexRouter);	
app.use('/chatroom', usersRouter);


module.exports = app;
