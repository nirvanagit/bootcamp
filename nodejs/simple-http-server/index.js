/*
    * 1. Need to start a server
    * 2. Return hello world
*/

/*
    * 65000 ports -> not physical ports
    * virtual ports.
    * nodejs, and Java.
    * nodejs serving on port 3000
*/

// 1. Hey computer, I want to create a server
// Every programming language provides easy to use functions
// for most commonly used features.
// HTTP.
const http = require("http")
const hostname = "127.0.0.1" // localhost -> loopback address.
const port = 3000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end("Hello world")
})

// 2. I want to run this server on port 3000
server.listen(port, hostname, () => {
    console.log(`server running at: http:${hostname}:${port}`)
})
