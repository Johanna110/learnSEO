//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'views/index.html'));
});
app.get('/basicsseo', function(req, res){
  res.sendFile(path.join(__dirname, 'views/basicsseo.html'));
});
app.get('/seostrategies', function(req, res){
  res.sendFile(path.join(__dirname, 'views/seostrategies.html'));
});
app.get('/onoffpage', function(req, res){
  res.sendFile(path.join(__dirname, 'views/onoffpage.html'));
});
app.get('/as1', function(req, res){
  res.sendFile(path.join(__dirname, 'views/as1.html'));
});
app.get('/as2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/as2.html'));
});
app.get('/as3', function(req, res){
  res.sendFile(path.join(__dirname, 'views/as3.html'));
});
app.get('/as4', function(req, res){
  res.sendFile(path.join(__dirname, 'views/as4.html'));
});
app.get('/oo1', function(req, res){
  res.sendFile(path.join(__dirname, 'views/oo1.html'));
});


//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});