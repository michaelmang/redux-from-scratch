var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, 'public')));

//API Service
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ReactReduxExpressMongo')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
var Streams = require('./models/StreamModel.js');

var router = express.Router();

//create api route
app.use('/api', router); //api root
app.use('/api/streams', router); //streams collection

//root message
app.post('/api', function(req, res) {
  res.json({ message: 'API Root!' });
});

//post a new stream
app.post('/api/streams', function(req, res) {
  var stream = new Streams();
  stream.image = req.param('image');
  stream.name = req.param('name');
  stream.viewers = req.param('viewers');

  stream.save(function(err) {
      if (err) {
        res.send(err);
      }

      res.json({ message: 'Stream created. Check Robo 3T!' });
  });
});

//get all streams
app.get('/api/streams', function(req, res) {
  Streams.find(function(err, streams) {
    if (err) {
      res.send(err);
    }

    res.json(streams);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
