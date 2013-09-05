
/*
 * GET users listing.
 */
var UserModel = require('../models/user');

exports.list = function(req, res){
    return UserModel.find(function (err, users) {
        if(err){
           return console.log('error');
        }
        return res.send(users);
    });
};


exports.post = function(req, res){
    return UserModel.find(function (err, users) {
        if(err){
           return console.log('error');
        }
        return res.send(users);
    });
};



exports.show = function(req, res){
    rajib = new UserModel({name:'Rajib',email:'tesz',roles:['admin']});
    rajib.save();
    return UserModel.find(function (err, users) {
        if(err){
           return console.log('error');
        }
        return res.send(users);
    });
};
