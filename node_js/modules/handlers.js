var fs = require('fs');
var formidable = require('formidable');

exports.upload = function (request, response) {
    console.log("Rozpoczynam obsługę upload");
    var form = new formidable.IncomingForm();
    form.parse (request, function (err, fields, files) {
        if (err) throw err;
        fs.renameSync(files.upload.path, "test1.jpg");
        response.writeHead(200, {"Content-Type": "text/html;  charset=utf-8"});
        fs.readFile('templates/upload.html', function (err, html) {
            if (err) throw err;
            response.writeHead(200, {"Content-Type": "text/html;  charset=utf-8"});
            response.write(html);
            response.end();
        });
    });
}

exports.welcome = function (request, response) {
    console.log("Rozpoczynam obsługę żądania welcome.");
    fs.readFile('templates/start.html', function (err, html) {
        if (err) throw err;
        response.writeHead(200, {"Content-Type": "text/html;  charset=utf-8"});
        response.write(html);
        response.end();
    });
}

exports.show = function (request, response) {
    fs.readFile("test1.jpg", "binary", function (err, file) {
        if (err) throw err;
        response.writeHead(200, {"Content-Type": "image/jpg"});
        response.write(file, "binary");
        response.end();
    });
}

exports.error = function (request, response) {
    console.log("Nie wiem co robić.");
    response.write("404 : Niepoprawna ścieżka");
    response.end();
}