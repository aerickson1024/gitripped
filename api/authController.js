var bodyParser = require('body-parser'),
    model = require('../models/user');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.post('/api/authenticate', function(req, res) {
        res.send({
            email: req.body.email,
            password: req.body.password
        });
    });

    app.post('/api/register', function(req, res) {
        res.send({
            email: req.body.email,
            password: req.body.password
        });
    });
};
