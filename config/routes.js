const config = require('config'),
HOST = config.get('server.host'),
DATABASE = config.get('db.table'),
PORT = config.get('server.port'),
ENV = config.get('server.env');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Collection = require('./models/collection');

var dbConnectString = "mongodb://" + HOST + "/" + DATABASE;
mongoose.connect(dbConnectString, {
    useMongoClient: true
    /* other options */
});
console.log('Loading Routes');

function validateCollection(req, res, next) {
    req.checkBody('name', 'Invalid description').notEmpty();
    //Validate check for _id
    //TODO: update to check for all possible params
    if (req.body._id !== undefined) {
        req.checkBody('_id', 'Invalid mongoId').notEmpty().isMongoId();
    }

    var errors = req.validationErrors();
    if (errors) {
        var response = { errors: [] };
        errors.forEach(function(err) {
            response.errors.push(err.msg);
        });
        res.statusCode = 400;
        return res.json(response);
    }
    return next();
}

module.exports = function (app) {

    //COLLECTION ROUTES
    // Validation is handle via middleware using express-validator
    app.post('/api/createCollection', validateCollection, function (req, res, next) {
        var tempCollection = req.body;

        // create a new collection
        var newCollection = new Collection({
            name: tempCollection.name,
            movies: [],
            created_at: Date.now(),
            updated_at: Date.now()
        });

        //Call models save function
        //TODO: revise with a promise and resolve final returnedStatus object
        newCollection.save(function(err) {
            //if (err) throw err;
            if (err) {
                var returnStatus = {
                    status: "error",
                    message: err.message
                };
                res.json(returnStatus);
            } else {
                var returnStatus = {
                    status: "success",
                    message: "Collection Saved Successfully!"
                };
                res.json(returnStatus);
            }

        });

    });

    app.post('/api/updateCollection', validateCollection, function (req, res, next) {
        var collection = req.body;

        Collection.findByIdAndUpdate(collection._id, collection, function (err) {
            if (err) throw err;

            res.json({
                status: 'collectionUpdated'
            });
        });
    });

    app.delete('/api/deleteCollection/:id', function (req, res) {
        var collectionId = req.params.id;

        Collection.findByIdAndRemove(collectionId, function(err) {
            if (err) throw err;
            res.json({
                status: 'collectionDeleted'
            });
        });

    });

    app.get('/api/collections', function (req, res, next) {
        //Get All Collections
        Collection.find({}, function(err, collections) {
            if (err) throw err;

            // object of all the collections
            res.json(collections);
        });

    });

    app.get('/api/collection/:collectionId', function (req, res, next) {
        var collectionId = req.params.collectionId;

        Collection.findById(collectionId, function(err, collection) {
            if (err) throw err;

            // object of all the collections
            res.json(collection);
        });

    });

    app.post('/api/collection/:collectionId', validateCollection, function (req, res, next) {
        var collectionId = req.params.collectionId;

        Collection.findById(collectionId, function(err, collection) {
            if (err) throw err;

            // object of all the collections
            res.json(collection);
        });

    });

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

};
