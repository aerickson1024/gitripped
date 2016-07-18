var express = require('express'),
    authorizeController = require('./server/api/authorizeController'),
    app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(__dirname + '/client'));

authorizeController(app);

app.listen(app.get('port'), function(){
    console.log('server is now running on port %s', app.get('port'));
});
