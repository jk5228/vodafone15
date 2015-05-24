var toPlot = [
  "TotalOdo",
  "RPM",
  "EngLoad",
  "MIL",
  "EngTemp",
  "TotalFuel",
  "AirTemp",
  "FuelLevel",
  "FuelPressure",
  "IntakePressure"
];

var colors = [
  "rgba(26, 188, 156,1.0)",
  "rgba(46, 204, 113,1.0)",
  "rgba(52, 152, 219,1.0)",
  "rgba(155, 89, 182,1.0)",
  "rgba(241, 196, 15,1.0)",
  "rgba(230, 126, 34,1.0)",
  "rgba(231, 76, 60,1.0)",
  "rgba(127, 140, 141,1.0)",
  "#DC5584",
  "#C1F257",
  "#57D6F2"
];

function arrayOf0ToN(len){
  var foo = [];

  for (var i = 0; i < len; i++) {
     foo.push(i);
  }

  return foo
}

// Return the dataset object for data and a stroke color
function makeDataset(data, color) {
  return {
      label: "TotalOdo",
      fillColor: "rgba(220,220,220,0)",
      strokeColor: color,
      pointColor: "rgba(220,220,220,0)",
      scaleGridLineWidth : 1,
      pointDotRadius : 0,
      pointDot : false,
      pointDotStrokeWidth : 0,
      pointHitDetectionRadius : 2,
      data: data
  };
}

// Chart options
var options = {
  // scaleShowGridLines : true
};

$(document).ready(function() {
  for (var i = 0; i < toPlot.length; i++) {
    makeChart(i,toPlot[i]);
  };
});

function makeChart(num,name){
    // Get the context of the canvas element we want to select
  var ctx = document.getElementById(String(num)).getContext("2d");

  $.get("/chart/2/" + name, {}, function(dataToPlot){
    console.log(dataToPlot);

    var data = {
        labels: arrayOf0ToN(dataToPlot.length),
        datasets: [
            makeDataset(dataToPlot,"rgba(30,60,200,1)")
        ]
    };

    var chart = new Chart(ctx).Line(data,options);
  
  });
}
