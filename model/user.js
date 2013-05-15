var mongoose = require('mongoose');

var schema = mongoose.Schema({
	username: String,
	password: String,
	passwordSalt: String,
	email: String
})

exports = mongoose.model("User", schema);