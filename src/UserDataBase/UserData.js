const mongoose = require("mongoose");

const registration_schema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    lowercase: true,
  },
});

const users_collection1 = new mongoose.model("user", registration_schema);
module.exports = users_collection1;
