var express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
    demoData = require('./demoData.json');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

// register html engine for use html
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/view');
app.use(express.static(__dirname + '/public'));

//route
app.get('/', function(req, res){
	res.render('form');
});

app.post('/',function(req, res){
	var keyToSearch = "[" + req.body.exampleInputName1 + "] " + req.body.exampleInputName2 + " " + req.body.exampleInputName3 + "--" + req.body.exampleInputName4;
	
	if(demoData.hasOwnProperty(keyToSearch)){
		res.send("Your code is valid. Your product is authentic and direct from the manufacturer. You can use it with confidence. The authorized seller of this bottle is " + demoData[keyToSearch]);
	}else{
		res.send("The code you entered is not valid. Please try again. If you are sure you typed it correctly, please contact us immediately for assistance using the form below.");
	}
});

// start server
var sever = app.listen(3000, function(){
	console.log("sever running at http://www.localhost//"+sever.address().port);
});
