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
			horizontal: false,
			endingShape: 'rounded',
			columnWidth: '50%',
		},
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		show: true,
		width: 2,
		colors: ['transparent']
	},
	series: [{
		name: 'Net Profit',
		data: [44, 55, 57, 56, 61, 58, 63]
	}, {
		name: 'Revenue',
		data: [76, 85, 101, 98, 87, 105, 91]
	}, {
		name: 'Free Cash Flow',
		data: [35, 41, 36, 26, 45, 48, 52]
	}],
	xaxis: {
		categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	},
	yaxis: {
		title: {
			text: '$ (thousands)'
		}
	},
	fill: {
		opacity: 1
	},
	tooltip: {
		y: {
			formatter: function(val) {
				return "$ " + val + " thousands"
			}
		}
	},
	grid: {
    borderColor: '#ffdddb',
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
      left: 20
    }, 
  },
	colors: ['#fb8480', '#ffa6a0', '#ffc7c5'],
}
var chart = new ApexCharts(
	document.querySelector("#basic-column-graph"),
	options
);
chart.render();
