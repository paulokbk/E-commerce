var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride = require('method-override');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const session = require('express-session');

//importando routas de admin
const adminRouter = require('./routes/admin');

const authentification = require('./middlewares/authentication')

const { Server } = require('http');

var app = express();

// view engine setup (diretorio de Views)
app.set('views', path.join(__dirname, 'views'));

//Definindo o EJS como template engine
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());

//definindo repositorio de arquivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// permitir o uso de PUT e Delete no servidor
app.use(methodOverride('_method'));

//permitir o uso do formulario multipart/form-data
app.use(express.urlencoded({extended: false}));

app.use(session({
  secret: "Vivara",
  resave: true,
  saveUninitialized: true
}));



app.use('/admin', adminRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(authentification);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('pages/error');
});

module.exports = app;
