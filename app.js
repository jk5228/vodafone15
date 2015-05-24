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
	var url = "https://insolica.com/api/" + requestname + "/?regnumber=" + vehicles[0] + "&key=" + apiKey;

  request(url, function (error, response, body) {

    if (!error && response.statusCode == 200) {
      res.send(body) // Show the HTML for the Google homepage.
    }
  })
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
