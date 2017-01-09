var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Example user Schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  created_at: Date,
  updated_at: Date
})

// Custom methods go here


// model using the schema
var User = mongoose.model('User',userSchema);

// make this model available to the rest of the Node application
module.exports = User;
