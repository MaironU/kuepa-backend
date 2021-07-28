
const User = require('../models/user')
const Chat = require('../models/chat')

module.exports = function(io) {

  let users = []

  io.on('connection', function(socket){
    console.log("un Cliente se ha conectado", socket.id);

    socket.on("new user", (data) => {
      console.log("nuevo usuario", data)
        if(users.indexOf(data) != -1){
        }else{
          socket.user = data
          console.log(socket.user)
          users.push(socket.user)
        }
    })

    socket.on('message', async function(body){
      if(body){
        const user = await User.findOne({_id: body._id})
        const message = new Chat({
          user: user._id,
          message: body.message
        })
        console.log("user", user)
        await message.save()
        socket.broadcast.emit("message", {
          message: body.message,
          user: user
        })
      }
    })

    socket.on('disconnect', function(data){
      console.log("desconectad", data)
      //if(!socket.user) return
      //users.splice(users.indexOf(socket.user), 1)
    })
  })
}
