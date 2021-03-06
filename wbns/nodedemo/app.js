var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var loginRouter=require('./routes/login_routes');
var signRouter=require('./routes/signupRoutes');
var signupRouter=require('./routes/signup_routes');
var productRouter=require('./routes/product_routes');
var adminRouter=require('./routes/admin_routes');
var userRouter=require('./routes/user_route');
var customerRouter=require('./routes/customer_router');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user', userRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/sign',signRouter);
app.use('/product',productRouter);
app.use('/admins',adminRouter);
app.use('/customer',customerRouter);
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
  res.render('error');
});

module.exports = app;
