var mongoose = require('mongoose');

var User = require("./user");

var schema = mongoose.Schema({
	name: String,
	members: String,
	url: String,
	users: [User]
})

exports = mongoose.model("Project", schema);

