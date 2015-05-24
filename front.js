function arrayOf0ToN(len){
  var foo = [];

  for (var i = 0; i < len; i++) {
     foo.push(i);
  }

  return foo
}

$(document).ready(function(){
  // Set up global defaults
  // Chart.defaults.global = {
  //   scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
  //   bezierCurve : false
  // };

  // Get the context of the canvas element we want to select
  var ctx = document.getElementById("chart").getContext("2d");

  $.get("/chart/2/TotalOdo", {}, function(dataToPlot){
    console.log(dataToPlot)
  var options = {
    // scaleShowGridLines : true
  };
  var data = {
      labels: arrayOf0ToN(dataToPlot.length),
      datasets: [
          {
              label: "TotalOdo",
              fillColor: "rgba(220,220,220,0.2)",
              strokeColor: "rgba(220,220,220,1)",
              pointColor: "rgba(220,220,220,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220,220,220,1)",
              data: dataToPlot
          }
          // {
          //     label: "My Second dataset",
          //     fillColor: "rgba(151,187,205,0.2)",
          //     strokeColor: "rgba(151,187,205,1)",
          //     pointColor: "rgba(151,187,205,1)",
          //     pointStrokeColor: "#fff",
          //     pointHighlightFill: "#fff",
          //     pointHighlightStroke: "rgba(151,187,205,1)",
          //     data: [28, 48, 40, 19, 86, 27, 90]
          // }
      ]
  };
  
  var chart = new Chart(ctx).Line(data,options);
  
  })
});
