var express = require('express'),
    authorizeController = require('./server/api/authorizeController'),
    dashboardController = require('./server/api/dashboardController'),
    cookieParser = require('cookie-parser'),
    app = express();

app.set('port', (process.env.PORT || 3000));

app.use(cookieParser());

authorizeController(app);
dashboardController(app);

app.use(express.static(__dirname + '/client'));

app.listen(app.get('port'), function(){
    console.log('server is now running on port %s', app.get('port'));
});
