chart_template = {
  initChangeChart: function (argument){
    var datasets = []
    var maxNumber = []
    for (var i = 0; i < argument.datasets.length; i++) {
      datasets[i] = {
          label: argument.datasets[i].label,
          backgroundColor: argument.datasets[i].color,
          borderColor: argument.datasets[i].color, 
          pointBorderWidth: argument.datasets[i].point ? argument.datasets[i].point : 0,
          pointRadius: argument.datasets[i].point ? argument.datasets[i].point : 0,
          pointStyle: argument.datasets[i].pointStyle ? argument.datasets[i].pointStyle : 'circle',
          fill: argument.datasets[i].fill ? argument.datasets[i].fill : false,
          lineTension: argument.datasets[i].lineTension ? argument.datasets[i].lineTension : 0,
          data: argument.datasets[i].data,
      }
      maxNumber.push(Math.max.apply(null, argument.datasets[i].data))
    }
    suggestedMax = Math.max.apply(null, maxNumber)

    gradientBarChartConfiguration = {
      maintainAspectRatio: false,
      legend: {
        display: true,
        position: 'bottom',
        labels: {boxWidth: 5,
                  boxHeight: 5,
                  usePointStyle:true
                },
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        usePointStyle: true,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },

      responsive: true,

      scales: {
        yAxes: [{
          gridLines: {
            drawBorder: false,
            color: argument.yGridLinesColor ? argument.yGridLinesColor : 'rgba(253,93,147,0.1)',
            tickMarkLength: argument.yTickMarkLength ? argument.yTickMarkLength : 10,
            zeroLineColor: argument.yGridLinesColor ? argument.yGridLinesColor : 'rgba(253,93,147,0.1)',
          },
          ticks: {
            suggestedMin: 0,
            suggestedMax: suggestedMax,
            offset: true,
            padding: 20,
            stepSize: argument.yAxesStepSize ? argument.yAxesStepSize : 1,
            fontColor: "#9e9e9e",
            callback: function(value, index, values) {
              if (argument.yUnit == 'k' && value > 1000) {
                value /= 1000
                value += 'k'
              }
              if (argument.yUnit == 'w' && value >= 10000) {
                value /= 10000
                value += 'w'
              }
              if (argument.ySuffix) {
                return value + argument.ySuffix;
              }
              else{
                return value
              }
            }
          }
        }],

        xAxes: [{
          scaleLabel: {
            display: Boolean(argument.xScaleLabel),
            labelString: argument.xScaleLabel
          },
          gridLines: {
            color: argument.xGridLinesColor ? argument.xGridLinesColor : 'rgba(253,93,147,0.1)',
            zeroLineColor: "transparent",
          },
          ticks: {
            padding: 20,
            fontColor: "#9e9e9e",
            callback: function(value, index, values) {
              if (argument.xSuffix) {
                return value + argument.xSuffix;
              }
              else{
                return value
              }
            }
          }
        }]
      }
    };
    var ctx = document.getElementById(argument.elementID).getContext("2d");

    var gradientStroke = ctx.createLinearGradient(0, 0, 0, 0);
    
    ctx.canvas.height = argument.height ? argument.height : 500;

    var myChart = new Chart(ctx, {
      type: argument.type ? argument.type : 'line',
      responsive: true,
      data: {
        labels: argument.labels,
        boxWidth: 20,
        datasets: datasets
      },
      options:gradientBarChartConfiguration
    });
  }
}







