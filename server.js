"use strict";

const express = require('express'),
path = require('path'),
logger = require('morgan'),
cookieParser = require('cookie-parser'),
bodyParser = require('body-parser'),
errorHandler = require('error-handler'),
mongoose = require('mongoose'),
morgan = require('morgan'),
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
