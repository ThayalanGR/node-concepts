// console.log(module)

// const log = require('./logger');

// logger = 2;

// log('Hello World');

// const path = require('path');

// var parsedPath = path.parse(__filename);

// console.log(parsedPath)

// const os = require('os');

// var totMem = os.totalmem();

// var freeMem = os.freemem();

// console.log(totMem, freeMem);


// const fs = require('fs')

// const files = fs.readdirSync('./')

// console.log(files)

// fs.readdir('./', (err, callback) => {
//     if (err) console.log(err)
//     else console.log(callback)
// })


const EventEmitter = require('events');

const emitter = new EventEmitter();


const Logger = require('./logger');
const logger = new Logger();
// register an event 

logger.on('messageLogged', (arg) => {
    console.log("listener called", arg)
})

// raise an event  -- secondarily in logger.js file
// emitter.emit('messageLogged', {
//     id: 2,
//     message: "hello"
// });

logger.log('message');