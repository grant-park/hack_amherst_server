var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  name: String,
  contact: String,
  description: String,
  destination: String,
  origin: String,
  transportation: String,
  date: Date,
  time: String,
  userKey: Number
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
