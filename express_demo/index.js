const express = require('express')
const path = require('path')
const fs = require('fs')
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const dishRouter = require('./router/dishes')

const PORT = 5000;
const hostname = 'localhost';

const app = express();

app.use(bodyParser.json())

app.use(morgan('dev'));



app.use('/dishes', dishRouter)


app.get('/dishes/:dishId', (req, res, next) => {
    res.end('Getting the dish with ID : ' + req.params.dishId);
})

app.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on  : /dishes/dishId')
})

app.put('/dishes/:dishId', (req, res, next) => {
    res.write('Updating the dish : ' + req.params.dishId)
    res.end('\nUpdating the dish : ' + req.body.name + ' with details : ' + req.body.description)
})

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('Deleting the dish : ' + req.params.dishId)
})

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