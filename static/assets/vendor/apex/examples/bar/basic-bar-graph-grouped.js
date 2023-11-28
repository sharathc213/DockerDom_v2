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
			dataLabels: {
				position: 'top',
			},
		}  
	},
	dataLabels: {
		enabled: true,
		offsetX: -6,
		style: {
			fontSize: '12px',
			colors: ['#fff']
		}
	},
	stroke: {
		show: true,
		width: 0,
	},
	series: [{
		data: [44, 55, 41, 64, 22]
	},{
		data: [53, 32, 33, 44, 32]
	}],
	xaxis: {
		categories: [2010, 2012, 2014, 2016, 2018],
	},
	grid: {
    borderColor: '#ffe4a7',
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
	colors: ['#ffad46', '#ca7000'],
}
var chart = new ApexCharts(
	document.querySelector("#basic-bar-graph-grouped"),
	options
);
chart.render();