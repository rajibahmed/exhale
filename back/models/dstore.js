//Schemas
var mongoose = require('mongoose');
var DStore =  mongoose.Schema({
    name: String
});

module.exports = mongoose.model('DStore', DStore);
