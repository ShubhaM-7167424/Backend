// install mongoosejs
// require and setup connection
// make Schema
// create Model and export

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/praticekaro");

const userschema = mongoose.Schema({
  username: String,
  name: String,
  age: String,
});

module.exports = mongoose.model("users", userschema);
