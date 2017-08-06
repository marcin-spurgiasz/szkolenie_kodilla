var express = require('express');
var app = express();

app.use(express.static('assets'));

app.get('/', function (req, res) {
    res.sendFile('/index.html');
});

app.get('/userForm', (req, res) => {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));
});

app.listen(3000);