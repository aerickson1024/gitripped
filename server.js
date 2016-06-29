var app = require('express')();

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res){
    res.send('Hello Heroku');
});

app.listen(app.get('port'), function(){
    console.log('server is now running on port %s', app.get('port'));
});
