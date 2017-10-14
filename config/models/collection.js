// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema

var collectionSchema = new Schema({
    name: { type: String, required: true, unique: true },
    movies: Array,
    created_at: Date,
    updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Collection = mongoose.model('Collection', collectionSchema);

// make this available to our users in our Node applications
module.exports = Collection;