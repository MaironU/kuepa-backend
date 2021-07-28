const { httpError } = require('../helpers/handleError')
const Chat = require("../models/chat");

const getMessages = async (req, res) => {
  try{
    const allMessages = await Chat.find({}).populate({ path: "user", model: "User"})
    res.send({messages: allMessages, error: false})
  }catch(e){
    httpError(res, e)
  }
}

const createMessage = async (req, res) => {
  try{
      message = new Chat({
          user: req.body.user,
          message: req.body.message
      });
      await message.save();
      return res.send({data: message});
  }catch(e){
    httpError(res, e)
  }
}

const deleteAllMessages = async (req, res) => {
  try{
    const allMessages = await Chat.find({})
    allMessages.forEach(elem => {
      elem.remove()
    })
    res.send({messages:'Eliminados', error: false})
  }catch(e){
    httpError(res, e)
  }
}

module.exports = { getMessages, createMessage, deleteAllMessages }
