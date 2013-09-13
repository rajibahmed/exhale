
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


exports.create = function(req, res){
	user = new UserModel({
		name: req.body.name,
		email: req.body.email
	});

    return user.save(function (err, users) {
        if(err){
           return console.log('error');
        }
        return res.send(users);
    });
};



exports.show = function(req, res){
    return UserModel.findById(req.params.id,function (err, users) {
        if(err){
           return console.log('error');
        }
        return res.send(users);
    });
};
