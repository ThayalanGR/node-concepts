const EventEmitter = require('events');

// const emitter = new EventEmitter();
//module wrapper function (function (exports, require, module, __filename, __dirname) {

// console.log(module, exports, require)
console.log(__dirname)
console.log(__filename)

const url = 'http://mylogger.io/log'


class Logger extends EventEmitter {
    log(message) {
        console.log(message)

        //raise event
        this.emit('messageLogged', {
            id: 2,
            message: "hello"
        });
    }
}


// raise an event 


// module.exports.log = log

module.exports = Logger;



// module.exports.endPoint = url


// }