const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['logistic','sales', 'admin'], // You can add more roles as needed
    default: 'logistic',
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
