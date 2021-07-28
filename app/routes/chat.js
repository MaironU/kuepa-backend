const express = require('express')
const Router = express.Router()
const { getMessages, createMessage, deleteAllMessages } = require("../controllers/chat");

Router.get("/", getMessages)
      .post("/", createMessage)
      .delete('/', deleteAllMessages)

module.exports = Router;
