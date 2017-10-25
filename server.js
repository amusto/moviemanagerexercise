(function () {
    "use strict";

    const express = require('express'),
        path = require('path'),
        logger = require('morgan'),
        cookieParser = require('cookie-parser'),
        bodyParser = require('body-parser'),
        expressValidator = require('express-validator'),
        errorHandler = require('error-handler'),
        mongoose = require('mongoose'),
        morgan = require('morgan'),
        http = require('http'),
        config = require('config');

    const HOST = config.get('server.host'),
        PORT = config.get('server.port'),
        ENV = config.get('server.env'),
        tmdbAPI = config.get('tmdbAPI');

    const app = express();
    const env = 'development';

    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(expressValidator());
    app.use(cookieParser());
    //app.use(express.static(__dirname + '/app'));
    app.use(express.static(__dirname + '/dist')); //Works but commented it out while working on it
    app.use('/node_modules', express.static('./node_modules'));

    require('./config/routes.js')(app);

    if (ENV === 'development') {
        app.listen(3000, function () {
            console.log('Example listening on port 3000!');
        });
    } else{
        app.listen(8080, function () {
            console.log('Example listening on port 8080!');
        });
    }

}());
