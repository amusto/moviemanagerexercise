"use strict";

const express = require('express'),
path = require('path'),
logger = require('morgan'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
errorHandler = require('error-handler'),
mongoose = require('mongoose'),
morgan = require('morgan'),
/*routes = require('./routes'),
api = require('./routes/api'),*/
http = require('http'),
config = require('config');

const HOST = config.get('server.host');
const PORT = config.get('server.port');
const tmdbAPI = config.get('tmdbAPI');

const app = express();
const env = 'development';

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/app'));

app.use('/node_modules', express.static('./node_modules'));

require('./config/routes.js')(app);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
if (app.get(env === 'development')) {
    app.listen(3000, function () {
        console.log('Example listening on port 3000!');
    });
} else{
    app.listen(8080, function () {
        console.log('Example listening on port 8080!');
    });
}*/

module.exports = app;
