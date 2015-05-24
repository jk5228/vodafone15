var express = require('express');
var app = express();

var request = require('request');

app.get('/', function (req, res) {
  request('http://www.google.com', function (error, response, body) {
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
