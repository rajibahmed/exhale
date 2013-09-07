//Schemas
var mongoose = require('mongoose');
var Attribute =  mongoose.Schema({
    name: String,
    req: Boolean
});

module.exports = mongoose.model('Attribute', Attribute);

