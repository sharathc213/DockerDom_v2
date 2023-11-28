var options = {
	chart: {
		height: 300,
		type: 'bar',
		toolbar: {
      show: false,
    },
	},
	plotOptions: {
		bar: {
			horizontal: true,
			barHeight: '40%',
		}
	},
	dataLabels: {
		enabled: false
	},
	series: [{
		data: [400, 430, 448, 470, 540, 1200, 1380]
	}],
	xaxis: {
		categories: ['Canada', 'Netherlands', 'Italy', 'France', 'Japan', 'USA', 'India'],
	},
	grid: {
    borderColor: '#7885d8',
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: true
      }
    },   
    yaxis: {
      lines: {
        show: false,
      } 
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, 
  },
	theme: {
		monochrome: {
			enabled: true,
			color: '#a6b2f1',
			shadeIntensity: 0.1
		},
	},
}

var chart = new ApexCharts(
	document.querySelector("#basic-bar-graph"),
	options
);

chart.render();