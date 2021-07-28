const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  type: { type: String, enum: ['user', 'mod'], default: ['user'], required: true }
})

const User = mongoose.model('User', UserSchema)

module.exports = User
