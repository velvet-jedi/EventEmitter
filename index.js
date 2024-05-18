const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};
// Custom class extending EventEmitter


const myEmitter = new MyEmitter();
// Create an instance of the custom emitter


// Register an event listener for the 'log' event
myEmitter.on('log', (msg) => logEvents(msg));

// Emit the 'log' event after 2 seconds
setTimeout(()=> {
    
    myEmitter.emit('log', 'Log event emitted!');
}, 2000);
