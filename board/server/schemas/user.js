const mongoose = require("mongoose");

const { Schema } = mongoose;
const userSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  pwd: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  postArray: Array,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  manager: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", userSchema);
