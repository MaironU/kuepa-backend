const express = require('express')
const Router = express.Router()
const { login, register } = require("../controllers/auth");

Router.post("/login", login)
      .post("/register", register)

module.exports = Router;
