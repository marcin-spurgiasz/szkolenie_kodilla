var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csurf = require('csurf');
var express = require('express');
var extend = require('xtend');
var forms = require('forms');
var ManagementClient = require('auth0').ManagementClient;

var profileForm = forms.create({
    givenName: forms.fields.string({ required: true }),
    surname: forms.fields.string({ required: true }),
    streetAddress: forms.fields.string(),
    city: forms.fields.string(),
    state: forms.fields.string(),
    zip: forms.fields.string()
});

function renderForm(req, res, locals) {
    res.render('profile', extend({
        title: 'My Profile',
        csrfToken: req.csrfToken(),
        givenName: req.user.givenName,
        surname: req.user.surname,
        streetAddress: req.user.streetAddress,
        city: req.user.city,
        state: req.user.state,
        zip: req.user.zip
    }, locals || {}));
}

module.exports = function profile() {
    var router = express.Router();

    router.use(cookieParser());
    router.use(bodyParser.urlencoded({ extended: true }));
    router.use(csurf({ cookie: true }));
    router.all('/', function (req, res) {
        profileForm.handle(req, {
            success: function (form) {
                var management = new ManagementClient({
                    token: '',
                    domain: ''
                });
                req.user.givenName = form.data.givenName;
                req.user.surname = form.data.surname;
                req.user.streetAddress = form.data.streetAddress;
                req.user.city = form.data.city;
                req.user.state = form.data.state;
                req.user.zip = form.data.zip;
                management
                    .users
                    .updateUserMetadata({
                        id: req.user.id
                    }, form.data)
                    .then(function () {
                        renderForm(req, res);
                    });
            },
            empty: function () {
                renderForm(req, res);
            }
        });
    });
    return router;
};