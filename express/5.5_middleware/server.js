var express = require('express');
var app = express();

app.use(express.static('assets'));

app.use('/store', (req, res, next) => {
    console.log('Hej, jestem pośrednikiem między żądaniem a odpowiedzią!');
    next();
});

app.get('/store', function (req, res) {
    res.send('To jest sklep');
});

app.get('/', (req, res) => {
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