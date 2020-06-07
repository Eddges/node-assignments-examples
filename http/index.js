const http = require('http')
const path = require('path')
const fs = require('fs')

const hostname = 'localhost'
const port = 3000;

const server = http.createServer((req, res) => {
    console.log('Request for ' + req.url + ' by method ' + req.method)

    if(req.method === 'GET'){
        var fileURL = req.url;
        if(req.url === '/'){
            fileURL = '/index.html'
        }
        var filePath = path.resolve('./public' + fileURL)
        const fileExt = path.extname(filePath)

        if(fileExt === '.html'){
            fs.exists(filePath, (exist) => {
                if(exist){
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'text/html')
                    fs.createReadStream(filePath).pipe(res)
                }
                else{
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html')
                    res.end('<html><body><p>Error 404, page does not exist');
                }
            })
        }
        else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html')
            res.end('<html><body><p>Error 404, content type is not html');
        }
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html')
        res.end('<html><body><p>Error 404, this operation is not supported');
    }
})


server.listen(port, hostname, () => {
    console.log(`Server running on port ${port}`)
})