var nJwt = require('njwt'),
    config = require('../config/config');

module.exports = function(app) {
    app.get('/api/dashboard', function(req, res) {
        console.log(req.cookies.jwt);
        if (req.cookies.jwt) {
            var jwt = req.cookies.jwt;
            console.log(jwt);
            nJwt.verify(jwt, config.secret, function(err, verifiedJwt) {
                if (err) {
                    console.log(err.JwtBody);
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
            res.json({ success: false, message: 'No JWT cookie was found' });
        }
    });
}
