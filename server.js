var app = require('express')();
var cool = require('cool-ascii-faces');

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res){
    res.send('Hello Heroku');
});

app.get('/cool', function(req, res){
    res.send(cool());
});

app.listen(app.get('port'), function(){
    console.log('server is now running on port %s', app.get('port'));
});
