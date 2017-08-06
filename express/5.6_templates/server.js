var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/first-view', (req, res) => {
    res.render('first-view');
});

app.get('/login', (req, res) => {
    res.render('content');
});

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/userForm', (req, res) => {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));
});

app.listen(3000);

app.use((req, res, next) => {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});