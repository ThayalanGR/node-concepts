// node basics

const http = require('http')

const hostName = '0.0.0.0'

const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end("hello node!")
})

server.listen(port, hostName, () => {
    console.log("server started!")
})