var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// connection DB
const database = require('./config/database');

let auth = require('./auth/main_auth');
let empleadoRouter = require('./routes/empleadoRouter');
let novioRouter = require('./routes/novioRouter');
let usuarioRouter = require('./routes/usuarioRouter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// mongo connection:
database.mongoConnect();

/**
 * Routers
 */

app.use('/usuarios', usuarioRouter);

// auth jwt:
app.use(auth);

app.use('/novios', novioRouter);
app.use('/empleados', empleadoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
