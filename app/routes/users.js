const express = require('express')
const Router = express.Router()
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/users')

Router.get("/", getUsers)

module.exports = Router;

