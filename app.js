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

app.get('/chart/:num/:name',function(req,res){

	reply = []
	getenginedata(req.params["num"],function(eng){
		for (var i = 0; i < eng.length; i++) {
			reply.push(Number(eng[i][req.params["name"]]))
		};
		res.json(reply)
	})

})

function getenginedata(num,cb){
	var requestname = "getenginedata";

    var from = "2015-04-21";
    var to = "2015-05-21";

	var car = vehicles[num];
	var url = "https://insolica.com/api/" + requestname + "/?regnumber=" + car + "&key=" + apiKey + "&from="+from+ "&to="+to;

	request(url, function (error, response, body) {
    	cb(JSON.parse(body));
  	})
}

app.get('/getenginedata/:num',function (req,res){
	getenginedata(req.params['num'],function(j){
		res.json(j)
	})

})

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
