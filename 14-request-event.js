const http = require('http')

//  Using Event Emitter API
const server = http.createServer()
//  emits request event
//  subscribe tio it / listen for it / rspond to it
server.on('request', (req, res) => {
    res.end('Welcome')
})

server.listen(5000)