//Schemas
var mongoose = require('mongoose');
var User =  mongoose.Schema({
    name: String,
    email: String,
    roles: Array
});

module.exports = mongoose.model('User', User);
