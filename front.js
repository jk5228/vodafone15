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

  var toPlot = ["TotalOdo","RPM","EngLoad","MIL","EngTemp","TotalFuel","AirTemp","FuelLevel","FuelPressure","IntakePressure"]
  for (var i = 0; i < toPlot.length; i++) {
    makeChart(i,toPlot[i]);
  };
});

function makeChart(num,name){
    // Get the context of the canvas element we want to select
  var ctx = document.getElementById(String(num)).getContext("2d");

  $.get("/chart/" + name, {}, function(dataToPlot){
    console.log(dataToPlot);

    datasets = []
    for (var i = 0; i < 6; i++) {
      datasets.push(makeDataset(dataToPlot[i],"rgba(30,60,200,1)"))
    };
    var data = {
        labels: arrayOf0ToN(dataToPlot[0].length),
        datasets: datasets
    };

    var chart = new Chart(ctx).Line(data,options);
  
  });
}
