var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
/* admin */
var adminPost = require('./routes/admin/post');
var adminPosts = require('./routes/admin/posts');

var posts = require('./routes/posts');
//var connection = require('./lib/connectDB');
var app = express();

var breadcrumbs = require('express-breadcrumbs');
var expressValidator = require('express-validator');
//var util = require('util');
var methodOverride = require('method-override');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(methodOverride('_method'));

app.use(methodOverride(function(req, res){
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method;
        delete req.body._method;
        return method;
    }
}));


app.use(expressValidator());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(breadcrumbs.init());


// Set Breadcrumbs home information
app.use(breadcrumbs.setHome());

// Mount the breadcrumbs at `/admin`
app.use('/admin', breadcrumbs.setHome({
    name: 'Dashboard',
    url: '/admin/posts'
}));
/*
app.use(function (req, res, next) {
  console.log('Time: %d', Date.now());
  next();
});*/


app.use('/', routes);
app.use('/admin/post', adminPost);
app.use('/admin/posts', adminPosts);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


console.log('connection end 2 ');
//connection.end();

module.exports = app;
