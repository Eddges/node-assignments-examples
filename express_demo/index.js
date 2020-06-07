const express = require('express')
const path = require('path')
const fs = require('fs')
const http = require('http')
const morgan = require('morgan')

const PORT = 5000;
const hostname = 'localhost';

const app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'))

app.use((req, res, next) => {
    console.log(req.headers)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<html><body><h1>This is an express server</h1></body></html>')
})

const server = http.createServer(app);

server.listen(PORT, hostname, () => {
    console.log('Server running on port: ' + PORT)
})