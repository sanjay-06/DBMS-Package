var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var feerouter=require("./routes/feerouter");
var users=require('./routes/users');
var attendance=require('./routes/attendance');
var marks=require('./routes/marks');
var app = express();
var bodyParser=require('body-parser');
var hostelfee=require('./routes/hostelfeerouter');
var hostelallot=require('./routes/hostelallot');
var semtimetable=require('./routes/semtimetablerouter');
var staffuser=require('./routes/staffuser');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser("secret"));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/users/register",users);
app.use("/users/fees",feerouter);
app.use("/users/marks",marks);
app.use("/users/hostelfees",hostelfee);
app.use("/users/attendance",attendance);
app.use("/users/hostelallot",hostelallot);
app.use("/users/semtimetable",semtimetable);
app.use('/users/staffs',staffuser);

//app.use("/users/fees",feestable);
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
