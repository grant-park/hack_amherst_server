var mongoose = require('mongoose');
var credentials = require('./credentials')

module.exports.connect = function() {
	mongoose.connect(credentials.MONGODB_URI);
	var db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error"));
	db.once("open", function(callback){
	  console.log("Connection Succeeded");
	});
	return db;
}
