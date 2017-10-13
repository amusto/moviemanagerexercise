const config = require('config'),
HOST = config.get('server.host'),
DATABASE = config.get('db.table'),
PORT = config.get('server.port'),
ENV = config.get('server.env');

//TODO: Move to service
var mongoose = require('mongoose');
var dbConnectString = "mongodb://" + HOST + "/" + DATABASE;
mongoose.connect(dbConnectString);
console.log('Loading Routes');

module.exports = function (app) {

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    //TODO: Review setup?
    if (app.get(ENV === 'development')) {
        app.listen(3000, function () {
            console.log('Example listening on port 3000!');
        });
    } else{
        app.listen(8080, function () {
            console.log('Example listening on port 8080!');
        });
    }

    //COLLECTION ROUTES
    app.post('/createCollection', function (req, res, next) {
        var text = req.body.text;

        MovieManagerController.createCollection(text).then(function (collection) {
            res.json(collection);
        });

    });

    app.get('/collections', function (req, res, next) {
        console.log("Get all collections");
        var userId = "amusto"; //TODO: temp till userAuth is setup

        MovieManagerController.getCollectionsForUser(userId).then(function (collections) {
            res.json(collections);
        });

    });

    //MOVIE ROUTES

    //USER ROUTES

};
