//Schemas
var mongoose = require('mongoose');
var Book =  mongoose.Schema({
    title: String,
    author: String,
    releaseDate: Date
});

module.exports = mongoose.model('Book', Book);
