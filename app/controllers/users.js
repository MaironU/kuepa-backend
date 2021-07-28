const { httpError } = require('../helpers/handleError')
const User = require("../models/user");

const getUsers = async (req, res) => {
  try{
    const allUsers = await User.find({})
    res.send({data: allUsers})
  }catch(e){
    httpError(res, e)
  }
}

const getUser = () => {

}

const createUser = () => {

}

const updateUser = () => {

}

const deleteUser = () => {

}

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }
