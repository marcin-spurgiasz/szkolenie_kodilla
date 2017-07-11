var http = require('http');
var fs = require('fs');

var server = http.createServer();
server.on('request', function (request, response) {
    if (request.method === 'GET' && request.url === '/index') {
        response.writeHead(200, {'Content-Type': "text/html; charset=utf-8"});
        fs.readFile('./index.html', 'utf-8', function (err, data) {
            response.write(data);
            response.end();
        });
    } else {
        response.writeHead(200, {'Content-Type': 'image/jpg' });
        response.write(fs.readFileSync('./cat.jpg'), 'binary')
        response.end()
    }

});
server.listen(9000);