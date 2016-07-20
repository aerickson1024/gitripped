var secureRandom = require('secure-random');

module.exports = {
    'secret': secureRandom(256, {type: 'Buffer'}),
    'database': 'mongodb://admin:admin@ds023425.mlab.com:23425/gitripped'
}
