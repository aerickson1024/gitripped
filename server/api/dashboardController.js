var nJwt = require('nJwt'),
    cookieParser = require('cookie-parser'),
    config = require('../config/config');

module.exports = function(app) {
    app.get('/api/dashboard', function(req, res) {
        nJwt.verify(req.headers.token, config.secret, function(err, verifiedJwt) {
            if (err) {
                return res.json({ success: false, message: 'Error verifying JWT.' });
            }

            if (verifiedJwt) {
                res.cookie('mycustom', { value: 'did this work' });
                res.json({ success: true, message: 'JWT was verified.' });
            } else {
                res.json({ succcess: false, message: 'JWT failed verification.' });
            }
        });
    });
}
