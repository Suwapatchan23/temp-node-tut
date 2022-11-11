const EventEmitter = require('events')

const customEmitter = new EventEmitter()

//  On and Emit Methods
//  keep track of the order 
//  additional arguments
//  built-in modules utilize it

customEmitter.on('response', (name, id) => {
    console.log(`data received user ${name} with id ${id}`)
})