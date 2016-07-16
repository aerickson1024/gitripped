var express = require('express'),
    authController = require('./api/authController'),
    app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/public'));

authController(app);

app.listen(app.get('port'), function(){
    console.log('server is now running on port %s', app.get('port'));
});
