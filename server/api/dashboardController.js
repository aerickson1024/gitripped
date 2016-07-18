module.exports = function(app) {
    app.get('/api/dashboard', function(req, res) {
        res.json({ message: 'Succesfully connected to Controller.' });
    });
}
