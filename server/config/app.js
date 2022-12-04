/*installed third party packages*/
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

//configures authentication packages
let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');
let app = express();

//create a user model instance
let userModel = require('../models/user');
<<<<<<< HEAD
let User = userModel.User;
=======
let user = userModel.User;
>>>>>>> db45015ce5d5859cf66e63c2c92aad0f96eebccb

//config mongoDB
let mongoose = require('mongoose');
let DB = require('./db');

//point mongoose to db URI
mongoose.connect(DB.URI);
let mongoDB=mongoose.connection;
mongoDB.on('error',console.error.bind(console,'Connection Error:'));
mongoDB.once('open', ()=> {
  console.log('connected to the mongoDB');
});

//set up express session
app.use(session({
  secret:"SomeSecret",
  saveUninitialized:false,
  resave:false
}))

<<<<<<< HEAD
// implement a User Authentication
passport.use(User.CreateStrategy());

//serialize and deserialize the user information
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
=======
//serialize and deserialize the user information
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());
>>>>>>> db45015ce5d5859cf66e63c2c92aad0f96eebccb

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//initialize flash
app.use(flash());

let indexRouter = require('../routes/index');
let musicRouter = require('../routes/games');
let userRouter = require('../routes/user');


// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use('/', indexRouter); 
app.use('/gameslist', musicRouter); 

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