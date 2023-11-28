var options = {
	chart: {
		width: 300,
		type: 'pie',
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
	colors: ['#4b934e', '#b1ac51', '#91ca61', '#a8e079', '#c9f7a3'],
}
var chart = new ApexCharts(
	document.querySelector("#basic-pie-graph"),
	options
);
chart.render();