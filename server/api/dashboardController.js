var nJwt = require('njwt'),
    config = require('../config/config');

module.exports = function(app) {
    app.get('/api/dashboard', function(req, res) {
        if (req.cookies.jwt) {
            var jwt = req.cookies.jwt;
            nJwt.verify(jwt, config.secret, function(err, verifiedJwt) {
                if (err) {
                    res.status(401);
                    return res.json({
                        success: false,
                        message: 'Error verifying JWT.' ,
                        revokeAuthentication: true
                    });
                }

                if (verifiedJwt) {
                    console.log('verification passed');
                    res.json({
                        success: true,
                        message: 'JWT was verified.',
                        revokeAuthentication: false
                    });
                } else {
                    console.log('verification failed');
                    res.status(401);
                    res.json({
                        succcess: false,
                        message: 'JWT failed verification.',
                        revokeAuthentication: true
                    });
                }
            });
        } else {
            res.status(401);
            res.json({
                success: false,
                message: 'No JWT cookie was found',
                revokeAuthentication: true
            });
        }
    });
}
