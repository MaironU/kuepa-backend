const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { httpError } = require('../helpers/handleError')

const login = async (req, res) => {
  try{
    const { user, password } = req.body
    const detailUser = await User.findOne({user, password})
    if(!detailUser) return res.json({data: "", error: true, message: "Credenciales inválidas"});
    const accessToken = jwt.sign({detailUser}, process.env.SECRET, { expiresIn: '24h'});

    res.json({
        data: detailUser,
        token: accessToken,
        error: false
    })

  }catch(e){
    httpError(res, e)
  }
}

const register = async (req, res) => {
  try{
    let student = await User.findOne({ user: req.body.user });
    if (student) {
      return res.send({data: '', error: true, message: "Usuario ya existe"})
    } else {
      student = new User({
          name: req.body.name,
          user: req.body.user,
          password: req.body.password,
          type: req.body.type
      });
      await student.save();
      return res.send({data: student, message: "Usuario registrado correctamente", error: false})
    }
  }catch(e){
    httpError(res, e)
  }
}

module.exports = {
    login,
    register
}
