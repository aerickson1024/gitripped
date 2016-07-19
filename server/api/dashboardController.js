module.exports = function(app) {
    app.get('/api/dashboard', function(req, res) {
        res.json({ success: true, message: 'Succesfully logged in.' });
    });
}
