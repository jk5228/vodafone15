function arrayOf0ToN(len){
  var foo = [];

  for (var i = 0; i < len; i++) {
     foo.push(i);
  }

  return foo
}

function makeDataset(data, options) {
  return {
      label: "TotalOdo",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,0)",
      pointDotStrokeWidth : 0,
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

$(document).ready(function(){

  var toPlot = "TotalOdo","RPM","EngLoad","MIL","EngTemp","TotalFuel","AirTemp","FuelLevel","FuelPressure","IntakePressure"]

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
            makeDataset(dataToPlot)
        ]
    };

    var chart = new Chart(ctx).Line(data,options);
  
  });
}