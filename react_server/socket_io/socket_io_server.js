const { ChatModel } = require('../db/models.js')


module.exports = function(server) {

  const io = require('socket.io')(server)

  io.on('connection', function(socket) {
    console.log('socket io connected')

    socket.on('sendMsg', function({from, to, content}){
      console.log('server receive', {from, to, content})

      const chat_id = [from, to].sort().join('_')
      const create_time = Date.now()
      new ChatModel({from, to, content, chat_id, create_time}).save(function(err, chatMsg) {
        // socket.emit('receiveMsg', chatMsg)
        //TODO: only send peer by peer
        io.emit('receiveMsg', chatMsg)
      })
    })
  })

}
