var express = require('express');
var path =  require('path');
var personalData = require('./public/scripts/personalData.json');
var bodyParser = require('body-parser')

var app = express();

var fs = require('fs');


app.use('/', express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.post('/contact', function(req,res){
	console.log(req.body);
	res.send(req.body);
	fs.writeFile(req.body.name + '.txt', req.body.email + req.body.message, function (err) {
 		 if (err) return console.log(err);
  			console.log('User data message created here')
	});
})

app.get('/personal', function(req,res){
	res.send(personalData);
});

app.listen(3000, function(){
	console.log("Server is working on port 3000")
})