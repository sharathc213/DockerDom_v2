var options = {
	chart: {
		width: 300,
		type: 'donut',
	},
	labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
	series: [20, 20, 20, 20, 20],
	legend: {
		position: 'bottom',
	  },
	  dataLabels: {
		enabled: false
	  },
	stroke: {
		width: 0,
	},
	colors: ['#f9564d', '#fb6f67', '#ffa29d', '#ffc8c5', '#ff9d67'],
}
var chart = new ApexCharts(
	document.querySelector("#basic-donut-graph"),
	options
);
chart.render();