var bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    config = require('../config/config'),
    nJwt = require('njwt'),
    cookieParser = require('cookie-parser'),
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
        user.findOne({
            email: req.body.email
        }, function(err, foundUser) {
            if (err) throw err;

            if (!foundUser) {
                res.json({ success: false, message: 'Authentication failed. User not found.' });
            } else {
                foundUser.comparePassword(req.body.password, function(err, isMatch) {
                    if (isMatch && !err) {
                        //res.clearCookie('jwt');
                        var claimsData = {
                            sub: foundUser._id,
                            iss: 'http://locahost:3000',
                            permissions: foundUser.permissions,
                            firstName: foundUser.firstName,
                            lastName: foundUser.lastName,
                            email: foundUser.email
                        };

                        var jwt = nJwt.create(claimsData, config.secret);
                        //jwt.setExpiration(new Date().getTime() + 10000);

                        var token = jwt.compact(jwt);
                        res.cookie('jwt', token, {
                            httpOnly: true,
                            secure: true
                        });

                        res.json({
                            success: true,
                            message: 'JWT cookieParser was created.',
                            claims: token.split('.')[1]
                        });
                    } else {
                        res.json({
                            succcess: false,
                            message: 'Authentication failed. Passwords did not match'
                        });
                    }
                });
            }
        });
    });
};
