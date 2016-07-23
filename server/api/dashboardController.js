var nJwt = require('njwt'),
    cookie = require('cookie'),
    config = require('../config/config');

module.exports = function(app) {
    app.get('/api/dashboard', function(req, res) {
        if (req.headers.cookie) {
            var jwt = cookie.parse(req.headers.cookie).jwt;
            nJwt.verify(jwt, config.secret, function(err, verifiedJwt) {
                if (err) {
                    console.log('there was an error ' + err);
                    return res.json({ success: false, message: 'Error verifying JWT.' });
                }

                if (verifiedJwt) {
                    console.log('verification passed');
                    res.json({ success: true, message: 'JWT was verified.' });
                } else {
                    console.log('verification failed');
                    res.json({ succcess: false, message: 'JWT failed verification.' });
                }
            });
        } else {
            res.json({ success: false, message: 'No cookie was found' });
        }
    });
}
