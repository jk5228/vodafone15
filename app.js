var express = require('express');
var app = express();

var request = require('request');
var apiKey = "NLNUbwXn31cUCJOuJrnQpw=="
var vehicles = [
  "IML43",
  "OT380",
  "SK014",
  "SP758",
  "SSD53",
  "ZM172"
];

app.get('/', function (req, res) {
	var requestname = "getvehicleinfo";
	var reply = []

	var num = 0
	for (var i = 0; i < vehicles.length; i++) {
		var url = "https://insolica.com/api/" + requestname + "/?regnumber=" + vehicles[i] + "&key=" + apiKey;
	  	request(url, function (error, response, body) {
	  		num++;
		    reply.push(JSON.parse(body));
		    if (num == 5){
		    	res.json(reply);
		    }
	  	})
	};
});

app.get('/getenginedata/:num',function (req,res){

	var requestname = "getenginedata";

    var from = "2015-04-21";
    var to = "2015-05-21";

	var car = vehicles[req.params['num']];
	var url = "https://insolica.com/api/" + requestname + "/?regnumber=" + car + "&key=" + apiKey + "&from="+from+ "&to="+to;

	request(url, function (error, response, body) {
    	res.json(body);
  	})

})

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
