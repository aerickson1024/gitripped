var bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    config = require('../config/config'),
    user = require('../models/user');

module.exports = function(app) {
    mongoose.connect(config.database);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.post('/api/register', function(req, res) {
        if (!req.body.firstName ||
            !req.body.lastName ||
            !req.body.email ||
            !req.body.password) {
                res.json({ success: false, message: 'Please provide the required areas.' });
            } else {
                var newUser = new user({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password: req.body.password
                });

                newUser.save(function(err) {
                    if (err) {
                        return res.json({ success: false, message: 'That email already exists. '});
                    }

                    res.json({ success: true, message: 'Successfully created new user.' });
                })
            }
    });

    app.post('/api/authenticate', function(req, res) {
        res.send({
            email: req.body.email,
            password: req.body.password
        });
    });
};
