const mongoose = require('mongoose')
var User = mongoose.model('User');

const ChatSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  message: { type: String, required: true }
},
{
  timestamps: true
}
)

const Chat = mongoose.model('chat', ChatSchema)

module.exports = Chat
