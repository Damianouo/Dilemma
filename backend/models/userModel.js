const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 30,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  email: String,
});

module.exports = mongoose.model('User', userSchema);
