var express = require('express');
var path =  require('path');
var personalData = require('./public/scripts/personalData.json');

var app = express();


var fs = require('fs');
fs.writeFile('helloworld.txt', 'Hello World!', function (err) {
  if (err) return console.log(err);
  console.log('Hello World > helloworld.txt');
});

app.use('/', express.static('public'));

app.get('/personal', function(req,res){
	res.send(personalData);
});

app.listen(3000, function(){
	console.log("Server is working on port 3000")
})