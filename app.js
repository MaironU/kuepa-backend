require('dotenv').config()
const express = require('express')
const cors = require('cors')
const socketio = require('socket.io')
const { dbConnect } = require('./config/mongo')

const app = express()
const server = require("http").createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*',
  }
})
require('./app/socket')(io)

app.use(cors())
app.use(express.json())

const routesUser = require("./app/routes/users")
const routesAuth = require("./app/routes/auth")
const routesChat = require("./app/routes/chat")

app.use("/api/auth", routesAuth)
app.use("/api/users", routesUser)
app.use("/api/messages", routesChat)

const PORT = process.env.PORT || 3000
dbConnect()
server.listen(PORT, () => {
  console.log("escuchando en el puerto", PORT)
})
