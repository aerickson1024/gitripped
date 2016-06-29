var app = require('express')();

app.get('/', function(req, res){
    res.send('Hello Heroku');
});

app.listen(3000, '127.0.0.1', function(){
    console.log('server is now running');
});
