var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
    console.log('server is now running on port %s', app.get('port'));
});
