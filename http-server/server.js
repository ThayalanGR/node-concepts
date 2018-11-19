const http = require('http');
const fs = require('fs');
const hostName = '127.0.0.1';
const port = 3000 || process.env.PORT;
// console.log(port)

// const server = http.createServer();

// server.on('connection', (socket) => {
//     console.log('incoming'+socket)
// })


// server.listen(port)

// console.log('listening on port :' + port)




fs.readFile("index.html", (err, html) => {
    if (err) {
        console.log(err.toString())
    }
    const server = http.createServer((req, res) => {
        if (req.url === '/') {
            res.statusCode = 200
            res.setHeader('content-type', 'text/html')
            res.write(html)
            res.end()
        }

        if (req.url === '/api'){
            res.statusCode = 200
            res.setHeader('content-type', 'application/json');
            res.write(JSON.stringify([1, 'a', 5]));
            res.end();
        }

    })

    server.listen(port, hostName, () => {
        console.log(`server started successfully on port - ${port}`)
    })
})