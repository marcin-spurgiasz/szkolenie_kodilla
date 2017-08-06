var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs')
var app = express();

var fileContent;
app.use(bodyParser.json());


app.get('/getNote',  (req, res) => {
    fs.readFile('./test.json', 'utf8', function (err, data) {
        if (err) throw err;
        fileContent = data
        res.send(data);
    });
});

app.post('/updateNote/:note', (req, res) => {
    fileContent = req.params.note;
    fs.writeFile('./test.json', fileContent, function (err, data) {
        if (err) throw err;
        console.log('file update');
    });
    res.send(fileContent);
});

// app.delete('/del_user', function (req, res) {
//     console.log('Otrzymałem żądanie DELETE do strony /del_user');
//     res.send('Hello DELETE!');
// });

// app.get('/list_user', function (req, res) {
//     console.log('Otrzymałem żądanie GET do strony /list_user');
//     res.send('Strona z listą użytkowników!');
// });

// app.get('/ab*cd', function (req, res) {
//     console.log('Otrzymałem żądanie GET do strony /ab*cd');
//     res.send('Wzór pasuje');
// });

app.listen(3000);

